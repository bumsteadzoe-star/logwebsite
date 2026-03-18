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
        thoughts: 'Close to the center of the city. A more local spot, not many tourists inside. Amazing Spanish tapas, the best Spanish tortilla I\'ve ever had.',
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
        thoughts: 'Really expensive drinks (like 18 euros for a vodka soda) and really expensive tickets but if you know a promoter can get in for free. I actually really liked the interior (looks like a fancy cave), definitely a nicer club vibe so dress up a bit. Gets full really late (around 2ish).',
        rating: 3.5,
        website: 'https://istar-club.com/',
        photo: '/images/laurablogphotos/Istar.jpeg',
      },
      {
        category: 'Activities',
        name: 'Prado Museum',
        thoughts: 'One of the most famous museums in Spain, went there with my drawing class and got to see beautiful famous paintings. This is a must-do at least once while you are in Madrid.',
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
    published: true,
    type: 'study-abroad',
    slug: 'madhav-capetown-adventures',
    title: "Madhav's Cape Town Adventures",
    city: 'Cape Town, South Africa',
    category: 'Gap Year',
    coverImage: '/images/madhavblogphotos/cover.jpg',
    description: "Madhav's favorite spots from 6 months living in Cape Town during his gap year.",
    author: 'Madhav Prakash',
    date: '2026-03-17',
    intro: "This is Madhav. He is known as the king of the world and has been called the most charming person to ever exist. He lived in Cape Town for 6 months during his gap year before college, these are his absolute favorite recommendations from his time there.",
    recs: [
      {
        category: 'Food',
        name: 'The Victoria & Alfred Waterfront',
        thoughts: "Looks out onto the waterfront. Huge open-air pier with wooden floors and a strip wall. Has the best popup food with free samples, and also fancier spots. If it's your vibe, you can get dinner on the catamarans. They have the Oranjezicht farmers market 3 times a week here.",
        rating: 5.0,
        website: 'https://www.waterfront.co.za/',
        photo: '/images/madhavblogphotos/farmers.jpg',
      },
      {
        category: 'Food',
        name: 'Ferdinandos Pizza',
        thoughts: "It's in Observatory, the stanford abroad student neighborhood. They handpaint a picture of the dog it's named after on the pizza boxes. Great chili oil and pizza.",
        rating: 5.0,
        website: 'https://ferdinandospizza.com/',
        photo: '/images/madhavblogphotos/pizza.jpg',
      },
      {
        category: 'Food',
        name: 'The Salt River or Altona Fisheries',
        thoughts: "They have a huge fish and chips culture, specifically hot chips. They have a pirinaise sauce that is famous, its generally a spicy red sauce and they have a chips sauce that is so awesome. They also sell gatsbys, the national food. A 3-foot long baguette sandwich with steak, hot chips, and a ton of sauce. Such a great vibe.",
        rating: 5.0,
        website: 'https://www.instagram.com/altonafisheries/',
        photo: null,
      },
      {
        category: 'Nightlife',
        name: 'First Thursdays',
        thoughts: "Cape Town has First Thursdays — all the streets are shut off to cars from 8pm on the first Thursday of every month. All art galleries are free, all clubs and bars are discounted, and the streets become a party. Everything is free or cheap, there is every variety of music and people, and you get to be drunk in the streets and walk around all these cool art galleries. These were my favorite nights going out.",
        rating: 5.0,
        website: 'https://www.first-thursdays.co.za/city/cape-town',
        photo: null,
      },
      {
        category: 'Nightlife',
        name: 'Armchair Theatre',
        thoughts: "Located in the student neighbourhood of Observatory, the Armchair Theatre is a pub, watering hole, dance floor, restaurant, and community center all in one. Trivia once a week, open mics all the time — it's where the young of Cape Town gather at nights for a reliably fantastic time dancing and making love.",
        rating: 5.0,
        website: 'https://armchair.kamooni.africa/',
        photo: '/images/madhavblogphotos/armchair.jpg',
      },
      {
        category: 'Nightlife',
        name: 'Modular on Riebeeck Street',
        thoughts: "Harder to find. Club in an unassuming alley — there are 3 sets of staircases going underground. You go inside and it's like Berghain. It's a clothes-optional, deep dark euro techno environment. Each staircase goes to a different club; as you go farther down they get more deep and techno, the earlier ones are more chill. Cape Town has a lot of mainstream clubs where they play white girl music, but this is the best for Afrobeats and up-and-coming artists off the beaten path.",
        rating: 5.0,
        website: 'https://www.instagram.com/modular_cape_town/?hl=en',
        photo: null,
      },
      {
        category: 'Nature',
        name: '3 Peaks Challenge',
        thoughts: "Cape Town is a city with 3 mountains in it. There is this thing called the 3 Peaks Challenge. You leave before dawn, summit and come down each of the mountains, and reach the top of the last one by sunset. You can do it with friends or compete — each mountain is a different type of hike. You get amazing views of every side of the city, vineyards, etc. If you time it right there are low clouds that sit on top of Table Mountain, called the \"tablecloth\" — try to time it to see this. It's one of the most beautiful things I have ever seen.",
        rating: 5.0,
        website: 'https://www.threepeakschallenge.co.za/',
        photo: '/images/madhavblogphotos/3peaknew.jpg',
      },
      {
        category: 'Nature',
        name: 'Boulders Beach',
        thoughts: "Boulders Beach costs money to enter. Instead, if you enter from the side, walk over rock formations, and swim a bit you can get in for free. Tide pooling is the best I've ever seen — nothing beats it, and I've been tidepooling in 5 continents. The coral has more color than you have ever seen. This all leads into to the beach with penguins. It's the most incredible thing ever — don't get too close to the penguins, but so incredible.",
        rating: 5.0,
        website: 'https://www.sanparks.org/parks/table-mountain/what-to-do/attractions/boulders-penguin-colony',
        photo: '/images/madhavblogphotos/boulder.jpg',
      },
      {
        category: 'Nature',
        name: 'Kirstenbosch',
        thoughts: "Beautiful botanical garden. There are huge purple flowers everywhere. In all directions people are walking their dogs. This is the first time I ever did magic mushrooms, and I could never recommend any other location to anybody ever for their first ever trip because of these massive cliffs that look onto huge natural orchards. It's beautiful.",
        rating: 5.0,
        website: 'https://www.sanbi.org/gardens/kirstenbosch/',
        photo: null,
      },
      {
        category: 'Activities',
        name: 'Hop-On Hop-Off Bus & Stellenbosch Vineyards',
        thoughts: "Only city I've found worth it to take the hop-on hop-off bus. It takes you south to Stellenbosch, where all the vineyards are. In the global south, they are one of the biggest wine producers in the world. You can do 3 stops on the hop-on hop-off bus — it has the best wine and best chocolate in all of the city at great prices. They let you walk through all the vineyards and give you a map of all the stops you can do.",
        rating: 5.0,
        website: 'https://vinehopper.co.za/',
        photo: '/images/madhavblogphotos/madbus.jpg',
      },
      {
        category: 'Activities',
        name: 'Route 62 Road Trip',
        thoughts: "Starts at Cape Town and goes to Port Elizabeth. You rent a car and can be there and back in 5–6 days. You drive through reserves with elephants and giraffes, cities and towns with deep pre-apartheid culture, and through Mossel Bay, which has the best seafood I have ever eaten. The mountain passes are beautiful and you drive along the ocean for a lot of it.",
        rating: 5.0,
        website: 'https://route62.co.za/',
        photo: '/images/madhavblogphotos/roadtrip.jpg',
      },
      {
        category: 'Activities',
        name: 'Rugby at Cape Town Stadium',
        thoughts: "You must go to a rugby game, even if you have no idea what's going on. Cape Town Stadium is where Shakira performed \"Waka Waka.\" Super fun to go and drink with friends.",
        rating: 5.0,
        website: 'https://dhlstadium.co.za/events/event-detail/u20-world-rugby-dhl-stadium',
        photo: '/images/madhavblogphotos/rugby.jpeg',
      },
    ],
    tips: [
      {
        text: "Find a South African friend to invite you to their family braais (barbeques) on the weekend, it's a huge fun part of the culture there.",
        photo: null,
      },
      {
        text: "Don't be afraid of the taxis. They are minivans that run on set routes, cost about 10 cents, and take you where you want to go. They hang out and call out the destination they're headed to, and come on regular schedules. They're such a cultural experience and the most convenient, cheapest way to get around.",
        photo: null,
      },
    ],
    closing: "All of Madhav's recommendations above are saved in this Google Maps list so you can use them while exploring Cape Town.",
    mapsLink: 'https://maps.app.goo.gl/mVvkvmMTJUrpyUeg8',
    spotifyLink: 'https://open.spotify.com/playlist/0xLMzZC2NL61WDadnMGOkC?si=0bFjwOlYQ_aE3WC9fqL1Mg&pi=twyyU_-CSH22f',
  },
  {
    published: true,
    type: 'trip',
    slug: 'charlie-morocco-itinerary',
    title: "Charlie's Morocco Weekend",
    city: 'Marrakesh, Morocco',
    category: 'Trip',
    coverImage: '/images/charlieblogphotos/cover2.jpg',
    description: "Charlie's exact 4-night Morocco itinerary — the most requested rec from her semester abroad in Florence.",
    author: 'Charlie Herrin',
    date: '2026-03-18',
    intro: "Charlie is incredibly on top of her shit and always has the best plan. This is her most requested rec — her Morocco long weekend itinerary. She did this trip while studying abroad in Florence, and people have been asking for her exact plan ever since.",
    recs: [
      {
        category: 'Getting There — From Florence',
        name: 'Fly Pisa → Marrakesh Direct',
        thoughts: 'Take a train from Florence to Pisa, then fly direct from Pisa to Marrakesh. The flights are way cheaper than flying from Florence and it\'s only about a 3-hour flight. Have your Airbnb address and all info ready before you land — customs can be pretty strict. They\'ll ask for your exact address and give you a hard time if you don\'t have everything prepared.',
        rating: 5.0,
        website: null,
        photo: null,
      },
      {
        category: 'Night 1 · Friday — Arrive in Marrakesh',
        name: 'Riad Airbnb in Marrakesh',
        thoughts: 'Really, really beautiful. Super close to the Suks and the city center, but in a calm, quiet area — walking distance from everywhere we wanted to go. The host was wonderful, it was stunning, and very, very cheap. Nice to have a quiet home base that\'s still close to the action.',
        rating: 5.0,
        website: 'https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMFT8TQRTW',
        photo: null,
      },
      {
        category: 'Day 2 · Saturday — Marrakesh',
        name: 'Guided Tour through the Suks',
        thoughts: 'Highly recommend having a guide. You get to see all the coolest stuff, they teach you how to haggle, and they\'re friends with all the vendors — it just feels like a much more connected experience. Yvette from Sahara Touring arranged for a guide to give us a historical architecture tour of downtown Marrakesh and take us through the Suks.',
        rating: 5.0,
        website: null,
        photo: '/images/charlieblogphotos/suks-tour.jpg',
      },
      {
        category: 'Day 2 · Saturday — Marrakesh',
        name: 'Full Moroccan Hammam & Spa',
        thoughts: 'Do this in the later half of your afternoon in Marrakesh. Really affordable, really cool, and totally authentic. An absolute must.',
        rating: 5.0,
        website: null,
        photo: null,
      },
      {
        category: 'Day 2 · Saturday — Marrakesh',
        name: 'Dar Dar Rooftop',
        thoughts: 'Really tasty and really cool. It\'s in the Suks in Old Town — hard to get to, but worth it. A beautiful rooftop restaurant with incredible food.',
        rating: 5.0,
        website: 'https://rooftopdardar.com',
        photo: '/images/charlieblogphotos/dar-dar.jpg',
      },
      {
        category: 'Day 3 · Sunday — Drive to the Desert',
        name: 'Sahara Touring',
        thoughts: 'The most incredible experience I\'ve ever had working with a company like this. Yvette was our point person — she was so sweet, gave us a discount when we needed one, and was very willing to work within our budget. They arranged all the car services, handled local contacts, and recommended restaurants. It was really, really easy. Anyone going to Morocco should 100% use this company. It\'s Berber-owned and operated — the nomadic people who are indigenous to Morocco and have lived in the desert for centuries. They pick you up from your Airbnb at 4–5am for a 7-hour drive to the desert, arriving at the perfect time for sunset.',
        rating: 5.0,
        website: 'https://saharatouring.com',
        photo: '/images/charlieblogphotos/sahara-touring.jpg',
      },
      {
        category: 'Day 3 · Sunday — Drive to the Desert',
        name: 'The Desert Camp',
        thoughts: 'A seven-hour drive from Marrakesh but so, so worth it. Both tiers of camp are really nice — when we walked into ours we thought we were staying at the nicer one, you genuinely can\'t tell the difference.',
        rating: 5.0,
        website: null,
        photo: '/images/charlieblogphotos/desert-camp.jpg',
      },
      {
        category: 'Day 4 · Monday — The Desert',
        name: 'ATV Riding in the Sand Dunes',
        thoughts: 'Full day in the sand dunes. So worth it.',
        rating: 5.0,
        website: null,
        photo: '/images/charlieblogphotos/atv-ride.jpg',
      },
      {
        category: 'Day 4 · Monday — The Desert',
        name: 'Camel Ride to the Highest Dune',
        thoughts: 'Rode a camel to the highest dune in the desert. Nothing short of a spiritual experience. This is what people absolutely must do when they go — the highlight of the whole trip.',
        rating: 5.0,
        website: null,
        photo: '/images/charlieblogphotos/camel-ride.jpg',
      },
    ],
    tips: [
      {
        text: 'Use a locally owned company — Book everything through Sahara Touring. It\'s Berber-owned and operated and it just feels good to support them. They handle everything — car services, local contacts, restaurant recs. Really, really easy to work with.',
        photo: null,
      },
      {
        text: 'Go for the cultural immersion — Treat Morocco as a place you\'ve never been before that\'s totally different. Way better to learn from the locals and get recs from them. Morocco is incredibly affordable — make sure to eat local.',
        photo: null,
      },
      {
        text: 'Buy alcohol at the airport — If you plan on drinking in Morocco. There are very few places to buy it in the country since drinking isn\'t common — it\'s a Muslim country.',
        photo: null,
      },
      {
        text: 'Customs at Marrakesh Airport — Pretty strict. Have your accommodation address and all info ready before you get to the desk or they will give you a hard time.',
        photo: null,
      },
    ],
    closing: "Sahara Touring handles everything once you're on the ground — contact Yvette directly when you book.",
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
