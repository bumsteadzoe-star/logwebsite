const posts = [
  {
    published: true,
    type: 'study-abroad',
    slug: 'laura-study-abroad-madrid',
    title: "Laura's Madrid Study Abroad Guide",
    city: 'Madrid, Spain',
    category: 'Study Abroad',
    coverImage: '/images/laurablogphotos/laura cover.jpg',
    description: "A look at Laura's favorite spots in Madrid.",
    author: 'Laura Artandi',
    date: '2026-03-06',
    intro: "Meet Laura! She studied abroad in Madrid this past fall (and coincidentally stayed in the same homestay as the founder of Log). She's sharing the restaurants, cafés, nightlife, and gems that made her semester unforgettable.",
    recs: [
      {
        category: 'Food',
        name: 'Tramo',
        thoughts: 'Really beautiful interior, fancier restaurant. Close to my homestay which was a nice find. Food and service were incredible but definitely a splurge meal.',
        rating: 4.5,
        website: 'https://espaciotramo.com/',
        photo: '/images/laurablogphotos/Tramo.jpeg',
      },
      {
        category: 'Food',
        name: 'La Casa del Abuelo',
        thoughts: 'Close to the center of the city. A very local spot, not many tourists inside. Amazing Spanish tapas, the best Spanish tortilla I\'ve ever had.',
        rating: 4.7,
        website: 'https://www.lacasadelabuelo.es/',
        photo: null,
      },
      {
        category: 'Food',
        name: 'Laprospe Terraza Gastrobar',
        thoughts: 'This is a bar/restaurant with outdoor seating. Great tinto de verano, a fun outdoor vibe, and a good place to start our evening. A cheaper choice 10–20 euros for dinner and directly by the metro.',
        rating: 4.0,
        website: 'https://www.instagram.com/laprospeterraza/',
        photo: null,
      },
      {
        category: 'Nightlife',
        name: 'Salmon Guru',
        thoughts: 'Famous cocktail bar in Madrid, very popular but not as fancy as I thought inside. Cocktails are 15 euros so they are more expensive. They brought us so many free potato chips, which was incredible.',
        rating: 3.8,
        website: 'https://salmonguru.es/',
        photo: null,
      },
      {
        category: 'Nightlife',
        name: "Jack's Library",
        thoughts: "This is a speakeasy that we found. Ended up being super popular in our cohort. Sometimes it has an abysmal line and no photos allowed inside. Probably my favorite bar we went to. Comfy lounge inside but pretty expensive drinks. Worth going at least once.",
        rating: 5.0,
        website: 'https://salmonguru.es/',
        photo: null,
      },
      {
        category: 'Nightlife',
        name: 'Istar',
        thoughts: 'Really expensive drinks (like 18 euros for a vodka soda) and really expensive tickets but if you know a promoter can get in for free. Weeknights are easier to get in. I actually really liked the interior (looks like a fancy cave), definitely a nicer club vibe so dress up a bit. Gets full really late (around 2ish).',
        rating: 3.5,
        website: 'https://istar-club.com/',
        photo: '/images/laurablogphotos/Istar.jpeg',
      },
      {
        category: 'Activities',
        name: 'Prado Museum',
        thoughts: 'One of the most famous museums in Spain, went there with my drawing class and got to see beautiful famous paintings. Got a tour with my dad, this is a must-do at least once while you are in Madrid.',
        rating: 4.3,
        website: 'https://museopradotickets.com/en',
        photo: null,
      },
      {
        category: 'Activities',
        name: 'BAM Karaoke Box Luchana',
        thoughts: 'A karaoke bar where each group gets its own room so you control the music you sing. Was a fun way to learn Spanish music.',
        rating: 3.5,
        website: 'https://es.bam-karaokebox.com/madrid/luchana/',
        photo: '/images/laurablogphotos/Karaoke.jpeg',
      },
      {
        category: 'Activities',
        name: 'El Rastro',
        thoughts: 'Market that happens near La Latina metro stop on Sunday mornings. Get there right when it opens because the market/metro get really busy as the day goes on. Has vintage finds and also new clothes/things you can buy. Make sure to take cash.',
        rating: 4.6,
        website: null,
        photo: '/images/laurablogphotos/Rastro.jpeg',
      },
      {
        category: 'Nature',
        name: 'Parque Retiro',
        thoughts: 'Famous park in Madrid, great place to go to feel like you\'re away from the city. Really beautiful in the fall. You can row boats on the lake which is super fun.',
        rating: 4.8,
        website: 'https://www.esmadrid.com/informacion-turistica/parque-del-retiro',
        photo: '/images/laurablogphotos/Retiro.jpeg',
      },
      {
        category: 'Nature',
        name: 'Parque de Berlin',
        thoughts: 'Smaller park near the neighborhood I stayed in. For a while they had a fair with rides in the fall. Was a nice place to sit and chill when there was good weather.',
        rating: 3.3,
        website: null,
        photo: '/images/laurablogphotos/Parque de Berlin.jpeg',
      },
      {
        category: 'Coffee',
        name: 'Kohi',
        thoughts: 'My absolute favorite coffee shop in Madrid. Definitely a hub with more international students because it is in an area where lots of study abroad kids frequent. Great coffee, really good pastries; however, there is limited seating. They have Wi-Fi but you are only allowed to use a computer on the weekdays.',
        rating: 5.0,
        website: 'https://www.instagram.com/kohi.bakery',
        photo: '/images/laurablogphotos/Kohi.jpeg',
      },
      {
        category: 'Coffee',
        name: 'En Bruto',
        thoughts: 'Delicious café/brunch place. Computers also only permitted on weekdays and you have to sit at a designated table. Came here more for brunch than to work — was pretty affordable compared to brunch places in the U.S.',
        rating: 3.7,
        website: 'https://enbruto.com/',
        photo: '/images/laurablogphotos/En Bruto.png',
      },
    ],
    tips: [
      {
        text: 'Go to San Sebastián — take the train from Madrid. Absolutely worth it.',
        photo: '/images/laurablogphotos/sansebas.JPG',
      },
      {
        text: "Use Bolt — it's Uber in Madrid and way cheaper.",
        photo: null,
      },
    ],
    closing: "All of Laura's recommendations above are saved in this Google Maps list so you can use them while exploring Madrid. Soon on LOG, you'll be able to browse her full archive of experiences from the entire semester abroad.",
    mapsLink: 'https://maps.app.goo.gl/8f3NWxe6tYwimXWo6',
  },
  {
    slug: 'paris-cafes-not-in-any-guide',
    title: 'paris cafés that aren\'t in any guidebook',
    city: 'Paris, France',
    category: 'cafés',
    coverImage: 'https://placehold.co/800x600/A8906E/EBE5DC?text=Paris+Cafés',
    description: 'four spots that Parisians actually go to. no croissant emoji on the menu, no English on the chalkboard.',
    author: 'emma l.',
    date: '2025-02-01',
    body: `<p>everyone lands in Paris with a list. most of those lists are wrong. the cafés worth going to don't have outdoor seating on the main boulevard. they're two streets back, with handwritten menus and regulars who've been coming since the 80s.</p>

<p><strong>Café de la Mairie</strong> on Place Saint-Sulpice is where you start. corner table, espresso, watch the square. it's in guides but it doesn't feel like it — the crowd is local, the vibe is unhurried.</p>

<p><strong>Le Petit Fer à Cheval</strong> in the Marais has been there since 1903. order a kir. sit at the bar. it's small enough that you'll end up in someone else's conversation by the second drink.</p>

<p><strong>Café Charbon</strong> in Oberkampf is for the evenings. belle époque interior, zinc bar, crowd that skews toward artists and people who work in record stores.</p>

<p>the rule: if there's a menu with photos, keep walking.</p>`,
  },
  {
    slug: 'buenos-aires-for-night-owls',
    title: 'buenos aires is for people who eat at midnight',
    city: 'Buenos Aires, Argentina',
    category: 'food + nightlife',
    coverImage: 'https://placehold.co/800x600/1B502F/EBE5DC?text=Buenos+Aires',
    description: 'a city that doesn\'t start until 10pm. here\'s how to do it right.',
    author: 'marcus r.',
    date: '2025-02-14',
    body: `<p>the first time you go to Buenos Aires you'll get it wrong. you'll try to have dinner at 7, you'll go to a club before midnight, you'll be home before the city wakes up. don't do that.</p>

<p>dinner starts at 9:30 at the earliest. <strong>Don Julio</strong> in Palermo is worth the wait — get there early to put your name in, get wine from the bodega next door, and drink it on the sidewalk while you wait. the asado will be worth it.</p>

<p>for late nights: <strong>Crobar</strong> doesn't fill up until 2am. <strong>El Florentin</strong> in San Telmo runs milonga nights where the old crowd and the young crowd actually mix, which doesn't happen anywhere else.</p>

<p>sleep is optional. the city will keep going without you.</p>`,
  },
  {
    slug: 'tokyo-convenience-store-guide',
    title: 'tokyo convenience stores: a serious guide',
    city: 'Tokyo, Japan',
    category: 'food',
    coverImage: 'https://placehold.co/800x600/6B6560/EBE5DC?text=Tokyo',
    description: '7-Eleven at 3am might be the best meal you have all trip. this is not a bit.',
    author: 'kai t.',
    date: '2025-03-01',
    body: `<p>people hear "convenience store" and picture sad hot dogs under fluorescent lights. they've never been to Japan. the 7-Eleven in Tokyo has better food than most restaurants you'll eat at this month.</p>

<p>the onigiri tier list (in order): tuna mayo, salmon, mentaiko. everything else is a distraction. get two.</p>

<p>for hot food: the oden in winter is non-negotiable. the nikuman (steamed pork bun) at FamilyMart is somehow perfect. the egg salad sandwiches at 7-Eleven are the subject of legitimate debate.</p>

<p>the real move is 3am after a night in Shinjuku. everything is open, everything is available, nothing costs more than $3. that's the experience.</p>`,
  },
  {
    slug: 'rome-trastevere-neighborhood',
    title: 'trastevere on a tuesday: why the timing matters',
    city: 'Rome, Italy',
    category: 'neighborhood guide',
    coverImage: 'https://placehold.co/800x600/C4A882/1A1A1A?text=Rome',
    description: 'the neighborhood everyone recommends. here\'s how to actually do it — avoid the weekend.',
    author: 'sofia m.',
    date: '2025-03-15',
    body: `<p>Trastevere gets a bad reputation from people who went on a Saturday in July. ignore them. the neighborhood is real — it just requires timing.</p>

<p>go on a Tuesday or Wednesday evening. the piazza is full but not overwhelmed. <strong>Bar San Calisto</strong> has been there since the 60s and a beer costs €1.50. locals sit outside with their dogs. it's exactly what Rome is supposed to feel like.</p>

<p>for dinner: <strong>Da Enzo al 29</strong> if you can get in. <strong>Tonnarello</strong> if you can't. both are good. the cacio e pepe will ruin all other cacio e pepe for you, which is a problem you'll have to deal with later.</p>

<p>the streets are best after 10pm when the restaurants are still full but the tourist groups have moved on.</p>`,
  },
  {
    slug: 'copenhagen-coffee-scene',
    title: 'copenhagen and the art of actually slow mornings',
    city: 'Copenhagen, Denmark',
    category: 'cafés',
    coverImage: 'https://placehold.co/800x600/1A1A1A/EBE5DC?text=Copenhagen',
    description: 'a city that takes coffee seriously in all the right ways. three cafés that changed how we think about mornings.',
    author: 'zoe b.',
    date: '2025-04-01',
    body: `<p>Copenhagen gets hygge right and everyone knows it. what people don't talk about is that the coffee scene here is quietly one of the best in Europe — without any of the pretension you'd find in Berlin or London.</p>

<p><strong>The Coffee Collective</strong> in Frederiksberg roasts their own, sources directly, and treats it like something worth caring about. get the pour-over, sit by the window, block out two hours.</p>

<p><strong>Democratic Coffee</strong> near Nørreport is the everyday spot — good coffee, beautiful light, people working on things that might matter. the kind of place you find yourself returning to every morning for a week.</p>

<p><strong>Prolog Coffee Bar</strong> in Vesterbro is where the coffee community actually goes. small, focused, serious without being cold. the natural process Ethiopian is usually the move.</p>

<p>the thing about Copenhagen mornings: nobody is rushing. there's something to learn from that.</p>`,
  },
]

export default posts
