const posts = [
  {
    published: true,
    slug: 'nyc-lower-east-side-night',
    title: 'lower east side at 1am: the bars that actually matter',
    city: 'New York, NY',
    category: 'bars',
    coverImage: '/images/film3.jpg',
    description: 'started at Attaboy, ended somewhere we\'re still trying to place on a map. here\'s the full route.',
    author: 'zoe b.',
    date: '2025-01-15',
    stars: 4.5,
    body: [
      { type: 'paragraph', text: 'everyone talks about the lower east side like it\'s still 2015. they\'re wrong — it\'s better now, just different. the tourist traps have mostly cleared out and what\'s left is something that actually feels like a neighborhood.' },
      { type: 'paragraph', text: 'start at Attaboy on Eldridge. no menu, just tell them what you\'re feeling. they\'ll make something good. it\'s small, it fills up fast, but the bartenders actually care about their craft and it shows.' },
      { type: 'paragraph', text: 'from there, cut over to Scarr\'s if you want a slice first (you do), then walk down to The Flower Shop on Rivington. it\'s louder, it\'s dancier, it\'s the kind of place where you stay two hours longer than you planned.' },
      { type: 'paragraph', text: 'end the night at Mehanata if you\'re still standing. bulgarian bar, ice cage, live accordion. trust the process.' },
      { type: 'paragraph', text: 'the whole route takes about 4 hours if you pace yourself. the LES rewards wandering — half the fun is the 2am block you\'ve never walked before.' },
    ],
    locationLinks: [
      { name: 'Attaboy', url: 'https://maps.app.goo.gl/attaboy' },
      { name: "Scarr's Pizza", url: 'https://maps.app.goo.gl/scarrs' },
      { name: 'The Flower Shop', url: 'https://maps.app.goo.gl/flowershop' },
      { name: 'Mehanata', url: 'https://maps.app.goo.gl/mehanata' },
    ],
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
