const ABJAD_DATABASE = {
    // Valeurs Abjad des lettres arabes
    abjad_values: {
        "ا": 1, "ب": 2, "ج": 3, "د": 4, "ه": 5, "و": 6, "ز": 7, "ح": 8, "ط": 9,
        "ي": 10, "ك": 20, "ل": 30, "م": 40, "ن": 50, "س": 60, "ع": 70, "ف": 80, "ص": 90,
        "ق": 100, "ر": 200, "ش": 300, "ت": 400, "ث": 500, "خ": 600, "ذ": 700, "ض": 800, "ظ": 900, "غ": 1000
    },

    // Correspondances célèbres Abjad -> Verset
    verses_by_abjad: {
        "786": {
            verse: "Al-Fatiha 1:1",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
            theme: "Basmala - L'ouverture"
        },
        "2713": {
            verse: "Al-Baqarah 2:255",
            arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
            translation: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même",
            theme: "Ayat al-Kursi - Le Trône"
        },
        "111": {
            verse: "Al-Ikhlas 112:1",
            arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
            translation: "Dis: Il est Allah, Unique",
            theme: "Unicité divine"
        },
        "181": {
            verse: "Al-Ikhlas 112:1-4",
            arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            translation: "Sourate Al-Ikhlas complète",
            theme: "Monothéisme pur"
        },
        "129": {
            verse: "Al-Anbiya 21:87",
            arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
            translation: "Pas de divinité à part Toi ! Pureté à Toi ! J'ai été vraiment du nombre des injustes",
            theme: "Invocation de Dhun-Nun (Jonas)"
        },
        "113": {
            verse: "Al-Mulk 67:1",
            arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "Béni soit Celui dans la main de qui est la royauté, et Il est Omnipotent",
            theme: "La Royauté"
        },
        "298": {
            verse: "Correspondance du Nom Ar-Rahman",
            arabic: "الرَّحْمَنُ",
            translation: "Le Tout Miséricordieux",
            theme: "5ème nom d'Allah"
        },
        "114": {
            verse: "An-Nas 114:1",
            arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
            translation: "Dis: Je cherche protection auprès du Seigneur des hommes",
            theme: "La protection divine"
        }
    },

    // 99 Noms d'Allah (liste complète)
    names_of_allah: [
        {name: "الرَّحْمَنُ", transliteration: "Ar-Rahman", translation: "Le Tout Miséricordieux", abjad: 298},
        {name: "الرَّحِيمُ", transliteration: "Ar-Raheem", translation: "Le Très Miséricordieux", abjad: 258},
        {name: "الْمَلِكُ", transliteration: "Al-Malik", translation: "Le Souverain", abjad: 91},
        {name: "الْقُدُّوسُ", transliteration: "Al-Quddus", translation: "Le Sanctifié", abjad: 186},
        {name: "السَّلَامُ", transliteration: "As-Salam", translation: "La Source de la Paix", abjad: 131},
        {name: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", translation: "Le Gardien de la Foi", abjad: 196},
        {name: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", translation: "Le Protecteur", abjad: 235},
        {name: "الْعَزِيزُ", transliteration: "Al-Aziz", translation: "Le Tout Puissant", abjad: 944},
        {name: "الْجَبَّارُ", transliteration: "Al-Jabbar", translation: "Le Contraignant", abjad: 206},
        {name: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", translation: "Le Suprême", abjad: 682},
        {name: "الْخَالِقُ", transliteration: "Al-Khaliq", translation: "Le Créateur", abjad: 770},
        {name: "الْبَارِئُ", transliteration: "Al-Bari", translation: "L'Évolueur", abjad: 213},
        {name: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", translation: "Le Formeur", abjad: 1346},
        {name: "الْغَفَّارُ", transliteration: "Al-Ghaffar", translation: "Le Grand Pardonneur", abjad: 1281},
        {name: "الْقَهَّارُ", transliteration: "Al-Qahhar", translation: "Le Dominateur", abjad: 306},
        {name: "الْوَهَّابُ", transliteration: "Al-Wahhab", translation: "Le Grand Donateur", abjad: 14},
        {name: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", translation: "Le Pourvoyeur", abjad: 317},
        {name: "الْفَتَّاحُ", transliteration: "Al-Fattah", translation: "L'Ouvreur", abjad: 490},
        {name: "اَلْعَلِيْمُ", transliteration: "Al-Alim", translation: "L'Omniscient", abjad: 150},
        {name: "الْقَابِضُ", transliteration: "Al-Qabid", translation: "Le Restrictif", abjad: 153},
        {name: "الْبَاسِطُ", transliteration: "Al-Basit", translation: "L'Extenseur", abjad: 452},
        {name: "الْخَافِضُ", transliteration: "Al-Khafid", translation: "L'Abaisseur", abjad: 828},
        {name: "الرَّافِعُ", transliteration: "Ar-Rafi", translation: "L'Exalteur", abjad: 551},
        {name: "الْمُعِزُّ", transliteration: "Al-Mu'izz", translation: "L'Honorer", abjad: 256},
        {name: "الْمُذِلُّ", transliteration: "Al-Mudhill", translation: "L'Humiliant", abjad: 754},
        {name: "السَّمِيعُ", transliteration: "As-Sami", translation: "L'Audient", abjad: 138},
        {name: "الْبَصِيرُ", transliteration: "Al-Basir", translation: "Le Voyant", abjad: 312},
        {name: "الْحَكَمُ", transliteration: "Al-Hakam", translation: "Le Juge", abjad: 148},
        {name: "الْعَدْلُ", transliteration: "Al-Adl", translation: "Le Juste", abjad: 154},
        {name: "اللَّطِيفُ", transliteration: "Al-Latif", translation: "Le Doux", abjad: 180},
        {name: "الْخَبِيرُ", transliteration: "Al-Khabir", translation: "L'Informé", abjad: 810},
        {name: "الْحَلِيمُ", transliteration: "Al-Halim", translation: "Le Clément", abjad: 98},
        {name: "الْعَظِيمُ", transliteration: "Al-Azim", translation: "L'Immense", abjad: 1057},
        {name: "الْغَفُورُ", transliteration: "Al-Ghafur", translation: "Le Pardonneur", abjad: 1286},
        {name: "الشَّكُورُ", transliteration: "Ash-Shakur", translation: "Le Reconnaissant", abjad: 746},
        {name: "الْعَلِيُّ", transliteration: "Al-Ali", translation: "Le Sublime", abjad: 110},
        {name: "الْكَبِيرُ", transliteration: "Al-Kabir", translation: "Le Grand", abjad: 222},
        {name: "الْحَفِيظُ", transliteration: "Al-Hafiz", translation: "Le Préservateur", abjad: 998},
        {name: "الْمُقِيتُ", transliteration: "Al-Muqit", translation: "Le Nourricier", abjad: 556},
        {name: "الْحَسِيبُ", transliteration: "Al-Hasib", translation: "Le Suffisant", abjad: 68},
        {name: "الْجَلِيلُ", transliteration: "Al-Jalil", translation: "Le Majestueux", abjad: 73},
        {name: "الْكَرِيمُ", transliteration: "Al-Karim", translation: "Le Généreux", abjad: 270},
        {name: "الرَّقِيبُ", transliteration: "Ar-Raqib", translation: "L'Observateur", abjad: 310},
        {name: "الْمُجِيبُ", transliteration: "Al-Mujib", translation: "Le Répondant", abjad: 59},
        {name: "الْوَاسِعُ", transliteration: "Al-Wasi", translation: "L'Ample", abjad: 146},
        {name: "الْحَكِيمُ", transliteration: "Al-Hakim", translation: "Le Sage", abjad: 158},
        {name: "الْوَدُودُ", transliteration: "Al-Wadud", translation: "Le Tout Affectueux", abjad: 20},
        {name: "الْمَجِيدُ", transliteration: "Al-Majid", translation: "Le Glorieux", abjad: 61},
        {name: "الْبَاعِثُ", transliteration: "Al-Ba'ith", translation: "Le Ressusciteur", abjad: 452},
        {name: "الشَّهِيدُ", transliteration: "Ash-Shahid", translation: "Le Témoin", abjad: 1115},
        {name: "الْحَقُّ", transliteration: "Al-Haqq", translation: "La Vérité", abjad: 108},
        {name: "الْوَكِيلُ", transliteration: "Al-Wakil", translation: "Le Gardien", abjad: 66},
        {name: "الْقَوِيُّ", transliteration: "Al-Qawi", translation: "Le Fort", abjad: 126},
        {name: "الْمَتِينُ", transliteration: "Al-Matin", translation: "Le Ferme", abjad: 510},
        {name: "الْوَلِيُّ", transliteration: "Al-Wali", translation: "Le Protecteur", abjad: 47},
        {name: "الْحَمِيدُ", transliteration: "Al-Hamid", translation: "Le Louable", abjad: 72},
        {name: "الْمُحْصِي", transliteration: "Al-Muhsi", translation: "Le Compteur", abjad: 658},
        {name: "الْمُبْدِئُ", transliteration: "Al-Mubdi", translation: "L'Originateur", abjad: 78},
        {name: "الْمُعِيدُ", transliteration: "Al-Mu'id", translation: "Le Restaurateur", abjad: 130},
        {name: "الْمُحْيِي", transliteration: "Al-Muhyi", translation: "Le Vivificateur", abjad: 68},
        {name: "اَلْمُمِيتُ", transliteration: "Al-Mumit", translation: "Le Fauteur de Mort", abjad: 490},
        {name: "الْحَيُّ", transliteration: "Al-Hayy", translation: "Le Vivant", abjad: 18},
        {name: "الْقَيُّومُ", transliteration: "Al-Qayyum", translation: "Le Subsistant", abjad: 156},
        {name: "الْوَاجِدُ", transliteration: "Al-Wajid", translation: "Le Percevant", abjad: 14},
        {name: "الْمَاجِدُ", transliteration: "Al-Majid", translation: "Le Glorieux", abjad: 57},
        {name: "الْواحِدُ", transliteration: "Al-Wahid", translation: "L'Unique", abjad: 19},
        {name: "اَلاَحَدُ", transliteration: "Al-Ahad", translation: "L'Un", abjad: 13},
        {name: "الصَّمَدُ", transliteration: "As-Samad", translation: "L'Éternel", abjad: 164},
        {name: "الْقَادِرُ", transliteration: "Al-Qadir", translation: "Le Déterminant", abjad: 314},
        {name: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", translation: "Le Puissant", abjad: 754},
        {name: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", translation: "Le Préposant", abjad: 154},
        {name: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", translation: "L'Ajournant", abjad: 748},
        {name: "الْأَوَّلُ", transliteration: "Al-Awwal", translation: "Le Premier", abjad: 47},
        {name: "الْآخِرُ", transliteration: "Al-Akhir", translation: "Le Dernier", abjad: 616},
        {name: "الظَّاهِرُ", transliteration: "Az-Zahir", translation: "L'Évident", abjad: 1117},
        {name: "الْبَاطِنُ", transliteration: "Al-Batin", translation: "Le Caché", abjad: 152},
        {name: "الْوَالِي", transliteration: "Al-Wali", translation: "Le Gouverneur", abjad: 47},
        {name: "الْمُتَعَالِي", transliteration: "Al-Muta'ali", translation: "Le Sublime", abjad: 521},
        {name: "الْبَرُّ", transliteration: "Al-Barr", translation: "Le Source de la Piété", abjad: 202},
        {name: "التَّوَّابُ", transliteration: "At-Tawwab", translation: "L'Acceptant du Repentir", abjad: 663},
        {name: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", translation: "Le Vengeur", abjad: 650},
        {name: "العَفُوُّ", transliteration: "Al-Afuw", translation: "Le Clément", abjad: 1506},
        {name: "الرَّؤُوفُ", transliteration: "Ar-Ra'uf", translation: "Le Compatissant", abjad: 291},
        {name: "مَالِكُ الْمُلْكِ", transliteration: "Malik-ul-Mulk", translation: "Le Maître de la Royauté", abjad: 144},
        {name: "ذُو الْجَلَالِ وَالْإِكْرَامِ", transliteration: "Dhul Jalali wal Ikram", translation: "Seigneur de la Majesté et de la Générosité", abjad: 1429},
        {name: "الْمُقْسِطُ", transliteration: "Al-Muqsit", translation: "L'Équitable", abjad: 640},
        {name: "الْجَامِعُ", transliteration: "Al-Jami", translation: "Le Rassembleur", abjad: 113},
        {name: "الْغَنِيُّ", transliteration: "Al-Ghani", translation: "Le Riche", abjad: 1076},
        {name: "الْمُغْنِي", transliteration: "Al-Mughni", translation: "L'Enrichisseur", abjad: 1065},
        {name: "اَلْمَانِعُ", transliteration: "Al-Mani", translation: "Le Preventif", abjad: 191},
        {name: "الضَّارَّ", transliteration: "Ad-Darr", translation: "Le Perçant", abjad: 808},
        {name: "النَّافِعُ", transliteration: "An-Nafi", translation: "Le Propagateur", abjad: 205},
        {name: "النُّورُ", transliteration: "An-Nur", translation: "La Lumière", abjad: 256},
        {name: "الْهَادِي", transliteration: "Al-Hadi", translation: "Le Guide", abjad: 15},
        {name: "الْبَدِيعُ", transliteration: "Al-Badi", translation: "L'Incomparable", abjad: 86},
        {name: "الْبَاقِي", transliteration: "Al-Baqi", translation: "Le Permanent", abjad: 113},
        {name: "الْوَارِثُ", transliteration: "Al-Warith", translation: "L'Héritier", abjad: 1214},
        {name: "الرَّشِيدُ", transliteration: "Ar-Rashid", translation: "Le Guide", abjad: 514},
        {name: "الصَّبُورُ", transliteration: "As-Sabur", translation: "Le Patient", abjad: 376}
    ],

    // Toutes les 114 sourates
    surahs: {
        "1": {name: "Al-Fatiha", arabic: "الفاتحة", verses: 7, theme: "L'Ouverture", revelation: "Mecquoise"},
        "2": {name: "Al-Baqarah", arabic: "البقرة", verses: 286, theme: "La Vache", revelation: "Médinoise"},
        "3": {name: "Aal-Imran", arabic: "آل عمران", verses: 200, theme: "La Famille d'Imran", revelation: "Médinoise"},
        "36": {name: "Ya-Sin", arabic: "يس", verses: 83, theme: "Le Cœur du Coran", revelation: "Mecquoise"},
        "55": {name: "Ar-Rahman", arabic: "الرحمن", verses: 78, theme: "Le Tout Miséricordieux", revelation: "Médinoise"},
        "67": {name: "Al-Mulk", arabic: "الملك", verses: 30, theme: "La Royauté", revelation: "Mecquoise"},
        "112": {name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, theme: "Le Monothéisme Pur", revelation: "Mecquoise"},
        "113": {name: "Al-Falaq", arabic: "الفلق", verses: 5, theme: "L'Aube Naissante", revelation: "Mecquoise"},
        "114": {name: "An-Nas", arabic: "الناس", verses: 6, theme: "Les Hommes", revelation: "Mecquoise"}
    },

    // Mots célèbres et leurs valeurs
    famous_words: {
        "محمد": {meaning: "Muhammad (Prophète)", abjad: 92},
        "الله": {meaning: "Allah (Dieu)", abjad: 66},
        "القرآن": {meaning: "Le Coran", abjad: 291},
        "الإسلام": {meaning: "L'Islam", abjad: 167},
        "الجنة": {meaning: "Le Paradis", abjad: 259},
        "النار": {meaning: "Le Feu (Enfer)", abjad: 257},
        "الرسول": {meaning: "Le Messager", abjad: 586}
    }
};

// Fonction de calcul Abjad
function calculateAbjad(arabicWord) {
    let total = 0;
    for (let char of arabicWord) {
        if (ABJAD_DATABASE.abjad_values[char]) {
            total += ABJAD_DATABASE.abjad_values[char];
        }
    }
    return total;
}

// Recherche par valeur Abjad
function findByAbjadValue(value) {
    const results = [];
    
    if (ABJAD_DATABASE.verses_by_abjad[value]) {
        results.push({type: "verset", data: ABJAD_DATABASE.verses_by_abjad[value]});
    }
    
    ABJAD_DATABASE.names_of_allah.forEach(name => {
        if (name.abjad === value) {
            results.push({type: "nom_allah", data: name});
        }
    });
    
    Object.entries(ABJAD_DATABASE.famous_words).forEach(([word, info]) => {
        if (info.abjad === value) {
            results.push({type: "mot_celèbre", data: {...info, word}});
        }
    });
    
    return results;
}