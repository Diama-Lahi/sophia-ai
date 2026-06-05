class QuranAPI {
    constructor() {
        this.baseUrl = "https://api.alquran.cloud/v1";
        this.cache = new Map();
    }

    // Récupérer une sourate complète
    async getSurah(number, edition = "quran-uthmani") {
        const cacheKey = `surah_${number}_${edition}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            const response = await fetch(`${this.baseUrl}/surah/${number}/${edition}`);
            const data = await response.json();
            
            if (data.code === 200) {
                this.cache.set(cacheKey, data.data);
                return data.data;
            }
        } catch (error) {
            console.error("Erreur API:", error);
        }
        return null;
    }

    // Récupérer un verset spécifique (ex: "2:255")
    async getVerse(reference, edition = "quran-uthmani") {
        try {
            const response = await fetch(`${this.baseUrl}/ayah/${reference}/${edition}`);
            const data = await response.json();
            
            if (data.code === 200) {
                return data.data;
            }
        } catch (error) {
            console.error("Erreur API:", error);
        }
        return null;
    }

    // Récupérer verset avec traduction française
    async getVerseWithTranslation(reference) {
        try {
            const [arabic, french] = await Promise.all([
                this.getVerse(reference, "quran-uthmani"),
                this.getVerse(reference, "fr.hamidullah")
            ]);
            
            return {
                arabic: arabic?.text,
                translation: french?.text,
                surah: arabic?.surah?.name,
                numberInSurah: arabic?.numberInSurah,
                juz: arabic?.juz,
                page: arabic?.page
            };
        } catch (error) {
            return null;
        }
    }

    // Rechercher un mot dans le Coran
    async search(keyword, edition = "quran-uthmani") {
        try {
            const response = await fetch(`${this.baseUrl}/search/${keyword}/all/${edition}`);
            const data = await response.json();
            
            if (data.code === 200) {
                return data.data.matches.slice(0, 10); // 10 premiers résultats
            }
        } catch (error) {
            console.error("Erreur API:", error);
        }
        return [];
    }

    // Obtenir toutes les éditions disponibles
    async getEditions(language = "fr") {
        try {
            const response = await fetch(`${this.baseUrl}/edition?language=${language}&type=translation`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            return [];
        }
    }
}

const quranAPI = new QuranAPI();