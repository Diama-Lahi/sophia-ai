class SearchEngine {
    
    constructor() {
        this.db = typeof ABJAD_DATABASE !== 'undefined' ? ABJAD_DATABASE : null;
        this.quranAPI = typeof quranAPI !== 'undefined' ? quranAPI : null;
    }
    
    // Analyse la question et détermine le type de recherche
    analyzeQuery(query) {
        query = query.toLowerCase().trim();
        
        // Pattern 1: "2713 correspond quel verset" ou "valeur 2713"
        const numberMatch = query.match(/\b(\d{3,5})\b/);
        if (numberMatch) {
            return {
                type: "abjad_to_verse",
                value: parseInt(numberMatch[1])
            };
        }
        
        // Pattern 2: "valeur de محمد" ou "abjad de محمد"
        const arabicMatch = query.match(/[\u0600-\u06FF]+/);
        if (arabicMatch) {
            return {
                type: "word_to_abjad",
                word: arabicMatch[0]
            };
        }
        
        // Pattern 3: "99 noms" ou "noms d'Allah"
        if (query.includes("99") || query.includes("nom") || query.includes("allah")) {
            return {
                type: "names_of_allah"
            };
        }
        
        // Pattern 4: "sourate X" ou "fatiha"
        const surahMatch = query.match(/sourate\s+(\w+)|(\w+)\s+sourate/);
        if (surahMatch) {
            return {
                type: "surah_info",
                name: surahMatch[1] || surahMatch[2]
            };
        }
        
        // Pattern 5: "chercher X dans le coran"
        if (query.includes("chercher") || query.includes("trouver")) {
            const keyword = query.replace(/chercher|trouver|dans|le|coran/gi, '').trim();
            if (keyword) {
                return {
                    type: "search_quran",
                    keyword: keyword
                };
            }
        }
        
        return {
            type: "general",
            query: query
        };
    }
    
    // Exécute la recherche et retourne une réponse formatée
    search(query) {
        const analysis = this.analyzeQuery(query);
        
        switch(analysis.type) {
            case "abjad_to_verse":
                return this.searchByAbjad(analysis.value);
            
            case "word_to_abjad":
                return this.searchWordAbjad(analysis.word);
            
            case "names_of_allah":
                return this.getNamesOfAllah();
            
            case "surah_info":
                return this.getSurahInfo(analysis.name);
            
            case "search_quran":
                return this.searchInQuran(analysis.keyword);
            
            default:
                return null;
        }
    }
    
    searchByAbjad(value) {
        if (!this.db) return "Base de données non chargée.";
        
        const results = findByAbjadValue(value);
        
        if (results.length === 0) {
            return `Je n'ai pas trouvé de correspondance pour la valeur ${value} dans ma base de données.\n\nEssayez de demander "aide" pour voir les exemples.`;
        }
        
        let response = `📖 Résultats pour la valeur Abjad **${value}** :\n\n`;
        
        results.forEach(result => {
            if (result.type === "verset") {
                response += `🕌 **Verset Coranique**\n`;
                response += `📍 ${result.data.verse}\n`;
                response += `📜 ${result.data.arabic}\n`;
                response += `💭 ${result.data.translation}\n`;
                response += `🎯 Thème: ${result.data.theme}\n\n`;
            } else if (result.type === "nom_allah") {
                response += `✨ **Nom d'Allah**\n`;
                response += `🕌 ${result.data.name}\n`;
                response += `📝 ${result.data.transliteration}\n`;
                response += `💭 ${result.data.translation}\n`;
                response += `🔢 Valeur Abjad: ${result.data.abjad}\n\n`;
            } else if (result.type === "mot_celèbre") {
                response += `📝 **Mot célèbre**\n`;
                response += `🕌 ${result.data.word}\n`;
                response += `💭 ${result.data.meaning}\n`;
                response += `🔢 Valeur Abjad: ${result.data.abjad}\n\n`;
            }
        });
        
        return response;
    }
    
    searchWordAbjad(word) {
        if (!this.db) return "Base de données non chargée.";
        
        const value = calculateAbjad(word);
        let response = `🔢 Valeur Abjad de **${word}** : **${value}**\n\n`;
        
        // Chercher aussi les correspondances
        const correspondances = findByAbjadValue(value);
        if (correspondances.length > 0) {
            response += `📖 **Correspondances trouvées :**\n`;
            correspondances.forEach(result => {
                if (result.type === "verset") {
                    response += `• ${result.data.verse}\n`;
                } else if (result.type === "nom_allah") {
                    response += `• ${result.data.transliteration} (${result.data.translation})\n`;
                } else if (result.type === "mot_celèbre") {
                    response += `• ${result.data.word} (${result.data.meaning})\n`;
                }
            });
        }
        
        return response;
    }
    
    getNamesOfAllah() {
        if (!this.db) return "Base de données non chargée.";
        
        let response = `✨ **Les 99 Beaux Noms d'Allah**\n\n`;
        
        this.db.names_of_allah.slice(0, 10).forEach((name, index) => {
            response += `${index + 1}. **${name.name}** (${name.transliteration})\n`;
            response += `   💭 ${name.translation}\n`;
            response += `   🔢 Valeur Abjad: ${name.abjad}\n\n`;
        });
        
        response += `... et ${this.db.names_of_allah.length - 10} autres noms.\n\n`;
        response += `💡 Pour voir tous les noms, visitez adadfinder.com`;
        
        return response;
    }
    
    getSurahInfo(name) {
        if (!this.db) return "Base de données non chargée.";
        
        const surah = Object.values(this.db.surahs).find(s => 
            s.name.toLowerCase().includes(name.toLowerCase()) ||
            s.arabic.includes(name)
        );
        
        if (!surah) {
            return `Je n'ai pas trouvé d'informations sur la sourate "${name}".\n\nEssayez avec le nom en français ou en arabe.`;
        }
        
        return `📖 **Sourate ${surah.name}**\n` +
               `🕌 Nom arabe: ${surah.arabic}\n` +
               `🔢 Nombre de versets: ${surah.verses}\n` +
               `🎯 Thème: ${surah.theme}\n` +
               `📍 Révélation: ${surah.revelation}`;
    }
    
    async searchInQuran(keyword) {
        if (!this.quranAPI) return "API Coran non disponible.";
        
        try {
            const results = await this.quranAPI.search(keyword);
            
            if (results.length === 0) {
                return `Aucun résultat trouvé pour "${keyword}" dans le Coran.`;
            }
            
            let response = `🔍 **Résultats de recherche pour "${keyword}" :**\n\n`;
            
            results.slice(0, 5).forEach((result, index) => {
                response += `${index + 1}. ${result.surah.name} (${result.surah.number}:${result.numberInSurah})\n`;
                response += `   ${result.text}\n\n`;
            });
            
            return response;
        } catch (error) {
            return "Erreur lors de la recherche dans le Coran.";
        }
    }
}

// Créer une instance globale
const searchEngine = new SearchEngine();