const TRANSLATIONS = {
    fr: {
        title: "Sophia AI - AdadFinder",
        placeholder: "Posez votre question sur les valeurs Abjad...",
        send: "Envoyer",
        history: "Historique des conversations",
        clearHistory: "🗑️ Effacer tout l'historique",
        welcome: "🌙 Bienvenue sur Sophia AI !\nJe suis spécialisée dans la numérologie islamique, les valeurs Abjad et le Coran.\n\nExemples de questions :\n• '2713 correspond à quel verset ?'\n• 'Quelle est la valeur de محمد ?'\n• 'Donne-moi les 99 noms d'Allah'",
        suggestions: ["2713 = quel verset ?", "valeur de محمد", "99 noms d'Allah", "Sourate Al-Fatiha", "Aide"],
        prefixes: {
            abjadResult: "📖 Résultats pour la valeur Abjad",
            verse: "🕌 **Verset Coranique**",
            nameOfAllah: "✨ **Nom d'Allah**",
            famousWord: "📝 **Mot célèbre**",
            theme: "🎯 Thème",
            translation: "💭 Traduction",
            value: "🔢 Valeur Abjad de",
            notFound: "❌ Je n'ai pas trouvé de correspondance pour cette valeur dans ma base de données.",
            help: "🌙 **Comment utiliser Sophia AI :**\n\n1️⃣ Tapez un **nombre** (ex: 786) pour trouver le verset correspondant.\n2️⃣ Tapez un **mot arabe** (ex: الله) pour calculer sa valeur Abjad.\n3️⃣ Tapez **'99 noms'** pour voir la liste des noms d'Allah.\n4️⃣ Tapez **'Sourate'** + un nom pour avoir des informations."
        }
    },
    en: {
        title: "Sophia AI - AdadFinder",
        placeholder: "Ask your question about Abjad values...",
        send: "Send",
        history: "Conversation History",
        clearHistory: "🗑️ Clear all history",
        welcome: "🌙 Welcome to Sophia AI!\nI specialize in Islamic numerology, Abjad values, and the Quran.\n\nExample questions:\n• 'Which verse corresponds to 2713?'\n• 'What is the value of محمد?'\n• 'Give me the 99 Names of Allah'",
        suggestions: ["2713 = which verse?", "value of محمد", "99 Names of Allah", "Surah Al-Fatiha", "Help"],
        prefixes: {
            abjadResult: "📖 Results for Abjad value",
            verse: "🕌 **Quranic Verse**",
            nameOfAllah: "✨ **Name of Allah**",
            famousWord: "📝 **Famous Word**",
            theme: "🎯 Theme",
            translation: "💭 Translation",
            value: "🔢 Abjad value of",
            notFound: "❌ I did not find any correspondence for this value in my database.",
            help: "🌙 **How to use Sophia AI:**\n\n1️⃣ Type a **number** (e.g., 786) to find the corresponding verse.\n2️⃣ Type an **Arabic word** (e.g., الله) to calculate its Abjad value.\n3️⃣ Type **'99 names'** to see the Names of Allah.\n4️⃣ Type **'Surah'** + a name for information."
        }
    },
    ar: {
        title: "صوفيا أيه - عداد فايندر",
        placeholder: "اطرح سؤالك حول القيم الأبجدية...",
        send: "إرسال",
        history: "سجل المحادثات",
        clearHistory: "🗑️ مسح السجل بالكامل",
        welcome: "🌙 مرحباً بك في صوفيا أيه!\nأنا متخصصة في الحساب الأبجدي الإسلامي وقيم الأبجد والقرآن الكريم.\n\nأمثلة على الأسئلة:\n• 'ما هي الآية المقابلة لـ 2713؟'\n• 'ما هي قيمة محمد؟'\n• 'أعطني أسماء الله الحسنى'",
        suggestions: ["2713 = أي آية؟", "قيمة محمد", "أسماء الله الحسنى", "سورة الفاتحة", "مساعدة"],
        prefixes: {
            abjadResult: "📖 نتائج القيمة الأبجدية",
            verse: "🕌 **آية قرآنية**",
            nameOfAllah: "✨ **اسم من أسماء الله**",
            famousWord: "📝 **كلمة مشهورة**",
            theme: "🎯 الموضوع",
            translation: "💭 الترجمة",
            value: "🔢 القيمة الأبجدية لـ",
            notFound: "❌ لم أجد أي تطابق لهذه القيمة في قاعدة البيانات الخاصة بي.",
            help: "🌙 **كيفية استخدام صوفيا أيه:**\n\n1️⃣ اكتب **رقماً** (مثال: 786) للعثور على الآية المقابلة.\n2️⃣ اكتب **كلمة عربية** (مثال: الله) لحساب قيمتها الأبجدية.\n3️⃣ اكتب **'أسماء الله'** لرؤية أسماء الله الحسنى.\n4️⃣ اكتب **'سورة'** + اسم للحصول على معلومات."
        }
    }
};

let currentLang = localStorage.getItem('sophia_lang') || 'fr';

function t(key) {
    const keys = key.split('.');
    let value = TRANSLATIONS[currentLang];
    for (let k of keys) {
        value = value ? value[k] : key;
    }
    return value || key;
}
