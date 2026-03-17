import { Era } from './types';

export const ERAS1: Era[] = [
  // ── ERA 0 ──────────────────────────────────────────
  {
    id:'ancient',
    label: { en:'I · Ancient Empires',        fa:'یک · امپراتوری‌های باستانی' },
    years: '2700–330 BC',
    desc:  { en:'Lowland Elamite federations compete with Amorite Babylonian governors, highland Zagros peoples, and early Achaemenid ancestors. The Iranian plateau hosts its first indigenous states.',
             fa:'دولت‌های عیلامی با فرمانروایان آموری بابل، مردم زاگرس‌نشین و نیاکان هخامنشی رقابت می‌کنند. فلات ایران نخستین دولت‌های بومی خود را می‌پرورد.' },
    snapshots: [
      {
        year: '–1800 BC', yearFA: '۱۸۰۰ پیش از میلاد',
        title: { en:'Elamite Sukkalmah & Old Babylonian', fa:'سوکلماخ عیلامی و بابل کهن' },
        powers: [
          { name:{en:'Elamite Sukkalmah',fa:'سوکلماخ عیلامی'}, culture:'persian',
            capital:{en:'Susa',fa:'شوش'}, status:'direct', dates:'c.1970–1500 BC',
            regions:['elam','fars','khorasan'],
            desc:{en:'The Sukkalmah ("Grand Regent") dynasty ruled a federated state centered on Susa extending deep into Anshan and early Persia. Their complex polyglot administration presaged later Achaemenid methods.',
                  fa:'سلسله سوکلماخ دولتی فدرال با مرکزیت شوش داشت که تا انشان و پارس ابتدایی گسترش می‌یافت. شیوه اداری پیچیده و چندزبانه آنان الگویی برای هخامنشیان بود.'} },
          { name:{en:'Old Babylonian Empire',fa:'بابل کهن'}, culture:'mesopotamian',
            capital:{en:'Babylon',fa:'بابل'}, status:'direct', dates:'c.1894–1595 BC',
            regions:['mesopotamia','elam'],
            desc:{en:'The Amorite dynasty of Hammurabi united Mesopotamia under his famous law code. These were Amorites — West Semitic pastoralists — not Arabs; true Arab identity emerged centuries later in the Arabian Peninsula.',
                  fa:'سلسله آموری حمورابی (غرب‌سامی) بین‌النهرین را زیر قانون‌نامه مشهورش متحد کرد. اینان آموری بودند نه عرب؛ هویت عربی قرن‌ها بعد در شبه‌جزیره عربستان شکل گرفت.'} },
          { name:{en:'Hurrian Peoples',fa:'مردم هوری'}, culture:'nomadic',
            capital:{en:'Arrapha',fa:'آراپخا'}, status:'contested', dates:'c.2300–1200 BC',
            regions:['media','azerbaijan','anatolia'],
            desc:{en:'Hurrian-speaking peoples formed loose confederacies across the Zagros highlands and Upper Mesopotamia, resisting both Babylonian and Elamite hegemony. Neither Indo-European nor Semitic in origin.',
                  fa:'مردم هوری‌زبان در دشت‌های زاگرس و بین‌النهرین علیا اتحادیه‌های سستی ساختند. زبان آنان نه هندواروپایی بود و نه سامی.'} },
        ]
      },
      {
        year: '–600 BC', yearFA: '۶۰۰ پیش از میلاد',
        title: { en:'Median Ascendancy & Neo-Babylonian', fa:'برتری ماد و بابل نو' },
        powers: [
          { name:{en:'Median Kingdom',fa:'پادشاهی ماد'}, culture:'persian',
            capital:{en:'Ecbatana (Hamadan)',fa:'هگمتانه (همدان)'}, status:'direct', dates:'678–550 BC',
            regions:['media','azerbaijan','tabaristan','khorasan','caucasus'],
            desc:{en:'Under Cyaxares, the Medes united Iranian tribes and destroyed the Assyrian capital Nineveh in 612 BC alongside the Neo-Babylonians. The first great Iranian empire before the Achaemenids.',
                  fa:'کیاخسار ماد مادها را متحد کرد و در ۶۱۲ پیش از میلاد نینوای آشور را با بابل نو ویران ساخت. نخستین امپراتوری بزرگ ایرانی پیش از هخامنشیان.'} },
          { name:{en:'Neo-Babylonian Empire',fa:'بابل نو'}, culture:'mesopotamian',
            capital:{en:'Babylon',fa:'بابل'}, status:'direct', dates:'626–539 BC',
            regions:['mesopotamia'],
            desc:{en:'The Chaldean (South Babylonian Semitic) dynasty of Nebuchadnezzar II ruled the Fertile Crescent and destroyed Jerusalem. Like the Old Babylonians, these were Semitic Mesopotamians — not Arabs — who preceded the Islamic Arab identity by over a millennium.',
                  fa:'سلسله کلدانی (سامی جنوب بابل) نبوکدنصر دوم خاورمیانه را فرمان می‌راند. اینان سامی بین‌النهرینی بودند نه عرب؛ هویت عربی-اسلامی هزار سال بعد پدید آمد.'} },
          { name:{en:'Early Achaemenids (Anshan)',fa:'هخامنشیان آغازین (انشان)'}, culture:'persian',
            capital:{en:'Anshan',fa:'انشان'}, status:'vassal', dates:'c.700–550 BC',
            regions:['elam','fars'],
            desc:{en:'Cyrus I and Cambyses I were kings of Anshan, nominal Median vassals — but their heirs would conquer the known world within decades.',
                  fa:'کوروش اول و کمبوجیه اول شاهان انشان و رسماً دست‌نشانده مادها بودند؛ اما فرزندانشان در چند دهه جهان را فتح کردند.'} },
          { name:{en:'Urartu (declining)',fa:'اورارتو (رو به زوال)'}, culture:'nomadic',
            capital:{en:'Tushpa (Van)',fa:'توشپا (وان)'}, status:'contested', dates:'860–590 BC',
            regions:['anatolia'],
            desc:{en:'Once a formidable rival to Assyria, Urartu was crumbling under Cimmerian and Scythian raids. The Hurrian-related Urartians spoke an isolate language and built impressive fortress-cities.',
                  fa:'اورارتو که روزی رقیب قدر آشور بود زیر یورش کیمریان و سکاها رو به فروپاشی می‌رفت.'} },
        ]
      },
      {
        year: '–500 BC', yearFA: '۵۰۰ پیش از میلاد',
        title: { en:'Achaemenid Empire at its Zenith', fa:'امپراتوری هخامنشی در اوج' },
        powers: [
          { name:{en:'Achaemenid Empire',fa:'امپراتوری هخامنشی'}, culture:'persian',
            capital:{en:'Persepolis / Susa / Babylon',fa:'تخت‌جمشید / شوش / بابل'}, status:'direct', dates:'550–330 BC',
            regions:['fars','elam','media','mesopotamia','azerbaijan','caucasus','anatolia','tabaristan','khorasan','sistan','bactria','transoxiana'],
            desc:{en:'Founded by Cyrus the Great, the Achaemenid Empire was the largest the ancient world had ever seen. It established a model of religious tolerance, the Royal Road, and the satrapy system.',
                  fa:'امپراتوری هخامنشی که توسط کوروش بزرگ بنیان نهاده شد، بزرگترین امپراتوری جهان باستان بود. این دولت الگویی از تساهل مذهبی، راه شاهی و نظام ساتراپی را پایه‌گذاری کرد.'} }
        ]
      }
    ]
  },

  {
    id:'hellenic',
    label:{ en:'II · Hellenistic & Parthian', fa:'دو · هلنی و اشکانی' },
    years:'330 BC–224 AD',
    desc:{ en:'Alexander\'s conquests shatter into Seleucid, Parthian, and Greco-Bactrian successor states. The Arsacid system tolerates local vassal kings — Elymais, Persis — who mint coins and worship Ahura Mazda under a Hellenistic veneer.',
           fa:'فتوحات اسکندر به دولت‌های جانشین سلوکی، اشکانی و یونانی-باختری تکه‌پاره می‌شوند. نظام اشکانی پادشاهان دست‌نشانده‌ای چون الیمایس و پارس را تحمل می‌کند.' },
    snapshots: [
      {
        year:'–250 BC', yearFA:'۲۵۰ پیش از میلاد',
        title:{ en:'Seleucid Dominance & Early Breakaways', fa:'سلطه سلوکی و جدایی‌های اولیه' },
        powers:[
          { name:{en:'Seleucid Empire',fa:'امپراتوری سلوکی'}, culture:'hellenic',
            capital:{en:'Antioch / Seleucia',fa:'انطاکیه / سلوکیه'}, status:'direct', dates:'312–63 BC',
            regions:['mesopotamia','media','elam','fars','khorasan','transoxiana'],
            desc:{en:'Seleucus I and his heirs held the largest share of Alexander\'s empire — from Syria to Bactria. Greek colonists founded dozens of cities across Iran, but centrifugal pressure was relentless.',
                  fa:'سلوکوس اول از سوریه تا باختر، بزرگ‌ترین سهم امپراتوری اسکندر را در دست داشت. یونانیان شهرهای بسیاری در ایران ساختند، اما نیروهای گریز از مرکز آن را تهدید می‌کرد.'} },
          { name:{en:'Arsacid Beginnings (Parni)',fa:'آغاز اشکانیان (پرنی)'}, culture:'nomadic',
            capital:{en:'Nisa',fa:'نسا'}, status:'contested', dates:'c.247 BC onward',
            regions:['tabaristan'],
            desc:{en:'Arsaces I led the Parni tribe (an Eastern Iranian / Dahae steppe people) into Parthia c.247 BC, beginning the dynasty that would oust the Seleucids from all Iran within a century.',
                  fa:'ارشک اول قبیله پرنی (مردمی ایرانی-شرقی از استپ) را به پارت برد و سلسله‌ای پایه گذاشت که در یک سده سلوکیان را از ایران راند.'} },
          { name:{en:'Greco-Bactrian Kingdom',fa:'پادشاهی یونانی-باختری'}, culture:'hellenic',
            capital:{en:'Bactra (Balkh)',fa:'باکتر (بلخ)'}, status:'direct', dates:'256–125 BC',
            regions:['bactria','sistan'],
            desc:{en:'Diodotus I declared independence from the Seleucids, creating a sophisticated Hellenistic state that produced bilingual coins in Greek and Kharoshthi and extended into the Punjab.',
                  fa:'دیودوتوس اول از سلوکیان جدا شد و دولتی پیشرفته ساخت که سکه‌های دو زبانه یونانی و خروشتی ضرب می‌کرد و تا پنجاب گسترش یافت.'} },
        ]
      },
      {
        year:'–100 BC', yearFA:'۱۰۰ پیش از میلاد',
        title:{ en:'Parthian Empire at Its Height', fa:'اشکانیان در اوج قدرت' },
        powers:[
          { name:{en:'Arsacid Parthian Empire',fa:'امپراتوری اشکانی'}, culture:'persian',
            capital:{en:'Ctesiphon',fa:'تیسفون'}, status:'direct', dates:'247 BC–224 AD',
            regions:['mesopotamia','media','khorasan','tabaristan','azerbaijan','caucasus'],
            desc:{en:'Mithridates II "the Great" conquered Media and Mesopotamia. The Arsacid system permitted local dynasties as client kings rather than installing governors — a deliberate tolerance of plurality.',
                  fa:'مهرداد دوم «بزرگ» ماد و بین‌النهرین را فتح کرد. نظام اشکانی به‌عمد سلسله‌های محلی را چون پادشاهان دست‌نشانده تحمل می‌کرد.'} },
          { name:{en:'Kingdom of Elymais',fa:'پادشاهی الیمائیس'}, culture:'persian',
            capital:{en:'Susa',fa:'شوش'}, status:'vassal', dates:'147 BC–221 AD',
            regions:['elam'],
            desc:{en:'The Kamnaskires dynasty ruled Elymais (roughly modern Khuzestan) as a Parthian vassal, minting distinctive bronze coins depicting bearded kings in native Iranian dress.',
                  fa:'خاندان کمنسکیرس بر الیمایس (خوزستان امروز) به‌عنوان دست‌نشانده اشکانیان فرمان می‌راند و سکه‌های مشخصه خود را می‌زد.'} },
          { name:{en:'Kings of Persis',fa:'شاهان پارس'}, culture:'persian',
            capital:{en:'Istakhr / Persepolis',fa:'استخر / تخت‌جمشید'}, status:'vassal', dates:'c.3rd c. BC–224 AD',
            regions:['fars'],
            desc:{en:'The Frataraka and later vassal kings of Persis worshipped Ahura Mazda and maintained Achaemenid traditions. They were the direct predecessors of Ardashir I, founder of the Sasanian dynasty.',
                  fa:'فَراتَرَکَها و پادشاهان بعدی پارس اهورامزدا را می‌پرستیدند و سنت‌های هخامنشی را حفظ می‌کردند. پیشینیان مستقیم اردشیر بابکان بودند.'} },
          { name:{en:'Indo-Scythians (Sakas)',fa:'سکاهای هندی'}, culture:'nomadic',
            capital:{en:'Taxila',fa:'تکشیله'}, status:'contested', dates:'2nd c. BC–1st c. AD',
            regions:['sistan','bactria'],
            desc:{en:'Saka (Scythian) nomads from the Eurasian steppe overran Bactria and Drangiana; their name survives in "Sakastan" — modern Sistan. Eastern Iranian in language.',
                  fa:'سکاهای کوچ‌نشین از استپ اوراسیا به باختر و درنگیانا ریختند؛ نامشان در «سکستان» - سیستان امروز - باقی ماند.'} },
          { name:{en:'Anatolia (Roman / Pontic)',fa:'آناتولی (روم / پنتوس)'}, culture:'foreign',
            capital:{en:'Various',fa:'شهرهای مختلف'}, status:'contested', dates:'c.100 BC',
            regions:['anatolia'],
            desc:{en:'Western Anatolia was contested between Rome and Mithridates VI of Pontus — outside the core Parthian sphere. The Roman-Parthian boundary lay at the Euphrates.',
                  fa:'آناتولیای غربی میدان رقابت روم و میتریداتس ششم پنتوس بود و در حوزه اصلی اشکانیان نمی‌افتاد.'} },
        ]
      }
    ]
  },

  {
    id:'sasanian',
    label:{ en:'III · Sasanian Empire', fa:'سه · امپراتوری ساسانی' },
    years:'224–651 AD',
    desc:{ en:'A unified Zoroastrian empire rules from Ctesiphon but faces relentless eastern pressure from Kidarites, Hephthalites, and Turkic Khaganates — while rival Shahs contest the throne from within.',
           fa:'امپراتوری متحد زرتشتی از تیسفون فرمان می‌راند اما فشار مداوم کیداری‌ها، هپتالیان و ترکان از شرق و رقبای شاهی از درون آن را تهدید می‌کند.' },
    snapshots:[
      {
        year:'400 AD', yearFA:'۴۰۰ میلادی',
        title:{ en:'Sasanian Core vs. Eastern Nomads', fa:'هسته ساسانی در برابر کوچندگان شرقی' },
        powers:[
          { name:{en:'Sasanian Empire',fa:'امپراتوری ساسانی'}, culture:'persian',
            capital:{en:'Ctesiphon',fa:'تیسفون'}, status:'direct', dates:'224–651 AD',
            regions:['mesopotamia','media','elam','fars','tabaristan','azerbaijan'],
            desc:{en:'Yazdegerd I held the empire together against both Rome and eastern nomadic pressure. Ctesiphon was the greatest city between Rome and China, and the Sasanian administrative, artistic, and religious legacy shaped both Islam and Byzantium.',
                  fa:'یزدگرد اول امپراتوری را در برابر روم و فشار کوچندگان شرقی نگه داشت. تیسفون باشکوه‌ترین شهر میان روم و چین بود و میراث ساسانی هم اسلام و بیزانس را شکل داد.'} },
          { name:{en:'Kidarite Huns',fa:'هون‌های کیداری'}, culture:'nomadic',
            capital:{en:'Balkh',fa:'بلخ'}, status:'contested', dates:'c.320–467 AD',
            regions:['khorasan','transoxiana','bactria'],
            desc:{en:'The Kidarites, possibly related to the Kushans, seized Bactria and Transoxiana from weakened Sasanian control, raiding deep into Khorasan and forcing heavy tribute payments.',
                  fa:'کیداری‌ها، احتمالاً وابسته به کوشانیان، باختر و فرارود را از کنترل سست ساسانیان گرفتند و به خراسان یورش بردند.'} },
          { name:{en:'Armenian Client Kingdom',fa:'ارمنستان دست‌نشانده'}, culture:'persian',
            capital:{en:'Artashat / Dvin',fa:'آرتاشات / دوین'}, status:'vassal', dates:'387–428 AD',
            regions:['caucasus','anatolia'],
            desc:{en:'Armenia was partitioned between Rome and Sasanid Persia in 387 AD. The Persian portion under Arsacid princes became deeply Iranianized, with a court culture saturated in Zoroastrian-influenced Christianity.',
                  fa:'ارمنستان در ۳۸۷ میلادی میان روم و ساسانیان تقسیم شد. بخش ایرانی زیر شاهزادگان اشکانی به‌شدت ایرانی شد.'} },
        ]
      },
      {
        year:'591 AD', yearFA:'۵۹۱ میلادی',
        title:{ en:'Civil War — Khosrow II vs. Bahram Chobin', fa:'جنگ داخلی — خسرو دوم در برابر بهرام چوبین' },
        powers:[
          { name:{en:'Khosrow II "Parviz"',fa:'خسرو دوم پرویز'}, culture:'persian',
            capital:{en:'Ctesiphon',fa:'تیسفون'}, status:'direct', dates:'591–628 AD',
            regions:['mesopotamia','media','elam','fars','tabaristan','azerbaijan'],
            desc:{en:'Restored to the throne with Byzantine help after Bahram Chobin\'s usurpation, Khosrow II later launched the greatest Sasanian expansion ever — briefly occupying Egypt, Syria, and reaching the walls of Constantinople.',
                  fa:'خسرو پرویز با کمک بیزانس تاج گرفت و سپس بزرگ‌ترین کمپین ساسانیان را براه انداخت و مصر، سوریه را گرفت و به دروازه‌های قسطنطنیه رسید.'} },
          { name:{en:'Bahram Chobin (Usurper)',fa:'بهرام چوبین (غاصب)'}, culture:'persian',
            capital:{en:'Nishapur',fa:'نیشابور'}, status:'contested', dates:'590–591 AD',
            regions:['khorasan'],
            desc:{en:'A brilliant Sasanian general who rebelled, briefly seized the throne as Bahram VI, and retreated to Khorasan with Turkic support after losing to Khosrow and his Byzantine allies. An iconic figure in Persian epic tradition.',
                  fa:'سردار درخشان ساسانی که شورید، برای مدتی کوتاه بر تخت نشست و پس از شکست با پشتیبانی ترکان به خراسان گریخت. شخصیتی افسانه‌ای در سنت حماسی فارسی.'} },
          { name:{en:'Western Turkic Khaganate',fa:'خاقانات ترک غربی'}, culture:'nomadic',
            capital:{en:'Suyab',fa:'سوباب'}, status:'direct', dates:'583–657 AD',
            regions:['transoxiana','bactria'],
            desc:{en:'After jointly destroying the Hephthalites with Sasanid Persia, the Western Turks took Transoxiana and became the most powerful force on Persia\'s eastern frontier.',
                  fa:'پس از نابودی مشترک هپتالیان با ساسانیان، ترکان غربی فرارود را گرفتند و قدرتمندترین نیرو در مرز شرقی ایران شدند.'} },
          { name:{en:'Byzantine Empire',fa:'امپراتوری بیزانس'}, culture:'foreign',
            capital:{en:'Constantinople',fa:'قسطنطنیه'}, status:'direct', dates:'ongoing',
            regions:['anatolia','caucasus'],
            desc:{en:'Byzantium controlled most of Anatolia and competed intensely with Sasanid Persia for the Caucasus client kingdoms. The Roman-Persian "world war" of 603–628 AD fatally exhausted both empires before the Arab conquests.',
                  fa:'بیزانس آناتولی را کنترل می‌کرد و برای پادشاهی‌های دست‌نشانده قفقاز با ساسانیان رقابت داشت. جنگ ۶۰۳-۶۲۸ هر دو امپراتوری را پیش از فتوحات اسلامی فرسود.'} },
        ]
      }
    ]
  }
];
