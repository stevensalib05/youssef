export const categories = [
  "Residential",
  "Commercial & Offices",
  "Institutional",
  "Healthcare",
] as const;

export type Category = (typeof categories)[number];

export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  category: Category;
  facts: string;
  description: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "old-victoria",
    name: "Old Victoria Residential",
    location: "London, Ontario",
    year: "2021 — Present",
    category: "Residential",
    facts: "Two towers · 19 & 23 storeys · $174M",
    description:
      "A two-tower development south of Downtown London in the SoHo area — a 19-storey North Tower and a 23-storey South Tower — with stunning views over the Forks of the Thames River. The fifth-floor Residents' Lounge opens onto a fully equipped fitness centre, party room, game room and theatre, along with an outdoor terrace for soaking up the sun. Built with cast-in-place columns, slabs and beams and steel-stud walls.",
    featured: true,
  },
  {
    slug: "westmount-iv",
    name: "Westmount Estates IV",
    location: "London, Ontario",
    year: "2024",
    category: "Residential",
    facts: "12 storeys · 169 rental units · $52M",
    description:
      "A 12-storey building of 169 rental units at the corner of Southdale and Wonderland, near Highways 401 and 402. The top-floor Residents' Lounge features a bar and billiards table, a golf simulator and media room and exclusive access to a fully equipped fitness centre, plus a 12th-floor outdoor terrace. Constructed with precast concrete walls, hollow-core slabs and beams.",
    featured: true,
  },
  {
    slug: "trinity-medical",
    name: "Trinity Medical Centre",
    location: "Windsor, Ontario",
    year: "2024",
    category: "Healthcare",
    facts: "6,000 sq.ft. · pharmacy, clinic & lab",
    description:
      "A single-storey renovation in the heart of Downtown Windsor on Ouellette Avenue. Its 6,000 sq. ft. is given over to a pharmacy, a medical clinic and a future lab, working within the building's existing wood and steel structure.",
    featured: true,
  },
  {
    slug: "westview",
    name: "Westview Condominiums",
    location: "LaSalle, Ontario",
    year: "2023",
    category: "Residential",
    facts: "4 storeys · 72 unique suites",
    description:
      "A four-storey building of 72 unique residential suites in LaSalle, overlooking the beauty of Natalie Park. Built with steel-stud walls and hollow-core and solid-balcony slabs.",
  },
  {
    slug: "riverwalk",
    name: "Riverwalk Tower",
    location: "London, Ontario",
    year: "2021",
    category: "Residential",
    facts: "24 storeys · 240 rental units",
    description:
      "A 24-storey, 240-unit rental tower in the heart of Downtown London with stunning views over the Forks of the Thames River. The third-floor Residents' Lounge offers a bar and billiards, a golf simulator and media room and a fitness centre, while the 24th-floor terrace looks out over the city. Precast concrete construction.",
    featured: true,
  },
  {
    slug: "gordon-square",
    name: "Gordon Square Tower 1",
    location: "Guelph, Ontario",
    year: "2020",
    category: "Residential",
    facts: "14 storeys · 167 luxury suites",
    description:
      "One of five luxury condominium buildings in Gordon Square, this 14-storey tower holds 167 suites on Gordon Street, in the heart of Guelph's most desirable destinations for retail, shopping and recreation. The ground floor offers 7,210 sq. ft. of luxurious lobby, guest suite, media room, golf simulator and fitness room, opening onto a courtyard and greenspace between Buildings 1 and 2.",
  },
  {
    slug: "villagewalk-2",
    name: "Villagewalk Tower 2",
    location: "London, Ontario",
    year: "2019",
    category: "Residential",
    facts: "14 storeys · 154 residential units",
    description:
      "A 14-storey, 154-unit building at 260 Villagewalk Blvd. in London, just west of Richmond Street. The highlight of this prime North London location is the ultimate convenience it offers. Precast concrete construction.",
  },
  {
    slug: "parkwest",
    name: "ParkWest Condominiums",
    location: "Byron, Ontario",
    year: "2019",
    category: "Residential",
    facts: "7 storeys · 128 suites overlooking Springbank Park",
    description:
      "A seven-storey building of 128 unique suites at 1200 Commissioners Road in Byron, with stunning views over Springbank Park and its walking and biking trails along the Thames River. Indoor amenities include a lounge, a billiards room with wet bar, a golf simulator, a professional fitness facility and a media lounge.",
  },
  {
    slug: "azure",
    name: "Azure Condominiums",
    location: "London, Ontario",
    year: "2019",
    category: "Residential",
    facts: "29 storeys · 198 suites · first LEED-certified high-rise condo in London",
    description:
      "London's first LEED-certified high-rise condominium — a 29-storey tower of 198 unique suites in the heart of Downtown London, with views spanning from the deep blue of the Thames River to old-growth forests and up into the azure sky. The 29th floor is full of remarkable indoor and outdoor amenity space.",
    featured: true,
  },
  {
    slug: "lyle-400",
    name: "400 Lyle Street",
    location: "London, Ontario",
    year: "2018",
    category: "Residential",
    facts: "21 storeys · 299 rental units",
    description:
      "A 21-storey building with 299 residential rental units in the heart of Downtown London. The ground-floor Residents' Lounge offers exclusive access to a fully equipped fitness centre, a games room and a party room. Precast concrete construction.",
  },
  {
    slug: "river-mill",
    name: "River Mill Condominiums",
    location: "Guelph, Ontario",
    year: "2017",
    category: "Residential",
    facts: "18 storeys · 141 suites on the Speed River",
    description:
      "An 18-storey tower of 141 unique suites on Wellington St. E. in Guelph, set beside the Speed River with spectacular views of the river, parks and downtown skyline. The seventh floor offers a lounge and 6,000 sq. ft. of terrace with gardens and gazebos, while the third floor adds a gym, multimedia theatre room and library.",
  },
  {
    slug: "villagewalk-1",
    name: "Villagewalk Tower 1",
    location: "London, Ontario",
    year: "2016",
    category: "Residential",
    facts: "14 storeys · 163 residential units",
    description:
      "A 14-storey, 163-unit building at 240 Villagewalk Blvd. in North London, just west of Richmond Street. A central amenity building offers a fully equipped fitness centre with a signature swimming pool, cardio and weight equipment, a yoga studio, a state-of-the-art golf simulator and a billiards room and bar.",
  },
  {
    slug: "river-house",
    name: "River House Tower",
    location: "Guelph, Ontario",
    year: "2014",
    category: "Residential",
    facts: "18 storeys · 130 suites · 12,000 sq.ft. amenity floor",
    description:
      "An 18-storey tower of 130 unique suites on Macdonell St. in Guelph, enjoying views of the Speed River and St. George's Park. The fourth floor holds 12,000 sq. ft. of indoor amenity space — an ultra-modern fitness and exercise room, a multimedia theatre and a fabulous library/lounge — plus a terrace with gardens and gazebos.",
  },
  {
    slug: "renaissance-ii",
    name: "Renaissance II",
    location: "London, Ontario",
    year: "2013",
    category: "Residential",
    facts: "28 storeys · 277 suites · $65M",
    description:
      "A 28-storey landmark of 277 unique suites at King & Ridout, near the Forks of the Thames River and surrounded by renowned walking trails, parks, Museum London and the Grand Theatre. The sixth-floor Residents' Lounge offers a bar and billiards and an outdoor terrace, while the 28th-floor Sky Lounge takes in breathtaking views of the Forest City.",
    featured: true,
  },
  {
    slug: "belmont-village",
    name: "Belmont Village Condos",
    location: "Kitchener, Ontario",
    year: "2012",
    category: "Residential",
    facts: "11 storeys · 114 condo units",
    description:
      "An 11-storey building of 114 unique condo units at 539 Belmont Avenue West in Kitchener, close to Westmount Golf and Country Club and within moments of Uptown Waterloo. Indoor amenities include guest suites, a games room, a library and gym, a party room, a media room and visitor parking.",
  },
  {
    slug: "windsor-star",
    name: "The Windsor Star",
    location: "Windsor, Ontario",
    year: "2012",
    category: "Commercial & Offices",
    facts: "Heritage theatre renovation · $6M",
    description:
      "A renovation of the upper three levels of the former Palace Theatre in the heart of Downtown Windsor, giving The Windsor Star new offices at 300 Ouellette Avenue. The floors were levelled with steel and concrete and the stucco replaced with glazing, while two giant digitized billboards wrap the corner of the building, which also features an internet café.",
  },
  {
    slug: "northcliff",
    name: "Northcliff Condominiums",
    location: "London, Ontario",
    year: "2011",
    category: "Residential",
    facts: "14 storeys · 172 unique suites",
    description:
      "A 14-storey building of 172 unique suites on Coronation Drive north of London, minutes from Hyde Park shopping centre, Masonville Place and the area's best restaurants. Amenities include a Residents' Lounge with bar and billiards, a theatre/media room, a fitness room and a library.",
  },
  {
    slug: "dundas-clarke",
    name: "Dundas & Clarke Plaza",
    location: "London, Ontario",
    year: "2011",
    category: "Commercial & Offices",
    facts: "Two-building retail plaza · 8,500 sq.ft.",
    description:
      "A two-building retail plaza at the intersection of Dundas St. and Clarke Rd. in London — Building A at 6,005 sq. ft. and Building B at 2,500 sq. ft. — built in steel construction with steel columns, beams and studs.",
  },
  {
    slug: "michaels",
    name: "Michaels",
    location: "Chatham, Ontario",
    year: "2011",
    category: "Commercial & Offices",
    facts: "17,370 sq.ft. retail store",
    description:
      "A single-storey, 17,370 sq. ft. retail store in Chatham, built in steel construction with steel columns, beams and studs.",
  },
  {
    slug: "logos-centre",
    name: "Logos Centre",
    location: "North York, Ontario",
    year: "2010",
    category: "Institutional",
    facts: "71,903 sq.ft. · school, chapel, gymnasium & banquet hall · $17M",
    description:
      "A three-storey, 71,903 sq. ft. community building in North York combining a secondary school, daycare, banquet hall, activity centre, gymnasium, seniors' centre and chapel. Precast concrete walls and hollow-core slabs supported on a steel frame.",
  },
  {
    slug: "chantry-place",
    name: "Chantry Place Condominiums",
    location: "Southampton, Ontario",
    year: "2009",
    category: "Residential",
    facts: "4 storeys · 24 suites near the beach",
    description:
      "A four-storey building of 24 unique suites on Adelaide St. in Southampton — a short walk down Adelaide brings you to a sandy beach with pristine waters. Fully accessible, with an elevator, it offers a rooftop patio with BBQs and loungers, a main-floor gym and heated parking with powered overhead doors.",
  },
  {
    slug: "rexall",
    name: "Rexall Pharma Plus",
    location: "Windsor, Ontario",
    year: "2008",
    category: "Healthcare",
    facts: "16,240 sq.ft. · pharmacy & medical clinic",
    description:
      "A single-storey, 16,240 sq. ft. building at the intersection of Hoard Ave. and Cabana Rd. E. in Windsor, housing a pharmacy and a medical clinic. Steel construction with steel columns, beams, studs and a roof metal deck.",
  },
  {
    slug: "woodbine-plaza",
    name: "Woodbine Plaza",
    location: "Markham, Ontario",
    year: "2008",
    category: "Commercial & Offices",
    facts: "3 buildings · 30 commercial & office units",
    description:
      "Three two-storey buildings on Woodbine Ave. in Markham — Buildings A and B at 14,372 sq. ft. each and Building C at 42,195 sq. ft. — together holding 30 commercial and office units. Steel construction with pre-engineered wood trusses.",
  },
  {
    slug: "fellowship-church",
    name: "Windsor Christian Fellowship",
    location: "Windsor, Ontario",
    year: "2006",
    category: "Institutional",
    facts: "20,183 sq.ft. · chapel, banquet hall & offices",
    description:
      "A two-storey church with basement in Windsor — 20,183 sq. ft. featuring a stunning entrance canopy and rotunda leading to a chapel, banquet hall, commercial kitchen and administrative offices, along with façade renovations to the existing building. Structural steel frame with precast concrete floor slabs.",
  },
];
