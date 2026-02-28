const translations = {
    pt: {
        title: "BartexCraft",
        subtitle: "Servidor de Minecraft",
        playersOnline: "Jogadores Online",
        serverStatus: "Status do Servidor",
        online: "Online",
        offline: "Offline",
        copyIP: "Copiar IP",
        ipCopied: "IP copiado!",
        features: "Recursos",
        feature1Title: "Treino de Ponte",
        feature1Desc: "Pratique suas habilidades de ponte em diversos modos",
        feature2Title: "Sistema VIP",
        feature2Desc: "Benefícios exclusivos para membros VIP",
        feature3Title: "Replays",
        feature3Desc: "Reveja suas melhores jogadas",
        feature4Title: "Party System",
        feature4Desc: "Jogue com seus amigos",
        joinNow: "Junte-se Agora",
        discord: "Discord",
        store: "Loja"
    },
    en: {
        title: "BartexCraft",
        subtitle: "Minecraft Server",
        playersOnline: "Players Online",
        serverStatus: "Server Status",
        online: "Online",
        offline: "Offline",
        copyIP: "Copy IP",
        ipCopied: "IP copied!",
        features: "Features",
        feature1Title: "Bridge Practice",
        feature1Desc: "Practice your bridging skills in various modes",
        feature2Title: "VIP System",
        feature2Desc: "Exclusive benefits for VIP members",
        feature3Title: "Replays",
        feature3Desc: "Review your best plays",
        feature4Title: "Party System",
        feature4Desc: "Play with your friends",
        joinNow: "Join Now",
        discord: "Discord",
        store: "Store"
    },
    ar: {
        title: "بارتكس كرافت",
        subtitle: "خادم ماين كرافت",
        playersOnline: "اللاعبون المتصلون",
        serverStatus: "حالة الخادم",
        online: "متصل",
        offline: "غير متصل",
        copyIP: "نسخ العنوان",
        ipCopied: "تم نسخ العنوان!",
        features: "المميزات",
        feature1Title: "تدريب الجسور",
        feature1Desc: "تدرب على مهارات بناء الجسور في أوضاع مختلفة",
        feature2Title: "نظام VIP",
        feature2Desc: "مزايا حصرية لأعضاء VIP",
        feature3Title: "إعادة المشاهدة",
        feature3Desc: "راجع أفضل لعباتك",
        feature4Title: "نظام الحفلات",
        feature4Desc: "العب مع أصدقائك",
        joinNow: "انضم الآن",
        discord: "ديسكورد",
        store: "المتجر"
    },
    es: {
        title: "BartexCraft",
        subtitle: "Servidor de Minecraft",
        playersOnline: "Jugadores en Línea",
        serverStatus: "Estado del Servidor",
        online: "En Línea",
        offline: "Desconectado",
        copyIP: "Copiar IP",
        ipCopied: "¡IP copiada!",
        features: "Características",
        feature1Title: "Práctica de Puentes",
        feature1Desc: "Practica tus habilidades de construcción de puentes en varios modos",
        feature2Title: "Sistema VIP",
        feature2Desc: "Beneficios exclusivos para miembros VIP",
        feature3Title: "Repeticiones",
        feature3Desc: "Revisa tus mejores jugadas",
        feature4Title: "Sistema de Grupos",
        feature4Desc: "Juega con tus amigos",
        joinNow: "Únete Ahora",
        discord: "Discord",
        store: "Tienda"
    },
    ja: {
        title: "バーテックスクラフト",
        subtitle: "マインクラフトサーバー",
        playersOnline: "オンラインプレイヤー",
        serverStatus: "サーバーステータス",
        online: "オンライン",
        offline: "オフライン",
        copyIP: "IPをコピー",
        ipCopied: "IPをコピーしました！",
        features: "機能",
        feature1Title: "ブリッジ練習",
        feature1Desc: "様々なモードでブリッジスキルを練習",
        feature2Title: "VIPシステム",
        feature2Desc: "VIPメンバー限定の特典",
        feature3Title: "リプレイ",
        feature3Desc: "ベストプレイを振り返る",
        feature4Title: "パーティーシステム",
        feature4Desc: "友達と一緒にプレイ",
        joinNow: "今すぐ参加",
        discord: "ディスコード",
        store: "ストア"
    },
    ko: {
        title: "바텍스크래프트",
        subtitle: "마인크래프트 서버",
        playersOnline: "접속 중인 플레이어",
        serverStatus: "서버 상태",
        online: "온라인",
        offline: "오프라인",
        copyIP: "IP 복사",
        ipCopied: "IP가 복사되었습니다!",
        features: "기능",
        feature1Title: "브릿지 연습",
        feature1Desc: "다양한 모드에서 브릿지 스킬 연습",
        feature2Title: "VIP 시스템",
        feature2Desc: "VIP 회원 전용 혜택",
        feature3Title: "리플레이",
        feature3Desc: "최고의 플레이 다시보기",
        feature4Title: "파티 시스템",
        feature4Desc: "친구들과 함께 플레이",
        joinNow: "지금 참가",
        discord: "디스코드",
        store: "상점"
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateContent();
    updateLanguageButtons();
}

function updateContent() {
    const t = translations[currentLang];
    
    document.querySelector('h1').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('.players-online h2').textContent = t.playersOnline;
    document.querySelector('.server-status h3').textContent = t.serverStatus;
    document.querySelector('.copy-btn').textContent = t.copyIP;
    document.querySelector('.features h2').textContent = t.features;
    
    const features = document.querySelectorAll('.feature');
    features[0].querySelector('h3').textContent = t.feature1Title;
    features[0].querySelector('p').textContent = t.feature1Desc;
    features[1].querySelector('h3').textContent = t.feature2Title;
    features[1].querySelector('p').textContent = t.feature2Desc;
    features[2].querySelector('h3').textContent = t.feature3Title;
    features[2].querySelector('p').textContent = t.feature3Desc;
    features[3].querySelector('h3').textContent = t.feature4Title;
    features[3].querySelector('p').textContent = t.feature4Desc;
    
    document.querySelector('.cta-button').textContent = t.joinNow;
    
    const statusText = document.querySelector('.status-indicator').classList.contains('online') ? t.online : t.offline;
    document.querySelector('.status-text').textContent = statusText;
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);
}
