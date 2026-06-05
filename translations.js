// translations.js
const TRANSLATIONS = {
    fr: {
        title: "Sophia AI - AdadFinder",
        placeholder: "Posez votre question...",
        send: "Envoyer",
        history: "Historique",
        clearHistory: "Effacer l'historique",
        welcome: "🌙 Bienvenue sur Sophia AI ! Je suis spécialisée dans la numérologie islamique et les valeurs Abjad.\n\nVous pouvez me demander :\n• '2713 correspond quel verset ?'\n• 'valeur de محمد'\n• '99 noms d'Allah'\n\nTapez 'aide' pour voir tous les exemples !",
        suggestions: ["2713 = quel verset ?", "valeur de محمد", "99 noms d'Allah", "Sourate Fatiha", "Aide"],
        prefixes: {
            abjadResult: "📖 Résultats pour la valeur Abjad",
            verse: "🕌 **Verset Coranique**",
            nameOfAllah: "✨ **Nom d'Allah**",
            famousWord: "📝 **Mot célèbre**",
            theme: "🎯 Thème",
            translation: "💭 Traduction",
            value: "🔢 Valeur Abjad de",
            notFound: "Je n'ai pas trouvé de correspondance pour cette valeur dans ma base de données.",
            help: "🌙 Comment utiliser Sophia AI :\n\n📖 Recherches disponibles :\n• Tapez un nombre pour trouver le verset correspondant\n• Tapez un mot arabe pour calculer sa valeur Abjad\n• Tapez '99 noms' pour voir les noms d'Allah"
        }
    },
    en: {
        title: "Sophia AI - AdadFinder",
        placeholder: "Ask your question...",
        send: "Send",
        history: "History",
        clearHistory: "Clear History",
        welcome: "🌙 Welcome to Sophia AI! I specialize in Islamic numerology and Abjad values.\n\nYou can ask me:\n• 'Which verse corresponds to 2713?'\n• 'Value of محمد'\n• '99 Names of Allah'\n\nType 'help' to see all examples!",
        suggestions: ["2713 = which verse?", "value of محمد", "99 Names of Allah", "Surah Fatiha", "Help"],
        prefixes: {
            abjadResult: "📖 Results for Abjad value",
            verse: "🕌 **Quranic Verse**",
            nameOfAllah: "✨ **Name of Allah**",
            famousWord: "📝 **Famous Word**",
            theme: "🎯 Theme",
            translation: "💭 Translation",
            value: "🔢 Abjad value of",
            notFound: "I did not find any correspondence for this value in my database.",
            help: "🌙 How to use Sophia AI:\n\n📖 Available searches:\n• Type a number to find the corresponding verse\n• Type an Arabic word to calculate its Abjad value\n• Type '99 names' to see the Names of Allah"
        }
    },
    ar: {
        title: "صوفيا أيه - عداد فايندر",
        placeholder: "اطرح سؤالك...",
        send: "إرسال",
        history: "السجل",
        clearHistory: "مسح السجل",
        welcome: "🌙 مرحباً بك في صوفيا أيه! أنا متخصصة في الحساب الأبجدي والقيم الأبجدية الإسلامية.\n\nيمكنك أن تسألني:\n• 'ما هي الآية المقابلة لـ 2713؟'\n• 'قيمة محمد'\n• 'أسماء الله الحسنى'\n\nاكتب 'مساعدة' لرؤية الأمثلة!",
        suggestions: ["2713 = أي آية؟", "قيمة محمد", "أسماء الله الحسنى", "سورة الفاتحة", "مساعدة"],
        prefixes: {
            abjadResult: "📖 نتائج القيمة الأبجدية",
            verse: "🕌 **آية قرآنية**",
            nameOfAllah: "✨ **اسم من أسماء الله**",
            famousWord: "📝 **كلمة مشهورة**",
            theme: "🎯 الموضوع",
            translation: "💭 الترجمة",
            value: "🔢 القيمة الأبجدية لـ",
            notFound: "لم أجد أي تطابق لهذه القيمة في قاعدة البيانات الخاصة بي.",
            help: "🌙 كيفية استخدام صوفيا أيه:\n\n📖 عمليات البحث المتاحة:\n• اكتب رقماً للعثور على الآية المقابلة\n• اكتب كلمة عربية لحساب قيمتها الأبجدية\n• اكتب 'أسماء الله' لرؤية أسماء الله الحسنى"
        }
    }
};

// Fonction utilitaire pour obtenir une traduction
function t(key, lang = currentLang) {
    const keys = key.split('.');
    let value = TRANSLATIONS[lang];
    for (let k of keys) {
        value = value ? value[k] : key;
    }
    return value || key;
}

let currentLang = localStorage.getItem('sophia_lang') || 'fr';