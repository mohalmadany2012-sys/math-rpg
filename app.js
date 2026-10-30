/* =========================================================================
       1. القاموس والترجمة الشاملة
       ========================================================================= */
    let currentLang = localStorage.getItem('mk_lang') || 'ar';
    let currentTheme = localStorage.getItem('mk_theme') || 'dark';

    const I18N = {
      ar: {
        login_title: "بوابة الفرسان",
        login_subtitle: "اختر طريقة الدخول لبدء التحدي",
        login_google_btn: "دخول سريع بحساب Google",
        or_divider: "أو",
        tab_manual: "تسجيل يدوي",
        tab_guest: "دخول ضيف",
        label_knight_name: "اسم الفارس",
        label_email: "البريد الإلكتروني (Gmail)",
        label_pass: "كلمة المرور",
        forgot_pass_btn: "نسيت كلمة المرور؟",
        pass_encrypted_tag: "🔒 حساب مشفر آمن",
        save_and_play: "حفظ وبدء اللعب",
        guest_notice: "ℹ️ سيتم حفظ تقدمك في سجل المتصفح الحالي فقط. لن تظهر في قائمة المتصدرين العالمية إلا بإنشاء حساب مسجل.",
        guest_btn: "متابعة كضيف",
        reset_pass_title: "استعادة الحساب عبر Gmail",
        reset_pass_desc: "أدخل بريدك الإلكتروني المسجل لإرسال رابط إعادة تعيين كلمة المرور رسمياً إلى صندوق بريدك.",
        send_reset_btn: "إرسال كود التحقق 📩",
        lvl_short: "م",
        tower_nav: "البرج",
        home_title: "ميدان قتال الجداول",
        home_desc: "30 مستوى لكل جدول. الوحوش تقوى تدريجياً مع جوائز ختم كبرى، واختر الجداول التي تريد التدريب عليها في النظام المخصص.",
        rule_hint: "كل مستوى 5 جولات. عند ختم 30 مستوى في الجدول تحصل على مكافأة الختم الكبرى!",
        stage_prefix: "مستوى",
        flee_btn: "انسحاب",
        wave_text: "الجولة",
        shop_title: "المتجر",
        shop_desc: "عتاد متطور، ترقيات للتايمر، وأسلحة حديثة لزيادة قوتك وسرعتك في الحساب.",
        back_home: "عودة ↩",
        tab_wep: "⚔️ الأسلحة",
        tab_tim: "⏱️ التايمر",
        tab_arm: "🛡️ الدروع",
        tab_knt: "👤 الفرسان",
        tab_frm: "🖼️ الإطارات",
        tab_arn: "🌄 الخلفيات",
        tab_rec: "💎 شحن وإعلانات",
        leaderboard_title: "قائمة المتصدرين",
        leaderboard_desc: "مرتبة وفق نقاط الخبرة الإجمالية (XP). تقتصر على الحسابات المسجلة فقط ولا تدرج الضيوف.",
        badges_title: "شارات البطولة والإنجازات",
        badges_desc: "شارات متدرجة تكافئ تقدمك في الجداول والمعارك والذهب.",
        profile_title: "الملف الشخصي وحساب الفارس",
        upload_img: "📷 رفع صورة خاصة",
        default_img: "🔄 الصورة الأصلية",
        knight_name_lbl: "اسم الفارس",
        save_btn: "حفظ",
        stat_account: "نوع الحساب",
        stat_completed_tables: "الجداول المكتملة كلياً (30/30)",
        stat_total_stages: "المستويات المكتملة",
        stat_weapon: "السلاح الحالي",
        stat_armor: "الدرع الحالي",
        tower_title: "برج المكافآت التفاعلي",
        tower_desc: "يعد أثناء فتحك للعبة فقط ويمنحك مكافآت مجانية كل بضع دقائق!",
        tower_status: "حالة الجائزة التالية",
        claim_btn: "استلام المكافأة",
        close_btn: "إغلاق",
        settings_title: "إعدادات اللعبة",
        setting_ans_mode: "طريقة الإجابة",
        setting_lang: "اللغة والأرقام",
        setting_theme: "مظهر اللعبة",
        setting_sound: "المؤثرات الصوتية",
        setting_logout: "الحساب",
        switch_account: "تبديل / خروج",
        buy: "شراء",
        equipped: "مجهز ✓",
        equip: "تجهيز",
        owned: "مملوك",
        completed: "مكتمل ✅",
        locked: "قيد التقدم 🔒",
        table_label: "جدول",
        waves_completed: "جولات قتالية",
        max_stage_done: "ختم كامل 👑",
        guest_text: "ضيف",
        reward_ad_title: "إعلان بمكافأة حقيقية (فيديو)",
        reward_ad_desc: "شاهد إعلاناً لدعم اللعبة واستلم فوراً +50 ذهباً و +1 جوهرة مجاناً! (متاح كل 10 دقائق لعب مستمر - حد أقصى 3 يومياً)",
        watch_ad_btn: "مشاهدة الإعلان 🎬",
        pack_coming_soon: "قريباً... يتم تجهيز بوابة الدفع الرسمية للمطور 💳",
        promo_title: "أكواد الهدايا الترويجية",
        promo_desc: "أدخل كود الهدية للحصول على جوائز حصرية من الذهب والجواهر!",
        promo_placeholder: "أدخل كود الهدية هنا...",
        promo_btn: "تفعيل الكود ✨"
      },
      en: {
        login_title: "Knights Portal",
        login_subtitle: "Choose login method to start",
        login_google_btn: "Sign in with Google",
        or_divider: "OR",
        tab_manual: "Manual Entry",
        tab_guest: "Guest Mode",
        label_knight_name: "Knight Name",
        label_email: "Gmail Address",
        label_pass: "Password",
        forgot_pass_btn: "Forgot Password?",
        pass_encrypted_tag: "🔒 Encrypted Account",
        save_and_play: "Save & Start",
        guest_notice: "ℹ️ Progress saved locally. Guests are excluded from the global leaderboard.",
        guest_btn: "Continue as Guest",
        reset_pass_title: "Reset Password via Gmail",
        reset_pass_desc: "Enter your registered Gmail to receive verification code directly.",
        send_reset_btn: "Send Verification Code 📩",
        lvl_short: "Lvl",
        tower_nav: "Tower",
        home_title: "Multiplication Arena",
        home_desc: "30 levels per table. Scaling monster difficulty with grand completion rewards!",
        rule_hint: "5 waves per level. Clear all 30 levels to earn grand completion rewards!",
        stage_prefix: "Level",
        flee_btn: "Flee",
        wave_text: "Wave",
        shop_title: "Shop",
        shop_desc: "Advanced gear, timer upgrades, and weapons to boost your speed and power.",
        back_home: "Back ↩",
        tab_wep: "⚔️ Weapons",
        tab_tim: "⏱️ Timers",
        tab_arm: "🛡️ Armors",
        tab_knt: "👤 Knights",
        tab_frm: "🖼️ Frames",
        tab_arn: "🌄 Arenas",
        tab_rec: "💎 Gems & Ads",
        leaderboard_title: "Leaderboard",
        leaderboard_desc: "Ranked by Total XP. Strictly for registered accounts (Guests excluded).",
        badges_title: "Heroic Badges",
        badges_desc: "Graduated badges rewarding your progress in tables, combat, and wealth.",
        profile_title: "Knight Profile",
        upload_img: "📷 Upload Avatar",
        default_img: "🔄 Default Avatar",
        knight_name_lbl: "Knight Name",
        save_btn: "Save",
        stat_account: "Account Type",
        stat_completed_tables: "Cleared Tables (30/30)",
        stat_total_stages: "Total Levels Completed",
        stat_weapon: "Current Weapon",
        stat_armor: "Current Armor",
        tower_title: "Online Reward Tower",
        tower_desc: "Ticks only while you are in game and gives free rewards every few minutes!",
        tower_status: "Next Reward Status",
        claim_btn: "Claim Reward",
        close_btn: "Close",
        settings_title: "Settings",
        setting_ans_mode: "Answer Mode",
        setting_lang: "Language & Numbers",
        setting_theme: "Theme",
        setting_sound: "Sound FX",
        setting_logout: "Account",
        switch_account: "Switch / Logout",
        buy: "Buy",
        equipped: "Equipped ✓",
        equip: "Equip",
        owned: "Owned",
        completed: "Done ✅",
        locked: "Locked 🔒",
        table_label: "Table",
        waves_completed: "Combat Waves",
        max_stage_done: "Grand Master 👑",
        guest_text: "Guest",
        reward_ad_title: "Rewarded Video Ad",
        reward_ad_desc: "Watch an ad to support the game and get +50 Gold & +1 Gem! (Cooldown: 10 mins continuous play, max 3/day)",
        watch_ad_btn: "Watch Ad 🎬",
        pack_coming_soon: "Coming soon... Developer payment gateway is being finalized! 💳",
        promo_title: "Promo Gift Codes",
        promo_desc: "Redeem your secret promo code for free Gold & Gems!",
        promo_placeholder: "Enter promo code here...",
        promo_btn: "Redeem ✨"
      }
    };

    function formatNum(num) {
      if (num === null || num === undefined) return '';
      const str = num.toString();
      if (currentLang !== 'ar') return str;
      const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return str.replace(/[0-9]/g, d => arabicDigits[parseInt(d)]);
    }

    function applyLanguageAndTheme() {
      const root = document.documentElement;
      root.setAttribute('lang', currentLang);
      root.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

      if (currentTheme === 'light') {
        root.classList.add('light');
        root.classList.remove('dark');
        document.getElementById('themeSettingBtn').innerText = currentLang === 'ar' ? 'فاتح ☀️' : 'Light ☀️';
      } else {
        root.classList.add('dark');
        root.classList.remove('light');
        document.getElementById('themeSettingBtn').innerText = currentLang === 'ar' ? 'داكن 🌙' : 'Dark 🌙';
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (I18N[currentLang][k]) el.innerText = I18N[currentLang][k];
      });

      const arBtn = document.getElementById('langArBtn');
      const enBtn = document.getElementById('langEnBtn');
      if (currentLang === 'ar') {
        arBtn.className = "px-3 py-1 rounded-lg text-xs font-bold border border-blue-500 bg-blue-600 text-white";
        enBtn.className = "px-3 py-1 rounded-lg text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300";
      } else {
        enBtn.className = "px-3 py-1 rounded-lg text-xs font-bold border border-blue-500 bg-blue-600 text-white";
        arBtn.className = "px-3 py-1 rounded-lg text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300";
      }

      applyRoomLanguage();
      updateHeaderUI();
      renderTableCards();
      renderCustomTablesChoices();
      renderShopItems();
      renderBadges();
      renderLeaderboard();
      updateTowerUI();
      updateInputModeSettingUI();
    }

    function applyRoomLanguage() {
      const en = currentLang === 'en';
      const root = document.getElementById('roomsView');
      if (!root) return;
      root.querySelectorAll('[data-room-ar][data-room-en]').forEach(el => { el.textContent = en ? el.dataset.roomEn : el.dataset.roomAr; });
      const pairs = [
        ['⚔️ الغرف المخصصة','⚔️ Custom Rooms'],['أنشئ غرفة تكتيكية أو انضم باستخدام كودها.','Create a tactical room or join with its code.'],['الرئيسية ↩','Home ↩'],['➕ إنشاء غرفة','➕ Create Room'],['🔑 الانضمام إلى غرفة','🔑 Join Room'],['إنشاء غرفة جديدة','Create New Room'],['نمط المواجهة','Match Format'],['اسم الفريق الأول','Blue team name'],['اسم الفريق الثاني','Red team name'],['الفريق الأزرق','Blue Team'],['الفريق الأحمر','Red Team'],['مدة الإجابة لكل سؤال','Answer time per question'],['قيمة الضرر الأساسية لكل الأسلحة المسموحة (لكل ضربة)','Base damage for all allowed weapons (per hit)'],['الجداول المستخدمة في المعركة','Tables used in battle'],['إنشاء غرفة','Create Room'],['الانضمام إلى غرفة','Join a Room'],['أدخل كود الغرفة','Enter room code'],['انضمام بالكود','Join with Code'],['كود الغرفة','Room Code'],['نسخ','Copy'],['إغلاق الغرفة','Close Room'],['مغادرة الغرفة','Leave Room'],['أنا مستعد ✓','I’m Ready ✓'],['بدء المعركة ⚔️','Start Battle ⚔️'],['حفظ أسماء الفريقين','Save team names'],['الإجابة الخاطئة تخصم 5 نقاط صحة تلقائيًا من فريقك.','A wrong answer automatically removes 5 HP from your team.'],['تبدأ المعركة عند وجود لاعب في كل فريق واستعداد جميع اللاعبين الموجودين. منشئ الغرفة هو من يبدأ المعركة.','The battle starts when both teams have a player and all seated players are ready. The room host starts it.']
      ];
      root.querySelectorAll('h2,h3,p,label,button,div,span,strong,option').forEach(el => {
        if (el.children.length) return;
        if (!el.dataset.roomOriginal) el.dataset.roomOriginal = el.textContent;
        const original = el.dataset.roomOriginal.trim();
        const pair = pairs.find(x => x[0] === original);
        if (pair) el.textContent = en ? pair[1] : pair[0];
      });
      const blue = document.getElementById('roomBlueName'), red = document.getElementById('roomRedName'), code = document.getElementById('roomJoinCode');
      if (blue) blue.placeholder = en ? 'Blue Team' : 'الفريق الأزرق';
      if (red) red.placeholder = en ? 'Red Team' : 'الفريق الأحمر';
      if (code) code.placeholder = en ? 'Enter room code' : 'أدخل كود الغرفة';
      root.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }

    function setGameLang(l) {
      currentLang = l;
      localStorage.setItem('mk_lang', currentLang);
      applyLanguageAndTheme();
      if (typeof RoomsSystem !== 'undefined') RoomsSystem.refreshLanguage();
    }

    function toggleTheme() {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mk_theme', currentTheme);
      applyLanguageAndTheme();
    }

    function toggleMobileNavMenu() {
      const menu = document.getElementById('mobileDropdownMenu');
      menu.classList.toggle('hidden');
    }

    document.addEventListener('click', (e) => {
      const menu = document.getElementById('mobileDropdownMenu');
      const triggerBtn = document.getElementById('mobileMenuTriggerBtn');
      if (!menu || menu.classList.contains('hidden')) return;
      if (!menu.contains(e.target) && !triggerBtn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });

    /* =========================================================================
       2. المؤثرات الصوتية
       ========================================================================= */
    let audioContext = null;
    let isSoundMuted = false;

    function playAudio(type) {
      if (isSoundMuted) return;
      try {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') audioContext.resume();

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        const t = audioContext.currentTime;

        if (type === 'hit') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(350, t);
          osc.frequency.exponentialRampToValueAtTime(70, t + 0.12);
          gain.gain.setValueAtTime(0.25, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);
          osc.start(t);
          osc.stop(t + 0.12);
        } else if (type === 'hurt') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(130, t);
          osc.frequency.linearRampToValueAtTime(45, t + 0.2);
          gain.gain.setValueAtTime(0.35, t);
          gain.gain.linearRampToValueAtTime(0.01, t + 0.2);
          osc.start(t);
          osc.stop(t + 0.2);
        } else if (type === 'coin') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(800, t);
          osc.frequency.setValueAtTime(1200, t + 0.08);
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
          osc.start(t);
          osc.stop(t + 0.2);
        } else if (type === 'gem') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(950, t);
          osc.frequency.exponentialRampToValueAtTime(1600, t + 0.28);
          gain.gain.setValueAtTime(0.25, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.28);
          osc.start(t);
          osc.stop(t + 0.28);
        }
      } catch (e) {}
    }

    function toggleAudio() {
      isSoundMuted = !isSoundMuted;
      document.getElementById('settingAudioBtn').innerText = isSoundMuted ? (currentLang === 'ar' ? 'مكتوم 🔇' : 'Muted 🔇') : (currentLang === 'ar' ? 'مفعل 🔊' : 'Active 🔊');
      document.getElementById('settingAudioBtn').className = isSoundMuted ? "px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-slate-400" : "px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white";
    }

    /* =========================================================================
       3. بيانات المتجر والشارات واللعبة
       ========================================================================= */
    const DEFAULT_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%231e3a8a'/><path d='M22 78 Q50 42 78 78' fill='%2394a3b8'/><circle cx='50' cy='42' r='18' fill='%23f59e0b'/><rect x='42' y='38' width='16' height='4' rx='2' fill='%230f172a'/></svg>";
    const GOOGLE_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23ea4335'/><circle cx='50' cy='40' r='18' fill='%23fff'/><path d='M25 80 Q50 50 75 80' fill='%23fff'/></svg>";

    const SHOP_DATA = {
      weapons: [
        { id: "w_1", name_ar: "سيف خشبي", name_en: "Wooden Sword", desc_ar: "يؤثر بـ +5 ضرر", desc_en: "Deals +5 damage", dmg: 5, extraDef: 0, priceGold: 0, priceGem: 0, icon: "🗡️" },
        { id: "w_2", name_ar: "خنجر", name_en: "Dagger", desc_ar: "يؤثر بـ +6 ضرر", desc_en: "Deals +6 damage", dmg: 6, extraDef: 0, priceGold: 100, priceGem: 0, icon: "🗡️" },
        { id: "w_3", name_ar: "سيف حديدي", name_en: "Iron Sword", desc_ar: "يؤثر بـ +7 ضرر", desc_en: "Deals +7 damage", dmg: 7, extraDef: 0, priceGold: 140, priceGem: 0, icon: "⚔️" },
        { id: "w_4", name_ar: "سيف فولاذي", name_en: "Steel Sword", desc_ar: "يؤثر بـ +8 ضرر", desc_en: "Deals +8 damage", dmg: 8, extraDef: 0, priceGold: 190, priceGem: 1, icon: "⚔️" },
        { id: "w_5", name_ar: "صولجان", name_en: "Mace", desc_ar: "يؤثر بـ +10 ضرر", desc_en: "Deals +10 damage", dmg: 10, extraDef: 0, priceGold: 260, priceGem: 2, icon: "🔨" },
        { id: "w_6", name_ar: "سيف صلب", name_en: "Hardened Sword", desc_ar: "يؤثر بـ +12 ضرر", desc_en: "Deals +12 damage", dmg: 12, extraDef: 0, priceGold: 360, priceGem: 3, icon: "❄️" },
        { id: "w_7", name_ar: "مسدس", name_en: "Pistol", desc_ar: "يؤثر بـ +15 ضرر ويمتص 6% من الضرر", desc_en: "Deals +15 damage and absorbs 6% damage", dmg: 15, extraDef: 0.06, priceGold: 600, priceGem: 6, icon: "🔫" },
        { id: "w_8", name_ar: "سيف ناري", name_en: "Fire Sword", desc_ar: "يؤثر بـ +20 ضرر", desc_en: "Deals +20 damage", dmg: 20, extraDef: 0, priceGold: 850, priceGem: 8, icon: "🔥" },
        { id: "w_9", name_ar: "بندقية", name_en: "Rifle", desc_ar: "يؤثر بـ +26 ضرر ويمتص 14% من الضرر", desc_en: "Deals +26 damage and absorbs 14% damage", dmg: 26, extraDef: 0.14, priceGold: 1400, priceGem: 12, icon: "⚡" },
        { id: "w_10", name_ar: "قاذف آر بي جي", name_en: "RPG Rocket", desc_ar: "أقوى سلاح! يؤثر بـ +35 ضرر ويمتص 20% من الضرر", desc_en: "Strongest weapon! Deals +35 damage and absorbs 20% damage", dmg: 35, extraDef: 0.20, priceGold: 2200, priceGem: 20, icon: "🚀" }
      ],
      timers: [
        { id: "timer_7", name_ar: "تايمر 7 ثوانٍ", name_en: "7s Timer", desc_ar: "يمنح 7 ثوانٍ للتفكير (مجاني)", desc_en: "Gives 7 seconds to answer (Free)", sec: 7, priceGold: 0, priceGem: 0, icon: "⏱️" },
        { id: "timer_10", name_ar: "تايمر 10 ثوانٍ", name_en: "10s Timer", desc_ar: "يمنح 10 ثوانٍ للتفكير", desc_en: "Gives 10 seconds to answer", sec: 10, priceGold: 60, priceGem: 0, icon: "⏳" },
        { id: "timer_13", name_ar: "تايمر 13 ثانية", name_en: "13s Timer", desc_ar: "يمنح 13 ثانية للتفكير", desc_en: "Gives 13 seconds to answer", sec: 13, priceGold: 120, priceGem: 0, icon: "⏳" },
        { id: "timer_16", name_ar: "تايمر 16 ثانية", name_en: "16s Timer", desc_ar: "يمنح 16 ثانية للتفكير", sec: 16, priceGold: 190, priceGem: 1, icon: "⏳" },
        { id: "timer_19", name_ar: "تايمر 19 ثانية", name_en: "19s Timer", desc_ar: "يمنح 19 ثانية للتفكير", sec: 19, priceGold: 260, priceGem: 1, icon: "⏳" },
        { id: "timer_22", name_ar: "تايمر 22 ثانية", name_en: "22s Timer", desc_ar: "يمنح 22 ثانية للتفكير", sec: 22, priceGold: 340, priceGem: 2, icon: "⌛" },
        { id: "timer_25", name_ar: "تايمر 25 ثانية", name_en: "25s Timer", desc_ar: "يمنح 25 ثانية للتفكير", sec: 25, priceGold: 420, priceGem: 2, icon: "⌛" },
        { id: "timer_28", name_ar: "تايمر 28 ثانية", name_en: "28s Timer", desc_ar: "يمنح 28 ثانية للتفكير", sec: 28, priceGold: 510, priceGem: 3, icon: "⌛" },
        { id: "timer_30", name_ar: "تايمر 30 ثانية", name_en: "30s Timer", desc_ar: "يمنح 30 ثانية للتفكير", sec: 30, priceGold: 600, priceGem: 4, icon: "🛑" }
      ],
      armors: [
        { id: "a_1", name_ar: "سترة قماش", name_en: "Cloth Tunic", desc_ar: "لا يمتص أي ضرر", desc_en: "Absorbs 0% damage", def: 0, priceGold: 0, priceGem: 0, icon: "🥋" },
        { id: "a_2", name_ar: "درع جلدي", name_en: "Leather Armor", desc_ar: "يمتص 8% من ضربات الوحش", desc_en: "Absorbs 8% damage", def: 0.08, priceGold: 120, priceGem: 0, icon: "🛡️" },
        { id: "a_3", name_ar: "درع حديدي", name_en: "Iron Armor", desc_ar: "يمتص 15% من ضربات الوحش", desc_en: "Absorbs 15% damage", def: 0.15, priceGold: 240, priceGem: 2, icon: "🛡️" },
        { id: "a_4", name_ar: "درع صلب", name_en: "Steel Armor", desc_ar: "يمتص 24% من ضربات الوحش", desc_en: "Absorbs 24% damage", def: 0.24, priceGold: 480, priceGem: 5, icon: "🛡️" },
        { id: "a_5", name_ar: "درع ناري", name_en: "Fire Armor", desc_ar: "يمتص 34% من ضربات الوحش", desc_en: "Absorbs 34% damage", def: 0.34, priceGold: 850, priceGem: 9, icon: "🐉" },
        { id: "a_6", name_ar: "درع أسطوري", name_en: "Mythic Armor", desc_ar: "يمتص 45% من ضربات الوحش", desc_en: "Absorbs 45% damage", def: 0.45, priceGold: 1700, priceGem: 18, icon: "✨" }
      ],
      knights: [
        { id: "k_1", name_ar: "فارس أساسي", name_en: "Basic Knight", desc_ar: "مكاسب طبيعية متوازنة", desc_en: "Standard balanced rewards", goldBonus: 1.0, xpBonus: 1.0, priceGold: 0, priceGem: 0, icon: "👤" },
        { id: "k_2", name_ar: "فارس سريع", name_en: "Swift Knight", desc_ar: "يزيد الذهب 15% والخبرة 5%", desc_en: "+15% Gold and +5% XP", goldBonus: 1.15, xpBonus: 1.05, priceGold: 320, priceGem: 3, icon: "🏹" },
        { id: "k_3", name_ar: "فارس قوي", name_en: "Storm Knight", desc_ar: "يزيد الذهب 25% والخبرة 20%", desc_en: "+25% Gold and +20% XP", goldBonus: 1.25, xpBonus: 1.20, priceGold: 750, priceGem: 8, icon: "🌪️" },
        { id: "k_4", name_ar: "فارس متوج", name_en: "Champion Knight", desc_ar: "يزيد الذهب والخبرة 35%", desc_en: "+35% Gold and +35% XP", goldBonus: 1.35, xpBonus: 1.35, priceGold: 1900, priceGem: 20, icon: "👑" }
      ],
      frames: [
        { id: "none", name_ar: "بدون إطار", name_en: "No Frame", desc_ar: "حدود عادية للبروفايل", desc_en: "Standard profile border", priceGold: 0, priceGem: 0, icon: "⭕" },
        { id: "silver_frame", name_ar: "إطار فضي", name_en: "Silver Frame", desc_ar: "إطار فضي بارز يظهر في البروفايل", desc_en: "Bold silver profile border", priceGold: 150, priceGem: 0, icon: "🥈" },
        { id: "gold_frame", name_ar: "إطار ذهبي", name_en: "Gold Frame", desc_ar: "إطار ذهبي مشع ولامع في البروفايل", desc_en: "Shiny gold profile border", priceGold: 300, priceGem: 2, icon: "🥇" },
        { id: "red_frame", name_ar: "إطار أحمر", name_en: "Red Frame", desc_ar: "إطار أحمر ناري متوهج ونابض", desc_en: "Glowing red radiant border", priceGold: 500, priceGem: 4, icon: "🔥" },
        { id: "purple_frame", name_ar: "إطار بنفسجي", name_en: "Purple Frame", desc_ar: "إطار بنفسجي فخم ومشع", desc_en: "Royal glowing purple border", priceGold: 750, priceGem: 7, icon: "✨" }
      ],
      arenas: [
        { id: "meadow", name_ar: "المروج الخضراء", name_en: "Green Meadow", desc_ar: "سهول تدريب هادئة ونسيم لطيف", desc_en: "Peaceful training plains", priceGold: 0, priceGem: 0, icon: "🌱" },
        { id: "stone_castle", name_ar: "القلعة الحجرية", name_en: "Stone Castle", desc_ar: "أبراج وقلاع فرسان صامدة", desc_en: "Sturdy knight fortress", priceGold: 40, priceGem: 0, icon: "🏰" },
        { id: "volcano", name_ar: "البركان المتوهج", name_en: "Molten Volcano", desc_ar: "حمم بركانية مشتعلة ومتحركة", desc_en: "Flowing molten magma field", priceGold: 75, priceGem: 0, icon: "🌋" },
        { id: "crystal_cave", name_ar: "الكهف الكريستالي", name_en: "Crystal Cave", desc_ar: "بلورات زمردية مشعة تحت الأرض", desc_en: "Glowing underground crystals", priceGold: 110, priceGem: 1, icon: "💎" },
        { id: "meteor_sky", name_ar: "سماء النيازك", name_en: "Meteor Sky", desc_ar: "سماء ليلية وشهب متساقطة", desc_en: "Falling meteors night sky", priceGold: 150, priceGem: 1, icon: "🌠" },
        { id: "cyber_void", name_ar: "الفضاء الكوني", name_en: "Cyber Void", desc_ar: "فضاء واسع ونجوم متلألئة متحركة", desc_en: "Twinkling cosmic dimension", priceGold: 190, priceGem: 2, icon: "🌌" }
      ]
    };

    const PROMO_CODES = {
      'HERO2026': { gold: 150, gems: 3, name: 'هدية الفارس الجديد' },
      'MATHKING': { gold: 300, gems: 5, name: 'كنز ملك الرياضيات' },
      'KNIGHT50': { gold: 500, gems: 10, name: 'حزمة البطل المخضرم' },
      'SUPERSECRET': { gold: 1000, gems: 25, name: 'الكنز الأسطوري الخارق' }
    };

    const BADGES_LIST = [
      {
        id: "b_1_starter",
        name_ar: "الفارس المستكشف",
        name_en: "Explorer Knight",
        desc_ar: "إكمال أول معركة حاسمة بنجاح في أي جدول",
        desc_en: "Win your very first battle",
        req: s => (s.totalBattles || 0) >= 1,
        gem: 1
      },
      {
        id: "b_2_gold_100",
        name_ar: "جامع الذهب المبتدئ",
        name_en: "Gold Collector",
        desc_ar: "امتلاك 100 قطعة ذهبية في رصيدك",
        desc_en: "Hold 100+ Gold in your treasury",
        req: s => s.gold >= 100,
        gem: 2
      },
      {
        id: "b_3_lvl_3",
        name_ar: "فارس المستوى 3",
        name_en: "Level 3 Knight",
        desc_ar: "الوصول بالخبرة (XP) إلى المستوى 3",
        desc_en: "Reach Knight Level 3",
        req: s => s.level >= 3,
        gem: 2
      },
      {
        id: "b_4_early_tables",
        name_ar: "بطل الجداول الأولى",
        name_en: "Early Tables Champion",
        desc_ar: "الوصول للمستوى 3 في الجداول 1 و 2 و 3",
        desc_en: "Reach Level 3+ in Tables 1, 2, and 3",
        req: s => (s.tableProgress[1] || 1) >= 3 && (s.tableProgress[2] || 1) >= 3 && (s.tableProgress[3] || 1) >= 3,
        gem: 3
      },
      {
        id: "b_5_battles_10",
        name_ar: "فارس المعارك",
        name_en: "Battle Knight",
        desc_ar: "الفوز بـ 10 معارك قتالية كاملة",
        desc_en: "Win 10 level battles",
        req: s => (s.totalBattles || 0) >= 10,
        gem: 3
      },
      {
        id: "b_6_mid_tables",
        name_ar: "خبير الجداول المتوسطة",
        name_en: "Mid Tables Master",
        desc_ar: "الوصول للمستوى 4 في الجداول 4 و 5 و 6",
        desc_en: "Reach Level 4+ in Tables 4, 5, and 6",
        req: s => (s.tableProgress[4] || 1) >= 4 && (s.tableProgress[5] || 1) >= 4 && (s.tableProgress[6] || 1) >= 4,
        gem: 4
      },
      {
        id: "b_7_gold_500",
        name_ar: "الفارس الثري",
        name_en: "Wealthy Knight",
        desc_ar: "امتلاك أكثر من 500 قطعة ذهبية",
        desc_en: "Hold 500+ Gold in treasury",
        req: s => s.gold >= 500,
        gem: 4
      },
      {
        id: "b_8_first_clear",
        name_ar: "فاتح الجداول",
        name_en: "Table Finisher",
        desc_ar: "ختم 30 مستوى كاملة في أي جدول ضرب",
        desc_en: "Complete all 30 levels of any table",
        req: s => Object.values(s.tableProgress).some(lvl => lvl > 30),
        gem: 5
      },
      {
        id: "b_9_battles_30",
        name_ar: "أسطورة الصمود",
        name_en: "Veteran Hero",
        desc_ar: "الفوز بـ 30 معركة قتالية بنجاح",
        desc_en: "Win 30 full level battles",
        req: s => (s.totalBattles || 0) >= 30,
        gem: 6
      },
      {
        id: "b_10_grand_master",
        name_ar: "ملك جدول الضرب",
        name_en: "Math King",
        desc_ar: "ختم 5 جداول ضرب مختلفة بالكامل (10/10)",
        desc_en: "Fully clear 5 different tables",
        req: s => Object.values(s.tableProgress).filter(lvl => lvl > 30).length >= 5,
        gem: 10
      }
    ];

    const DEFAULT_GAME_DATA = {
      name: "فارس الحساب",
      email: "",
      passwordHash: "",
      avatar: DEFAULT_AVATAR,
      isGuest: false,
      authType: "Google",
      level: 1,
      xp: 0,
      gold: 10,
      gems: 0,
      inputMode: "choice",
      totalBattles: 0,
      lastDailyLogin: 0,
      equipped: {
        weapon: "w_1",
        armor: "a_1",
        knight: "k_1",
        frame: "none",
        arena: "meadow",
        timer: "timer_7"
      },
      inventory: ["w_1", "a_1", "k_1", "none", "meadow", "timer_7"],
      tableProgress: { 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10:1, 11:1, 12:1 },
      badges: [],
      towerStage: 1,
      usedCodes: [],
      // نظام الإعلانات اليومي
      dailyAdsData: {
        lastResetDate: new Date().toDateString(),
        rewardedCount: 0,
        interstitialCount: 0
      }
    };

    let gameState = { ...DEFAULT_GAME_DATA };
    let currentBattle = null;
    let battleTurnTimer = null;
    let battleTurnTimeLeft = 7;
    let isBattlePaused = false;
    let manualAuthTabMode = 'login';
    let resetCodeGenerated = null;
    let customKeypadValue = "";

    /* نظام مؤقت إعلانات المكافآت والإعلانات البينية للعب الفعلي داخل الجلسة */
    let sessionContinuousPlaySeconds = 0; // ثواني اللعب الفعلي في الجلسة الحالية
    let rewardedAdCooldownRemaining = 600; // يبدأ بـ 10 دقائق كاملة لكل جلسة
    const AD_DIRECT_LINK = "https://uplcm.com/4/12126550";
    const INTERSTITIAL_SCHEDULE_SECONDS = [300, 900, 1800, 2700]; // 5m, 15m, 30m, 45m

    /* إعدادات Firebase */
    const firebaseConfig = {
      apiKey: "AIzaSyBvAWMKhndanxTRCFy-vD1Q4fJX_RVaeMU",
      authDomain: "math-rpg-dfbe1.firebaseapp.com",
      projectId: "math-rpg-dfbe1",
      storageBucket: "math-rpg-dfbe1.firebasestorage.app",
      messagingSenderId: "113801707094",
      appId: "1:113801707094:web:951d43a145a506113005f7",
      measurementId: "G-FJFYGSSNF4"
    };

    let auth = null;
    let db = null;
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      auth = firebase.auth();
      db = firebase.firestore();
    } catch (e) {
      console.warn("Firebase Init notice:", e);
    }

    const TOWER_SCHEDULE = [
      { min: 10, gold: 10, gems: 1 },
      { min: 15, gold: 15, gems: 1 },
      { min: 30, gold: 25, gems: 2 },
      { min: 50, gold: 40, gems: 3 }
    ];
    let towerRemainingSec = TOWER_SCHEDULE[0].min * 60;
    let isTowerReady = false;

    function simpleHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
      }
      return "hash_" + Math.abs(hash).toString(36);
    }

    /* =========================================================================
       4. التشغيل والضبط الشامل
       ========================================================================= */
    window.addEventListener('DOMContentLoaded', () => {
      //forceFullGameReset();
      
      setTimeout(() => {
        loadSession();
        checkDailyAdsReset();
        applyLanguageAndTheme();
        initLiveTower();
        initFirebaseAuthListener();
        checkDailyLoginReward();
        initContinuousAdsEngine();
        
        const loader = document.getElementById('appPreloader');
        if (loader) {
          loader.style.opacity = '0';
          loader.style.visibility = 'hidden';
          setTimeout(() => loader.remove(), 400);
        }
      }, 1000);
    });

    /* تصفير التقدم المحلي لهذا الإصدار دون حذف بيانات اللاعبين المشتركة في السحابة */
    function forceFullGameReset() {
      const TOTAL_WIPE_VERSION_KEY = "mk_full_wipe_v11_personal_profile_reset";
      if (localStorage.getItem('mk_cloud_wipe_done') !== TOTAL_WIPE_VERSION_KEY) {
        // Reset this browser's game profile and app-owned local state once.
        // Keep language/theme preferences and never clear the shared global leaderboard.
        [
          'mk_save_data', 'mk_registered_accounts', 'mk_finger_tour_done',
          'mk_player_tag_v1', 'mk_received_gifts_v1', 'mk_seen_gift_notifications_v1', 'mk_active_room_id', 'mk_guest_room_id'
        ].forEach(key => localStorage.removeItem(key));
        localStorage.setItem('mk_cloud_wipe_done', TOTAL_WIPE_VERSION_KEY);
        gameState = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA));
      }
    }

    /* التحقق من إعادة تصفير الإعلانات كل 24 ساعة */
    function checkDailyAdsReset() {
      const today = new Date().toDateString();
      if (!gameState.dailyAdsData || gameState.dailyAdsData.lastResetDate !== today) {
        gameState.dailyAdsData = {
          lastResetDate: today,
          rewardedCount: 0,
          interstitialCount: 0
        };
        saveGame();
      }
    }

    /* إدارة إعلانات المكافآت فقط بدون أي فتح تلقائي */
    function initContinuousAdsEngine() {
      setInterval(() => {
        // تناقص وقت انتظار إعلان المكافأة فقط إن وجد
        if (rewardedAdCooldownRemaining > 0) {
          rewardedAdCooldownRemaining--;
          updateRewardedAdButtonUI();
        }
      }, 1000);
    }

    // تفريغ دالة الإعلانات التلقائية حتى لا تفتح أي نوافذ
    function triggerAutomaticInterstitialAd() {
      // تم إيقافها لمنع فتح تبويبات مفاجئة للاعب
    }
    function checkDailyLoginReward() {
      const now = Date.now();
      const ONE_DAY = 24 * 60 * 60 * 1000;
      if (!gameState.lastDailyLogin || (now - gameState.lastDailyLogin) > ONE_DAY) {
        setTimeout(() => {
          document.getElementById('dailyRewardModal').classList.remove('hidden');
        }, 800);
      }
    }

    function claimDailyReward() {
      gameState.gold += 50;
      gameState.gems += 2;
      gameState.lastDailyLogin = Date.now();
      saveGame();
      updateHeaderUI();
      playAudio('coin');
      document.getElementById('dailyRewardModal').classList.add('hidden');
      showToast(currentLang === 'ar' ? "استلمت جائزتك اليومية بنجاح (+50 ذهب و +2 جوهرة)! 🎉" : "Daily reward claimed! (+50 Gold & +2 Gems)! 🎉", "🎁");
    }

    function switchManualSubMode(mode) {
      manualAuthTabMode = mode;
      const loginBtn = document.getElementById('tabModeLoginBtn');
      const signupBtn = document.getElementById('tabModeSignupBtn');
      const guestBtn = document.getElementById('tabGuestBtn');
      const nameContainer = document.getElementById('authKnightNameContainer');
      const manualSec = document.getElementById('manualLoginSection');
      const guestSec = document.getElementById('guestLoginSection');
      const submitBtn = document.getElementById('authSubmitMainBtn');
      const forgotWrap = document.getElementById('forgotPassLinkWrap');

      [loginBtn, signupBtn, guestBtn].forEach(b => {
        b.className = "py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-all";
      });

      if (mode === 'login') {
        loginBtn.className = "py-2 rounded-lg text-xs font-bold bg-blue-600 text-white transition-all";
        manualSec.classList.remove('hidden');
        guestSec.classList.add('hidden');
        nameContainer.classList.add('hidden');
        forgotWrap.classList.remove('hidden');
        submitBtn.innerText = "تسجيل الدخول";
      } else if (mode === 'signup') {
        signupBtn.className = "py-2 rounded-lg text-xs font-bold bg-blue-600 text-white transition-all";
        manualSec.classList.remove('hidden');
        guestSec.classList.add('hidden');
        nameContainer.classList.remove('hidden');
        forgotWrap.classList.add('hidden');
        submitBtn.innerText = "إنشاء الحساب وبدء المغامرة";
      } else {
        guestBtn.className = "py-2 rounded-lg text-xs font-bold bg-amber-600 text-white transition-all";
        manualSec.classList.add('hidden');
        guestSec.classList.remove('hidden');
      }
    }

function handleManualAuthAction() {
      // إزالة أي مسافات نهائياً وتحويل الإيميل لحروف صغيرة
      const email = document.getElementById('manualEmailInput').value.replace(/\s+/g, '').toLowerCase();
      const pass = document.getElementById('manualPassInput').value.replace(/\s+/g, '');
      const name = document.getElementById('manualNameInput').value.trim();
      let accounts = JSON.parse(localStorage.getItem('mk_registered_accounts') || '{}');

      if (!email || !email.includes('@')) {
        showToast("يرجى كتابة بريد إلكتروني صحيح بدون مسافات!", "⚠️");
        return;
      }
      if (!pass || pass.length < 4) {
        showToast("كلمة المرور يجب أن تكون 4 خانات على الأقل وبدون مسافات!", "⚠️");
        return;
      }

      if (manualAuthTabMode === 'login') {
        if (!accounts[email]) {
          showToast("هذا الحساب غير موجود! انتقل لتبويب إنشاء حساب جديد.", "⚠️");
          return;
        }
        if (accounts[email].authType === "Google") {
          showToast("هذا الحساب مرتبط بجوجل! سجل الدخول بزر Google 🔒", "⛔");
          return;
        }
        if (accounts[email].passwordHash !== simpleHash(pass)) {
          showToast("كلمة المرور غير صحيحة!", "❌");
          playAudio('hurt');
          return;
        }

        gameState = { ...DEFAULT_GAME_DATA, ...accounts[email].data };
        checkDailyAdsReset();
        saveGame();
        closeAuthModal();
        updateHeaderUI();
        showToast(`مرحباً بعودتك يا ${gameState.name}! ⚔️`, "✅");
      } else {
        if (!name) {
          showToast("يرجى كتابة اسم الفارس لإنشاء الحساب!", "⚠️");
          return;
        }
        if (accounts[email]) {
          showToast("هذا البريد مسجل بالفعل! انتقل لتبويب تسجيل الدخول.", "⚠️");
          return;
        }

        gameState = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA));
        gameState.name = name;
        gameState.email = email;
        gameState.passwordHash = simpleHash(pass);
        gameState.isGuest = false;
        gameState.authType = "Manual";

        accounts[email] = {
          name: name,
          passwordHash: simpleHash(pass),
          authType: "Manual",
          data: { ...gameState }
        };
        localStorage.setItem('mk_registered_accounts', JSON.stringify(accounts));
        saveGame();
        closeAuthModal();
        updateHeaderUI();
        showToast("تم إنشاء الحساب بنجاح! أهلاً بك يا بطل 🛡️", "🎉");
      }
    }

    function openResetPasswordModal() {
      document.getElementById('resetPasswordModal').classList.remove('hidden');
      document.getElementById('resetStep1').classList.remove('hidden');
      document.getElementById('resetStep2').classList.add('hidden');
      document.getElementById('resetStepDesc').innerText = "أدخل بريدك الإلكتروني المسجل لإرسال رابط إعادة تعيين كلمة المرور.";
    }

    function closeResetPasswordModal() {
      document.getElementById('resetPasswordModal').classList.add('hidden');
    }
async function sendResetVerificationCode() {
      // إزالة أي مسافات زائدة وتحويل الحروف لصغيرة
      const email = document.getElementById('resetEmailField').value.replace(/\s+/g, '').toLowerCase();

      // التحقق من صيغة البريد الإلكتروني
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("يرجى كتابة بريد إلكتروني صحيح بدون مسافات!", "⚠️");
        return;
      }

      // التحقق الصارم من وجود الإيميل في الحسابات المسجلة
      let accounts = JSON.parse(localStorage.getItem('mk_registered_accounts') || '{}');
      if (!accounts[email]) {
        showToast("هذا البريد غير مسجل في اللعبة!", "⚠️");
        return;
      }

      // توليد كود عشوائي مكون من 5 أرقام
      resetCodeGenerated = Math.floor(10000 + Math.random() * 90000).toString();

      const templateParams = {
        to_email: email,
        email: email,
        pass_code: resetCodeGenerated
      };

      try {
        showToast("جارٍ إرسال كود التحقق إلى بريدك... ⏳", "📩");
        
        await emailjs.send('service_smk99dk', 'template_u9betxg', templateParams);

        document.getElementById('resetStep1').classList.add('hidden');
        document.getElementById('resetStep2').classList.remove('hidden');
        document.getElementById('resetStepDesc').innerText = `تم إرسال كود التحقق بنجاح إلى: ${email}`;
        showToast("تم إرسال كود التحقق بنجاح! تفقد بريدك الوارد.", "✅");
      } catch (error) {
        console.error("EmailJS Error:", error);
        showToast("تعذر إرسال الكود. تحقق من اتصالك بالإنترنت.", "❌");
      }
    }
    function applyNewPasswordWithCode() {
      const code = document.getElementById('resetCodeInput').value.trim();
      const p1 = document.getElementById('resetNewPassInput').value.trim();
      const p2 = document.getElementById('resetConfirmPassInput').value.trim();
      const email = document.getElementById('resetEmailField').value.trim().toLowerCase();

      if (code !== resetCodeGenerated) {
        showToast("كود التحقق غير صحيح!", "❌");
        return;
      }
      if (p1.length < 4) {
        showToast("كلمة المرور يجب أن تكون 4 خانات على الأقل!", "⚠️");
        return;
      }
      if (p1 !== p2) {
        showToast("كلمتا المرور غير متطابقتين!", "⚠️");
        return;
      }

      let accounts = JSON.parse(localStorage.getItem('mk_registered_accounts') || '{}');
      if (accounts[email]) {
        accounts[email].passwordHash = simpleHash(p1);
        if (accounts[email].data) accounts[email].data.passwordHash = simpleHash(p1);
        localStorage.setItem('mk_registered_accounts', JSON.stringify(accounts));
      }

      closeResetPasswordModal();
      switchManualSubMode('login');
      document.getElementById('manualEmailInput').value = email;
      showToast("تم تغيير كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول 🔑", "✅");
    }

    /* الكيبورد الرقمي الداخلي المخصص للألعاب */
    function pressNum(digit) {
      if (customKeypadValue.length < 4) {
        customKeypadValue += digit.toString();
        updateKeypadUI();
      }
    }

    function deleteLastNum() {
      customKeypadValue = customKeypadValue.slice(0, -1);
      updateKeypadUI();
    }

    function clearCustomKeypad() {
      customKeypadValue = "";
      updateKeypadUI();
    }

    function updateKeypadUI() {
      document.getElementById('customKeypadDisplay').innerText = formatNum(customKeypadValue);
    }

    function submitKeypadAnswer() {
      if (!customKeypadValue) return;
      const ans = parseInt(customKeypadValue);
      clearCustomKeypad();
      handleAnswer(ans);
    }

    function toggleInputModeSetting() {
      gameState.inputMode = gameState.inputMode === 'choice' ? 'type' : 'choice';
      saveGame();
      updateInputModeSettingUI();
      const txt = gameState.inputMode === 'choice'
        ? (currentLang === 'ar' ? "تم التحويل إلى: اختيار من متعدد 🔘" : "Answer mode: Multiple Choice 🔘")
        : (currentLang === 'ar' ? "تم التحويل إلى: كيبورد أرقام اللعبة ⌨️" : "Answer mode: Game Keypad ⌨️");
      showToast(txt, "⚙️");
    }

    function updateInputModeSettingUI() {
      const btn = document.getElementById('inputModeBtn');
      if (!btn) return;
      if (gameState.inputMode === 'type') {
        btn.innerText = currentLang === 'ar' ? "كيبورد اللعبة ⌨️" : "Keypad ⌨️";
        btn.className = "px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white border border-indigo-500";
      } else {
        btn.innerText = currentLang === 'ar' ? "اختيار من متعدد 🔘" : "Multiple Choice 🔘";
        btn.className = "px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white border border-blue-500";
      }
    }

    function loadSession() {
      const saved = localStorage.getItem('mk_save_data');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.name) {
            gameState = { ...DEFAULT_GAME_DATA, ...parsed };
            checkDailyAdsReset();
            closeAuthModal();
            updateHeaderUI();
            return;
          }
        } catch (e) {
          console.error("خطأ قراءة الحفظ:", e);
        }
      }
      openAuthModal();
    }

    function saveGame() {
      localStorage.setItem('mk_save_data', JSON.stringify(gameState));

      if (!gameState.isGuest && gameState.email) {
        let accounts = JSON.parse(localStorage.getItem('mk_registered_accounts') || '{}');
        if (accounts[gameState.email]) {
          accounts[gameState.email].data = { ...gameState };
          localStorage.setItem('mk_registered_accounts', JSON.stringify(accounts));
        }
      }

      if (!gameState.isGuest) {
        syncCloudLeaderboard();
      }
    }

    function openAuthModal() {
      document.getElementById('authModal').classList.remove('hidden');
    }

    function closeAuthModal() {
      document.getElementById('authModal').classList.add('hidden');
    }

    function loginAsGuest() {
      gameState.name = currentLang === 'ar' ? "فارس ضيف" : "Guest Knight";
      gameState.isGuest = true;
      gameState.authType = "Guest";
      gameState.avatar = DEFAULT_AVATAR;

      saveGame();
      closeAuthModal();
      updateHeaderUI();
      renderLeaderboard();
      showToast(currentLang === 'ar' ? "تم الدخول كضيف (الحفظ محلي فقط)" : "Guest mode (Local save only)", "ℹ️");
    }

    function initFirebaseAuthListener() {
      if (!auth) return;
      auth.onAuthStateChanged((user) => {
        if (user) {
          gameState.name = user.displayName || gameState.name;
          gameState.email = user.email || gameState.email;
          gameState.avatar = user.photoURL || gameState.avatar;
          gameState.isGuest = false;
          gameState.authType = "Google";

          let accounts = JSON.parse(localStorage.getItem('mk_registered_accounts') || '{}');
          if (!accounts[gameState.email]) {
            accounts[gameState.email] = {
              name: gameState.name,
              authType: "Google",
              data: { ...gameState }
            };
            localStorage.setItem('mk_registered_accounts', JSON.stringify(accounts));
          }

          saveGame();
          updateHeaderUI();
          renderLeaderboard();
          if (!gameState.isGuest) FriendsSystem.open();
        }
      });
    }

    function triggerGoogleSignIn() {
      if (!auth) {
        mockGoogleSignIn();
        return;
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          gameState.name = user.displayName || "فارس Google";
          gameState.email = user.email || "user@gmail.com";
          gameState.avatar = user.photoURL || GOOGLE_AVATAR;
          gameState.isGuest = false;
          gameState.authType = "Google";

          saveGame();
          closeAuthModal();
          updateHeaderUI();
          renderLeaderboard();
          showToast(currentLang === 'ar' ? `تم تسجيل الدخول بحساب Google: ${gameState.name}` : `Google login success: ${gameState.name}`, "✅");
        })
        .catch((err) => {
          if (err.code === 'auth/popup-blocked' || err.code === 'auth/unauthorized-domain') {
            mockGoogleSignIn();
          } else {
            showToast(err.message, "⚠️");
          }
        });
    }

    function mockGoogleSignIn() {
      gameState.name = currentLang === 'ar' ? "فارس Google" : "Google Knight";
      gameState.email = "google.knight@gmail.com";
      gameState.avatar = GOOGLE_AVATAR;
      gameState.isGuest = false;
      gameState.authType = "Google";

      saveGame();
      closeAuthModal();
      updateHeaderUI();
      renderLeaderboard();
      showToast(currentLang === 'ar' ? "تم تسجيل الدخول بحساب Google بنجاح 🛡️" : "Google login connected! 🛡️", "✅");
    }

    function logoutToAuthModal() {
      if (auth && auth.currentUser) {
        auth.signOut();
      }
      localStorage.removeItem('mk_save_data');
      closeSettingsModal();
      openAuthModal();
    }

    /* =========================================================================
       5. المتصدرين
       ========================================================================= */
    function syncCloudLeaderboard() {
      if (!db || gameState.isGuest) return;
      const uid = (auth && auth.currentUser) ? auth.currentUser.uid : ("user_" + simpleHash(gameState.email || gameState.name));
      db.collection("leaderboard").doc(uid).set({
        name: gameState.name,
        profileKey: (String(gameState.email || (auth && auth.currentUser && auth.currentUser.email) || '').trim().toLowerCase() ? simpleHash(String(gameState.email || (auth && auth.currentUser && auth.currentUser.email) || '').trim().toLowerCase()) : null),
        xp: gameState.xp,
        level: gameState.level,
        avatar: gameState.avatar,
        frame: gameState.equipped.frame,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(() => {});
    }

    function renderLeaderboard() {
      const container = document.getElementById('leaderboardListBox');
      if (!container) return;
      
      container.innerHTML = `
        <div class="text-center py-6 text-slate-400 text-xs font-bold">
          ${currentLang === 'ar' ? 'جارٍ تحميل الأبطال من السحابة... ⏳' : 'Loading heroes from cloud... ⏳'}
        </div>
      `;

      if (!db) {
         container.innerHTML = `
          <div class="text-center py-6 text-slate-400 text-xs font-bold">
            ${currentLang === 'ar' ? 'السحابة غير متصلة.' : 'Cloud offline.'}
          </div>
         `;
         return;
      }

      db.collection("leaderboard")
        .orderBy("xp", "desc")
        .limit(100)
        .get()
        .then((snapshot) => {
          container.innerHTML = '';
          if (snapshot.empty) {
            container.innerHTML = `
              <div class="text-center py-8 text-slate-500 text-xs">
                ${currentLang === 'ar' ? 'لا يوجد لاعبون مسجلون بعد. كن أول بطل يتصدر القائمة! 🏆' : 'No players yet. Be the first champion! 🏆'}
              </div>
            `;
            return;
          }

          // Collapse duplicate logins for the same player (desktop/mobile) into one row.
          // Prefer the most recently updated profile so a deliberate profile reset is reflected.
          const uniquePlayers = [];
          const identityAliases = new Map();
          const updatedAtMs = value => {
            if (value && typeof value.toMillis === 'function') return value.toMillis();
            const parsed = value ? Date.parse(value) : 0;
            return Number.isFinite(parsed) ? parsed : 0;
          };
          snapshot.forEach((doc) => {
            const entry = doc.data() || {};
            const normalizedName = String(entry.name || '').trim().toLocaleLowerCase().replace(/[\s\u200f\u200e]+/g, ' ');
            const aliases = normalizedName ? [`legacy:${normalizedName}|${String(entry.avatar || '').trim()}`] : [];
            if (entry.profileKey) aliases.push(`profile:${entry.profileKey}`);
            let group = aliases.map(key => identityAliases.get(key)).find(Boolean);
            if (!group) {
              group = { id:doc.id, entry };
              uniquePlayers.push(group);
            } else {
              const currentTime = updatedAtMs(entry.updatedAt);
              const groupedTime = updatedAtMs(group.entry.updatedAt);
              if (currentTime > groupedTime || (currentTime === groupedTime && Number(entry.xp || 0) > Number(group.entry.xp || 0))) {
                group.id = doc.id;
                group.entry = entry;
              }
            }
            aliases.forEach(key => identityAliases.set(key, group));
          });
          const players = uniquePlayers.sort((a,b) => Number(b.entry.xp || 0) - Number(a.entry.xp || 0)).slice(0, 10);
          if (!players.length) {
            container.innerHTML = `<div class="text-center py-8 text-slate-500 text-xs">${currentLang === 'ar' ? 'لا يوجد لاعبون مسجلون بعد.' : 'No players yet.'}</div>`;
            return;
          }
          let rank = 1;
          players.forEach(({ id, entry }) => {
            const currentUid = (auth && auth.currentUser) ? auth.currentUser.uid : ("user_" + simpleHash(gameState.email || gameState.name));
            const currentEmail = String(gameState.email || (auth && auth.currentUser && auth.currentUser.email) || '').trim().toLowerCase();
            const isCurrent = !gameState.isGuest && (id === currentUid || (!!currentEmail && entry.profileKey === simpleHash(currentEmail)));
            
            const row = document.createElement('div');
            row.className = `flex items-center justify-between p-3 rounded-2xl border transition ${
              isCurrent 
                ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/50' 
                : 'bg-slate-950/60 light:bg-slate-50 border-slate-800 light:border-slate-200'
            }`;

            const rankBadge = rank === 1 ? "🥇" : (rank === 2 ? "🥈" : (rank === 3 ? "🥉" : `#${formatNum(rank)}`));
            const playerImg = entry.avatar || DEFAULT_AVATAR;
            const frameClass = getFrameCssClass(entry.frame || 'none');

            row.innerHTML = `
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl overflow-hidden p-0.5 shrink-0 bg-slate-800 ${frameClass}">
                  <img src="${playerImg}" class="w-full h-full rounded-xl object-cover">
                </div>
                <div>
                  <div class="font-bold text-xs text-slate-100 light:text-slate-900 flex items-center gap-1.5">
                    <span>${entry.name}</span>
                    ${isCurrent ? '<span class="text-[9px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-black">' + (currentLang === 'ar' ? 'أنت' : 'You') + '</span>' : ''}
                  </div>
                  <span class="text-[10px] text-slate-400 font-mono">${I18N[currentLang].lvl_short} ${formatNum(entry.level || 1)}</span>
                </div>
              </div>
              
              <div class="flex items-center gap-3 text-left">
                <span class="font-black text-xs text-cyan-400 font-mono">${formatNum(entry.xp || 0)} XP</span>
                <span class="font-black text-sm text-amber-400 w-7 text-center font-mono">${rankBadge}</span>
              </div>
            `;
            container.appendChild(row);
            rank++;
          });
        })
        .catch(() => {
          container.innerHTML = `
            <div class="text-center py-6 text-rose-400 text-xs">
              ${currentLang === 'ar' ? 'سجّل الدخول بحساب لتفعيل السحابة وعرض المتصدرين' : 'Sign in to sync leaderboard'}
            </div>
          `;
        });
    }

    /* =========================================================================
       6. شاشة اختيار الجداول والمراحل
       ========================================================================= */
    let customBattleTables = [];
    let isCustomTableBattle = false;

    function renderCustomTablesChoices() {
      const box = document.getElementById('customTablesChoices');
      if (!box) return;
      box.innerHTML = '';
      for (let table = 1; table <= 12; table++) {
        const label = document.createElement('label');
        label.className = 'flex items-center gap-2 rounded-xl border border-slate-700 light:border-slate-300 p-3 text-sm text-slate-200 light:text-slate-700 cursor-pointer hover:border-violet-400';
        label.innerHTML = `<input type="checkbox" class="custom-table-choice accent-violet-600" value="${table}" ${table === 1 ? 'checked' : ''}> <span>جدول ${formatNum(table)}</span>`;
        box.appendChild(label);
      }
      box.querySelectorAll('.custom-table-choice').forEach(input => input.addEventListener('change', updateCustomTablesCount));
      updateCustomTablesCount();
    }

    function updateCustomTablesCount() {
      const selected = Array.from(document.querySelectorAll('.custom-table-choice:checked')).map(x => Number(x.value));
      const count = document.getElementById('customTablesCount');
      const button = document.getElementById('startCustomTablesBtn');
      if (count) count.textContent = selected.length < 2 ? `تم اختيار ${formatNum(selected.length)} — اختر جدولين على الأقل.` : `تم اختيار ${formatNum(selected.length)} جدولًا من أصل ١٢.`;
      if (button) button.disabled = selected.length < 2 || selected.length > 12;
    }

    function startCustomTablesBattle() {
      const selected = Array.from(document.querySelectorAll('.custom-table-choice:checked')).map(x => Number(x.value)).filter(n => n >= 1 && n <= 12);
      if (selected.length < 2 || selected.length > 12) {
        showToast('اختر جدولين على الأقل، وبحد أقصى ١٢ جدولًا.', '⚠️');
        return;
      }
      customBattleTables = selected;
      isCustomTableBattle = true;
      const firstTable = selected[Math.floor(Math.random() * selected.length)];
      startBattleStage(firstTable, 1);
    }

    function renderTableCards() {
      const container = document.getElementById('tableCardsGrid');
      if (!container) return;
      container.innerHTML = '';

      for (let t = 1; t <= 12; t++) {
        const currentLvl = gameState.tableProgress[t] || 1;
        const isCompletedAll = currentLvl > 30;
        const displayStage = isCompletedAll ? 30 : currentLvl;

        const card = document.createElement('div');
        card.className = "bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 rounded-3xl p-4 flex flex-col justify-between hover:border-slate-700 transition shadow-lg";

        const tableText = `${I18N[currentLang].table_label} ${formatNum(t)}`;
        const stageText = isCompletedAll 
          ? I18N[currentLang].max_stage_done 
          : `${I18N[currentLang].stage_prefix} ${formatNum(displayStage)} / ${formatNum(30)}`;

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-base font-black text-slate-100 light:text-slate-900">${tableText}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-lg font-black ${isCompletedAll ? 'bg-amber-950/60 text-amber-300 border border-amber-500/50' : 'bg-blue-950/60 light:bg-blue-50 light:text-blue-700 text-blue-400 border border-blue-800/60'}">${stageText}</span>
            </div>
            <p class="text-[11px] text-slate-400 mb-3">${formatNum(5)} ${I18N[currentLang].waves_completed} ${displayStage >= 5 ? '🔥' : '⚔️'}</p>
          </div>
          <button onclick="startBattleStage(${t}, ${displayStage})" class="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs shadow-md transition active:scale-95 flex items-center justify-center gap-1.5">
            <span>⚔️</span>
            <span>${currentLang === 'ar' ? 'بدء المستوى' : 'Start Level'} ${formatNum(displayStage)}</span>
          </button>
        `;
        container.appendChild(card);
      }
    }

    /* =========================================================================
       7. نظام المعارك
       ========================================================================= */
    function getEquippedTimerSeconds() {
      const tid = gameState.equipped.timer || "timer_7";
      const found = (SHOP_DATA.timers || []).find(t => t.id === tid);
      return found ? found.sec : 7;
    }

    function startBattleStage(tableNum, stageNum) {
      document.getElementById('mainAppHeader').classList.add('hidden');

      const wep = SHOP_DATA.weapons.find(w => w.id === gameState.equipped.weapon) || SHOP_DATA.weapons[0];
      const arm = SHOP_DATA.armors.find(a => a.id === gameState.equipped.armor) || SHOP_DATA.armors[0];
      const combinedDef = Math.min(0.65, (arm.def || 0) + (wep.extraDef || 0));

      const calculatedMonsterDmg = 10 + Math.floor(tableNum * 1.2) + Math.floor(stageNum * 1.6);

      currentBattle = {
        table: tableNum,
        stage: stageNum,
        wave: 1,
        totalWaves: 5,
        playerMaxHp: 100,
        playerHp: 100,
        playerDmg: wep.dmg,
        playerDef: combinedDef,
        monsterHp: calculateMonsterHp(tableNum, stageNum, 1, wep.dmg),
        monsterMaxHp: calculateMonsterHp(tableNum, stageNum, 1, wep.dmg),
        monsterDmg: calculatedMonsterDmg,
        correctAnswer: null
      };

      isBattlePaused = false;
      setupArenaVisuals();
      nextWaveTurn();
      showScreen('battleView');
    }

    function calculateMonsterHp(table, stage, wave, playerDmg) {
      let requiredHits = 3; 
      if (wave === 2 || wave === 3) requiredHits = 4;
      if (wave === 4) requiredHits = 5; 
      if (wave === 5) requiredHits = stage >= 5 ? 7 : 6; 
      return Math.round(playerDmg * requiredHits) + (stage * 3);
    }

    function setupArenaVisuals() {
      document.getElementById('battleTableText').innerText = `${I18N[currentLang].table_label} ${formatNum(currentBattle.table)}`;
      document.getElementById('battleStageText').innerText = `${I18N[currentLang].stage_prefix} ${formatNum(currentBattle.stage)}`;
      document.getElementById('battleWaveNum').innerText = formatNum(currentBattle.wave);
      document.getElementById('battleTotalWaves').innerText = formatNum(currentBattle.totalWaves);

      document.getElementById('arenaKnightLabel').innerText = gameState.name;
      document.getElementById('arenaKnightImg').src = gameState.avatar;

      const currentWep = SHOP_DATA.weapons.find(w => w.id === gameState.equipped.weapon) || SHOP_DATA.weapons[0];
      const currentArm = SHOP_DATA.armors.find(a => a.id === gameState.equipped.armor) || SHOP_DATA.armors[0];
      document.getElementById('visualWeaponDisplay').innerText = currentWep.icon || "🗡️";
      document.getElementById('visualArmorDisplay').innerText = currentArm.icon || "🛡️";

      renderArenaBackdrop(gameState.equipped.arena);
      updateBattleHp();
    }

    function renderArenaBackdrop(arenaId) {
      const layer = document.getElementById('arenaBackdropLayer');
      if (arenaId === 'stone_castle') {
        layer.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 250">
            <rect width="500" height="250" fill="#1e293b"/>
            <rect x="25" y="45" width="80" height="155" fill="#334155"/>
            <rect x="395" y="45" width="80" height="155" fill="#334155"/>
            <polygon points="25,45 65,10 105,45" fill="#475569"/>
            <polygon points="395,45 435,10 475,45" fill="#475569"/>
            <rect x="90" y="105" width="320" height="95" fill="#2d3748"/>
            <rect x="210" y="145" width="80" height="55" rx="35" fill="#0f172a"/>
          </svg>`;
      } else if (arenaId === 'volcano') {
        layer.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 250">
            <rect width="500" height="250" fill="#450a0a"/>
            <polygon points="0,250 140,75 280,250" fill="#7f1d1d"/>
            <polygon points="220,250 360,95 500,250" fill="#991b1b"/>
            <circle cx="140" cy="75" r="18" fill="#f97316"/>
            <path class="lava-flow" d="M140,93 Q165,160 175,250" stroke="#f59e0b" stroke-width="10" fill="none"/>
            <path class="lava-flow" d="M360,113 Q340,175 330,250" stroke="#ea580c" stroke-width="8" fill="none"/>
            <rect x="0" y="215" width="500" height="35" fill="#dc2626" opacity="0.6"/>
          </svg>`;
      } else if (arenaId === 'crystal_cave') {
        layer.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 250">
            <rect width="500" height="250" fill="#022c22"/>
            <polygon points="40,250 65,120 90,250" fill="#059669" opacity="0.8"/>
            <polygon points="120,250 150,90 180,250" fill="#10b981" opacity="0.9"/>
            <polygon points="330,250 365,100 400,250" fill="#10b981" opacity="0.9"/>
            <polygon points="420,250 445,130 470,250" fill="#059669" opacity="0.8"/>
            <polygon points="70,0 95,90 120,0" fill="#047857"/>
            <polygon points="380,0 405,100 430,0" fill="#047857"/>
          </svg>`;
      } else if (arenaId === 'meteor_sky') {
        layer.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 250">
            <rect width="500" height="250" fill="#180d2b"/>
            <line x1="80" y1="20" x2="160" y2="90" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" class="stars-twinkle"/>
            <line x1="320" y1="10" x2="420" y2="100" stroke="#fbbf24" stroke-width="3.5" stroke-linecap="round" class="stars-twinkle"/>
            <circle cx="430" cy="50" r="28" fill="#fde047" opacity="0.85"/>
            <circle cx="420" cy="45" r="24" fill="#180d2b"/>
            <polygon points="0,250 160,190 320,250 500,185 500,250" fill="#311042"/>
          </svg>`;
      } else if (arenaId === 'cyber_void') {
        layer.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 250">
            <rect width="500" height="250" fill="#050814"/>
            <circle cx="70" cy="50" r="3" fill="#38bdf8" class="stars-twinkle"/>
            <circle cx="210" cy="35" r="2.5" fill="#818cf8" class="stars-twinkle"/>
            <circle cx="370" cy="70" r="3.5" fill="#c084fc" class="stars-twinkle"/>
            <circle cx="440" cy="40" r="2.5" fill="#38bdf8" class="stars-twinkle"/>
            <line x1="0" y1="195" x2="500" y2="195" stroke="#0ea5e9" stroke-width="2" opacity="0.5"/>
            <line x1="0" y1="225" x2="500" y2="225" stroke="#a855f7" stroke-width="2.5" opacity="0.7"/>
          </svg>`;
      } else {
        layer.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 250">
            <rect width="500" height="250" fill="#064e3b" opacity="0.35"/>
            <circle cx="55" cy="135" r="38" fill="#15803d"/>
            <rect x="50" y="160" width="10" height="50" fill="#78350f"/>
            <circle cx="445" cy="125" r="44" fill="#16a34a"/>
            <rect x="440" y="160" width="10" height="50" fill="#78350f"/>
            <path d="M0,190 Q150,155 300,175 T500,165 L500,250 L0,250 Z" fill="#14532d"/>
          </svg>`;
      }
    }

    function renderCurrentMonsterSvg() {
      const box = document.getElementById('arenaMonsterSvg');
      const isBoss = currentBattle.wave === currentBattle.totalWaves;
      const monsterName = isBoss 
        ? (currentLang === 'ar' ? `زعيم المستوى ${formatNum(currentBattle.stage)} 👑` : `Level ${formatNum(currentBattle.stage)} Boss 👑`)
        : (currentLang === 'ar' ? `وحش الجولة ${formatNum(currentBattle.wave)}` : `Wave Monster ${formatNum(currentBattle.wave)}`);

      document.getElementById('arenaMonsterLabel').innerText = monsterName;
      const skinColor = isBoss ? "#e11d48" : (currentBattle.wave % 2 === 0 ? "#8b5cf6" : "#10b981");

      box.innerHTML = `
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <ellipse cx="50" cy="55" rx="${isBoss ? 42 : 34}" ry="${isBoss ? 38 : 30}" fill="${skinColor}"/>
          <circle cx="38" cy="48" r="5" fill="#000"/><circle cx="39" cy="47" r="1.5" fill="#fff"/>
          <circle cx="62" cy="48" r="5" fill="#000"/><circle cx="63" cy="47" r="1.5" fill="#fff"/>
          <polygon points="36,64 64,64 50,75" fill="#0f172a"/>
          ${isBoss ? '<polygon points="50,12 38,32 62,32" fill="#fbbf24"/><circle cx="50" cy="12" r="3" fill="#ef4444"/>' : ''}
        </svg>
      `;
    }

    function updateBattleHp() {
      const kPct = Math.max(0, Math.round((currentBattle.playerHp / currentBattle.playerMaxHp) * 100));
      const mPct = Math.max(0, Math.round((currentBattle.monsterHp / currentBattle.monsterMaxHp) * 100));

      document.getElementById('knightHpFill').style.width = kPct + '%';
      document.getElementById('knightHpText').innerText = `${formatNum(currentBattle.playerHp)} / ${formatNum(currentBattle.playerMaxHp)}`;

      document.getElementById('monsterHpFill').style.width = mPct + '%';
      document.getElementById('monsterHpText').innerText = `${formatNum(currentBattle.monsterHp)} / ${formatNum(currentBattle.monsterMaxHp)}`;
    }

    function nextWaveTurn() {
      renderCurrentMonsterSvg();
      updateBattleHp();

      document.getElementById('battleWaveNum').innerText = formatNum(currentBattle.wave);

      if (isCustomTableBattle && customBattleTables.length >= 2) {
        currentBattle.table = customBattleTables[Math.floor(Math.random() * customBattleTables.length)];
        document.getElementById('battleTableText').innerText = `نظام مخصص · جدول ${formatNum(currentBattle.table)}`;
      }
const t = currentBattle.table;
      // اختيار رقم لا يطابق السؤال السابق لمنع التكرار وراء بعض
      let factor;
      do {
        factor = Math.floor(Math.random() * 10) + 1;
      } while (factor === currentBattle.lastFactor);
      currentBattle.lastFactor = factor;

      const correct = t * factor;
      currentBattle.correctAnswer = correct;

      if (currentLang === 'ar') {
        document.getElementById('mathEquationBox').innerText = `${formatNum(t)} × ${formatNum(factor)} = ؟`;
      } else {
        document.getElementById('mathEquationBox').innerText = `${t} × ${factor} = ?`;
      }

      const gridBox = document.getElementById('answersGridBox');
      const typingBox = document.getElementById('typingAnswerBox');

      if (gameState.inputMode === 'type') {
        gridBox.classList.add('hidden');
        typingBox.classList.remove('hidden');
        clearCustomKeypad();
      } else {
        typingBox.classList.add('hidden');
        gridBox.classList.remove('hidden');

        // توليد خيارات آمنة وذكية بدون تعليق
        const opts = new Set([correct]);
        let attempts = 0;
        while (opts.size < 4 && attempts < 40) {
          attempts++;
          const offset = (Math.floor(Math.random() * 6) + 1) * (Math.random() > 0.5 ? 1 : -1);
          const val = correct + offset;
          if (val > 0 && val !== correct) opts.add(val);
        }

        // خيارات احتياطية في حال لم تكتمل
        let fallback = 1;
        while (opts.size < 4) {
          if (fallback !== correct) opts.add(fallback);
          fallback++;
        }

        const answersArr = Array.from(opts).sort(() => Math.random() - 0.5);
        gridBox.innerHTML = '';

        answersArr.forEach(opt => {
          const btn = document.createElement('button');
          btn.className = "py-3 md:py-4 rounded-2xl bg-slate-800 hover:bg-blue-600 text-white font-black text-xl md:text-2xl border border-slate-700 hover:border-blue-400 transition active:scale-95 shadow-md font-mono";
          btn.innerText = formatNum(opt);
          btn.onclick = () => handleAnswer(opt);
          gridBox.appendChild(btn);
        });
      }
      
      resetTurnTimer();
    }

    function resetTurnTimer() {
      clearInterval(battleTurnTimer);
      const maxSec = getEquippedTimerSeconds();
      battleTurnTimeLeft = maxSec;
      const bar = document.getElementById('battleTimerBar');
      bar.style.width = '100%';

      battleTurnTimer = setInterval(() => {
        if (isBattlePaused) return;
        battleTurnTimeLeft -= 0.1;
        const pct = Math.max(0, (battleTurnTimeLeft / maxSec) * 100);
        bar.style.width = pct + '%';

        if (battleTurnTimeLeft <= 0) {
          clearInterval(battleTurnTimer);
          timeOutMonsterAttack();
        }
      }, 100);
    }

    function timeOutMonsterAttack() {
      if (!currentBattle || isBattlePaused) return;
      showToast(currentLang === 'ar' ? "انتهى الوقت! ضربك الوحش!" : "Time's up! Monster hit you!", "⏳");
      handleAnswer(-9999);
    }

    function handleAnswer(ans) {
      if (isBattlePaused) return;
      clearInterval(battleTurnTimer);
      const isCorrect = ans === currentBattle.correctAnswer;
      const monsterEl = document.getElementById('monsterFighterBox');
      const knightEl = document.getElementById('knightFighterBox');
      const weaponEl = document.getElementById('visualWeaponDisplay');

      if (isCorrect) {
        const dmg = currentBattle.playerDmg;
        currentBattle.monsterHp = Math.max(0, currentBattle.monsterHp - dmg);
        showFloatingText(`-${formatNum(dmg)}`, monsterEl, 'text-emerald-400');
        
        knightEl.classList.add('knight-attacking');
        weaponEl.classList.add('weapon-slash-fx');
        setTimeout(() => {
          knightEl.classList.remove('knight-attacking');
          weaponEl.classList.remove('weapon-slash-fx');
        }, 400);

        monsterEl.classList.add('shake-target');
        setTimeout(() => monsterEl.classList.remove('shake-target'), 350);
        playAudio('hit');
      } else {
        const rawDmg = currentBattle.monsterDmg;
        const finalDmg = Math.max(2, Math.round(rawDmg * (1 - currentBattle.playerDef)));
        currentBattle.playerHp = Math.max(0, currentBattle.playerHp - finalDmg);
        showFloatingText(`-${formatNum(finalDmg)}`, knightEl, 'text-rose-500');
        knightEl.classList.add('shake-target');
        setTimeout(() => knightEl.classList.remove('shake-target'), 350);
        playAudio('hurt');
      }

      updateBattleHp();

      if (currentBattle.playerHp <= 0) {
        clearInterval(battleTurnTimer);
        playAudio('hurt');
        showToast(currentLang === 'ar' ? "نفدت طاقتك في المعركة!" : "You were defeated!", "💔");
        exitBattleMode();
        return;
      }

      if (currentBattle.monsterHp <= 0) {
        clearInterval(battleTurnTimer);
        if (currentBattle.wave < currentBattle.totalWaves) {
          currentBattle.wave++;
          const nextHp = calculateMonsterHp(currentBattle.table, currentBattle.stage, currentBattle.wave, currentBattle.playerDmg);
          currentBattle.monsterMaxHp = nextHp;
          currentBattle.monsterHp = nextHp;
          showToast(currentLang === 'ar' ? `هزمت الوحش! التالي: جولة ${formatNum(currentBattle.wave)}` : `Monster defeated! Next wave: ${formatNum(currentBattle.wave)}`, "⚔️");
          setTimeout(nextWaveTurn, 600);
        } else {
          winStageComplete();
        }
      } else {
        setTimeout(nextWaveTurn, 500);
      }
    }

    function showFloatingText(text, parent, colorCls) {
      const sp = document.createElement('span');
      sp.className = `absolute top-0 font-black text-2xl z-30 damage-indicator ${colorCls} font-mono`;
      sp.innerText = text;
      parent.appendChild(sp);
      setTimeout(() => sp.remove(), 800);
    }

    function winStageComplete() {
      clearInterval(battleTurnTimer);
      gameState.totalBattles = (gameState.totalBattles || 0) + 1;

      const currentLvl = gameState.tableProgress[currentBattle.table] || 1;
      let isTableFullyClearedNow = false;

      if (!isCustomTableBattle && currentBattle.stage >= currentLvl) {
        if (currentLvl === 30) {
          gameState.tableProgress[currentBattle.table] = 31;
          isTableFullyClearedNow = true;
        } else {
          gameState.tableProgress[currentBattle.table] = currentLvl + 1;
        }
      }

      let goldEarned = Math.max(1, Math.floor((8 + (currentBattle.table * 1) + (currentBattle.stage * 2)) * 0.5));
      let xpEarned = 35 + (currentBattle.stage * 20);
      let gemsEarned = currentBattle.stage >= 5 ? 1 : 0;
      if (isCustomTableBattle) {
        // Reward scales with the number and difficulty of the chosen tables.
        const countFactor = Math.min(1.8, 0.65 + (customBattleTables.length * 0.095));
        const difficultyFactor = 0.8 + ((customBattleTables.reduce((sum, t) => sum + t, 0) / Math.max(1, customBattleTables.length)) / 12) * 0.7;
        goldEarned = Math.max(2, Math.round((8 + currentBattle.table) * countFactor * difficultyFactor));
        xpEarned = Math.max(10, Math.round((35 + currentBattle.table * 3) * countFactor * difficultyFactor));
        gemsEarned = 0;
      }

      if (isTableFullyClearedNow) {
        goldEarned += 25;
        gemsEarned += 2;
        xpEarned += 200;
      }

      const knt = SHOP_DATA.knights.find(k => k.id === gameState.equipped.knight);
      if (knt?.goldBonus) goldEarned = Math.round(goldEarned * knt.goldBonus);
      if (knt?.xpBonus) xpEarned = Math.round(xpEarned * knt.xpBonus);

      gameState.gold += goldEarned;
      gameState.xp += xpEarned;
      gameState.gems += gemsEarned;

      while (gameState.xp >= gameState.level * 100) {
        gameState.xp -= gameState.level * 100;
        gameState.level++;
        gameState.gold += 5;
        gameState.gems += 1;
      }

      checkBadges();
      saveGame();
      updateHeaderUI();
      renderTableCards();
      renderBadges();
      renderLeaderboard();
      playAudio('coin');

      let victoryMsg = currentLang === 'ar'
        ? `🎉 انتصار كامل! أنهيت المستوى ${formatNum(currentBattle.stage)}!\n+${formatNum(goldEarned)} ذهب | +${formatNum(xpEarned)} XP` + (gemsEarned > 0 ? ` | +${formatNum(gemsEarned)} 💎` : '')
        : `🎉 Level ${formatNum(currentBattle.stage)} cleared!\n+${formatNum(goldEarned)} Gold | +${formatNum(xpEarned)} XP` + (gemsEarned > 0 ? ` | +${formatNum(gemsEarned)} 💎` : '');

      if (isTableFullyClearedNow) {
        victoryMsg += currentLang === 'ar'
          ? `\n👑 مبروك! ختمت جدول ${formatNum(currentBattle.table)} بالكامل (+٢٥٠ ذهب و +١٠ جواهر)!`
          : `\n👑 Grand Clear! Table ${formatNum(currentBattle.table)} complete (+250 Gold & +10 Gems)!`;
      }

      showToast(victoryMsg, "🏆");
      isCustomTableBattle = false;
      customBattleTables = [];
      exitBattleMode();
    }

    function pauseBattle() {
      isBattlePaused = true;
      document.getElementById('battlePauseModal').classList.remove('hidden');
    }

    function resumeBattle() {
      isBattlePaused = false;
      document.getElementById('battlePauseModal').classList.add('hidden');
    }

    function confirmFleeFromPause() {
      document.getElementById('battlePauseModal').classList.add('hidden');
      fleeBattle();
    }

    function fleeBattle() {
      clearInterval(battleTurnTimer);
      showToast(currentLang === 'ar' ? "تم الانسحاب من المعركة" : "Retreated from battle", "🏳️");
      exitBattleMode();
    }

    function exitBattleMode() {
      isBattlePaused = false;
      isCustomTableBattle = false;
      customBattleTables = [];
      document.getElementById('mainAppHeader').classList.remove('hidden');
      showScreen('homeView');
    }

    /* =========================================================================
       8. برج الجواهر التفاعلي
       ========================================================================= */
    function initLiveTower() {
      setInterval(() => {
        if (!isTowerReady) {
          if (towerRemainingSec > 0) {
            towerRemainingSec--;
          } else {
            isTowerReady = true;
            document.getElementById('towerNoticePing').classList.remove('hidden');
          }
        }
        updateTowerUI();
      }, 1000);
    }

    function openTowerModal() {
      document.getElementById('towerModal').classList.remove('hidden');
      updateTowerUI();
    }

    function closeTowerModal() {
      document.getElementById('towerModal').classList.add('hidden');
    }

    function updateTowerUI() {
      const idx = Math.min((gameState.towerStage || 1) - 1, TOWER_SCHEDULE.length - 1);
      const schedule = TOWER_SCHEDULE[idx];

      const rewardDesc = `🪙 ${formatNum(schedule.gold)} ${currentLang === 'ar' ? 'ذهب' : 'Gold'} + 💎 ${formatNum(schedule.gems)} ${currentLang === 'ar' ? 'جواهر' : 'Gems'}`;
      document.getElementById('towerNextRewardText').innerText = rewardDesc;

      const m = Math.floor(towerRemainingSec / 60).toString().padStart(2, '0');
      const s = (towerRemainingSec % 60).toString().padStart(2, '0');
      document.getElementById('towerTimerBox').innerText = isTowerReady 
        ? (currentLang === 'ar' ? "جاهز الآن!" : "Ready Now!") 
        : `${formatNum(m)}:${formatNum(s)}`;

      const claimBtn = document.getElementById('towerClaimBtn');
      if (claimBtn) claimBtn.disabled = !isTowerReady;
    }

    function claimTowerReward() {
      if (!isTowerReady) return;
      const idx = Math.min((gameState.towerStage || 1) - 1, TOWER_SCHEDULE.length - 1);
      const schedule = TOWER_SCHEDULE[idx];

      gameState.gold += schedule.gold;
      gameState.gems += schedule.gems;

      gameState.towerStage = (gameState.towerStage || 1) + 1;
      const nextIdx = Math.min(gameState.towerStage - 1, TOWER_SCHEDULE.length - 1);
      towerRemainingSec = TOWER_SCHEDULE[nextIdx].min * 60;
      isTowerReady = false;
      document.getElementById('towerNoticePing').classList.add('hidden');

      saveGame();
      updateHeaderUI();
      playAudio('gem');

      showToast(currentLang === 'ar' ? `استلمت مكافأة البرج (+${formatNum(schedule.gold)} ذهب و +${formatNum(schedule.gems)} جواهر)!` : `Tower reward claimed!`, "📡");
      closeTowerModal();
    }

    /* =========================================================================
       9. عرض المتجر، قسم الشحن، وأكواد الهدايا الترويجية
       ========================================================================= */
    let currentShopTab = 'weapons';

    function switchShopCategory(cat, btn) {
      currentShopTab = cat;
      document.querySelectorAll('.shop-tab').forEach(b => {
        b.className = "shop-tab px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap bg-slate-800 light:bg-slate-100 text-slate-400 light:text-slate-700";
      });

      if (cat === 'recharge') {
        btn.className = "shop-tab active px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md";
      } else {
        btn.className = "shop-tab active px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap bg-blue-600 text-white";
      }
      renderShopItems();
    }

    function renderShopItems() {
      const container = document.getElementById('shopGridBox');
      if (!container) return;
      container.innerHTML = '';

      if (currentShopTab === 'recharge') {
        renderRechargeSection(container);
        return;
      }

      const items = SHOP_DATA[currentShopTab] || [];
      items.forEach(item => {
        const isOwned = gameState.inventory.includes(item.id);
        const isEquipped = Object.values(gameState.equipped).includes(item.id);

        const card = document.createElement('div');
        card.className = `p-3.5 rounded-2xl border transition flex flex-col justify-between ${
          isEquipped ? 'bg-blue-950/40 light:bg-blue-50 border-emerald-500 shadow-md' : 'bg-slate-950/60 light:bg-slate-50 border-slate-800 light:border-slate-200'
        }`;

        const itemName = currentLang === 'ar' ? item.name_ar : item.name_en;
        const itemDesc = currentLang === 'ar' ? item.desc_ar : item.desc_en;

        let priceHtml = '';
        if (isOwned) {
          priceHtml = `<span class="text-xs font-bold text-emerald-400 font-mono">${I18N[currentLang].owned}</span>`;
        } else {
          const g = item.priceGold > 0 ? `<span class="font-mono">🪙 ${formatNum(item.priceGold)}</span>` : '';
          const gem = item.priceGem > 0 ? `<span class="font-mono">💎 ${formatNum(item.priceGem)}</span>` : '';
          priceHtml = `<div class="flex items-center gap-1.5 text-xs font-bold text-amber-400">${g} ${gem}</div>`;
        }

        let btnHtml = '';
        if (!isOwned) {
          btnHtml = `<button onclick="buyShopItem('${item.id}', '${currentShopTab}')" class="px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition shadow">${I18N[currentLang].buy}</button>`;
        } else if (isEquipped) {
          btnHtml = `<button disabled class="px-3 py-1 rounded-xl bg-emerald-950 light:bg-emerald-100 text-emerald-400 light:text-emerald-700 border border-emerald-700 font-bold text-xs">${I18N[currentLang].equipped}</button>`;
        } else {
          btnHtml = `<button onclick="equipShopItem('${item.id}', '${currentShopTab}')" class="px-3 py-1 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-200 light:text-slate-800 border border-slate-600 light:border-slate-300 font-bold text-xs transition">${I18N[currentLang].equip}</button>`;
        }

        let statBadge = '';
        if (item.dmg) statBadge += `+${formatNum(item.dmg)} Dmg `;
        if (item.extraDef) statBadge += `🛡️ +${Math.round(item.extraDef * 100)}% `;
        if (item.def) statBadge += `${Math.round(item.def * 100)}% Def`;
        if (item.sec) statBadge += `⏱️ ${formatNum(item.sec)}s`;

        card.innerHTML = `
          <div>
            <div class="flex items-center gap-2.5 mb-1.5">
              <span class="text-2xl p-2 rounded-xl bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 shadow-sm">${item.icon}</span>
              <div>
                <h4 class="font-bold text-xs text-slate-100 light:text-slate-900">${itemName}</h4>
                <span class="text-[10px] text-blue-400 font-mono font-bold">${statBadge}</span>
              </div>
            </div>
            <p class="text-[10px] text-slate-400 light:text-slate-600 leading-snug my-2">${itemDesc}</p>
          </div>
          <div class="flex items-center justify-between border-t border-slate-800/80 light:border-slate-200 pt-2 mt-1">
            ${priceHtml}
            ${btnHtml}
          </div>
        `;
        container.appendChild(card);
      });
    }

    function renderRechargeSection(container) {
      checkDailyAdsReset();
      const dailyRewardedCount = gameState.dailyAdsData.rewardedCount || 0;
      const isDailyLimitReached = dailyRewardedCount >= 3;
      const isCooldownActive = rewardedAdCooldownRemaining > 0;

      const adCard = document.createElement('div');
      adCard.className = "p-5 rounded-3xl bg-gradient-to-r from-blue-900/60 to-indigo-950/80 border-2 border-blue-500/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl col-span-1 sm:col-span-2 lg:col-span-3";
      
      const m = Math.floor(rewardedAdCooldownRemaining / 60);
      const s = rewardedAdCooldownRemaining % 60;
      const cooldownFormatted = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

      let btnDisabled = false;
      let btnLabel = I18N[currentLang].watch_ad_btn;

      if (isDailyLimitReached) {
        btnDisabled = true;
        btnLabel = currentLang === 'ar' ? "تم استنفاد الحد اليومي (3/3)" : "Daily Limit Reached (3/3)";
      } else if (isCooldownActive) {
        btnDisabled = true;
        btnLabel = currentLang === 'ar' ? `انتظار اللعب (${formatNum(cooldownFormatted)}) ⏳` : `Wait Play (${cooldownFormatted}) ⏳`;
      }

      adCard.innerHTML = `
        <div class="flex items-center gap-3.5 text-right w-full sm:w-auto">
          <span class="text-4xl p-2 rounded-2xl bg-blue-950/80 border border-blue-500/40">📺</span>
          <div>
            <div class="flex items-center gap-2">
              <h4 class="text-sm font-black text-white">${I18N[currentLang].reward_ad_title}</h4>
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-950 text-cyan-300 border border-blue-700/60 font-mono">
                ${formatNum(dailyRewardedCount)} / ${formatNum(3)} ${currentLang === 'ar' ? 'يومياً' : 'Daily'}
              </span>
            </div>
            <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">${I18N[currentLang].reward_ad_desc}</p>
          </div>
        </div>
        <button id="rewardedAdActionBtn" onclick="triggerRealVideoAd()" ${btnDisabled ? 'disabled' : ''} class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs shadow-lg transition active:scale-95 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed">
          ${btnLabel}
        </button>
      `;
      container.appendChild(adCard);

      /* قسم أكواد الهدايا الترويجية (Promo Codes) */
      const promoCard = document.createElement('div');
      promoCard.className = "p-5 rounded-3xl bg-gradient-to-r from-amber-950/40 to-slate-900 border-2 border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl col-span-1 sm:col-span-2 lg:col-span-3";
      promoCard.innerHTML = `
        <div class="flex items-center gap-3.5 text-right w-full sm:w-auto">
          <span class="text-4xl p-2 rounded-2xl bg-amber-950/60 border border-amber-500/40">🎁</span>
          <div>
            <h4 class="text-sm font-black text-amber-300">${I18N[currentLang].promo_title}</h4>
            <p class="text-xs text-slate-300 mt-0.5">${I18N[currentLang].promo_desc}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <input type="text" id="promoCodeInputField" placeholder="${I18N[currentLang].promo_placeholder}" class="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 uppercase tracking-wider text-center focus:outline-none focus:border-amber-500 w-full sm:w-44 font-mono">
          <button onclick="redeemPromoCodeAction()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow active:scale-95 whitespace-nowrap">
            ${I18N[currentLang].promo_btn}
          </button>
        </div>
      `;
      container.appendChild(promoCard);

      const packs = [
        { id: "p1", name_ar: "صندوق الفارس", name_en: "Knight Box", desc_ar: "٥٠٠ ذهب + ٥ جواهر", desc_en: "500 Gold + 5 Gems", price: "20 EGP", gold: 500, gems: 5, icon: "🪙" },
        { id: "p2", name_ar: "حقيبة الجواهر", name_en: "Gems Pouch", desc_ar: "١٥٠٠ ذهب + ٢٠ جوهرة", desc_en: "1500 Gold + 20 Gems", price: "50 EGP", gold: 1500, gems: 20, icon: "💎" },
        { id: "p3", name_ar: "كنز المطور", name_en: "Developer Chest", desc_ar: "٥٠٠٠ ذهب + ٦٠ جوهرة", desc_en: "5000 Gold + 60 Gems", price: "120 EGP", gold: 5000, gems: 60, icon: "👑" },
      ];

      packs.forEach(p => {
        const c = document.createElement('div');
        c.className = "p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-500/40 flex flex-col justify-between shadow-lg";
        c.innerHTML = `
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-3xl">${p.icon}</span>
              <div>
                <h4 class="text-xs font-black text-white">${currentLang === 'ar' ? p.name_ar : p.name_en}</h4>
                <span class="text-[10px] text-purple-300 font-mono">${currentLang === 'ar' ? p.desc_ar : p.desc_en}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between border-t border-slate-800 pt-3 mt-3">
            <span class="text-xs font-black text-emerald-400 font-mono">${p.price}</span>
            <button onclick="handleRealPaymentClick()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs shadow active:scale-95">شحن 💳</button>
          </div>
        `;
        container.appendChild(c);
      });
    }

    function updateRewardedAdButtonUI() {
      const btn = document.getElementById('rewardedAdActionBtn');
      if (!btn) return;

      checkDailyAdsReset();
      const dailyCount = gameState.dailyAdsData.rewardedCount || 0;
      if (dailyCount >= 3) {
        btn.disabled = true;
        btn.innerText = currentLang === 'ar' ? "تم استنفاد الحد اليومي (3/3)" : "Daily Limit Reached (3/3)";
      } else if (rewardedAdCooldownRemaining > 0) {
        btn.disabled = true;
        const m = Math.floor(rewardedAdCooldownRemaining / 60);
        const s = rewardedAdCooldownRemaining % 60;
        const formatted = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        btn.innerText = currentLang === 'ar' ? `انتظار اللعب (${formatNum(formatted)}) ⏳` : `Wait Play (${formatted}) ⏳`;
      } else {
        btn.disabled = false;
        btn.innerText = I18N[currentLang].watch_ad_btn;
      }
    }

    function triggerRealVideoAd() {
      checkDailyAdsReset();
      const dailyCount = gameState.dailyAdsData.rewardedCount || 0;
      if (dailyCount >= 3) {
        showToast(currentLang === 'ar' ? "لقد شاهدت الحد الأقصى اليومي لإعلانات المكافآت (3 إعلانات)! عد غداً." : "Daily limit reached for rewarded ads (3 max)! Come back tomorrow.", "⛔");
        return;
      }

      if (rewardedAdCooldownRemaining > 0) {
        const m = Math.ceil(rewardedAdCooldownRemaining / 60);
        showToast(currentLang === 'ar' ? `يرجى مواصلة اللعب الفعلي لمدة ${formatNum(m)} دقيقة لفتح الإعلان القادم!` : `Keep actively playing for ${m} more minutes to unlock next ad!`, "⏳");
        return;
      }

      window.open(AD_DIRECT_LINK, '_blank');
      showToast(currentLang === 'ar' ? "جارٍ فتح الفيديو وتقديم المكافأة... 🎬" : "Opening video ad and claiming reward... 🎬", "📺");
      
      setTimeout(() => {
        gameState.dailyAdsData.rewardedCount = (gameState.dailyAdsData.rewardedCount || 0) + 1;
        rewardedAdCooldownRemaining = 600; // إعادة تعيين الكول داون إلى 10 دقائق لعب فعلي

        gameState.gold += 50;
        gameState.gems += 1;
        saveGame();
        updateHeaderUI();
        renderShopItems();
        playAudio('gem');

        showToast(currentLang === 'ar' ? "شكراً لدعمك اللعبة! استلمت 50 ذهباً و 1 جوهرة مجاناً! 🎉" : "Thanks for supporting! You got +50 Gold & +1 Gem! 🎉", "🎁");
        window.focus();
      }, 1500);
    }

    /* نظام تفعيل كود الهدية */
    async function redeemPromoCodeAction() {
      const input = document.getElementById('promoCodeInputField');
      if (!input) return;
      const code = input.value.trim().toUpperCase();
      if (!code) { showToast(currentLang === 'ar' ? "يرجى كتابة كود الهدية أولاً!" : "Please enter a promo code!", "⚠️"); return; }
      if (!gameState.usedCodes) gameState.usedCodes = [];
      if (gameState.usedCodes.includes(code)) { showToast(currentLang === 'ar' ? "عذراً! تم استخدام هذا الكود مسبقاً في حسابك." : "Sorry! This code was already redeemed on your account.", "⛔"); return; }
      let reward = PROMO_CODES[code];
      // Admin-configured codes live in Firestore promoCodes/{CODE}. Configure maxUsers and maxGoldPerUser there.
      // For registered users, the transaction enforces global usage limits and per-user redemption limits.
      if (db && auth && auth.currentUser && !gameState.isGuest) {
        try {
          const ref=db.collection('promoCodes').doc(code);
          const cloudReward=await db.runTransaction(async tx=>{
            const snap=await tx.get(ref);
            if(!snap.exists) return null;
            const d=snap.data(), uid=auth.currentUser.uid, users=Array.isArray(d.redeemedBy)?d.redeemedBy:[];
            if(d.active===false) throw new Error('الكود غير مفعّل.');
            if(users.includes(uid)) throw new Error('استخدمت هذا الكود من قبل.');
            if(Number.isFinite(Number(d.maxUsers)) && Number(d.maxUsers)>0 && Number(d.usedCount||users.length)>=Number(d.maxUsers)) throw new Error('وصل الكود إلى الحد الأقصى من المستخدمين.');
            const gold=Math.max(0,Math.floor(Number(d.gold||0))), gems=Math.max(0,Math.floor(Number(d.gems||0)));
            if(Number.isFinite(Number(d.maxGoldPerUser)) && gold>Number(d.maxGoldPerUser)) throw new Error('مكافأة الذهب تتجاوز الحد المسموح لهذا الكود.');
            tx.update(ref,{redeemedBy:firebase.firestore.FieldValue.arrayUnion(uid),usedCount:firebase.firestore.FieldValue.increment(1),lastRedeemedAt:firebase.firestore.FieldValue.serverTimestamp()});
            return {gold,gems};
          });
          if(cloudReward) reward=cloudReward;
        } catch(e) { showToast(e.message||'تعذر تفعيل الكود من الخادم.', '⚠️'); return; }
      }
      if (!reward) { showToast(currentLang === 'ar' ? "كود الهدية غير صحيح أو منتهي الصلاحية!" : "Invalid or expired promo code!", "❌"); return; }
      gameState.usedCodes.push(code); gameState.gold += Math.max(0,Number(reward.gold||0)); gameState.gems += Math.max(0,Number(reward.gems||0));
      saveGame(); updateHeaderUI(); playAudio('gem'); input.value = "";
      showToast(currentLang === 'ar' ? `🎉 تم تفعيل الكود بنجاح!\nاستلمت: +${formatNum(reward.gold||0)} ذهب و +${formatNum(reward.gems||0)} جواهر!` : `🎉 Code redeemed!\nYou got: +${reward.gold||0} Gold & +${reward.gems||0} Gems!`, "🎁");
    }

    function handleRealPaymentClick() {
      showToast(I18N[currentLang].pack_coming_soon, "💳");
    }

    function buyShopItem(id, cat) {
      const item = (SHOP_DATA[cat] || []).find(i => i.id === id);
      if (!item) return;

      if (gameState.gold < item.priceGold || gameState.gems < item.priceGem) {
        showToast(currentLang === 'ar' ? "الموارد غير كافية للشراء!" : "Not enough resources!", "⚠️");
        return;
      }

      gameState.gold -= item.priceGold;
      gameState.gems -= item.priceGem;
      gameState.inventory.push(item.id);
      saveGame();
      updateHeaderUI();
      renderShopItems();
      playAudio('coin');
      showToast(currentLang === 'ar' ? "تم الشراء بنجاح!" : "Purchased successfully!", "🛍️");
    }

    function equipShopItem(id, cat) {
      const map = { weapons: 'weapon', armors: 'armor', knights: 'knight', frames: 'frame', arenas: 'arena', timers: 'timer' };
      const k = map[cat];
      if (k) {
        gameState.equipped[k] = id;
        saveGame();
        updateHeaderUI();
        renderShopItems();
        playAudio('coin');
        showToast(currentLang === 'ar' ? "تم التجهيز بنجاح!" : "Equipped successfully!", "🛡️");
      }
    }

    /* =========================================================================
       10. الإطارات الخرافية والشارات
       ========================================================================= */
    function getFrameCssClass(frameId) {
      if (frameId === 'silver_frame') return "frame-silver";
      if (frameId === 'gold_frame') return "frame-gold";
      if (frameId === 'red_frame') return "frame-red";
      if (frameId === 'purple_frame') return "frame-purple";
      return "border-2 border-slate-700";
    }

    function checkBadges() {
      BADGES_LIST.forEach(b => {
        if (!gameState.badges.includes(b.id) && b.req(gameState)) {
          gameState.badges.push(b.id);
          gameState.gems += b.gem;
          playAudio('gem');
          showToast(currentLang === 'ar' ? `شارة جديدة: ${b.name_ar} (+${formatNum(b.gem)} 💎)` : `New badge: ${b.name_en} (+${formatNum(b.gem)} 💎)`, "🎖️");
        }
      });
    }

    function renderBadges() {
      const box = document.getElementById('badgesGridBox');
      if (!box) return;
      box.innerHTML = '';

      BADGES_LIST.forEach(b => {
        const done = gameState.badges.includes(b.id);
        const card = document.createElement('div');
        card.className = `p-3 rounded-2xl border transition flex items-center justify-between ${
          done ? 'bg-amber-950/20 light:bg-amber-50 border-amber-500/60' : 'bg-slate-950/50 light:bg-slate-50 border-slate-800 light:border-slate-200 opacity-70'
        }`;

        card.innerHTML = `
          <div>
            <h4 class="font-bold text-xs text-slate-100 light:text-slate-900">${currentLang === 'ar' ? b.name_ar : b.name_en}</h4>
            <p class="text-[10px] text-slate-400 mt-0.5">${currentLang === 'ar' ? b.desc_ar : b.desc_en}</p>
            <span class="text-[10px] font-bold ${done ? 'text-emerald-400' : 'text-slate-500'}">${done ? I18N[currentLang].completed : I18N[currentLang].locked}</span>
          </div>
          <span class="text-xs font-black text-cyan-400 font-mono">+${formatNum(b.gem)} 💎</span>
        `;
        box.appendChild(card);
      });
    }

    function updateHeaderUI() {
      document.getElementById('headerKnightName').innerText = gameState.name;
      document.getElementById('headerLevel').innerText = formatNum(gameState.level);
      document.getElementById('headerGold').innerText = formatNum(gameState.gold);
      document.getElementById('headerGems').innerText = formatNum(gameState.gems);
      document.getElementById('headerAvatarImg').src = gameState.avatar;

      const needed = gameState.level * 100;
      const pct = Math.min(100, Math.round((gameState.xp / needed) * 100));
      document.getElementById('headerXpFill').style.width = pct + '%';
      document.getElementById('headerXpText').innerText = `${formatNum(gameState.xp)}/${formatNum(needed)}`;

      const avBox = document.getElementById('headerAvatarBox');
      avBox.className = `w-10 h-10 md:w-12 md:h-12 rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center p-0.5 relative shrink-0 transition-all ${getFrameCssClass(gameState.equipped.frame)}`;

      const profileFrameBox = document.getElementById('profileAvatarFrameWrap');
      if (profileFrameBox) {
        profileFrameBox.className = `w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center p-0.5 transition-all ${getFrameCssClass(gameState.equipped.frame)}`;
      }

      document.getElementById('profilePreviewImg').src = gameState.avatar;
      document.getElementById('profileNameBox').value = gameState.name;
      document.getElementById('profileAccountType').innerText = gameState.isGuest ? I18N[currentLang].guest_text : gameState.authType;

      const completedTables = Object.values(gameState.tableProgress).filter(lvl => lvl > 30).length;
      document.getElementById('profileCompletedTablesCount').innerText = `${formatNum(completedTables)} / ${formatNum(12)}`;

let totalCompletedStages = 0;
      Object.values(gameState.tableProgress).forEach(lvl => {
        totalCompletedStages += (lvl > 30 ? 30 : (lvl - 1));
      });

      document.getElementById('profileCompletedStagesCount').innerText = formatNum(totalCompletedStages);

      const wep = SHOP_DATA.weapons.find(w => w.id === gameState.equipped.weapon);
      const arm = SHOP_DATA.armors.find(a => a.id === gameState.equipped.armor);
      document.getElementById('profileWeaponLabel').innerText = wep ? (currentLang === 'ar' ? wep.name_ar : wep.name_en) : "";
      document.getElementById('profileArmorLabel').innerText = arm ? (currentLang === 'ar' ? arm.name_ar : arm.name_en) : "";
    }

    function handleCustomAvatarUpload(e) {
      const f = e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = ev => {
        gameState.avatar = ev.target.result;
        saveGame();
        updateHeaderUI();
        showToast(currentLang === 'ar' ? "تم تحديث الصورة الشخصية!" : "Avatar updated!", "📷");
      };
      r.readAsDataURL(f);
    }

    function resetAvatarToDefault() {
      gameState.avatar = DEFAULT_AVATAR;
      saveGame();
      updateHeaderUI();
      showToast(currentLang === 'ar' ? "استعادة الصورة الأصلية" : "Restored default avatar", "🔄");
    }

    function saveCustomName() {
      const val = document.getElementById('profileNameBox').value.trim();
      if (!val) return;
      gameState.name = val;
      saveGame();
      updateHeaderUI();
      renderLeaderboard();
      // حفظ الاسم في Firebase Auth حتى يبقى مع الحساب عند فتح اللعبة من جهاز آخر.
      if (auth && auth.currentUser && !gameState.isGuest && typeof auth.currentUser.updateProfile === 'function') {
        auth.currentUser.updateProfile({ displayName: val }).then(() => {
          if (db) return db.collection('players').doc(auth.currentUser.uid).set({ name: val, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
        }).catch(err => console.warn('تعذر مزامنة اسم الحساب إلى Firebase:', err));
      }
      showToast(currentLang === 'ar' ? "تم حفظ الاسم على هذا الجهاز، وجرت محاولة مزامنته مع الحساب." : "Name saved locally; cloud sync attempted.", "✨");
    }

    function showScreen(screenId) {
      if (typeof RoomsSystem !== 'undefined' && RoomsSystem.isActive() && screenId !== 'roomsView') { showToast(currentLang==='en'?'Leave the room before opening another screen.':'يجب مغادرة الغرفة كي تستطيع الخروج إلى شاشة أخرى.', '🔒'); return; }
      document.querySelectorAll('.view-screen').forEach(s => s.classList.add('hidden'));
      if (screenId === 'roomsView' && typeof RoomsSystem !== 'undefined') RoomsSystem.open();
      const sc = document.getElementById(screenId);
      if (sc) {
        sc.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function openSettingsModal() {
      document.getElementById('settingsModal').classList.remove('hidden');
    }

    function closeSettingsModal() {
      document.getElementById('settingsModal').classList.add('hidden');
    }

    function showToast(msg, icon = "⚡") {
      const t = document.getElementById('toastNotification');
      document.getElementById('toastMessage').innerText = msg;
      document.getElementById('toastIcon').innerText = icon;
      t.classList.remove('-translate-y-28', 'opacity-0', 'pointer-events-none');
      t.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        t.classList.add('-translate-y-28', 'opacity-0', 'pointer-events-none');
        t.classList.remove('translate-y-0', 'opacity-100');
      }, 3400);
    }

    /* =========================================================================
       20. Dedicated Friends System
       - يعتمد على Firebase Auth + Firestore عند توفر حساب مسجل.
       - المعرفات محجوزة بمستندات playerTags لمنع تكرارها.
       - بيانات الضيف محلية فقط ولا يتم عرضها كأنها حساب سحابي.
       ========================================================================= */
    const FriendsSystem = (() => {
      let unsubProfile = null, unsubIncoming = null, unsubFriends = null, unsubGifts = null;
      let incomingCache = [], friendsCache = [], giftNotificationCache = [];
      const localTagKey = 'mk_player_tag_v1';
      const uid = () => (auth && auth.currentUser && !gameState.isGuest) ? auth.currentUser.uid : null;
      const me = () => uid();
      const tagForLocal = () => {
        let tag = localStorage.getItem(localTagKey);
        if (!tag) {
          tag = '#MK-' + String(Math.floor(10000 + Math.random() * 90000));
          localStorage.setItem(localTagKey, tag);
        }
        return tag;
      };
      const profileData = () => ({
        uid: me(), tag: localStorage.getItem(localTagKey) || tagForLocal(),
        name: gameState.name || 'فارس الحساب', avatar: gameState.avatar || DEFAULT_AVATAR,
        level: Number(gameState.level || 1), xp: Number(gameState.xp || 0),
        online: true, lastSeen: firebase.firestore.FieldValue.serverTimestamp(), updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      async function ensureTag() {
        const tagNode = document.getElementById('myPlayerTag');
        if (!db || !me()) {
          const tag = tagForLocal();
          if (tagNode) tagNode.textContent = tag;
          return tag;
        }
        const profileRef = db.collection('players').doc(me());
        const existing = await profileRef.get();
        if (existing.exists && existing.data().tag) {
          localStorage.setItem(localTagKey, existing.data().tag);
          if (tagNode) tagNode.textContent = existing.data().tag;
          await profileRef.set(profileData(), { merge: true });
          return existing.data().tag;
        }
        // Reserve a unique tag transactionally. A collision retries with a new candidate.
        for (let attempt = 0; attempt < 12; attempt++) {
          const candidate = '#MK-' + String(Math.floor(10000 + Math.random() * 90000));
          const tagRef = db.collection('playerTags').doc(candidate.replace('#',''));
          const reserved = await db.runTransaction(async tx => {
            const snap = await tx.get(tagRef);
            if (snap.exists && snap.data().uid !== me()) return false;
            tx.set(tagRef, { uid: me(), tag: candidate, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
            tx.set(profileRef, { ...profileData(), tag: candidate }, { merge: true });
            return true;
          });
          if (reserved) {
            localStorage.setItem(localTagKey, candidate);
            if (tagNode) tagNode.textContent = candidate;
            return candidate;
          }
        }
        throw new Error('تعذر حجز معرّف فريد؛ حاول مرة أخرى.');
      }
      function requireRegistered() {
        if (!db || !me()) {
          showToast('تحتاج إلى تسجيل الدخول بحساب مسجل لاستخدام الأصدقاء السحابيين.', '🔐');
          return false;
        }
        return true;
      }
      function stopListeners() {
        [unsubProfile, unsubIncoming, unsubFriends, unsubGifts].forEach(fn => { if (typeof fn === 'function') fn(); });
        unsubProfile = unsubIncoming = unsubFriends = unsubGifts = null;
      }
      async function open() {
        try { await ensureTag(); } catch (e) { showToast(e.message || 'تعذر تجهيز المعرّف.', '⚠️'); }
        if (!requireRegistered()) {
          renderIncoming([]); renderFriends([]);
          document.getElementById('roomCloudNotice')?.replaceChildren();
          return;
        }
        stopListeners();
        giftNotificationCache = [];
        renderGiftNotifications([]);
        const id = me();
        // Requests are separate documents so accept/reject operations remain atomic.
        unsubIncoming = db.collection('friendRequests').where('toUid','==',id).where('status','==','pending')
          .onSnapshot(s => renderIncoming(s.docs.map(d => ({ id:d.id, ...d.data() }))), err => showToast('تعذر تحميل طلبات الصداقة.', '⚠️'));
        unsubFriends = db.collection('players').doc(id).collection('friends')
          .onSnapshot(async s => {
            const list = [];
            for (const d of s.docs) {
              const friendId = d.id;
              try { const p = await db.collection('players').doc(friendId).get(); if (p.exists) list.push({ uid:friendId, ...p.data() }); }
              catch (_) {}
            }
            renderFriends(list);
          }, () => renderFriends([]));
        // One simple query powers both delivery and the inbox (avoids a composite-index dependency).
        unsubGifts = db.collection('giftRequests').where('toUid','==',id)
          .onSnapshot(s => {
            const all = s.docs.map(d => ({ id:d.id, ...d.data() }));
            renderGiftNotifications(all.filter(g => g.status === 'delivered' && ['gold','gems','gem'].includes(g.kind)));
            all.forEach(g => { if (g.status === 'pending' && ['gold','gems','gem'].includes(g.kind)) deliverGiftRequest(g.id, g); });
          }, () => showToast('تعذر تحميل إشعارات التحويلات.', '⚠️'));
      }
      async function sendRequest() {
        if (!requireRegistered()) return;
        const tag = document.getElementById('friendSearchTag').value.trim().toUpperCase();
        if (!/^#MK-\d{5}$/.test(tag)) { showToast('صيغة المعرّف غير صحيحة. مثال: #MK-78421', '⚠️'); return; }
        try {
          const tagSnap = await db.collection('playerTags').doc(tag.slice(1)).get();
          if (!tagSnap.exists) { showToast('لم يتم العثور على هذا المعرّف.', '🔎'); return; }
          const targetUid = tagSnap.data().uid;
          if (!targetUid || targetUid === me()) { showToast('لا يمكنك إرسال طلب إلى نفسك.', '⚠️'); return; }
          const existingFriend = await db.collection('players').doc(me()).collection('friends').doc(targetUid).get();
          if (existingFriend.exists) { showToast('هذا اللاعب موجود بالفعل في قائمة أصدقائك.', 'ℹ️'); return; }
          const requestId = me() + '_' + targetUid;
          const reverseId = targetUid + '_' + me();
          const reverse = await db.collection('friendRequests').doc(reverseId).get();
          if (reverse.exists && reverse.data().status === 'pending') { showToast('لديك طلب وارد من هذا اللاعب؛ اقبله من القائمة.', 'ℹ️'); return; }
          await db.collection('friendRequests').doc(requestId).set({
            fromUid: me(), toUid: targetUid, fromTag: localStorage.getItem(localTagKey),
            fromName: gameState.name, fromAvatar: gameState.avatar || DEFAULT_AVATAR,
            fromLevel: gameState.level || 1, status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
          document.getElementById('friendSearchTag').value = '';
          showToast('تم إرسال طلب الصداقة.', '✅');
        } catch (e) { showToast('فشل إرسال الطلب. تحقق من صلاحيات Firestore.', '⚠️'); }
      }
      async function respond(requestId, accept) {
        if (!requireRegistered()) return;
        try {
          const ref = db.collection('friendRequests').doc(requestId);
          await db.runTransaction(async tx => {
            const snap = await tx.get(ref);
            if (!snap.exists || snap.data().toUid !== me() || snap.data().status !== 'pending') throw new Error('الطلب لم يعد متاحاً.');
            const req = snap.data();
            tx.update(ref, { status: accept ? 'accepted' : 'rejected', respondedAt: firebase.firestore.FieldValue.serverTimestamp() });
            if (accept) {
              tx.set(db.collection('players').doc(me()).collection('friends').doc(req.fromUid), { since: firebase.firestore.FieldValue.serverTimestamp() });
              tx.set(db.collection('players').doc(req.fromUid).collection('friends').doc(me()), { since: firebase.firestore.FieldValue.serverTimestamp() });
            }
          });
          showToast(accept ? 'تم قبول طلب الصداقة.' : 'تم رفض طلب الصداقة.', accept ? '✅' : '🗑️');
        } catch (e) { showToast(e.message || 'تعذر تحديث الطلب.', '⚠️'); }
      }
      function safe(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
      function renderIncoming(items) {
        incomingCache = items;
        const box = document.getElementById('incomingFriendRequests'); if (!box) return;
        document.getElementById('incomingFriendCount').textContent = items.length;
        box.innerHTML = items.length ? items.map(r => `<div class="rounded-xl border border-slate-800 bg-slate-900 p-3 flex items-center gap-2"><img src="${safe(r.fromAvatar || DEFAULT_AVATAR)}" class="w-10 h-10 rounded-xl object-cover"><div class="flex-1 min-w-0"><div class="font-bold text-slate-100 truncate">${safe(r.fromName || 'لاعب')}</div><div class="font-mono text-cyan-300">${safe(r.fromTag || '')} · المستوى ${safe(r.fromLevel || 1)}</div></div><button onclick="FriendsSystem.respond('${safe(r.id)}',true)" class="bg-emerald-700 rounded-lg px-2 py-1">قبول</button><button onclick="FriendsSystem.respond('${safe(r.id)}',false)" class="bg-rose-900 rounded-lg px-2 py-1">رفض</button></div>`).join('') : '<div class="text-slate-500 py-3">لا توجد طلبات واردة.</div>';
      }
      function renderFriends(items) {
        friendsCache = items;
        const box = document.getElementById('friendsList'); if (!box) return;
        box.innerHTML = items.length ? items.map(f => `<div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-3 flex gap-3 items-center"><img src="${safe(f.avatar || DEFAULT_AVATAR)}" class="w-12 h-12 rounded-xl object-cover"><div class="flex-1 min-w-0"><div class="font-black text-slate-100 truncate">${safe(f.name || 'فارس')}</div><div class="text-cyan-300 font-mono">${safe(f.tag || '')}</div><div class="text-slate-400">المستوى ${safe(f.level || 1)} · <span class="${f.online && f.lastSeen && (Date.now() - (f.lastSeen.toMillis ? f.lastSeen.toMillis() : Date.now())) < 90000 ? 'text-emerald-400' : 'text-slate-500'}">${f.online && f.lastSeen && (Date.now() - (f.lastSeen.toMillis ? f.lastSeen.toMillis() : Date.now())) < 90000 ? 'متصل' : 'غير متصل'}</span></div></div><div class="flex flex-col gap-1"><button onclick="FriendsSystem.openGiftMenu('${safe(f.uid)}','${safe(f.name || 'صديق')}')" class="rounded-lg bg-amber-600 text-white px-2 py-1">🎁 إرسال هدية</button><button onclick="FriendsSystem.removeFriend('${safe(f.uid)}')" class="rounded-lg bg-rose-900 text-white px-2 py-1">حذف الصديق</button></div></div>`).join('') : '<div class="text-slate-500 py-3">لم تضف أصدقاء بعد.</div>';
      }
      let giftTargetUid = null;
      function openGiftMenu(targetUid, targetName) {
        giftTargetUid = targetUid;
        const modal = document.getElementById('friendGiftModal');
        const recipient = document.getElementById('friendGiftRecipient');
        if (recipient) recipient.textContent = 'إرسال ذهب أو جواهر إلى: ' + (targetName || 'صديق');
        if (modal) modal.classList.remove('hidden');
      }
      function closeGiftMenu() { document.getElementById('friendGiftModal')?.classList.add('hidden'); giftTargetUid = null; }
      async function deliverGiftRequest(requestId, requestData) {
        if (!requireRegistered() || !requestData || requestData.toUid !== me() || requestData.status !== 'pending') return;
        const ref=db.collection('giftRequests').doc(requestId);
        try {
          const gift=await db.runTransaction(async tx=>{
            const snap=await tx.get(ref);
            if(!snap.exists || snap.data().status!=='pending' || snap.data().toUid!==me()) return null;
            tx.update(ref,{status:'delivered',deliveredAt:firebase.firestore.FieldValue.serverTimestamp()});
            return snap.data();
          });
          if(!gift) return;
          const localKey='mk_received_gifts_v1';
          let received=[]; try { received=JSON.parse(localStorage.getItem(localKey)||'[]'); } catch(_) {}
          if(received.includes(requestId)) return;
          if(gift.kind==='gold' || gift.kind==='gems' || gift.kind==='gem') {
            const field=gift.kind==='gold'?'gold':'gems';
            gameState[field]=Number(gameState[field]||0)+Math.max(0,Math.floor(Number(gift.amount||0)));
          }
          received.push(requestId); localStorage.setItem(localKey,JSON.stringify(received.slice(-500)));
          saveGame(); updateHeaderUI(); renderShopItems();
          showToast('وصلتك هدية من صديق! 🎁', '🎁');
        } catch (_) { /* Firestore rules may require a trusted server function for delivery. */ }
      }
      function renderGiftNotifications(items) {
        giftNotificationCache = (items || []).filter(g => ['gold','gems','gem'].includes(g.kind))
          .sort((a,b) => {
            const at = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
            const bt = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
            return bt - at;
          });
        let seenIds = [];
        try { seenIds = JSON.parse(localStorage.getItem('mk_seen_gift_notifications_v1') || '[]'); } catch (_) { seenIds = []; }
        const seen = new Set(Array.isArray(seenIds) ? seenIds : []);
        const unread = giftNotificationCache.filter(g => !seen.has(g.id)).length;
        const count = document.getElementById('friendNotificationCount');
        if (count) { count.textContent = unread > 99 ? '99+' : String(unread); count.classList.toggle('hidden', unread === 0); }
        const box = document.getElementById('giftNotificationsList');
        if (!box) return;
        if (!giftNotificationCache.length) {
          box.innerHTML = `<p class="py-3 text-sm text-slate-500">${currentLang==='en'?'No money transfers yet.':'لا توجد تحويلات واردة حتى الآن.'}</p>`;
          return;
        }
        box.innerHTML = giftNotificationCache.slice(0,30).map(g => {
          const isGold = g.kind === 'gold';
          const amount = Math.max(0, Math.floor(Number(g.amount || 0)));
          const sender = String(g.fromName || 'صديق').replace(/[&<>"]/g, '');
          const label = isGold ? (currentLang==='en'?'Gold':'ذهب') : (currentLang==='en'?'Gems':'جواهر');
          const time = g.createdAt && g.createdAt.toDate ? g.createdAt.toDate().toLocaleString(currentLang==='en'?'en-US':'ar-EG') : '';
          return `<div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 ${!seen.has(g.id)?'ring-1 ring-blue-400':''}"><span class="text-2xl">${isGold?'🪙':'💎'}</span><div class="min-w-0 flex-1"><div class="font-bold text-slate-800">${currentLang==='en'?'From':'من'} ${sender}</div><div class="text-sm text-slate-600">${currentLang==='en'?'You received':'وصلك'} ${amount} ${label}</div><div class="text-[10px] text-slate-400">${time}</div></div>${!seen.has(g.id)?'<span class="rounded-full bg-blue-600 px-2 py-1 text-[10px] font-bold text-white">جديد</span>':''}</div>`;
        }).join('');
      }
      async function markNotificationsRead() {
        const ids = giftNotificationCache.map(g => g.id).filter(Boolean);
        if (!ids.length) return;
        let seen = [];
        try { seen = JSON.parse(localStorage.getItem('mk_seen_gift_notifications_v1') || '[]'); } catch (_) { seen = []; }
        const merged = [...new Set([...(Array.isArray(seen) ? seen : []), ...ids])].slice(-500);
        localStorage.setItem('mk_seen_gift_notifications_v1', JSON.stringify(merged));
        renderGiftNotifications(giftNotificationCache);
      }
      async function toggleNotifications() {
        const panel = document.getElementById('giftNotificationsPanel');
        if (!panel) return;
        const willOpen = panel.classList.contains('hidden');
        panel.classList.toggle('hidden', !willOpen);
        if (willOpen) await markNotificationsRead();
      }
      async function sendCurrencyGift(kind) {
        if (!giftTargetUid || !requireRegistered()) return;
        const input = document.getElementById(kind === 'gold' ? 'friendGiftGoldAmount' : 'friendGiftGemAmount');
        const amount = Math.floor(Number(input?.value || 1));
        const field = kind === 'gold' ? 'gold' : 'gems';
        const max = kind === 'gold' ? 1000 : 100;
        if (!Number.isInteger(amount) || amount < 1 || amount > max) { showToast('كمية الهدية غير صحيحة.', '⚠️'); return; }
        if (Number(gameState[field] || 0) < amount) { showToast(`رصيد ${kind === 'gold' ? 'الذهب' : 'الجواهر'} غير كافٍ.`, '⚠️'); return; }
        try {
          await db.collection('giftRequests').add({ fromUid:me(), toUid:giftTargetUid, fromName:gameState.name || 'صديق', fromAvatar:gameState.avatar || DEFAULT_AVATAR, kind, amount, status:'pending', createdAt:firebase.firestore.FieldValue.serverTimestamp() });
          gameState[field] = Number(gameState[field] || 0) - amount;
          saveGame();
          updateHeaderUI();
          showToast('تم إرسال طلب الهدية وخصم المبلغ من رصيدك المحلي.', '🎁');
        } catch (_) { showToast('تعذر إرسال الطلب؛ لم يتم خصم الرصيد. تحقق من إعدادات Firestore.', '⚠️'); }
      }
      async function removeFriend(targetUid) {
        if (!requireRegistered() || !targetUid) return;
        if (!confirm('هل تريد حذف هذا الصديق من قائمتك؟')) return;
        try {
          await db.runTransaction(async tx => {
            tx.delete(db.collection('players').doc(me()).collection('friends').doc(targetUid));
            tx.delete(db.collection('players').doc(targetUid).collection('friends').doc(me()));
          });
          showToast('تم حذف الصديق.', '🗑️');
        } catch (_) { showToast('تعذر حذف الصديق. تحقق من صلاحيات Firestore.', '⚠️'); }
      }
      async function copyTag() {
        const tag = document.getElementById('myPlayerTag')?.textContent || tagForLocal();
        try { await navigator.clipboard.writeText(tag); showToast('تم نسخ المعرّف.', '📋'); }
        catch (_) { showToast('معرّفك: ' + tag, '📋'); }
      }
      return { open, sendRequest, respond, copyTag, openGiftMenu, closeGiftMenu, sendCurrencyGift, toggleNotifications, removeFriend };
    })();

    /* =========================================================================
       21. Custom Rooms & Tactical Lobby
       - مقاعد ثابتة لكل نمط: 1v1=2، 2v2=4، 3v3=6.
       - onSnapshot يحدّث الردهة لحظياً؛ المعاملات تمنع حجز المقعد مرتين.
       - إغلاق التبويب يحاول تحرير المقعد؛ انقطاع الشبكة يُعالج أيضاً عبر expiresAt
         عند إعادة فتح الغرفة/تنظيفها، لأن beforeunload وحده ليس ضماناً موثوقاً.
       ========================================================================= */
    const RoomsSystem = (() => {
      let roomId = localStorage.getItem('mk_active_room_id') || null, unsubscribe = null, currentRoom = null, roomTimer = null, lastRoundId = null;
      const myUid = () => (auth && auth.currentUser && !gameState.isGuest) ? auth.currentUser.uid : null;
      const localPlayerId = () => myUid() || ('guest_' + (localStorage.getItem('mk_guest_room_id') || (localStorage.setItem('mk_guest_room_id', Math.random().toString(36).slice(2)), localStorage.getItem('mk_guest_room_id'))));
      const registered = () => {
        if (!db || !myUid()) { showToast('الغرف السحابية تحتاج إلى تسجيل الدخول بحساب مسجل.', '🔐'); return false; }
        return true;
      };
      const modeSeats = { '1v1':2, '2v2':4, '3v3':6 };
      const makeCode = () => Array.from(crypto.getRandomValues(new Uint8Array(6)), n => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[n % 32]).join('');
      const playerInfo = () => ({ uid:localPlayerId(), name:gameState.name || 'فارس', avatar:gameState.avatar || DEFAULT_AVATAR, level:Number(gameState.level || 1), ready:false, joinedAt:Date.now(), lastSeen:Date.now() });
      function open() {
        document.getElementById('roomCloudNotice').textContent = registered() ? 'متصل بالسحابة. سيتم تحديث المقاعد لحظياً.' : 'سجّل الدخول بحساب مسجل لاستخدام الغرف متعددة اللاعبين.';
        if (roomId) attachRoom(roomId);
        if (db && myUid()) db.collection('players').doc(myUid()).set({ online:true, lastSeen:firebase.firestore.FieldValue.serverTimestamp() }, {merge:true}).catch(()=>{});
      }
      async function create() {
        if (!registered()) return;
        const mode = document.getElementById('roomModeSelect').value, count = modeSeats[mode];
        try {
          const ref = db.collection('customRooms').doc();
          const code = makeCode();
          const slots = Array.from({length:count}, (_,i) => ({ team:i < count/2 ? 'blue' : 'red', player:i === 0 ? playerInfo() : null }));
          slots[0].player.uid = myUid(); slots[0].player.ready = false;
          await ref.set({ code, mode, teamNames:{blue:(document.getElementById('roomBlueName')?.value||'الفريق الأزرق').trim().slice(0,18),red:(document.getElementById('roomRedName')?.value||'الفريق الأحمر').trim().slice(0,18)}, timerSeconds:Number(document.getElementById('roomTimerSelect').value||15), weaponDamage:Math.min(45,Math.max(5,Number(document.getElementById('roomWeaponSelect').value||15))), allWeaponsDamage:Math.min(45,Math.max(5,Number(document.getElementById('roomWeaponSelect').value||15))), wrongAnswerDamage: Number(document.getElementById('roomWrongPenaltySelect')?.value || 5), battleBackground:(document.getElementById('roomBackgroundSelect')?.value||'arena'), selectedTables:(Array.from(document.querySelectorAll('.room-table-choice:checked')).map(x=>Number(x.value)).length ? Array.from(document.querySelectorAll('.room-table-choice:checked')).map(x=>Number(x.value)) : [1]), levelCap:30, hostUid:myUid(), status:'waiting', round:0, slots, createdAt:firebase.firestore.FieldValue.serverTimestamp(), updatedAt:firebase.firestore.FieldValue.serverTimestamp() });
          await db.collection('roomCodes').doc(code).set({ roomId:ref.id, createdAt:firebase.firestore.FieldValue.serverTimestamp() });
          roomId = ref.id; localStorage.setItem('mk_active_room_id', roomId); attachRoom(roomId); document.getElementById('roomCreatePanel')?.classList.add('hidden'); document.getElementById('roomJoinPanel')?.classList.add('hidden'); document.getElementById('roomEntryActions')?.classList.add('hidden'); showToast('تم إنشاء الغرفة. شارك الكود مع اللاعبين.', '⚔️');
        } catch (_) { showToast('تعذر إنشاء الغرفة. تحقق من صلاحيات Firestore.', '⚠️'); }
      }
      async function joinByCode() {
        if (!registered()) return;
        const code = document.getElementById('roomJoinCode').value.trim().toUpperCase();
        if (!/^[A-Z0-9]{6}$/.test(code)) { showToast('كود الغرفة يجب أن يتكون من 6 أحرف/أرقام.', '⚠️'); return; }
        try {
          const codeSnap = await db.collection('roomCodes').doc(code).get();
          if (!codeSnap.exists) { showToast('لم يتم العثور على الغرفة.', '🔎'); return; }
          roomId = codeSnap.data().roomId;
          await takeFirstAvailable(roomId);
          localStorage.setItem('mk_active_room_id', roomId); document.getElementById('roomCreatePanel')?.classList.add('hidden'); document.getElementById('roomJoinPanel')?.classList.add('hidden'); document.getElementById('roomEntryActions')?.classList.add('hidden');
          attachRoom(roomId);
        } catch (e) { showToast(e.message || 'تعذر الانضمام للغرفة.', '⚠️'); }
      }
      async function takeFirstAvailable(id) {
        await db.runTransaction(async tx => {
          const ref = db.collection('customRooms').doc(id), snap = await tx.get(ref);
          if (!snap.exists) throw new Error('الغرفة غير موجودة.');
          const data = snap.data();
          if (data.status !== 'waiting') throw new Error('المعركة بدأت بالفعل.');
          const slots = data.slots || [];
          const existing = slots.find(s => s.player && s.player.uid === myUid());
          if (existing) return;
          const blueCount = slots.filter(s => s.team === 'blue' && s.player).length;
          const redCount = slots.filter(s => s.team === 'red' && s.player).length;
          const preferredTeam = blueCount <= redCount ? 'blue' : 'red';
          let idx = slots.findIndex(s => s.team === preferredTeam && !s.player);
          if (idx < 0) idx = slots.findIndex(s => !s.player);
          if (idx < 0) throw new Error('الغرفة ممتلئة.');
          slots[idx].player = playerInfo(); slots[idx].player.uid = myUid();
          tx.update(ref, { slots, updatedAt:firebase.firestore.FieldValue.serverTimestamp() });
        });
      }
      function attachRoom(id) {
        if (unsubscribe) unsubscribe();
        unsubscribe = db.collection('customRooms').doc(id).onSnapshot(snap => {
          if (!snap.exists) { showToast('الغرفة لم تعد موجودة.', '⚠️'); clearRoom(); return; }
          currentRoom = { id:snap.id, ...snap.data() }; renderRoom();
        }, () => showToast('انقطع تحديث الغرفة السحابي.', '⚠️'));
      }
      function renderRoom() {
if (!currentRoom) return;
        document.getElementById('activeRoomLobby').classList.remove('hidden');
        document.getElementById('roomEntryActions')?.classList.add('hidden');
        document.getElementById('roomCreatePanel')?.classList.add('hidden');
        document.getElementById('roomJoinPanel')?.classList.add('hidden');
        document.getElementById('activeRoomCode').textContent = currentRoom.code;
        const slots = currentRoom.slots || [];
        const renderTeam = (team, target) => {
          const teamSlots = slots.map((s,i)=>({...s,index:i})).filter(s=>s.team===team);
          document.getElementById(target).innerHTML = teamSlots.map(s => {
            const p=s.player;
            return p ? `<div data-player-uid="${String(p.uid||'').replace(/[^a-zA-Z0-9_-]/g,'')}" class="room-player-card flex items-center gap-3 rounded-xl border ${team==='blue'?'border-blue-500/40':'border-rose-500/40'} bg-slate-900 p-2"><img src="${String(p.avatar || DEFAULT_AVATAR).replace(/"/g,'&quot;')}" class="w-10 h-10 rounded-xl object-cover"><div class="flex-1 min-w-0"><div class="font-black text-slate-100 truncate">${String(p.name || (currentLang==='en'?'Player':'فارس')).replace(/[&<>"]/g,'')}</div><div class="text-[10px] text-slate-400">المستوى ${Number(p.level||1)} · ${p.ready?'مستعد ✓':'ينتظر...'}</div></div>${p.uid===myUid()?'<span class="text-cyan-300 text-[10px]">أنت</span><button onclick="RoomsSystem.leaveSlot('+s.index+')" class="text-[10px] bg-slate-800 rounded-lg px-2 py-1">ترك المقعد</button>':''}${currentRoom.hostUid===myUid()&&p.uid!==myUid()?'<div class="flex gap-1"><button onclick="RoomsSystem.hostMovePlayer('+s.index+',\''+(team==='blue'?'red':'blue')+'\')" class="text-[10px] bg-indigo-700 rounded px-2 py-1 text-white">نقل فريق</button><button onclick="RoomsSystem.hostKickPlayer('+s.index+')" class="text-[10px] bg-rose-700 rounded px-2 py-1 text-white">طرد</button></div>':''}</div>` : `<button onclick="RoomsSystem.takeSlot(${s.index})" class="rounded-xl border-2 border-dashed ${team==='blue'?'border-blue-500/40 text-blue-300':'border-rose-500/40 text-rose-300'} p-3 text-sm font-bold hover:bg-slate-800">＋ انضم هنا — مقعد ${s.index+1}</button>`;
          }).join('');
        };
        renderTeam('blue','blueRoomSlots'); renderTeam('red','redRoomSlots');
        const tn=currentRoom.teamNames||{};
        const redHeading=document.querySelector('#roomLobbyTeams .border-rose-500\/40 h3');
        const blueHeading=document.querySelector('#roomLobbyTeams .border-blue-500\/40 h3');
        if(redHeading) redHeading.textContent='🔴 '+String(tn.red||'الفريق الأحمر').replace(/[&<>]/g,'');
        if(blueHeading) blueHeading.textContent='🔵 '+String(tn.blue||'الفريق الأزرق').replace(/[&<>]/g,'');
        const mine = slots.find(s=>s.player && s.player.uid===myUid());
        document.getElementById('roomReadyBtn').disabled = !mine || currentRoom.status !== 'waiting';
        document.getElementById('roomReadyBtn').classList.toggle('opacity-40', !mine);
        document.getElementById('roomReadyBtn').textContent = mine?.player.ready ? 'إلغاء الاستعداد ↩' : 'أنا مستعد ✓';
        const isHost = currentRoom.hostUid === myUid();
        const nameEditor = document.getElementById('roomTeamNamesEditor');
        nameEditor?.classList.toggle('hidden', !isHost || currentRoom.status !== 'waiting');
        const blueNameInput = document.getElementById('activeRoomBlueName');
        const redNameInput = document.getElementById('activeRoomRedName');
        if (blueNameInput && document.activeElement !== blueNameInput) blueNameInput.value = tn.blue || 'الفريق الأزرق';
        if (redNameInput && document.activeElement !== redNameInput) redNameInput.value = tn.red || 'الفريق الأحمر';
        document.getElementById('roomCloseBtn').classList.toggle('hidden', !isHost);
        document.getElementById('roomStartBtn').classList.toggle('hidden', !mine || !isHost || currentRoom.status !== 'waiting');
        const occupiedSlots = slots.filter(s=>s.player);
        const blueHasPlayer = occupiedSlots.some(s=>s.team==='blue');
        const redHasPlayer = occupiedSlots.some(s=>s.team==='red');
        const allReady = occupiedSlots.length >= 2 && blueHasPlayer && redHasPlayer && occupiedSlots.every(s=>s.player.ready);
        const canStart = isHost && !!mine && allReady && currentRoom.status === 'waiting';
        document.getElementById('roomStartBtn').disabled = !canStart;
        document.getElementById('roomStartBtn').classList.toggle('opacity-40', !canStart);
        document.getElementById('roomStatusLine').textContent = currentLang==='en' ? (currentRoom.status==='started'?'Battle started — round settings are synchronized.':currentRoom.status==='closed'?'The host closed this room.':`${currentRoom.mode} · ${occupiedSlots.length} players · ${currentRoom.timerSeconds||15}s timer · ${allReady?'Everyone is ready':'Both teams need a player and all players must be ready'}`) : (currentRoom.status === 'started' ? 'المعركة بدأت — إعدادات الجولة متزامنة.' : currentRoom.status === 'closed' ? 'أغلق المالك هذه الغرفة.' : `النمط ${currentRoom.mode} · ${occupiedSlots.length} لاعبين · المؤقت ${currentRoom.timerSeconds||15} ثانية · ${allReady?'الجميع مستعد':'يجب وجود لاعب بكل فريق واستعداد كل اللاعبين'}`);
        const battle = document.getElementById('roomBattlePanel');
        battle.classList.toggle('hidden', currentRoom.status !== 'started' && currentRoom.status !== 'finished');
        document.getElementById('roomLobbyTeams')?.classList.toggle('hidden', currentRoom.status === 'started' || currentRoom.status === 'finished');
        document.getElementById('roomReadyBtn').classList.toggle('hidden', currentRoom.status !== 'waiting');
        document.getElementById('roomBattleTimer').textContent = currentRoom.status==='finished' ? 'انتهت' : Math.max(0,Math.ceil((Number(currentRoom.roundData?.expiresAt||Date.now())-Date.now())/1000))+(currentLang==='en'?' s':' ث');
        const rd=currentRoom.roundData;
        const hp=currentRoom.teamHp||{blue:100,red:100};
        const en = currentLang === 'en';
        const tnBattle = currentRoom.teamNames || {};
        document.getElementById('roomBattleMessage').textContent = currentRoom.status==='finished' ? (en ? `Battle finished — winner: ${currentRoom.winner==='blue'?(tnBattle.blue||'Blue Team'):(tnBattle.red||'Red Team')}` : `انتهت المعركة — الفائز: ${currentRoom.winner==='blue'?(tnBattle.blue||'الفريق الأزرق'):(tnBattle.red||'الفريق الأحمر')}`) : (en ? `${tnBattle.blue||'Blue Team'}: ${hp.blue||0} HP · ${tnBattle.red||'Red Team'}: ${hp.red||0} HP` : `الأزرق ${hp.blue||0} ❤️ مقابل الأحمر ${hp.red||0} ❤️`);
        const bName=document.getElementById('roomBattleBlueName'), rName=document.getElementById('roomBattleRedName');
        if(bName) bName.textContent=tnBattle.blue|| (en?'Blue Team':'الفريق الأزرق'); if(rName) rName.textContent=tnBattle.red||(en?'Red Team':'الفريق الأحمر');
        document.getElementById('roomBattleBlueHp').textContent=`${hp.blue??100} HP`; document.getElementById('roomBattleRedHp').textContent=`${hp.red??100} HP`;
        const battlePanel=document.getElementById('roomBattlePanel');
        const bgMap={arena:'linear-gradient(135deg,#0f172a,#1e3a8a)',forest:'linear-gradient(135deg,#052e16,#166534)',sunset:'linear-gradient(135deg,#7c2d12,#be123c)',ice:'linear-gradient(135deg,#164e63,#bae6fd)',lava:'linear-gradient(135deg,#450a0a,#c2410c)'};
        if(battlePanel) battlePanel.style.background=currentRoom.battleBackground && bgMap[currentRoom.battleBackground] ? bgMap[currentRoom.battleBackground] : '';
        document.getElementById('roomBattleQuestion').textContent = rd ? `${rd.a} × ${rd.table} = ${en?'?':'؟'}` : (en?'Waiting for next question…':'بانتظار السؤال التالي');
        const answersBox=document.getElementById('roomBattleAnswers');
        const mineSlot=(currentRoom.slots||[]).find(s=>s.player&&s.player.uid===myUid());
        const alreadyAnswered=!!(rd&&rd.answeredBy&&rd.answeredBy[myUid()]);
        answersBox.innerHTML = rd && currentRoom.status==='started' ? (rd.options||[]).map(n=>`<button onclick="RoomsSystem.submitAnswer(${Number(n)})" ${alreadyAnswered||rd.resolved?'disabled':''} class="rounded-xl bg-blue-600 text-white p-3 font-black disabled:opacity-40">${Number(n)}</button>`).join('') : '';
        document.getElementById('roomBattleFeedback').textContent = rd ? (alreadyAnswered ? (rd.answeredBy[myUid()].correct?(currentLang==='en'?'Correct answer!':'إجابتك صحيحة!'):(currentLang==='en'?'Incorrect answer.':'إجابتك غير صحيحة.')) : (currentLang==='en'?'Choose an answer quickly.':'اختر الإجابة بسرعة.')) : '';
        const notice=(currentRoom.events||[]).slice(-1)[0];
        if (notice && notice.id!==lastRoundId) { lastRoundId=notice.id; showRoomNotice(currentLang==='en' ? `${notice.name}: ${notice.correct?'Correct answer — attack!':'Wrong answer — their team takes damage.'}` : `${notice.name}: ${notice.correct?'إجابة صحيحة — هجوم!':'إجابة خاطئة — تلقى فريقه ضرراً.'}`,notice.correct); if(notice.correct){ const uid=String(notice.uid||'').replace(/[^a-zA-Z0-9_-]/g,''); const actor=document.querySelector(`[data-player-uid="${uid}"]`); if(actor){ actor.classList.remove('room-player-attack'); void actor.offsetWidth; actor.classList.add('room-player-attack'); setTimeout(()=>actor.classList.remove('room-player-attack'),450); } } }
        advanceRoundIfNeeded();
      }
      async function mutateSlots(mutator) {
        if (!registered() || !roomId) return;
        try {
          await db.runTransaction(async tx => {
            const ref=db.collection('customRooms').doc(roomId), snap=await tx.get(ref);
            if (!snap.exists) throw new Error('الغرفة غير موجودة.');
            const data=snap.data(); if (data.status!=='waiting') throw new Error('لا يمكن تعديل المقاعد بعد بدء المعركة.');
            const slots=data.slots || []; mutator(slots,data); tx.update(ref,{slots,updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
          });
        } catch(e) { showToast(e.message || 'تعذر تحديث المقعد.', '⚠️'); }
      }
function takeSlot(index) {
        if (!currentRoom || currentRoom.status !== 'waiting') return;
        const slots = currentRoom.slots || [];
        if (slots.some(s => s.player && s.player.uid === myUid())) {
          showToast('غادر مقعدك الحالي أولاً.', '⚠️');
          return;
        }
        if (!slots[index] || slots[index].player) {
          showToast('هذا المقعد لم يعد موجودا.', '⚠️');
          return;
        }
        
        // تحديث محلي فوري
        slots[index].player = playerInfo();
        slots[index].player.uid = myUid();
        renderRoom();

        // إرسال للسحابة
        mutateSlots((cloudSlots) => {
          if (cloudSlots.some(s => s.player && s.player.uid === myUid())) throw new Error('غادر مقعدك الحالي أولاً.');
          if (!cloudSlots[index] || cloudSlots[index].player) throw new Error('هذا المقعد لم يعد موجدا.');
          cloudSlots[index].player = playerInfo();
          cloudSlots[index].player.uid = myUid();
        });
      }

      function leaveSlot(index) {
        if (!currentRoom) return;
        const slots = currentRoom.slots || [];
        if (!slots[index]?.player || slots[index].player.uid !== myUid()) return;
        
        // تحديث محلي فوري
        slots[index].player = null;
        renderRoom();

        // إرسال للسحابة
        mutateSlots((cloudSlots) => {
          if (!cloudSlots[index]?.player || cloudSlots[index].player.uid !== myUid()) throw new Error('يمكنك تحرير مقعدك فقط.');
          cloudSlots[index].player = null;
        });
      }
      function toggleReady() {
              if (!currentRoom || !registered() || !roomId) return;
              const slots = currentRoom.slots || [];
              const mine = slots.find(s => s.player && s.player.uid === myUid());
              if (!mine) {
                showToast('اختر مقعداً أولاً.', '⚠️');
                return;
              }

              // تحديث لحظي على الشاشة فوراً دون انتظار السيرفر
              mine.player.ready = !mine.player.ready;
              mine.player.lastSeen = Date.now();
              document.getElementById('roomReadyBtn').textContent = mine.player.ready ? 'إلغاء الاستعداد ↩' : 'أنا مستعد ✓';
              renderRoom();

              // إرسال التحديث للسحابة بأمر خفيف ومباشر
              db.collection('customRooms').doc(roomId).update({
                slots: slots,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
              }).catch(err => {
                console.warn('تعذر تحديث الجاهزية:', err);
              });
            }
function makeRound(tables, roundNo, seconds=15) {
        const list = (tables || [1]).map(Number).filter(n => n >= 1 && n <= 12);
        const table = list[Math.floor(Math.random() * Math.max(1, list.length))] || 1;
        let a = Math.floor(1 + Math.random() * 12);
        // تجنب تكرار نفس الرقم في الجولة التالية
        if (currentRoom?.roundData?.a === a) {
          a = (a % 12) + 1;
        }
        const answer = a * table;
        const wrong = new Set([answer]);
        while (wrong.size < 4) wrong.add(Math.max(1, answer + Math.floor(Math.random()*17) - 8));
        return { id:String(roundNo)+'_'+Date.now(), table, a, answer, options:Array.from(wrong).sort(()=>Math.random()-.5), expiresAt:Date.now()+Math.max(5,Number(seconds)||15)*1000, answeredBy:{}, resolved:false };
      }
let roomNoticeTimer = null;
      function showRoomNotice(message, good) {
        const n = document.getElementById('roomGlobalNotice');
        if (!n) return;
        clearTimeout(roomNoticeTimer);
        n.textContent = message; 
        n.classList.remove('hidden');
        n.className = 'room-global-notice ' + (good ? 'good' : 'bad');
        roomNoticeTimer = setTimeout(() => {
          n.classList.add('hidden');
        }, 3000);
      }
async function submitAnswer(value) {
        if (!currentRoom || currentRoom.status !== 'started' || !registered()) return;
        const id = currentRoom.id, user = myUid();
        const answersBox = document.getElementById('roomBattleAnswers');
        
        // تعطيل الأزرار مؤقتاً لحين تسجيل الإجابة
        if (answersBox) {
          answersBox.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
            if (Number(btn.innerText) === Number(value)) {
              btn.classList.add('ring-4', 'ring-amber-400');
            }
          });
        }

        try {
          await db.runTransaction(async tx => {
            const ref = db.collection('customRooms').doc(id);
            const snap = await tx.get(ref);
            if (!snap.exists) throw new Error('الغرفة غير موجودة.');
            const d = snap.data(), round = d.roundData, slots = d.slots || [];
            if (d.status !== 'started' || !round || round.resolved) throw new Error('انتهى السؤال؛ انتظر السؤال التالي.');
            if (Date.now() > Number(round.expiresAt || 0)) throw new Error('انتهى وقت الإجابة.');
            const mine = slots.find(s => s.player && s.player.uid === user);
            if (!mine) throw new Error('أنت لست في مقعد داخل هذه الغرفة.');
            
            const teamPlayers = slots.filter(s => s.team === mine.team && s.player);
            const limit = teamPlayers.length >= 3 ? 2 : 1;
            const answered = round.answeredBy || {};
            const teamAnswers = Object.values(answered).filter(x => x.team === mine.team);
            
            if (answered[user]) throw new Error('لقد أجبت عن هذا السؤال بالفعل.');
            if (teamAnswers.length >= limit) throw new Error('اكتمل عدد إجابات فريقك لهذا السؤال.');

            const correct = Number(value) === Number(round.answer);
            answered[user] = { team: mine.team, correct, answer: Number(value), name: mine.player.name || 'لاعب', at: Date.now() };
            const hp = { ...(d.teamHp || { blue: 100, red: 100 }) };

            if (correct) {
              hp[mine.team === 'blue' ? 'red' : 'blue'] = Math.max(0, (hp[mine.team === 'blue' ? 'red' : 'blue'] || 100) - Number(d.weaponDamage || 15));
            } else {
              hp[mine.team] = Math.max(0, (hp[mine.team] || 100) - Math.max(1, Math.min(45, Number(d.wrongAnswerDamage ?? 5))));
            }

            const events = [...(d.events || []), { id: Date.now() + '_' + user, uid: user, name: mine.player.name || 'لاعب', team: mine.team, correct, at: Date.now() }].slice(-12);

            const teamAnswerCount = teamAnswers.length + 1; 
            const teamExhausted = teamAnswerCount >= limit;
            const hpDone = hp.blue <= 0 || hp.red <= 0;

            if (correct || teamExhausted || hpDone) {
              round.resolved = true;
              round.nextAt = Date.now() + 2500;
            }

            tx.update(ref, {
              roundData: { ...round, answeredBy: answered },
              teamHp: hp,
              events: events,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          });
        } catch(e) { 
          // إذا كان السؤال لم ينته بعد وحدث خطأ شبكة، أعد تشغيل الأزرار
          if (answersBox && currentRoom?.roundData && !currentRoom.roundData.resolved) {
            answersBox.querySelectorAll('button').forEach(btn => {
              btn.disabled = false;
              btn.classList.remove('ring-4', 'ring-amber-400');
            });
          }
          showToast(e.message || 'تعذرت مزامنة الإجابة.', '⚠️'); 
        }
      }

      async function advanceRoundIfNeeded() {
        if (!currentRoom || !registered() || currentRoom.hostUid !== myUid()) return;
        if (!(currentRoom.slots || []).some(s => s.player && s.player.uid === myUid())) return;
        const rd = currentRoom.roundData;
        if (currentRoom.status !== 'started' || !rd) return;
        if (rd.resolved && Date.now() < Number(rd.nextAt || 0)) return;
        if (!rd.resolved && Date.now() < Number(rd.expiresAt || 0)) return;
        
        try {
          await db.runTransaction(async tx => {
            const ref = db.collection('customRooms').doc(roomId), snap = await tx.get(ref);
            if (!snap.exists) return;
            const d = snap.data(), r = d.roundData;
            if (!r || d.status !== 'started') return;
            
            // خصم القيمة المخصصة للغرفة عند انتهاء التايمر بدون إجابة
            const penalty = Number(d.wrongAnswerDamage ?? 5);
            if (!r.resolved && Date.now() >= Number(r.expiresAt || 0)) { 
              const hp = { ...(d.teamHp || { blue: 100, red: 100 }) }; 
              hp.blue = Math.max(0, (hp.blue || 100) - penalty); 
              hp.red = Math.max(0, (hp.red || 100) - penalty); 
              r.resolved = true; 
              r.nextAt = Date.now() + 1800; 
              tx.update(ref, { roundData: r, teamHp: hp, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }); 
              return; 
            }
            if (!r.resolved || Date.now() < Number(r.nextAt || 0)) return;
            if ((d.teamHp || {}).blue <= 0 || (d.teamHp || {}).red <= 0) { 
              tx.update(ref, { status: 'finished', winner: (d.teamHp || {}).blue > (d.teamHp || {}).red ? 'blue' : 'red', updatedAt: firebase.firestore.FieldValue.serverTimestamp() }); 
              return; 
            }
            const now = Date.now();
            if (!r.resolved && now < Number(r.expiresAt || 0)) return;
            const tables = d.selectedTables || [1], next = makeRound(tables, Number(d.round || 1) + 1, d.timerSeconds || 15);
            tx.update(ref, { round: Number(d.round || 1) + 1, roundData: next, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
          });
        } catch (_) {}
      }
      async function startMatch() {
        if (!registered() || !roomId) return;
        try {
          await db.runTransaction(async tx => {
            const ref=db.collection('customRooms').doc(roomId), snap=await tx.get(ref);
            if (!snap.exists) throw new Error('الغرفة غير موجودة.');
            const d=snap.data();
            if (d.status !== 'waiting') throw new Error('المعركة بدأت بالفعل.');
            const slots = d.slots || [];
            const occupied = slots.filter(s => s.player);
            const teamsReady = ['blue','red'].every(team => occupied.some(s => s.team === team));
            if (d.hostUid !== myUid()) throw new Error('بدء المعركة متاح لمنشئ الغرفة فقط.');
            if (!occupied.some(s => s.player.uid === myUid())) throw new Error('يجب أن تكون داخل الغرفة لبدء المعركة.');
            if (occupied.length < 2 || !teamsReady || !occupied.every(s => s.player.ready)) throw new Error('يجب وجود لاعب في كل فريق وأن يكون جميع اللاعبين مستعدين.');
            const firstRound = makeRound(d.selectedTables || [1], 1, d.timerSeconds || 15);
            tx.update(ref,{status:'started',startedAt:firebase.firestore.FieldValue.serverTimestamp(),round:1,roundData:firstRound,teamHp:{blue:100,red:100},events:[],updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
          });
          showToast(currentLang==='en'?'Battle started!':'بدأت المعركة!', '⚔️');
        } catch(e) { showToast(e.message || 'تعذر بدء المعركة.', '⚠️'); }
      }
      async function saveTeamNames() {
        if (!registered() || !roomId || !currentRoom || currentRoom.hostUid !== myUid() || currentRoom.status !== 'waiting') return;
        const blue = String(document.getElementById('activeRoomBlueName')?.value || '').trim().slice(0,18) || 'الفريق الأزرق';
        const red = String(document.getElementById('activeRoomRedName')?.value || '').trim().slice(0,18) || 'الفريق الأحمر';
        try {
          await db.collection('customRooms').doc(roomId).set({
            teamNames:{blue,red}, updatedAt:firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
          showToast('تم حفظ اسمي الفريقين.', '✅');
        } catch (_) { showToast('تعذر حفظ أسماء الفريقين.', '⚠️'); }
      }
      async function hostMovePlayer(index, team) {
        if (!registered() || !roomId || !currentRoom || currentRoom.hostUid!==myUid()) return;
        await mutateSlots(slots=>{ const s=slots[index]; if(!s?.player) throw new Error('المقعد فارغ.'); s.team=team; s.player.ready=false; });
      }
      async function hostKickPlayer(index) {
        if (!registered() || !roomId || !currentRoom || currentRoom.hostUid!==myUid()) return;
        if (!confirm('هل تريد إخراج اللاعب من الغرفة؟')) return;
        await mutateSlots(slots=>{ if(!slots[index]?.player) throw new Error('المقعد فارغ.'); if(slots[index].player.uid===myUid()) throw new Error('لا يمكنك إخراج نفسك؛ استخدم مغادرة الغرفة.'); slots[index].player=null; });
      }
      async function closeRoom() {
        if (!registered() || !roomId) return;
        try {
          await db.runTransaction(async tx => {
            const ref=db.collection('customRooms').doc(roomId), snap=await tx.get(ref);
            if (!snap.exists) throw new Error('الغرفة غير موجودة.');
            const d=snap.data();
            if (d.hostUid !== myUid()) throw new Error('إغلاق الغرفة متاح للمالك فقط.');
            tx.update(ref,{status:'closed',slots:(d.slots||[]).map(s=>({...s,player:null})),closedAt:firebase.firestore.FieldValue.serverTimestamp(),updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
          });
          try { await db.collection('roomCodes').doc(currentRoom.code).delete(); } catch (_) {}
          showToast('تم إغلاق الغرفة.', '🔒'); clearRoom();
        } catch(e) { showToast(e.message || 'تعذر إغلاق الغرفة.', '⚠️'); }
      }
      async function copyCode() {
        if (!currentRoom) return;
        try { await navigator.clipboard.writeText(currentRoom.code); showToast('تم نسخ كود الغرفة.', '📋'); }
        catch (_) { showToast('كود الغرفة: '+currentRoom.code, '📋'); }
      }
      async function leave() {
        if (roomId && myUid()) {
          const id=roomId;
          try {
            await db.runTransaction(async tx => {
              const ref=db.collection('customRooms').doc(id), snap=await tx.get(ref);
              if (!snap.exists) return;
              const d=snap.data(), slots=d.slots||[];
              const mine=slots.find(s=>s.player && s.player.uid===myUid());
              if (mine) mine.player=null;
              if (d.hostUid===myUid()) {
                const next=slots.find(s=>s.player);
                if (next) tx.update(ref,{slots,hostUid:next.player.uid,updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
                else {
                  tx.delete(ref);
                  if (d.code) tx.delete(db.collection('roomCodes').doc(d.code));
                }
              } else tx.update(ref,{slots,updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
            });
          } catch (_) {}
        }
        clearRoom();
      }
      function clearRoom() {
        if (unsubscribe) unsubscribe(); unsubscribe=null; roomId=null; currentRoom=null; localStorage.removeItem('mk_active_room_id');
        document.getElementById('activeRoomLobby')?.classList.add('hidden');
        document.getElementById('roomEntryActions')?.classList.remove('hidden'); document.getElementById('roomCreatePanel')?.classList.add('hidden'); document.getElementById('roomJoinPanel')?.classList.add('hidden');
      }
      // Refresh/closing the tab must not silently free the seat. The room id is restored on next visit.
      window.addEventListener('beforeunload', () => {
        if (db && myUid()) db.collection('players').doc(myUid()).set({online:false,lastSeen:firebase.firestore.FieldValue.serverTimestamp()},{merge:true}).catch(()=>{});
      });
      setInterval(() => { if (db && myUid()) db.collection('players').doc(myUid()).set({online:true,lastSeen:firebase.firestore.FieldValue.serverTimestamp()},{merge:true}).catch(()=>{}); }, 30000);
setInterval(() => {
        if (currentRoom) {
          const timer = document.getElementById('roomBattleTimer');
          if (timer && currentRoom.roundData && currentRoom.status === 'started') {
            timer.textContent = Math.max(0, Math.ceil((Number(currentRoom.roundData.expiresAt || Date.now()) - Date.now()) / 1000)) + ' ث';
          }
          if (currentRoom.hostUid === myUid()) {
            advanceRoundIfNeeded();
          }
        }
      }, 1000);
    return { open, create, joinByCode, takeSlot, leaveSlot, toggleReady, startMatch, closeRoom, copyCode, leave, submitAnswer, hostMovePlayer, hostKickPlayer, saveTeamNames, refreshLanguage: () => { if (currentRoom) renderRoom(); }, isActive: () => !!roomId && !!currentRoom && currentRoom.status !== 'closed' };
    })();

    document.addEventListener('click', (event) => {
      if (typeof RoomsSystem === 'undefined' || !RoomsSystem.isActive()) return;
      const lobby = document.getElementById('activeRoomLobby');
      const battle = document.getElementById('roomBattlePanel');
      if ((lobby && lobby.contains(event.target)) || (battle && battle.contains(event.target))) return;
      const target = event.target.closest('button, a, [role="button"]');
      if (!target) return;
      event.preventDefault(); event.stopPropagation();
      showToast(currentLang==='en' ? 'Leave the room before using other game controls.' : 'يجب مغادرة الغرفة كي تستطيع استخدام أزرار اللعبة الأخرى.', '🔒');
    }, true);

    // تتم تهيئة نظام الأصدقاء من مراقب حالة المصادقة بعد التأكد من تسجيل الدخول.
