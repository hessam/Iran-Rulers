import { Era } from './types';

export const ERAS4: Era[] = [
  {
    id:'safavid',
    label:{ en:'VII · Safavid & Afsharid Iran', fa:'هفت · ایران صفوی و افشاری' },
    years:'1501–1747 AD',
    desc:{ en:'The Safavids reunite Iran for the first time since the Sasanians, imposing Twelver Shi\'a Islam as state religion and making Isfahan the most beautiful city on earth. Nader Shah\'s military genius then briefly reconstitutes an empire stretching to Delhi — only to collapse in assassination.',
           fa:'صفویان ایران را برای نخستین‌بار از دوران ساسانیان متحد می‌کنند، اسلام شیعه دوازده‌امامی را دین رسمی می‌کنند و اصفهان را زیباترین شهر زمین می‌سازند. سپس نبوغ نظامی نادرشاه امپراتوری گسترده‌ای تا دهلی پدید می‌آورد — تنها تا با ترور فرو بپاشد.' },
    snapshots:[
      {
        year:'1510 AD', yearFA:'۱۵۱۰ میلادی',
        title:{ en:'Safavid Consolidation — Shah Ismail I', fa:'تحکیم صفویان — شاه اسماعیل اول' },
        powers:[
          { name:{en:'Safavid Empire',fa:'امپراتوری صفوی'}, culture:'persian',
            capital:{en:'Tabriz / Qazvin / Isfahan',fa:'تبریز / قزوین / اصفهان'}, status:'direct', dates:'1501–1736 AD',
            regions:['media','elam','fars','khorasan','tabaristan','azerbaijan'],
            desc:{en:'Shah Ismail I conquered Iran between 1501–10 using his Qizilbash (Red-head) Turkic tribal warriors. He declared Twelver Shi\'a Islam as state religion — a revolutionary act that permanently divided Iran from its Sunni neighbors and defined Iranian identity for the next five centuries.',
                  fa:'شاه اسماعیل اول ایران را بین ۱۵۰۱-۱۵۱۰ با جنگجویان قزلباش ترک فتح کرد. اسلام شیعه دوازده‌امامی را دین رسمی اعلام کرد — اقدامی انقلابی که ایران را از همسایگان سنی‌مذهب جدا کرد و هویت ایرانی را برای پنج سده آینده تعریف نمود.'} },
          { name:{en:'Shaybanid Uzbeks',fa:'ازبکان شیبانی'}, culture:'turkic',
            capital:{en:'Bukhara / Samarkand',fa:'بخارا / سمرقند'}, status:'direct', dates:'1500–1598 AD',
            regions:['transoxiana','khorasan'],
            desc:{en:'Muhammad Shaybani Khan destroyed the last Timurid rulers of Transoxiana, driving Babur to India. The Uzbek Shaybanids became Safavid Persia\'s main eastern rivals, with Khorasan repeatedly changing hands in Sunni-Shia wars.',
                  fa:'محمد شیبانی‌خان آخرین حاکمان تیموری فرارود را نابود کرد و بابر را به هند راند. ازبکان شیبانی رقیبان اصلی شرقی ایران صفوی شدند و خراسان بارها در جنگ‌های سنی-شیعه دست‌به‌دست گشت.'} },
          { name:{en:'Ottoman Empire (western frontier)',fa:'امپراتوری عثمانی (مرز غربی)'}, culture:'turkic',
            capital:{en:'Istanbul',fa:'استانبول'}, status:'contested', dates:'ongoing',
            regions:['mesopotamia','anatolia','caucasus'],
            desc:{en:'The Ottoman-Safavid Wars (1514–1639) defined the modern Middle East. At Chaldiran (1514), Selim I defeated Ismail, halting Safavid westward expansion. Mesopotamia and the Caucasus became contested borderlands, changing hands repeatedly over a century.',
                  fa:'جنگ‌های عثمانی-صفوی (۱۵۱۴-۱۶۳۹) خاورمیانه مدرن را تعریف کردند. در چالدران (۱۵۱۴)، سلیم اول اسماعیل را شکست داد و گسترش غربی صفویان را متوقف کرد. بین‌النهرین و قفقاز مناطق مورد مناقشه شدند.'} },
          { name:{en:'Mughal Empire (nascent)',fa:'امپراتوری گورکانی (نوپا)'}, culture:'persian',
            capital:{en:'Kabul / Agra',fa:'کابل / آگرا'}, status:'direct', dates:'1526–1858 AD',
            regions:['bactria'],
            desc:{en:'Babur, the exiled Timurid from Fergana, founded the Mughal dynasty in 1526. The Mughal court used Persian as its official language and remained deeply Persianate in culture — an eastern extension of the Timurid world reborn.',
                  fa:'بابر، تیموری تبعیدی از فرغانه، در ۱۵۲۶ سلسله گورکانی را پایه گذاشت. دربار گورکانی فارسی را زبان رسمی داشت و فرهنگاً عمیقاً ایرانی‌مآب ماند — گسترش شرقی جهان تیموری که دوباره زنده شده بود.'} },
        ]
      },
      {
        year:'1620 AD', yearFA:'۱۶۲۰ میلادی',
        title:{ en:'Safavid Golden Age — Shah Abbas I', fa:'عصر طلایی صفوی — شاه عباس اول' },
        powers:[
          { name:{en:'Safavid Empire (Shah Abbas I)',fa:'امپراتوری صفوی (شاه عباس اول)'}, culture:'persian',
            capital:{en:'Isfahan',fa:'اصفهان'}, status:'direct', dates:'1588–1629 (Abbas I)',
            regions:['mesopotamia','media','elam','fars','khorasan','tabaristan','azerbaijan','caucasus'],
            desc:{en:'Shah Abbas I (r.1588–1629) represents the apex of Safavid power. He defeated the Uzbeks, expelled the Ottomans from Iraq, built Isfahan as "half the world" (Nesf-e Jahan), reformed the military with a standing slave-army (ghulam), and opened relations with European powers. His reign is the golden age of Persian carpet, miniature painting, and architectural tile-work.',
                  fa:'شاه عباس اول (۱۵۸۸-۱۶۲۹) اوج قدرت صفوی را نمایندگی می‌کند. ازبکان را شکست داد، عثمانی‌ها را از عراق بیرون کرد، اصفهان را به عنوان «نصف جهان» ساخت، ارتش دائمی غلام‌پایه بنا کرد و با قدرت‌های اروپایی رابطه برقرار نمود. عصر طلایی قالی، نگارگری و کاشیکاری فارسی.'} },
          { name:{en:'Uzbek Khanate of Bukhara',fa:'خانات ازبک بخارا'}, culture:'turkic',
            capital:{en:'Bukhara',fa:'بخارا'}, status:'direct', dates:'1500–1785 AD',
            regions:['transoxiana'],
            desc:{en:'The Shaybanid successors — the Janid / Ashtarkhanid khans — continued to hold Transoxiana and repeatedly contest Khorasan with Safavid Persia. Their Uzbek Khanate maintained a Persian-cultured court at Bukhara despite Turkic ethnic origin.',
                  fa:'جانشینان شیبانی — خانان جانی/اشترخانی — فرارود را نگه داشتند و بارها خراسان را با ایران صفوی به رقابت گذاشتند. خانات ازبک آنان در بخارا دربار ایرانی‌فرهنگ داشت.'} },
          { name:{en:'Ottoman Empire',fa:'امپراتوری عثمانی'}, culture:'turkic',
            capital:{en:'Istanbul',fa:'استانبول'}, status:'contested', dates:'ongoing',
            regions:['anatolia'],
            desc:{en:'The Treaty of Zuhab (1639) finally fixed the Ottoman-Safavid border, giving the Ottomans Mesopotamia and the Safavids the Caucasus. This line roughly corresponds to the modern Turkey-Iraq-Iran frontier.',
                  fa:'قرارداد ذهاب (۱۶۳۹) سرانجام مرز عثمانی-صفوی را تثبیت کرد: بین‌النهرین به عثمانی و قفقاز به صفویان رسید. این خط تقریباً با مرز مدرن ترکیه-عراق-ایران منطبق است.'} },
          { name:{en:'Mughal Empire',fa:'امپراتوری گورکانی'}, culture:'persian',
            capital:{en:'Agra / Delhi',fa:'آگرا / دهلی'}, status:'direct', dates:'ongoing',
            regions:['bactria'],
            desc:{en:'The Mughals under Shah Jahan and Aurangzeb were at their height. Their court was thoroughly Persianate: Persian was the language of administration, diplomacy, and high culture across South Asia.',
                  fa:'گورکانیان زیر شاه جهان و اورنگ‌زیب در اوج بودند. دربارشان کاملاً ایرانی‌مآب بود: فارسی زبان اداری، دیپلماتیک و فرهنگ عالی در سرتاسر جنوب آسیا بود.'} },
        ]
      },
      {
        year:'1740 AD', yearFA:'۱۷۴۰ میلادی',
        title:{ en:'Nader Shah\'s World Conquest', fa:'فتح جهان نادرشاه' },
        powers:[
          { name:{en:'Afsharid Empire (Nader Shah)',fa:'امپراتوری افشاری (نادرشاه)'}, culture:'turkic',
            capital:{en:'Mashhad',fa:'مشهد'}, status:'direct', dates:'1736–1747 AD',
            regions:['media','elam','fars','khorasan','tabaristan','azerbaijan','caucasus','transoxiana','bactria','mesopotamia'],
            desc:{en:'Nader Shah Afshar was the last great conqueror of the classical Islamic world. He expelled the Afghan Hotaki invaders, restored the Safavid throne (then seized it for himself in 1736), sacked Delhi in 1739 (taking the Koh-i-Noor and Peacock Throne), and defeated the Ottomans and Uzbeks. His assassination in 1747 ended the last pan-Iranian empire before the modern era.',
                  fa:'نادرشاه افشار آخرین فاتح بزرگ جهان اسلام کلاسیک بود. مهاجمان افغان هوتکی را بیرون راند، تخت صفوی را احیا کرد (سپس در ۱۷۳۶ خود آن را ربود)، در ۱۷۳۹ دهلی را غارت کرد (کوه‌نور و تخت طاووس را برد)، و عثمانی‌ها و ازبکان را شکست داد. ترور او در ۱۷۴۷ به آخرین امپراتوری سرتاسری ایران پیش از دوران مدرن پایان داد.'} },
          { name:{en:'Afghan Hotaki (defeated)',fa:'افغان هوتکی (شکست‌خورده)'}, culture:'persian',
            capital:{en:'Isfahan (occupied)',fa:'اصفهان (اشغال‌شده)'}, status:'contested', dates:'1709–1738 AD',
            regions:['sistan'],
            desc:{en:'The Ghilzai Pashtun Hotakis had seized Isfahan in 1722, briefly ending the Safavid dynasty. Nader Shah expelled them and pursued them back into Afghanistan, effectively ending the Hotaki state.',
                  fa:'هوتکی‌های پشتون غلجایی در ۱۷۲۲ اصفهان را گرفتند و به‌طور موقت سلسله صفوی را منقرض کردند. نادرشاه آنان را بیرون راند و تا افغانستان تعقیب کرد و دولت هوتکی را عملاً پایان داد.'} },
          { name:{en:'Ottoman Empire (reduced)',fa:'امپراتوری عثمانی (کاهش‌یافته)'}, culture:'turkic',
            capital:{en:'Istanbul',fa:'استانبول'}, status:'contested', dates:'ongoing',
            regions:['anatolia'],
            desc:{en:'Nader\'s 1743–46 campaigns pushed the Ottomans back and recovered much of the Caucasus. He controversially proposed recognizing a "Ja\'fari" (Shi\'a) school of jurisprudence within Sunni Islam at the Treaty of Kurdan — an ecumenical gesture rejected by the Ottoman ulema.',
                  fa:'لشکرکشی‌های نادر در ۱۷۴۳-۴۶ عثمانی‌ها را عقب راند و بخش بزرگی از قفقاز را بازپس گرفت. او در قرارداد کردان پیشنهاد کرد مذهب جعفری در اسلام سنی به رسمیت شناخته شود — پیشنهادی که علمای عثمانی رد کردند.'} },
        ]
      }
    ]
  },

  {
    id:'earlymodern',
    label:{ en:'VIII · Zand–Qajar Vacuum', fa:'هشت · خلأ زندیه–قاجاریه' },
    years:'1747–1796 AD',
    desc:{ en:'Nader Shah\'s assassination leaves a power vacuum. Zand rule in the south, Afsharid remnants in Khorasan, the Durrani Pashtuns breaking east, the Qajars rising in the north — and dozens of Persian-cultured Caucasian khanates.',
           fa:'ترور نادرشاه خلأ قدرتی ایجاد می‌کند: زندیه در جنوب، بازماندگان افشاری در خراسان، پشتون‌های درانی در شرق، و قاجارها در حال قدرت‌گیری در شمال.' },
    snapshots:[
      {
        year:'1760 AD', yearFA:'۱۷۶۰ میلادی',
        title:{ en:'The Fragmented Successor States', fa:'دولت‌های جانشین پراکنده' },
        powers:[
          { name:{en:'Zand Dynasty',fa:'زندیه'}, culture:'persian',
            capital:{en:'Shiraz',fa:'شیراز'}, status:'direct', dates:'1750–1794 AD',
            regions:['media','elam','fars','mesopotamia'],
            desc:{en:'Karim Khan Zand never took the title Shah, styling himself "Vakil al-Ra\'aya" (Advocate of the People). He ruled from Shiraz with unusual benevolence, patronizing arts and architecture, and keeping Baghdad briefly under Iranian control.',
                  fa:'کریم‌خان زند هرگز لقب شاه نگرفت و خود را «وکیل الرعایا» خواند. از شیراز با مهربانی کم‌نظیر فرمان راند، هنر و معماری را پشتیبانی کرد و بغداد را گاهی در دست داشت.'} },
          { name:{en:'Afsharid Remnant (Shahrukh)',fa:'بازمانده افشاریه (شاهرخ)'}, culture:'turkic',
            capital:{en:'Mashhad',fa:'مشهد'}, status:'direct', dates:'1750–1796 AD',
            regions:['khorasan'],
            desc:{en:'The blind and repeatedly tortured Shahrukh, grandson of Nader Shah, nominally ruled Khorasan for decades — kept alive by various conquerors because he allegedly knew the final location of the Koh-i-Noor diamond.',
                  fa:'شاهرخ کور و بارها شکنجه‌دیده، نوه نادرشاه، دهه‌ها بر خراسان فرمان داشت. فاتحان مختلف او را زنده نگه داشتند چون گفته می‌شد مکان نهایی کوه‌نور را می‌داند.'} },
          { name:{en:'Durrani Empire',fa:'امپراتوری درانی'}, culture:'persian',
            capital:{en:'Kandahar / Kabul',fa:'قندهار / کابل'}, status:'direct', dates:'1747–1823 AD',
            regions:['bactria','sistan','transoxiana'],
            desc:{en:'Ahmad Shah Durrani, a Pashtun (Eastern Iranian people) elected by a Loya Jirga after Nader Shah\'s death, created Afghanistan and briefly commanded the largest Muslim empire east of Persia, including Punjab and Kashmir.',
                  fa:'احمدشاه درانی، پشتونی (مردمی ایرانی-شرقی) که پس از مرگ نادرشاه از سوی لویه جرگه برگزیده شد، افغانستان را پدید آورد و کوتاه‌مدت بزرگ‌ترین امپراتوری مسلمان شرق ایران بود.'} },
          { name:{en:'Qajar Ascending',fa:'قاجار در حال قدرت‌گیری'}, culture:'turkic',
            capital:{en:'Astarabad → Tehran',fa:'استرآباد ← تهران'}, status:'contested', dates:'1785–1796 onward',
            regions:['tabaristan','azerbaijan'],
            desc:{en:'Agha Mohammad Khan Qajar, a eunuch of terrifying military genius, united the Qajar Turkic tribes, defeated the Zands, and captured Tbilisi in 1795 — briefly reuniting most of historic Iran under a new dynasty.',
                  fa:'آقامحمدخان قاجار، خواجه‌ای با نبوغ نظامی وحشتناک، قبایل ترک قاجار را متحد کرد، زندیه را شکست داد و تفلیس را در ۱۷۹۵ گرفت.'} },
          { name:{en:'Caucasian Khanates',fa:'خانات قفقاز'}, culture:'persian',
            capital:{en:'Various',fa:'شهرهای مختلف'}, status:'contested', dates:'1747–1828 AD',
            regions:['caucasus'],
            desc:{en:'Nader Shah\'s death freed the Khanates of Erivan, Karabakh, Ganja, Baku, Shirvan, Sheki, and Talysh — each under a Khan, Persian-cultured and Shia in religion, but de facto independent from Tehran.',
                  fa:'مرگ نادرشاه خانات ایروان، قراباغ، گنجه، باکو، شیروان، شکی و طالش را آزاد کرد. هر خانی ایرانی‌فرهنگ و شیعه بود اما از تهران عملاً مستقل.'} },
        ]
      }
    ]
  },

  {
    id:'imperial',
    label:{ en:'IX · Imperial Shadows', fa:'نه · سایه‌های استعماری' },
    years:'1828–1946 AD',
    desc:{ en:'The Great Game overlays Qajar and Pahlavi formal sovereignty with British and Russian spheres of influence. In 1945–46, Soviet-backed republics briefly partition northwestern Iran.',
           fa:'بازی بزرگ حاکمیت رسمی قاجار و پهلوی را با حوزه‌های نفوذ بریتانیا و روسیه درهم می‌آمیزد. در ۱۹۴۵-۴۶ جمهوری‌های شوروی‌پشتیبان شمال غرب ایران را به‌طور موقت تجزیه می‌کنند.' },
    snapshots:[
      {
        year:'1907 AD', yearFA:'۱۹۰۷ میلادی',
        title:{ en:'Anglo-Russian Spheres of Influence', fa:'حوزه‌های نفوذ انگلیس و روسیه' },
        powers:[
          { name:{en:'Qajar Iran (formal sovereignty)',fa:'ایران قاجاری (حاکمیت رسمی)'}, culture:'persian',
            capital:{en:'Tehran',fa:'تهران'}, status:'direct', dates:'1789–1925 AD',
            regions:['media','elam','fars','tabaristan','azerbaijan'],
            desc:{en:'After devastating losses in two Russo-Persian Wars (1804–28), Iran lost the entire Caucasus. The Constitutional Revolution of 1906 created the Majlis (parliament), but foreign interference gutted its promise.',
                  fa:'پس از شکست‌های سنگین در دو جنگ ایران و روس (۱۸۰۴-۱۸۲۸)، ایران تمام قفقاز را از دست داد. انقلاب مشروطه ۱۹۰۶ مجلس را پدید آورد، اما دخالت‌های خارجی وعده‌هایش را نقش بر آب کرد.'} },
          { name:{en:'Russian Sphere of Influence',fa:'حوزه نفوذ روسیه'}, culture:'foreign',
            capital:{en:'Saint Petersburg',fa:'سن‌پترزبورگ'}, status:'sphere', dates:'1907–1917 AD',
            regions:['caucasus','tabaristan','khorasan'],
            desc:{en:'The Anglo-Russian Convention of 1907 formalized northern Iran as a Russian sphere: troops were stationed in Tabriz and Mashhad, the constitutional movement was suppressed, and economic concessions extracted.',
                  fa:'قرارداد ۱۹۰۷ ایران و روس شمال ایران را حوزه نفوذ روسیه کرد: قوا در تبریز و مشهد مستقر شدند، نهضت مشروطه سرکوب شد و امتیازات اقتصادی گرفته شد.'} },
          { name:{en:'British Sphere of Influence',fa:'حوزه نفوذ بریتانیا'}, culture:'foreign',
            capital:{en:'London / Calcutta',fa:'لندن / کلکته'}, status:'sphere', dates:'1907–1918 AD',
            regions:['sistan','elam','mesopotamia'],
            desc:{en:'Britain\'s sphere covered southeastern Iran (protecting routes to India) and southern Iraq. The Anglo-Persian Oil Company (founded 1908 at Masjed Soleiman) anchored their strategic and economic grip on the south.',
                  fa:'حوزه بریتانیا جنوب شرقی ایران و جنوب عراق را در بر می‌گرفت. شرکت نفت ایران و انگلیس (پایه‌گذاری ۱۹۰۸ در مسجدسلیمان) لنگر استراتژیک آنان در جنوب بود.'} },
          { name:{en:'Durrani/Afghan State',fa:'افغانستان درانی'}, culture:'persian',
            capital:{en:'Kabul',fa:'کابل'}, status:'direct', dates:'ongoing',
            regions:['bactria'],
            desc:{en:'The Emirate of Afghanistan remained a buffer state between Russian Central Asia and British India, its modern borders largely drawn by treaties that ignored Iranian and Afghan claims to historic territories.',
                  fa:'امارت افغانستان دولت حایل میان آسیای مرکزی روسیه و هند بریتانیا ماند. مرزهای مدرنش عمدتاً با معاهداتی رسم شد که ادعاهای ایران و افغانستان را نادیده گرفت.'} },
        ]
      },
      {
        year:'1945 AD', yearFA:'۱۹۴۵ میلادی',
        title:{ en:'Soviet-Backed Separatist Republics', fa:'جمهوری‌های جدایی‌طلب با پشتیبانی شوروی' },
        powers:[
          { name:{en:'Pahlavi Iran (formal sovereignty)',fa:'ایران پهلوی (حاکمیت رسمی)'}, culture:'persian',
            capital:{en:'Tehran',fa:'تهران'}, status:'direct', dates:'1925–1979 AD',
            regions:['media','elam','fars','khorasan','tabaristan','sistan','bactria'],
            desc:{en:'Mohammad Reza Shah formally controlled Iran, but wartime Soviet occupation of the north (1941–46) had emboldened separatist movements. The crisis was resolved when the USSR withdrew under US pressure in 1946.',
                  fa:'محمدرضاشاه ایران را رسماً کنترل می‌کرد، اما اشغال شوروی در جنگ (۱۹۴۱-۴۶) جنبش‌های جدایی‌طلب را جسور کرده بود. بحران با عقب‌نشینی شوروی زیر فشار آمریکا در ۱۹۴۶ حل شد.'} },
          { name:{en:'Azerbaijan People\'s Government',fa:'حکومت ملی آذربایجان'}, culture:'foreign',
            capital:{en:'Tabriz',fa:'تبریز'}, status:'contested', dates:'Dec 1945–Dec 1946',
            regions:['azerbaijan'],
            desc:{en:'A Soviet-backed Azerbaijani republic led by Ja\'far Pishevari declared autonomy in Tabriz. Soviet armored divisions blocked Iranian army advances. It collapsed immediately when the USSR withdrew troops.',
                  fa:'جمهوری آذربایجان به رهبری جعفر پیشه‌وری با پشتیبانی شوروی در تبریز اعلام خودمختاری کرد. لشکرهای زرهی شوروی پیشروی ارتش ایران را مسدود کردند. پس از خروج قوای شوروی بلافاصله فروپاشید.'} },
          { name:{en:'Republic of Mahabad',fa:'جمهوری مهاباد'}, culture:'persian',
            capital:{en:'Mahabad',fa:'مهاباد'}, status:'contested', dates:'Jan–Dec 1946',
            regions:['anatolia'],
            desc:{en:'The first and only independent Kurdish republic, backed by Soviet support and the Barzani peshmerga. Kurds are an Iranian people; their republic lasted eleven months before Iranian army forces crushed it.',
                  fa:'نخستین و تنها جمهوری مستقل کرد، با پشتیبانی شوروی و پیشمرگه بارزانی. کردها مردمی ایرانی‌اند؛ جمهوری‌شان یازده ماه دوام آورد پیش از اینکه ارتش ایران آن را سرکوب کرد.'} },
          { name:{en:'Soviet Union (occupation / republics)',fa:'اتحاد جماهیر شوروی (اشغال / جمهوری‌ها)'}, culture:'foreign',
            capital:{en:'Moscow',fa:'مسکو'}, status:'direct', dates:'1920–1991 AD',
            regions:['caucasus','transoxiana'],
            desc:{en:'The Soviet Republics of Azerbaijan, Armenia, Georgia, Uzbekistan, and Tajikistan encompassed the northern portions of Greater Iran\'s historical zone — all of them rooted in Persianate or Iranian cultural traditions.',
                  fa:'جمهوری‌های شوروی آذربایجان، ارمنستان، گرجستان، ازبکستان و تاجیکستان بخش‌های شمالی ایران‌زمین تاریخی را دربرمی‌گرفتند — همگی ریشه در سنت‌های فرهنگی ایرانی یا ایرانی‌مآب.'} },
        ]
      }
    ]
  }
];
