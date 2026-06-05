class SearchEngine {
    constructor() {
        this.db = typeof ABJAD_DATABASE !== 'undefined' ? ABJAD_DATABASE : null;
    }
    
    // Analyse l'intention de l'utilisateur
    analyzeQuery(query) {
        query = query.toLowerCase().trim();
        
        // 1. Détecte un nombre (ex: "2713")
        const numberMatch = query.match(/\b(\d{3,5})\b/);
        if (numberMatch) return { type: "abjad_to_verse", value: parseInt(numberMatch[1]) };
        
        // 2. Détecte un mot arabe (ex: "محمد")
        const arabicMatch = query.match(/[\u0600-\u06FF]+/);
        if (arabicMatch) return { type: "word_to_abjad", word: arabicMatch[0] };
        
        // 3. Détecte une demande des 99 noms
        if (query.includes("99") || query.includes("nom") || query.includes("name") || query.includes("اسم")) {
            return { type: "names_of_allah" };
        }
        
        // 4. Détecte une demande de sourate
        if (query.includes("sourate") || query.includes("surah") || query.includes("سورة")) {
            return { type: "surah_info", name: query };
        }
        
        return { type: "general", query: query };
    }
    
    // Routeur de recherche
    search(query) {
        const analysis = this.analyzeQuery(query);
        switch(analysis.type) {
            case "abjad_to_verse": return this.searchByAbjad(analysis.value);
            case "word_to_abjad": return this.searchWordAbjad(analysis.word);
            case "names_of_allah": return this.getNamesOfAllah();
            case "surah_info": return this.getSurahInfo(analysis.name);
            default: return null;
        }
    }
    
    // Recherche par valeur numérique
    searchByAbjad(value) {
        if (!this.db) return "Erreur : Base de données non chargée.";
        const results = findByAbjadValue(value);
        
        if (results.length === 0) return t('prefixes.notFound');
        
        let response = `${t('prefixes.abjadResult')} **${value}** :\n\n`;
        results.forEach(result => {
            if (result.type === "verset") {
                response += `${t('prefixes.verse')}\n📍 ${result.data.verse}\n📜 ${result.data.arabic}\n${t('prefixes.translation')}: ${result.data.translation}\n${t('prefixes.theme')}: ${result.data.theme}\n\n`;
            } else if (result.type === "nom_allah") {
                response += `${t('prefixes.nameOfAllah')}\n🕌 ${result.data.name}\n📝 ${result.data.transliteration}\n${t('prefixes.translation')}: ${result.data.translation}\n${t('prefixes.value')}: ${result.data.abjad}\n\n`;
            } else if (result.type === "mot_celèbre") {
                response += `${t('prefixes.famousWord')}\n🕌 ${result.data.word}\n💭 ${result.data.meaning}\n${t('prefixes.value')}: ${result.data.abjad}\n\n`;
            }
        });
        return response;
    }
    
    // Recherche par mot arabe
    searchWordAbjad(word) {
        if (!this.db) return "Erreur : Base de données non chargée.";
        const value = calculateAbjad(word);
        let response = `${t('prefixes.value')} **${word}** : **${value}**\n\n`;
        
        const corr = findByAbjadValue(value);
        if (corr.length > 0) {
            response += "📖 **Correspondances trouvées :**\n";
            corr.forEach(r => {
                if (r.type === "verset") response += `• ${r.data.verse}\n`;
                else if (r.type === "nom_allah") response += `• ${r.data.transliteration} (${r.data.translation})\n`;
                else if (r.type === "mot_celèbre") response += `• ${r.data.word} (${r.data.meaning})\n`;
            });
        }
        return response;
    }
    
    // Liste des noms d'Allah
    getNamesOfAllah() {
        if (!this.db) return "Erreur : Base de données non chargée.";
        let response = `✨ **99 Noms d'Allah / أسماء الله الحسنى**\n\n`;
        
        // Affiche les 10 premiers pour ne pas surcharger le chat, avec un message pour les voir tous
        this.db.names_of_allah.slice(0, 10).forEach((name, i) => {
            response += `${i + 1}. **${name.name}** (${name.transliteration})\n   💭 ${name.translation} | 🔢 ${name.abjad}\n\n`;
        });
        
        response += `... et ${this.db.names_of_allah.length - 10} autres noms.\n💡 Astuce : Demandez la valeur d'un nom spécifique !`;
        return response;
    }
    
    // Informations sur une sourate
    getSurahInfo(query) {
        if (!this.db) return "Erreur : Base de données non chargée.";
        const surah = Object.values(this.db.surahs).find(s => 
            query.includes(s.name.toLowerCase()) || query.includes(s.arabic)
        );
        
        if (!surah) return currentLang === 'ar' ? "سورة غير موجودة." : "Sourate non trouvée.";
        
        return `📖 **Sourate ${surah.name}**\n🕌 Nom arabe : ${surah.arabic}\n🔢 Nombre de versets : ${surah.verses}\n🎯 Thème : ${surah.theme}`;
    }
}

// Instanciation globale pour que index.html puisse l'utiliser
const searchEngine = new SearchEngine();
