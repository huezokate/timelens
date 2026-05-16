export type Partner = {
  id: string;
  name: string;
  type: 'cafe' | 'museum' | 'shop' | 'attraction';
  tagline: string;
  since?: number;
};

export type Era = {
  year: number;
  label: string;
  description: string;
  gradientKey: string;
};

export type Location = {
  id: string;
  name: string;
  shortName: string;
  groupId: string;
  coords: { lat: number; lng: number };
  eras: Era[];
  partners: Partner[];
};

export type Group = {
  id: string;
  name: string;
  tagline: string;
  locationCount: number;
  eraRange: [number, number];
  accentColor: string;
};

export const ERA_GRADIENTS: Record<string, string> = {
  '1850s': 'linear-gradient(160deg, #1a1208 0%, #3d2b10 50%, #1a0f05 100%)',
  '1890s': 'linear-gradient(160deg, #0f1a12 0%, #1e3320 60%, #0a1008 100%)',
  '1920s': 'linear-gradient(160deg, #0d0d1a 0%, #1a1a2e 50%, #0a0a14 100%)',
  '1950s': 'linear-gradient(160deg, #1a0a0a 0%, #2e1a0d 60%, #0f0a08 100%)',
  '1980s': 'linear-gradient(160deg, #0a1220 0%, #0d1f35 50%, #08101a 100%)',
  '2020s': 'linear-gradient(160deg, #101418 0%, #1a2028 50%, #0c1014 100%)',
};

export const groups: Group[] = [
  {
    id: 'waterfront',
    name: 'SF Waterfront',
    tagline: 'From Gold Rush docks to the modern Embarcadero',
    locationCount: 5,
    eraRange: [1849, 2023],
    accentColor: '#BFE2F4',
  },
  {
    id: 'cultural',
    name: 'Cultural Districts',
    tagline: 'Chinatown, North Beach & the beating heart of the city',
    locationCount: 4,
    eraRange: [1850, 2023],
    accentColor: '#F5C97A',
  },
  {
    id: 'parks',
    name: 'Parks & Nature',
    tagline: "From sand dunes to the world's most visited park",
    locationCount: 3,
    eraRange: [1870, 2023],
    accentColor: '#72AD91',
  },
  {
    id: 'civic',
    name: 'Civic SF',
    tagline: 'City Hall, the Embarcadero, and the streets that shaped democracy',
    locationCount: 3,
    eraRange: [1850, 2023],
    accentColor: '#DA4C29',
  },
];

export const locations: Location[] = [
  // ── WATERFRONT ──────────────────────────────────────────────────────────────
  {
    id: 'ferry-building',
    name: 'Ferry Building',
    shortName: 'Ferry Bldg',
    groupId: 'waterfront',
    coords: { lat: 37.7956, lng: -122.3935 },
    eras: [
      {
        year: 1875,
        label: 'Ferry Terminus Era',
        gradientKey: '1850s',
        description:
          'The original Ferry House opened in 1875 as a simple wooden shed on the waterfront, funneling thousands of daily commuters across the Bay. Horse-drawn streetcars rattled down Market Street to meet the boats, making this the undisputed gateway to San Francisco. The mudflats and piers stretched in every direction, alive with the noise of commerce and immigration.',
      },
      {
        year: 1906,
        label: 'Post-Earthquake Rebuild',
        gradientKey: '1890s',
        description:
          "The 1906 earthquake and fire devastated much of San Francisco, but the Ferry Building's clock tower survived as a lone sentinel over the ruined city. Survivors flooded through its doors seeking passage to Oakland as fires consumed the hills behind them. Within months, the rebuilt city began rising and the Ferry Building resumed its role as the region's busiest transit hub.",
      },
      {
        year: 1936,
        label: 'Streamline Moderne',
        gradientKey: '1920s',
        description:
          'By the mid-1930s the Ferry Building processed over 50,000 passengers a day, making it the second-busiest transit terminal in the world after Charing Cross in London. The new Bay Bridge opened in November 1936, beginning the slow decline of ferry service as automobiles took over. The great hall hummed with vendors, newsstands, and the constant thunder of footsteps.',
      },
      {
        year: 1990,
        label: 'Freeway Years',
        gradientKey: '1950s',
        description:
          'The double-deck Embarcadero Freeway, built in 1959, severed the Ferry Building from the city it once served, casting a gloomy concrete shadow over the waterfront. Ferry service had collapsed almost entirely; the grand hall fell into institutional use by state agriculture offices. The building that once defined San Francisco had become an afterthought behind a wall of traffic.',
      },
      {
        year: 2023,
        label: 'Marketplace Revival',
        gradientKey: '2020s',
        description:
          'The 1989 Loma Prieta earthquake destroyed the freeway that had buried the building for decades, and a sweeping renovation reopened the Ferry Building as a celebrated food marketplace in 2003. Today artisan vendors, farm stands, and acclaimed restaurants fill the 65,000-square-foot hall. The Saturday farmers market draws thousands, and ferries once again connect the Bay.',
      },
    ],
    partners: [
      {
        id: 'buena-vista',
        name: 'Buena Vista Cafe',
        type: 'cafe',
        tagline: 'First Irish coffee in America',
        since: 1916,
      },
      {
        id: 'sf-maritime',
        name: 'SF Maritime NHP',
        type: 'museum',
        tagline: 'Living history on the water',
      },
      {
        id: 'gotts',
        name: "Gott's Roadside",
        type: 'cafe',
        tagline: 'Classic diner, modern SF',
      },
    ],
  },
  {
    id: 'pier-43',
    name: 'Pier 43',
    shortName: 'Pier 43',
    groupId: 'waterfront',
    coords: { lat: 37.8083, lng: -122.4116 },
    eras: [
      {
        year: 1854,
        label: 'Gold Rush Wharf',
        gradientKey: '1850s',
        description:
          'In the frantic years after gold was discovered at Sutter\'s Mill, makeshift wharves like this one stretched into the Bay to reach the hundreds of ships anchored offshore. Fortunes arrived and left on these planks — supplies, miners, and manufactured goods all passed through at dizzying speed. The waterfront was barely a year old, yet it already ranked among the busiest ports in the western hemisphere.',
      },
      {
        year: 1916,
        label: 'Industrial Port',
        gradientKey: '1890s',
        description:
          'By the early twentieth century Pier 43 had transformed into a serious industrial shipping terminal, with longshoremen working around the clock to load and unload freighters from around the Pacific. Labor organizers were beginning to agitate for better pay and safer conditions, tensions that would explode in the legendary 1934 General Strike. The smell of fish, diesel, and saltwater defined life at the Embarcadero.',
      },
      {
        year: 1945,
        label: 'War Mobilization',
        gradientKey: '1920s',
        description:
          "During World War II San Francisco's port became the primary embarkation point for troops and materiel headed to the Pacific Theater. Pier 43 saw convoys of soldiers shipping out — many never to return — alongside mountains of military equipment. The piers worked day and night under strict wartime security, with the city's fate and that of the Pacific theater bound together at the waterfront.",
      },
      {
        year: 1971,
        label: 'Decline & Graffiti',
        gradientKey: '1950s',
        description:
          'Containerization had gutted the old break-bulk shipping industry by the early 1970s, leaving Pier 43 and its neighbors underutilized and crumbling. Graffiti spread across weathered wood and rusting iron; abandoned warehouses became havens for artists and the unhoused. The waterfront that had defined San Francisco\'s economy for a century fell into a strange, melancholy quiet.',
      },
      {
        year: 2021,
        label: 'Blue Greenway',
        gradientKey: '2020s',
        description:
          "The Blue Greenway project reimagined Pier 43 and the surrounding Central Waterfront as a continuous public promenade connecting the Bay Trail to China Basin. New seating plazas, native plantings, and improved bay access have stitched former industrial land back into the city's fabric. On any sunny day cyclists, joggers, and families share the reclaimed waterfront that once belonged only to commerce.",
      },
    ],
    partners: [
      {
        id: 'eagle-cafe',
        name: 'Eagle Cafe',
        type: 'cafe',
        tagline: 'Historic waterfront dining',
        since: 1928,
      },
      {
        id: 'alcatraz-landing',
        name: 'Alcatraz Landing',
        type: 'attraction',
        tagline: 'Boats to the Rock',
      },
      {
        id: 'boudin',
        name: 'Boudin Bakery',
        type: 'shop',
        tagline: 'Sourdough since the Gold Rush',
        since: 1849,
      },
    ],
  },
  {
    id: 'fishermans-wharf',
    name: "Fisherman's Wharf",
    shortName: "Fish. Wharf",
    groupId: 'waterfront',
    coords: { lat: 37.8099, lng: -122.4103 },
    eras: [
      {
        year: 1890,
        label: 'Italian Fishing Village',
        gradientKey: '1890s',
        description:
          'Sicilian and Genoese immigrant fishermen established a close-knit enclave here in the late nineteenth century, launching their feluccas before dawn to harvest Dungeness crab and bay shrimp. The waterfront smelled of fish sauce and fresh bread; the language was Italian and the streets were ruled by fishing families with names like Alioto, Tarantino, and Sabella. This was a working waterfront, proud and self-contained.',
      },
      {
        year: 1930,
        label: 'Dungeness Crab Era',
        gradientKey: '1920s',
        description:
          'The 1930s saw Fisherman\'s Wharf establish its iconic identity around the cracked-crab stands and steaming crab pots that lined the curb outside the packing sheds. Prohibition had come and gone; the Depression had tightened belts, but the crab boats still went out every morning. Tourists were just beginning to discover the Wharf, drawn by its salty authenticity and the cheap, spectacular seafood.',
      },
      {
        year: 1962,
        label: 'Beatnik Tourists',
        gradientKey: '1950s',
        description:
          "San Francisco's Beat literary explosion put the city on the cultural map, and curious visitors began arriving in numbers that surprised even the most optimistic restaurateurs. The Wharf added souvenir shops alongside the crab pots, and Fisherman's Grotto became a destination dining room where you could watch sea lions from your table. The fishing families remained but were increasingly outnumbered by tourism workers.",
      },
      {
        year: 1990,
        label: 'Souvenir District',
        gradientKey: '1980s',
        description:
          'By the 1990s Fisherman\'s Wharf had completed its transformation from working fishing village to full tourist destination, with t-shirt shops, chain restaurants, and Pier 39 sea lion viewing drawing millions annually. The original Sicilian fishing families were largely gone or retired; the working boats that remained were vastly outnumbered by pleasure craft and dinner-cruise vessels. The Wharf was beloved and slightly kitschy.',
      },
      {
        year: 2023,
        label: 'Wharf Revival',
        gradientKey: '2020s',
        description:
          "A new generation of restaurateurs and artisans has brought thoughtful food and craft back to the Wharf, sitting alongside the enduring classics. The pandemic forced many shops to close but created space for businesses with stronger local identity and better sourcing. Today the Wharf balances its tourist heritage with a renewed connection to the Bay's seafood traditions and the immigrant families who built it.",
      },
    ],
    partners: [
      {
        id: 'aliotos',
        name: "Alioto's Restaurant",
        type: 'cafe',
        tagline: '7 decades on the wharf',
        since: 1925,
      },
      {
        id: 'fish-chips',
        name: 'Fish & Chips by the Bay',
        type: 'cafe',
        tagline: 'Straight from the water',
      },
      {
        id: 'musee-mecanique',
        name: 'Musée Mécanique',
        type: 'museum',
        tagline: '100 years of arcade machines',
      },
    ],
  },
  {
    id: 'exploratorium',
    name: 'Exploratorium at Pier 17',
    shortName: 'Exploratorium',
    groupId: 'waterfront',
    coords: { lat: 37.8015, lng: -122.3984 },
    eras: [
      {
        year: 1915,
        label: 'Palace of Fine Arts',
        gradientKey: '1890s',
        description:
          "The Panama-Pacific International Exposition of 1915 transformed the Marina District's tidal flats into a magnificent world's fair celebrating San Francisco's miraculous recovery from the 1906 earthquake. Bernard Maybeck's Palace of Fine Arts was the only structure deliberately preserved after the fair closed, its rotunda and colonnades becoming one of the city's most beloved landmarks. The exposition drew 19 million visitors and announced SF's return to the world stage.",
      },
      {
        year: 1969,
        label: 'Science Frontier',
        gradientKey: '1950s',
        description:
          'Physicist Frank Oppenheimer — brother of Robert and a victim of McCarthyite blacklisting — founded the Exploratorium inside the Palace of Fine Arts in 1969, creating a radically new kind of science museum where visitors could touch, manipulate, and experiment with exhibits. The hands-on model was revolutionary and enormously influential on science education worldwide. In its original home it felt like a beautiful, organized chaos.',
      },
      {
        year: 1990,
        label: 'Expansion Era',
        gradientKey: '1980s',
        description:
          'Decades of expansion had filled every corner of the Palace of Fine Arts with hundreds of exhibits, creating a beloved but increasingly cramped institution. The Exploratorium\'s influence on interactive science museums around the world had grown enormous, but its physical home was struggling to contain both the exhibits and the crowds. Planning began for a new facility that could fulfill the institution\'s ambitious educational mission.',
      },
      {
        year: 2013,
        label: 'Waterfront Move',
        gradientKey: '1950s',
        description:
          'In 2013 the Exploratorium completed its dramatic relocation from the Palace of Fine Arts to a new 330,000-square-foot facility at Pier 15 on the Embarcadero. The industrial pier was transformed into a state-of-the-art museum with outdoor exhibits extending onto the bay itself, letting visitors experience science in direct contact with the tidal environment. The move was the most complex museum relocation in American history.',
      },
      {
        year: 2023,
        label: 'Living Laboratory',
        gradientKey: '2020s',
        description:
          "The Pier 17 Exploratorium now operates as a genuine public science laboratory open to the city, with the Tinkering Studio and outdoor bay galleries allowing experiments you couldn't run anywhere else. Monitoring equipment tracks bay water quality and weather in real time; artists and scientists collaborate on exhibits that blur disciplinary boundaries. The waterfront location has made the museum feel genuinely embedded in the natural system it studies.",
      },
    ],
    partners: [
      {
        id: 'the-ramp',
        name: 'The Ramp',
        type: 'cafe',
        tagline: 'Waterfront dive bar since 1950',
      },
      {
        id: 'giants-dugout',
        name: 'Giants Dugout Store',
        type: 'shop',
        tagline: 'Official Giants gear on the water',
      },
      {
        id: 'pier-39-sealions',
        name: 'Pier 39 Sea Lions',
        type: 'attraction',
        tagline: "The Bay's most famous residents",
      },
    ],
  },
  {
    id: 'oracle-park',
    name: 'Oracle Park Waterfront',
    shortName: 'Oracle Park',
    groupId: 'waterfront',
    coords: { lat: 37.7786, lng: -122.3893 },
    eras: [
      {
        year: 1890,
        label: 'Potrero Mudflats',
        gradientKey: '1890s',
        description:
          "Before the ballpark, the southern waterfront was a tidal marsh and mudflat known as China Basin, receiving the outflow of Mission Creek. Tanneries, slaughterhouses, and light industrial plants occupied the surrounding blocks, drawn by cheap land and Bay access. The mudflats were alive with shorebirds and the distant sounds of Market Street's commerce drifting south.",
      },
      {
        year: 1958,
        label: 'Seals Stadium Era',
        gradientKey: '1950s',
        description:
          "The Giants' move from New York to San Francisco in 1958 electrified the city, even though the team played initially at Seals Stadium in the Mission before Candlestick Park opened in 1960. San Francisco had longed for major league baseball, and the arrival of Willie Mays transformed the city's sporting identity overnight. China Basin remained industrial, but the idea of waterfront baseball was already taking hold in the local imagination.",
      },
      {
        year: 1989,
        label: 'Earthquake Series',
        gradientKey: '1980s',
        description:
          "The 1989 World Series between the Giants and the Oakland A's was interrupted by the Loma Prieta earthquake, which struck minutes before Game 3 was set to begin at Candlestick Park. The quake killed 63 people and caused massive destruction across the Bay Area. When the Series resumed ten days later, the Giants lost, but the city's resilience and the strange beauty of the interrupted Fall Classic were impossible to forget.",
      },
      {
        year: 2000,
        label: 'Opening Day',
        gradientKey: '1950s',
        description:
          "Pacific Bell Park — built entirely with private funds, the first privately financed ballpark since Dodger Stadium — opened on April 11, 2000, with the Giants defeating the Dodgers 6–3. The stadium\'s brick exterior, low sight lines, and dramatic right-field splash zone into McCovey Cove were immediately celebrated as a masterpiece of ballpark design. San Francisco had finally gotten the waterfront stadium its geography always demanded.",
      },
      {
        year: 2023,
        label: 'McCovey Cove',
        gradientKey: '2020s',
        description:
          "Oracle Park has matured into one of baseball's great urban venues, with McCovey Cove drawing kayakers hoping to retrieve splash home run balls hit by Barry Bonds's successors. The China Basin neighborhood around the park has transformed from industrial wasteland to one of the city's most desirable addresses. On game nights the entire waterfront glows, a reminder that baseball chose the right city and the right location.",
      },
    ],
    partners: [
      {
        id: 'momos',
        name: "MoMo's",
        type: 'cafe',
        tagline: 'Giants bar since 1998',
        since: 1998,
      },
      {
        id: 'china-basin-park',
        name: 'China Basin Park',
        type: 'attraction',
        tagline: 'Urban waterfront park',
      },
      {
        id: 'left-field-brewery',
        name: 'Left Field Brewery',
        type: 'cafe',
        tagline: 'Craft beer with a ballpark view',
        since: 2017,
      },
    ],
  },

  // ── CULTURAL ─────────────────────────────────────────────────────────────────
  {
    id: 'chinatown-gate',
    name: 'Chinatown Gate',
    shortName: 'Chinatown',
    groupId: 'cultural',
    coords: { lat: 37.7908, lng: -122.4079 },
    eras: [
      {
        year: 1850,
        label: 'First Arrivals',
        gradientKey: '1850s',
        description:
          "Chinese immigrants began arriving in San Francisco during the Gold Rush, settling in a few blocks south of Portsmouth Square that would become one of the most densely populated neighborhoods in the world. Without the protective gate that now marks the entrance, the district's boundaries were informal but intensely felt — Chinese merchants, laborers, and families building community under mounting legal discrimination. Sacramento Street was the commercial heart, lined with shops selling goods from Guangdong Province.",
      },
      {
        year: 1906,
        label: 'Destruction & Rebuild',
        gradientKey: '1890s',
        description:
          "The earthquake and fire of April 1906 obliterated Chinatown entirely, giving anti-Chinese politicians a brief hope that the community would be displaced to a remote location. The Chinese community moved swiftly, securing their property rights and beginning reconstruction before the city could act against them. The new Chinatown that rose from the ashes was architecturally grander than before — a deliberate choice to signal permanence and cultural pride.",
      },
      {
        year: 1930,
        label: 'Paper Sons Era',
        gradientKey: '1920s',
        description:
          'The Chinese Exclusion Act of 1882 had made legal immigration nearly impossible, but the destruction of birth records in the 1906 earthquake created an opening: men could claim American birth and sponsor others as their "sons," even without biological relation. These "paper sons" arrived with memorized false identities and endured brutal interrogations at Angel Island. The practice sustained Chinatown\'s population through decades of discriminatory law.',
      },
      {
        year: 1969,
        label: 'Community Rising',
        gradientKey: '1950s',
        description:
          "Inspired by the Civil Rights and Third World Liberation movements, young Chinese Americans in San Francisco organized a new wave of community activism demanding better housing, services, and educational opportunity in Chinatown. The I-Wor-Kuen and other groups opened community centers, fought displacement, and helped politicize a community that had often stayed quiet for self-protection. The Dragon Gate on Grant Avenue, installed in 1970, became the physical symbol of a neighborhood asserting its identity.",
      },
      {
        year: 2023,
        label: 'Living Heritage',
        gradientKey: '2020s',
        description:
          "San Francisco's Chinatown remains the oldest in North America and one of the most densely populated urban neighborhoods in the United States, home to recent immigrants and families whose roots go back six generations. Anti-Asian violence during the pandemic prompted renewed solidarity and attention to the neighborhood's fragility and resilience. The gate on Grant Avenue continues to mark the threshold between two worlds.",
      },
    ],
    partners: [
      {
        id: 'old-st-marys',
        name: "Old St. Mary's Cathedral",
        type: 'attraction',
        tagline: 'First cathedral of the West, 1854',
        since: 1854,
      },
      {
        id: 'golden-gate-fortune',
        name: 'Golden Gate Fortune Cookie',
        type: 'shop',
        tagline: 'Watch fortune cookies being made',
        since: 1962,
      },
      {
        id: 'great-china-herb',
        name: 'Great China Herb Co.',
        type: 'shop',
        tagline: 'Traditional medicine since 1962',
      },
    ],
  },
  {
    id: 'city-lights',
    name: 'City Lights Books',
    shortName: 'City Lights',
    groupId: 'cultural',
    coords: { lat: 37.7977, lng: -122.4065 },
    eras: [
      {
        year: 1906,
        label: 'North Beach Rises',
        gradientKey: '1890s',
        description:
          "North Beach rebuilt from the 1906 earthquake as a predominantly Italian working-class neighborhood, its streets filling with cafes, fishermen's families, and small merchants. The area around Columbus Avenue became the social center for the city's immigrant community, with bocce courts, bakeries, and North Beach's characteristic mixture of noise and intimacy. It would take another half-century for the neighborhood to find its literary identity.",
      },
      {
        year: 1953,
        label: 'Beat Generation HQ',
        gradientKey: '1920s',
        description:
          "Lawrence Ferlinghetti and Peter Martin opened City Lights Bookstore in 1953 at the corner of Columbus and Broadway, creating the first all-paperback bookshop in the country and a gathering point for the emerging Beat Generation. Allen Ginsberg, Jack Kerouac, Gregory Corso, and dozens of other writers made the store their home. When Ferlinghetti published Ginsberg's Howl in 1956 and faced obscenity charges for it, City Lights became a landmark in American free expression.",
      },
      {
        year: 1969,
        label: 'Free Speech',
        gradientKey: '1950s',
        description:
          "The Howl obscenity trial's precedent rippled through the 1960s as City Lights continued publishing politically radical and sexually frank literature while the surrounding neighborhood exploded with counterculture energy. Anti-war organizing, psychedelic experimentation, and the Free Speech Movement at Berkeley all found sympathetic literature on City Lights' shelves. The bookstore served as an intellectual node connecting the Beats of the 1950s to the New Left of the 1960s.",
      },
      {
        year: 1990,
        label: 'Literary Landmark',
        gradientKey: '1980s',
        description:
          "By the 1990s City Lights had achieved the rare status of a commercial bookstore that also functioned as a cultural institution, drawing literary pilgrims from around the world while continuing to serve local readers and writers. The upstairs poetry room, with its tilting floors and sagging shelves, became one of the most photographed interiors in San Francisco. Ferlinghetti remained a daily presence into his nineties, watching the neighborhood around him change dramatically.",
      },
      {
        year: 2023,
        label: 'Still Radical',
        gradientKey: '2020s',
        description:
          "Lawrence Ferlinghetti died in 2021 at 101 years old, but the store he founded continues as a workers' collective committed to the same radical publishing program. In a city increasingly dominated by tech money and rising rents, City Lights maintains its position as a fiercely independent cultural institution — a reminder that San Francisco's identity was shaped by poets and dissenters long before it was shaped by venture capitalists.",
      },
    ],
    partners: [
      {
        id: 'vesuvio',
        name: 'Vesuvio Cafe',
        type: 'cafe',
        tagline: "The Beat's favorite bar",
        since: 1948,
      },
      {
        id: 'caffe-trieste',
        name: 'Caffe Trieste',
        type: 'cafe',
        tagline: "West Coast's first espresso bar",
        since: 1956,
      },
      {
        id: 'beat-museum',
        name: 'Beat Museum',
        type: 'museum',
        tagline: 'Artifacts of the Beat Generation',
      },
    ],
  },
  {
    id: 'mission-dolores',
    name: 'Mission Dolores',
    shortName: 'Mission Dolores',
    groupId: 'cultural',
    coords: { lat: 37.7652, lng: -122.4268 },
    eras: [
      {
        year: 1776,
        label: 'Spanish Mission',
        gradientKey: '1850s',
        description:
          "Mission San Francisco de Asís was founded on June 29, 1776 — four days before the signing of the Declaration of Independence — near a small lake the Spanish called Laguna de los Dolores. Franciscan missionaries and Spanish soldiers established the mission to convert the Ohlone people, whose population would be devastated by European disease and the mission system's forced labor. The adobe church that stands today, completed in 1791, is the oldest intact building in San Francisco.",
      },
      {
        year: 1850,
        label: 'Gold Rush Parish',
        gradientKey: '1850s',
        description:
          "California's entry into the United States and the Gold Rush transformed Mission Dolores from a remote Spanish outpost into a busy parish serving a rapidly expanding city. The mission cemetery, filled with Ohlone remains and early Mexican and American settlers, sat at the edge of a neighborhood that was growing faster than anyone could have imagined. Market Street was being graded; real estate speculation was rampant; the city was inventing itself in real time.",
      },
      {
        year: 1906,
        label: 'Earthquake Survivor',
        gradientKey: '1890s',
        description:
          "When the earthquake struck on April 18, 1906, the thick adobe walls of the original mission church absorbed the shock that destroyed more modern brick and stone buildings throughout the city. The basilica built alongside it in 1918 was added after the earthquake to accommodate growing congregations, but the original adobe chapel proved once again that the Spanish builders had chosen their materials and methods wisely. The mission cemetery served as an emergency morgue in the days after the disaster.",
      },
      {
        year: 1950,
        label: 'Latino Migration',
        gradientKey: '1950s',
        description:
          "The decades following World War II saw a massive migration of Mexican and Central American families to the Mission District, transforming the neighborhood's character and giving the area the Latino identity it retains today. Mission Dolores became a center for the community's religious life, with Spanish-language Masses drawing worshippers from across the Bay Area. The tension between the neighborhood's Spanish colonial origins and its living Latino present became one of the Mission's defining complexities.",
      },
      {
        year: 2023,
        label: 'Living Mission',
        gradientKey: '2020s',
        description:
          "Mission Dolores remains an active parish serving a diverse congregation even as the surrounding neighborhood has been transformed by gentrification and tech-era wealth. The cemetery, where the Ohlone dead are remembered with a recent memorial, draws tourists and historians seeking to understand the violent foundations of California's history. The 232-year-old adobe church — earthquake-tested, famine-tested, plague-tested — still stands.",
      },
    ],
    partners: [
      {
        id: 'tartine',
        name: 'Tartine Bakery',
        type: 'cafe',
        tagline: 'SF sourdough legend',
        since: 2002,
      },
      {
        id: 'dolores-park-cafe',
        name: 'Dolores Park Cafe',
        type: 'cafe',
        tagline: 'Coffee with a park view',
      },
      {
        id: 'mission-cultural',
        name: 'Mission Cultural Center',
        type: 'museum',
        tagline: 'Latino arts and heritage',
      },
    ],
  },
  {
    id: 'castro-theater',
    name: 'Castro Theater',
    shortName: 'Castro Theater',
    groupId: 'cultural',
    coords: { lat: 37.7625, lng: -122.4349 },
    eras: [
      {
        year: 1900,
        label: 'The Neighborhood Forms',
        gradientKey: '1890s',
        description:
          "At the turn of the century the Castro was a quiet working-class neighborhood of Victorian row houses, home primarily to Scandinavian and Irish immigrant families who worked in the nearby trade industries. The commercial strip along Castro Street was a modest collection of groceries, hardware stores, and saloons serving the neighborhood's practical needs. Nothing in the district's early character predicted the extraordinary role it would later play in American history.",
      },
      {
        year: 1922,
        label: 'Silver Screen Opens',
        gradientKey: '1920s',
        description:
          "The Castro Theatre opened on June 22, 1922, designed by architect Timothy Pflueger in a Spanish Colonial Revival style that made it immediately the grandest building in the neighborhood. The Nasser family built it as a luxurious neighborhood movie palace, complete with a Wurlitzer organ that played before screenings. For decades it was simply the neighborhood's most beautiful gathering place, a cathedral of cinema open to all.",
      },
      {
        year: 1969,
        label: 'Liberation',
        gradientKey: '1950s',
        description:
          "The Stonewall uprising in New York in 1969 catalyzed gay liberation nationally, and San Francisco's Castro District began its transformation into the first gayborhood in America. Gay men displaced by urban renewal in the Tenderloin and South of Market began moving into the Castro's affordable Victorians, and businesses catering to the community followed. Harvey Milk opened his camera shop on Castro Street in 1972, beginning his political journey.",
      },
      {
        year: 1990,
        label: 'Queer Capital',
        gradientKey: '1980s',
        description:
          "The AIDS crisis devastated the Castro community through the 1980s, killing thousands and leaving visible scars on the neighborhood's social fabric. The community's response — the Names Project AIDS Memorial Quilt, vigils at the Castro Theatre, the fierce advocacy that produced faster drug approval — became a model of political organizing born from grief. By 1990 the neighborhood had suffered enormously but had also demonstrated an extraordinary capacity for solidarity and survival.",
      },
      {
        year: 2023,
        label: 'Preservation Fight',
        gradientKey: '2020s',
        description:
          "Plans to convert the Castro Theatre into a live music venue threatened to eliminate the cinema programming that made it a cultural institution, sparking a fierce preservation battle that pitted historic film culture against new entertainment economics. The fight became a flashpoint for broader anxieties about gentrification, cultural erasure, and who gets to define San Francisco's identity in the twenty-first century. The theater's fate remains contested, its neon sign a question mark glowing over the neighborhood.",
      },
    ],
    partners: [
      {
        id: 'frances',
        name: 'Frances Restaurant',
        type: 'cafe',
        tagline: 'Neighborhood fine dining',
        since: 2009,
      },
      {
        id: 'castro-cheese',
        name: 'Castro Cheesery',
        type: 'shop',
        tagline: 'Artisan cheese in the heart of Castro',
      },
      {
        id: 'glbt-history',
        name: 'GLBT History Museum',
        type: 'museum',
        tagline: 'First LGBTQ+ museum in the US',
      },
    ],
  },

  // ── PARKS ────────────────────────────────────────────────────────────────────
  {
    id: 'golden-gate-park',
    name: 'Golden Gate Park',
    shortName: 'GG Park',
    groupId: 'parks',
    coords: { lat: 37.7694, lng: -122.4862 },
    eras: [
      {
        year: 1870,
        label: 'Sand Dunes',
        gradientKey: '1850s',
        description:
          "When the San Francisco Park Commission created Golden Gate Park in 1870, the site was nearly 1,000 acres of shifting sand dunes that most engineers considered impossible to transform into a park. Superintendent William Hammond Hall and his successor John McLaren spent decades planting marram grass, lupine, and tree cover to stabilize the sand, against all predictions. The relentless Pacific winds that had built the dunes became the park's great adversary and the gardeners' enduring challenge.",
      },
      {
        year: 1906,
        label: 'Refugee City',
        gradientKey: '1890s',
        description:
          "Following the April 1906 earthquake and fire, Golden Gate Park became home to an estimated 100,000 refugees living in tent cities that covered the meadows and drove down the tree-lined paths. The park's infrastructure — its cisterns, its open space, its distance from the burning city — made it an ideal refuge at a moment of total urban collapse. For over two years, makeshift communities persisted in the park, planting gardens and holding elections as the city rebuilt around them.",
      },
      {
        year: 1942,
        label: 'Military Training',
        gradientKey: '1920s',
        description:
          "World War II brought military occupation to Golden Gate Park, with soldiers using its meadows for drilling, its roads for convoy practice, and its Speedway for vehicle staging. Anti-aircraft gun emplacements dotted the park's western reaches facing the Pacific; military police patrolled the grounds. The park's peacetime character was suspended for the duration of the war, its gardeners in uniform, its greens trampled by boots.",
      },
      {
        year: 1967,
        label: 'Summer of Love',
        gradientKey: '1950s',
        description:
          "The Human Be-In at the Polo Fields in January 1967 launched the Summer of Love, drawing 100,000 young people to San Francisco and cementing Golden Gate Park as the spiritual center of the counterculture. Free concerts, mass gatherings, and the Grateful Dead playing from flatbed trucks transformed the park's eastern meadows into a living experiment in alternative community. The Haight-Ashbury neighborhood at the park's edge became the most famous square mile in the world.",
      },
      {
        year: 2023,
        label: 'Urban Forest',
        gradientKey: '2020s',
        description:
          "Today Golden Gate Park is the most visited urban park in the United States, drawing over 25 million visitors annually to its museums, gardens, lakes, and the extraordinary urban forest that John McLaren spent his life building. The car-free JFK Promenade, closed to vehicles during the pandemic and made permanent in 2022, returned the park's eastern end to pedestrians for the first time in decades. The sand dunes are gone; the forest McLaren planted from nothing covers the city's western shoulder.",
      },
    ],
    partners: [
      {
        id: 'de-young',
        name: 'de Young Museum',
        type: 'museum',
        tagline: "SF's flagship fine arts museum",
        since: 1895,
      },
      {
        id: 'cal-academy',
        name: 'California Academy of Sciences',
        type: 'museum',
        tagline: 'Natural history and living rainforest',
      },
      {
        id: 'dutch-windmill',
        name: 'Dutch Windmill Garden',
        type: 'attraction',
        tagline: '1902 tulip garden and working windmill',
        since: 1902,
      },
    ],
  },
  {
    id: 'alcatraz',
    name: 'Alcatraz Island',
    shortName: 'Alcatraz',
    groupId: 'parks',
    coords: { lat: 37.8267, lng: -122.4230 },
    eras: [
      {
        year: 1859,
        label: 'Military Fort',
        gradientKey: '1850s',
        description:
          "Alcatraz Island served as the first military fortification on the West Coast, its strategic position at the mouth of San Francisco Bay making it the natural guardian of the harbor. The Army installed cannon emplacements and built a lighthouse — the first on the Pacific Coast — in the 1850s. Military prisoners were held in its guardhouse as early as the Civil War, beginning the island's long association with confinement.",
      },
      {
        year: 1934,
        label: 'Federal Penitentiary',
        gradientKey: '1920s',
        description:
          "The Department of Justice took control of Alcatraz in 1934 and transformed the military prison into a maximum-security federal penitentiary designed to hold the most dangerous and escape-prone criminals in the country. Al Capone, Robert Stroud the Birdman, and Machine Gun Kelly were among its most famous residents. The one-mile channel of frigid, shark-patrolled water between the island and the city was considered escape-proof — though 36 men tried.",
      },
      {
        year: 1963,
        label: 'Lights Out',
        gradientKey: '1950s',
        description:
          "Attorney General Robert Kennedy closed Alcatraz Federal Penitentiary on March 21, 1963, citing the enormous cost of operating an island prison where everything — including fresh water — had to be shipped from the mainland. The last prisoners were transferred to other federal facilities; the guards and their families packed up and left. For six years the island sat empty, its buildings deteriorating, its lighthouse automated, fog horns sounding for no one.",
      },
      {
        year: 1969,
        label: 'Native Occupation',
        gradientKey: '1950s',
        description:
          "On November 20, 1969, a group of 89 Native Americans landed on Alcatraz Island and claimed it under the 1868 Treaty of Fort Laramie, which granted Native peoples rights to unused federal land. The occupation lasted 19 months and became a pivotal moment in the American Indian Movement, drawing national attention to Native rights and sovereignty. Though federal marshals ultimately removed the occupiers in 1971, the action permanently changed how the federal government engaged with Native American communities.",
      },
      {
        year: 2023,
        label: 'National Treasure',
        gradientKey: '2020s',
        description:
          "Now part of Golden Gate National Recreation Area, Alcatraz receives over 1.4 million visitors annually, making it one of the most visited national park sites in the United States. The audio tour narrated by former guards and prisoners remains one of the most immersive museum experiences in the country. The island's gardens, maintained by inmates and now restored by volunteers, bloom incongruously among the ruins of the cell house.",
      },
    ],
    partners: [
      {
        id: 'hornblower',
        name: 'Alcatraz City Cruises',
        type: 'attraction',
        tagline: 'Official ferries to the Rock',
      },
      {
        id: 'sf-maritime-museum',
        name: 'SF Maritime Museum',
        type: 'museum',
        tagline: 'Historic ships at Hyde Street Pier',
      },
      {
        id: 'crab-house',
        name: 'Crab House at Pier 39',
        type: 'cafe',
        tagline: 'Bay views and fresh Dungeness',
      },
    ],
  },
  {
    id: 'crissy-field',
    name: 'Crissy Field',
    shortName: 'Crissy Field',
    groupId: 'parks',
    coords: { lat: 37.8032, lng: -122.4624 },
    eras: [
      {
        year: 1919,
        label: 'Airfield',
        gradientKey: '1890s',
        description:
          "Crissy Field was developed as a military airfield by the U.S. Army in 1919, using fill material to extend the former tidal marsh into a usable runway. Named for Major Dana Crissy, who died attempting a transcontinental flight, the airfield hosted early Army Air Corps flights and served as the site of several aviation firsts. The surrounding marsh was buried under concrete and asphalt; the tidal wetlands that had defined the shoreline for millennia were gone.",
      },
      {
        year: 1942,
        label: 'War Depot',
        gradientKey: '1920s',
        description:
          "World War II transformed Crissy Field from an airfield into a military storage and logistics depot, its open acreage convenient for staging equipment bound for the Pacific Theater. Aviation had outgrown the short runway anyway; the Army repurposed the field for vehicle and equipment storage. The entire Presidio was militarized, and Crissy Field's golden views of the Golden Gate were enjoyed only by soldiers and officers.",
      },
      {
        year: 1976,
        label: 'Abandoned',
        gradientKey: '1950s',
        description:
          "After the Army departed the Presidio in 1994 and the property passed to the National Park Service, Crissy Field sat in a state of deterioration — an asphalt wasteland of cracked pavement, contaminated soil, and invasive plants where the original marsh had been. The Golden Gate Bridge loomed over a landscape that felt post-industrial, its ecological potential hidden beneath decades of military use. Restoration seemed ambitious to the point of fantasy.",
      },
      {
        year: 2001,
        label: 'Restoration',
        gradientKey: '1980s',
        description:
          "In 2001, after a community-driven $34 million restoration effort, Crissy Field was reopened as a public park and tidal marsh — one of the largest urban wetland restorations in American history. More than 25,000 volunteers planted native grasses and helped remove 35 tons of debris; the tidal channels were reopened and the marsh began recovering. The project became a model for ecological restoration in urban settings and demonstrated what communities could achieve together.",
      },
      {
        year: 2023,
        label: 'Tidal Marsh',
        gradientKey: '2020s',
        description:
          "Two decades after restoration, Crissy Field's tidal marsh is fully functional, home to migratory birds, native plants, and the natural hydrology that the Army buried in 1919. On any afternoon the promenade is crowded with runners, cyclists, and families with views of the Golden Gate that rival any in the world. The restored marsh represents one of San Francisco's quiet triumphs — an act of ecological patience rewarded by the return of life.",
      },
    ],
    partners: [
      {
        id: 'warming-hut',
        name: 'Warming Hut Cafe',
        type: 'cafe',
        tagline: 'Coffee at the edge of the Bay',
      },
      {
        id: 'sports-basement-presidio',
        name: 'Sports Basement Presidio',
        type: 'shop',
        tagline: 'Gear up for the great outdoors',
      },
      {
        id: 'golden-gate-bridge',
        name: 'Golden Gate Bridge',
        type: 'attraction',
        tagline: 'Walk the icon',
        since: 1937,
      },
    ],
  },

  // ── CIVIC ─────────────────────────────────────────────────────────────────────
  {
    id: 'city-hall',
    name: 'City Hall',
    shortName: 'City Hall',
    groupId: 'civic',
    coords: { lat: 37.7793, lng: -122.4193 },
    eras: [
      {
        year: 1850,
        label: 'Jenny Lind Theater',
        gradientKey: '1850s',
        description:
          "San Francisco's first de facto city hall was the Jenny Lind Theater, a three-story brick building on Portsmouth Square that the city purchased in 1852 and converted into municipal offices. The Gold Rush had made San Francisco one of the fastest-growing cities in the world, and its government scrambled to keep pace with a population of fortune-seekers, merchants, and adventurers. The makeshift city hall was already inadequate before it opened.",
      },
      {
        year: 1906,
        label: 'Destroyed',
        gradientKey: '1890s',
        description:
          "The original City Hall on Larkin Street, completed in 1899 after 27 years of corrupt construction, was largely destroyed by the 1906 earthquake — its walls collapsing within seconds, exposing corruption in its construction through the very way it fell. The structure that had taken nearly three decades and enormous graft to build came down in seconds, its hollow walls a testament to what happened when public money was treated as private loot. Only the dome structure and some walls survived.",
      },
      {
        year: 1915,
        label: 'Beaux-Arts Dome',
        gradientKey: '1890s',
        description:
          "The current City Hall was completed in 1915, just in time for the Panama-Pacific International Exposition, its Beaux-Arts dome rising 307 feet — taller than the U.S. Capitol — over the new Civic Center. Architects Bakewell and Brown drew on the great civic architecture of Paris and Washington to create a building that declared San Francisco's renewed ambition after the earthquake. The rotunda's natural light, its marble floors, and its soaring scale made it immediately the city's most inspiring public space.",
      },
      {
        year: 1978,
        label: 'Moscone & Milk',
        gradientKey: '1950s',
        description:
          "On November 27, 1978, Supervisor Dan White shot and killed Mayor George Moscone and Supervisor Harvey Milk inside City Hall, a double assassination that sent shockwaves through San Francisco and the national LGBTQ+ community. Thousands gathered outside in a spontaneous candlelight vigil that became one of the most affecting public mourning ceremonies in American history. The subsequent \"Twinkie defense\" verdict and the White Night riots transformed San Francisco's politics permanently.",
      },
      {
        year: 2023,
        label: 'Symbol of Resilience',
        gradientKey: '2020s',
        description:
          "Seismically retrofitted after the 1989 earthquake and restored to its 1915 grandeur, City Hall today serves as both a working municipal building and one of San Francisco's most beloved public spaces. Couples line up for marriage ceremonies under the rotunda; protesters gather on its steps; tourists photograph its dome from Civic Center Plaza. The building's history — corruption, disaster, assassination, and renewal — makes it the most complete symbol of what San Francisco has been and survived.",
      },
    ],
    partners: [
      {
        id: 'sf-public-library',
        name: 'SF Public Library Main Branch',
        type: 'museum',
        tagline: 'Knowledge and community since 1879',
        since: 1879,
      },
      {
        id: 'sf-jazz',
        name: 'SFJAZZ Center',
        type: 'attraction',
        tagline: 'Live jazz in the Civic Center',
        since: 2013,
      },
      {
        id: 'suppenkuche',
        name: 'Suppenkuche',
        type: 'cafe',
        tagline: 'Bavarian food in Hayes Valley',
        since: 1993,
      },
    ],
  },
  {
    id: 'market-street',
    name: 'Market Street',
    shortName: 'Market St.',
    groupId: 'civic',
    coords: { lat: 37.7879, lng: -122.4074 },
    eras: [
      {
        year: 1847,
        label: "O'Farrell's Plan",
        gradientKey: '1850s',
        description:
          "In 1847, city surveyor Jasper O'Farrell laid out Market Street as the central spine of San Francisco, a bold 120-foot-wide boulevard cutting at an angle through the city's grid and connecting the waterfront to the Mission Valley. The street was too wide for the city that existed — a visionary gesture toward the metropolis O'Farrell believed would come. The offset grids that Market Street created between the downtown and upper neighborhoods would confuse visitors for the next 175 years.",
      },
      {
        year: 1906,
        label: 'The Slot',
        gradientKey: '1890s',
        description:
          'By 1906 Market Street had become the great democratic boulevard of San Francisco — its cable car slots giving it the workingman\'s nickname "The Slot" — packed with streetcars, horse wagons, pedestrians, and the offices and department stores of a booming city. The earthquake and fire destroyed almost everything east of Van Ness Avenue, and Market Street\'s ruins became the most photographed symbol of the disaster. Reconstruction began within days, with the street\'s bones guiding the rebuilt city.',
      },
      {
        year: 1945,
        label: 'Victory Parades',
        gradientKey: '1920s',
        description:
          "When Japan surrendered in August 1945, ending World War II, San Francisco erupted in celebration that centered on Market Street, where hundreds of thousands of civilians and returning servicemen filled the boulevard from the Ferry Building to City Hall. The scenes of joy were matched by scenes of chaos; the famous \'V-J Day\' photograph of a sailor kissing a nurse was taken nearby. Market Street had served as the city's nervous system through the war years and now it exhaled.",
      },
      {
        year: 1967,
        label: 'Protest March',
        gradientKey: '1950s',
        description:
          "Through the 1960s Market Street became the preferred route for San Francisco's increasingly frequent and massive political demonstrations — against the Vietnam War, for civil rights, for LGBTQ+ liberation. The 1967 anti-war march that drew 100,000 participants was among the first massive national anti-war demonstrations, organized from a city that had become the de facto capital of American dissent. The street that O'Farrell designed for commerce became the country's most important boulevard of political expression.",
      },
      {
        year: 2023,
        label: 'Tech Corridor',
        gradientKey: '2020s',
        description:
          "The tech boom of the 2010s brought Twitter, Uber, and dozens of other companies to Mid-Market, transforming a stretch of the boulevard that had been struggling with vacancy, drug use, and poverty. The tax incentives that attracted them expired; some companies moved or shrank; and Mid-Market's transformation remained incomplete and contested. Closing the upper Market Street block to cars on weekdays has made it more human but hasn't resolved the fundamental tensions between the city's wealth and its visible unhoused population.",
      },
    ],
    partners: [
      {
        id: 'twitter-hq',
        name: 'Twitter HQ Building',
        type: 'attraction',
        tagline: 'Where the tweet was born',
      },
      {
        id: 'orpheum-theater',
        name: 'Orpheum Theater',
        type: 'attraction',
        tagline: 'Broadway touring productions since 1926',
        since: 1926,
      },
      {
        id: 'sightglass',
        name: 'Sightglass Coffee',
        type: 'cafe',
        tagline: 'Third-wave roaster in SOMA',
        since: 2009,
      },
    ],
  },
  {
    id: 'embarcadero',
    name: 'Embarcadero',
    shortName: 'Embarcadero',
    groupId: 'civic',
    coords: { lat: 37.7920, lng: -122.3940 },
    eras: [
      {
        year: 1849,
        label: 'Waterfront Chaos',
        gradientKey: '1850s',
        description:
          "In 1849 the future Embarcadero was barely organized chaos — hundreds of ships riding at anchor in the Bay, their crew deserted to the gold fields, with makeshift wharves extending into the water to meet the boats bringing supplies and fortune-seekers. Merchants built on piles driven into the shallows; entire streets were laid on the decks of abandoned ships buried under fill. The shoreline was advancing into the Bay faster than anyone could map it.",
      },
      {
        year: 1926,
        label: 'Ferry Building Crowds',
        gradientKey: '1920s',
        description:
          "By the 1920s the Embarcadero was the functional front door of San Francisco, with the Ferry Building processing over 50,000 daily commuters and the surrounding piers handling the cargo of a major Pacific port. The boulevard along the waterfront was congested with streetcars, automobiles, wagons, and pedestrians moving between the transit hub and the business district. It was noisy, democratic, and absolutely central to the city's daily life.",
      },
      {
        year: 1989,
        label: 'Freeway Falls',
        gradientKey: '1980s',
        description:
          "The Loma Prieta earthquake of October 17, 1989, severely damaged the double-deck Embarcadero Freeway that had blocked the waterfront from the city since 1959. The decision to tear down the freeway rather than repair it — controversial at the time — proved transformative, reopening the waterfront to public life for the first time in 30 years. What was once a dark underworld of concrete became light, air, and the possibility of a different relationship between city and Bay.",
      },
      {
        year: 2000,
        label: 'BART Under the Bay',
        gradientKey: '1980s',
        description:
          "The expansion of the BART system through the Embarcadero station in 1974, and its continued operation, made the waterfront accessible to the entire Bay Area by subway. By 2000 the rebuilt Embarcadero boulevard — with its palm trees, historic streetcars, and restored Ferry Building — had become one of the most celebrated urban renewal stories in American history. The freeway's removal had revealed a waterfront that the city had forgotten it possessed.",
      },
      {
        year: 2023,
        label: 'Public Promenade',
        gradientKey: '2020s',
        description:
          "Today the Embarcadero is San Francisco's grandest public promenade, with the historic F-Market streetcars running along the waterfront and the Ferry Building serving as the city's most vibrant food destination. The waterfront parks, the Bay Trail, and the restored seawall make this one of the most impressive urban waterfronts in the world. The city's relationship with its Bay, severed for 30 years by the freeway, has been restored to something richer than what existed before.",
      },
    ],
    partners: [
      {
        id: 'ferry-building-market',
        name: 'Ferry Building Marketplace',
        type: 'shop',
        tagline: 'Artisan food hall on the waterfront',
      },
      {
        id: 'slanted-door',
        name: 'The Slanted Door',
        type: 'cafe',
        tagline: 'Modern Vietnamese on the Bay',
      },
      {
        id: 'bay-bridge-lights',
        name: 'Bay Bridge Light Installation',
        type: 'attraction',
        tagline: 'Leo Villareal\'s "The Bay Lights"',
        since: 2013,
      },
    ],
  },
];

export function getGroup(id: string): Group | undefined {
  return groups.find((g) => g.id === id);
}

export function getLocation(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

export function getLocationsByGroup(groupId: string): Location[] {
  return locations.filter((l) => l.groupId === groupId);
}

export function getAllPartnersForGroup(groupId: string): Partner[] {
  const seen = new Set<string>();
  const result: Partner[] = [];
  for (const loc of getLocationsByGroup(groupId)) {
    for (const p of loc.partners) {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        result.push(p);
      }
    }
  }
  return result;
}
