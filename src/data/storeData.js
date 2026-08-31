// Real product catalogue and collection data for Autism and What Works

export const PRODUCTS = [
  {
    id: 'prod-1',
    title: '3D A-Maze Ball',
    handle: '3d-a-maze-ball',
    price: 18.99,
    compareAtPrice: 24.99,
    rating: 4.9,
    reviewCount: 38,
    category: 'Sensory Toys',
    productType: 'Fidget Toys',
    isSale: true,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['sensory-regulation', 'fine-motor', 'school', 'travel', 'calm-down'],
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80&w=800',
    description: 'Engaging 3D spherical maze game designed to improve concentration, fine motor dexterity, and spatial reasoning while providing soothing visual and tactile input.',
    whyYouLoveIt: [
      'Encourages quiet focus during homework or calm-down time',
      'Compact, durable sphere perfect for car rides and travel',
      'Develops patience, hand-eye coordination, and problem-solving skills'
    ],
    howToUse: 'Guide the small steel ball along the numbered track through 100 challenging obstacles. Take breaks whenever needed to decompress.',
    safetyInfo: 'Choking Hazard: Contains small internal parts. Suitable for children aged 5+. Adult supervision recommended.',
    whenItMayHelp: 'Ideal for times requiring quiet focus, waiting rooms, school transitions, or decompressing after a stimulating environment.'
  },
  {
    id: 'prod-2',
    title: 'Pop Tube Sensory Toy Pack (6 Piece)',
    handle: 'pop-tube-sensory-toy',
    price: 14.95,
    compareAtPrice: null,
    rating: 5.0,
    reviewCount: 64,
    category: 'Sensory Toys',
    productType: 'Fidget Toys',
    isSale: false,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['sensory-regulation', 'fine-motor', 'calm-down'],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800',
    description: 'Colorful, stretchable, bendable accordion tubes that generate satisfying pop sounds and tactile feedback. Connect them together to create shapes and patterns!',
    whyYouLoveIt: [
      'Provides rich auditory, tactile, and visual sensory input',
      'Flexible silicone and BPA-free durable construction',
      'Great for heavy work through pulling, pushing, and connecting'
    ],
    howToUse: 'Stretch, bend, pull, and snap the tubes together. Combine multiple tubes to create giant coils, shapes, or noise toys.',
    safetyInfo: 'Made from non-toxic, BPA-free plastic. Wipe clean with mild warm soap and water.',
    whenItMayHelp: 'Helps children who seek heavy work, tactile feedback, or need a physical outlet for nervous energy.'
  },
  {
    id: 'prod-3',
    title: 'Silicone Chewelry Pendant Necklace - Cosmic Star',
    handle: 'silicone-chewelry-cosmic-star',
    price: 16.50,
    compareAtPrice: 19.99,
    rating: 4.8,
    reviewCount: 52,
    category: 'Chewelry',
    productType: 'Oral Products',
    isSale: true,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['chewing', 'sensory-regulation', 'school', 'travel'],
    image: 'https://images.unsplash.com/photo-1611591475140-be3a9f0290c0?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: 'Discreet, stylish 100% food-grade silicone chew pendant with safety breakaway clasp. Designed specifically for children who seek oral sensory input and chew clothes or pencils.',
    whyYouLoveIt: [
      'Saves shirt collars, sleeves, and pencils from wear and tear',
      'Textured surface provides comforting tactile and oral feedback',
      'Breakaway safety clasp prevents snagging or pulling'
    ],
    howToUse: 'Wear around the neck during school or outings. Gently clean daily with warm soapy water or dishwasher safe (top rack).',
    safetyInfo: 'Chewelry Disclaimer: Not indestructible. Inspect regularly for wear and tear and discard at first sign of degradation. Breakaway clasp is not for chewing.',
    whenItMayHelp: 'Supports kids with oral sensory seeking behaviors, anxiety, or transition distress during school and daily routines.'
  },
  {
    id: 'prod-4',
    title: 'Movement & Deep Pressure Kit Box Bundle',
    handle: 'movement-deep-pressure-kit-bundle',
    price: 89.00,
    compareAtPrice: 109.00,
    rating: 5.0,
    reviewCount: 29,
    category: 'Bundles',
    productType: 'Therapy Tools',
    isSale: true,
    isBestSeller: true,
    isNew: true,
    isSoldOut: false,
    needs: ['sensory-regulation', 'calm-down', 'movement-balance'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive sensory regulation bundle containing heavy work resistance bands, tactile squeeze balls, a balance cushion, and deep pressure body sock.',
    whyYouLoveIt: [
      'Curated to provide calm proprioceptive and vestibular input at home',
      'Includes 4 complementary sensory regulation tools in one kit',
      'Saves 20% compared to purchasing tools individually'
    ],
    howToUse: 'Use balance cushion during dinner or homework for active seating; use body sock during decompression time.',
    safetyInfo: 'Adult supervision recommended during movement and balance activities.',
    whenItMayHelp: 'Ideal for after-school decompression, heavy work sessions, and regulating high-energy moments.'
  },
  {
    id: 'prod-5',
    title: 'Amoeba Stress Reliever & Tactile Squeeze',
    handle: 'amoeba-stress-reliever',
    price: 12.99,
    compareAtPrice: null,
    rating: 4.7,
    reviewCount: 21,
    category: 'Sensory Toys',
    productType: 'Fidget Toys',
    isSale: false,
    isBestSeller: false,
    isNew: true,
    isSoldOut: false,
    needs: ['sensory-regulation', 'calm-down', 'fine-motor'],
    image: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft, squishy amoeba-shaped gel fidget tool filled with micro-beads for deeply soothing tactile input and stress relief.',
    whyYouLoveIt: [
      'Silent fidgeting suitable for classroom use',
      'Provides satisfying resistance for hand strength',
      'Hypoallergenic, latex-free outer skin'
    ],
    howToUse: 'Squeeze, stretch, or press between fingers during quiet reading or focused listening.',
    safetyInfo: 'Do not puncture with sharp objects. Recommended for ages 3+.',
    whenItMayHelp: 'Helps soothe anxiety, reduce fidgeting, and keep hands busy in quiet environments.'
  },
  {
    id: 'prod-6',
    title: 'Car-Shaped Silicone Food Tray & Divided Plate',
    handle: 'car-shaped-silicone-food-tray',
    price: 24.50,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 43,
    category: 'Daily Use',
    productType: 'Food Trays',
    isSale: false,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['safety', 'fine-motor', 'school'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80&w=800',
    description: 'Non-slip suction silicone divided mealtime plate shaped like a fun car. Keeps food groups separated for selective eaters and prevents tray tipping.',
    whyYouLoveIt: [
      'Strong suction base sticks firmly to high chairs and tables',
      'Separated compartments prevent different food textures from touching',
      '100% food-grade silicone, microwave & dishwasher safe'
    ],
    howToUse: 'Press suction base firmly onto clean, smooth table surface. Serve varied foods in dedicated car compartments.',
    safetyInfo: 'BPA, PVC, and Lead-Free food-grade silicone. Easy to clean.',
    whenItMayHelp: 'Reduces mealtime anxiety for sensitive eaters who prefer separated foods.'
  },
  {
    id: 'prod-7',
    title: 'Classic Brass Kaleidoscope',
    handle: 'classic-kaleidoscope',
    price: 19.95,
    compareAtPrice: 22.95,
    rating: 4.8,
    reviewCount: 19,
    category: 'Educational',
    productType: 'Educational Toys',
    isSale: true,
    isBestSeller: false,
    isNew: false,
    isSoldOut: false,
    needs: ['educational', 'calm-down', 'sensory-regulation'],
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800',
    description: 'Timeless visual sensory tool with rotating lens that transforms light and colors into mesmerizing symmetrical geometric patterns.',
    whyYouLoveIt: [
      'Captivating visual tracking and focus exercise',
      'Durable vintage finish with smooth rotating head',
      'Calming visual distraction during sensory overload'
    ],
    howToUse: 'Look through eyepiece towards a light source and gently rotate the front barrel.',
    safetyInfo: 'Contains optical glass elements. Handle with care.',
    whenItMayHelp: 'Offers peaceful visual input when a child needs a quiet break from high stimulation.'
  },
  {
    id: 'prod-8',
    title: 'Pencil Pal Textured Grip Set (3 Pack)',
    handle: 'pencil-pal-textured-grip-set',
    price: 11.50,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 57,
    category: 'Educational',
    productType: 'Educational Games',
    isSale: false,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['fine-motor', 'school', 'educational'],
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800',
    description: 'Ergonomic silicone writing grips designed to guide correct tripod posture, reduce hand fatigue, and provide tactile sensory feedback while writing.',
    whyYouLoveIt: [
      'Fits standard pencils, pens, and crayons',
      'Soft silicone prevents finger slipping and cramps',
      'Recommended by occupational therapists for handwriting support'
    ],
    howToUse: 'Slide grip onto pencil until index finger and thumb sit comfortably in molded indentations.',
    safetyInfo: 'Non-toxic silicone. Fits left-handed and right-handed writers.',
    whenItMayHelp: 'Supports children experiencing writing reluctance, weak grip strength, or finger tiring.'
  },
  {
    id: 'prod-9',
    title: 'Cosmic Calmer Liquid Motion Timer',
    handle: 'cosmic-calmer-liquid-motion-timer',
    price: 15.99,
    compareAtPrice: 18.99,
    rating: 5.0,
    reviewCount: 71,
    category: 'Sensory Toys',
    productType: 'Sensory Toys',
    isSale: true,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['calm-down', 'sensory-regulation', 'travel', 'school'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'Rhythmic, slow-dripping dual-color liquid visual timer that creates a mesmerizing calming visual rhythm to help children self-regulate.',
    whyYouLoveIt: [
      'Provides a visual transition timer for bedtime, homework, or turn-taking',
      'Quiet visual focal point during high emotion moments',
      'Sturdy leak-proof acrylic frame'
    ],
    howToUse: 'Flip upside down to restart the liquid drip. Each cycle lasts approximately 2–3 minutes.',
    safetyInfo: 'Sturdy acrylic construction. Do not drop on hard surfaces.',
    whenItMayHelp: 'Perfect visual tool for quiet corners, calm-down kits, and smoothing routine transitions.'
  },
  {
    id: 'prod-10',
    title: 'Detangling Gentle Hairbrush for Sensitive Scalps',
    handle: 'detangling-gentle-hairbrush',
    price: 21.00,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 88,
    category: 'Daily Use',
    productType: 'Daily Use',
    isSale: false,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['safety', 'sensory-regulation', 'daily-routine'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
    description: 'Designed specifically for children with extreme scalp tactile sensitivity. Ultra-flexible multi-height bristles glide gently through tangles without pulling or pain.',
    whyYouLoveIt: [
      'Transforms morning hair grooming battles into a tear-free routine',
      'Ergonomic palm grip easy for parents and children to hold',
      'Works on wet or dry hair of all textures'
    ],
    howToUse: 'Gently brush from hair ends upward to scalp in small sections.',
    safetyInfo: 'Wash regularly with warm soapy water and air dry.',
    whenItMayHelp: 'Essential tool for children with tactile hypersensitivity who experience pain during hair brushing.'
  },
  {
    id: 'prod-11',
    title: 'Charity Support Sticker Decal - Neurodiversity Pride',
    handle: 'charity-support-sticker-decal',
    price: 4.99,
    compareAtPrice: null,
    rating: 5.0,
    reviewCount: 142,
    category: 'Charity',
    productType: 'Charity Decals',
    isSale: false,
    isBestSeller: true,
    isNew: false,
    isSoldOut: false,
    needs: ['advocacy', 'school'],
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800',
    description: '100% of proceeds from this vinyl decal support autism awareness initiatives, inclusive school programs, and community neurodiversity initiatives.',
    whyYouLoveIt: [
      '100% of proceeds donated to neurodiversity initiatives',
      'High quality weatherproof vinyl sticker for laptops, cars, and bottles',
      'Spreads positive neurodiversity acceptance and love'
    ],
    howToUse: 'Peel back and apply to clean, dry surface.',
    safetyInfo: 'Waterproof and UV resistant vinyl sticker.',
    whenItMayHelp: 'Show your support for neurodivergent children while contributing to community funding.'
  },
  {
    id: 'prod-12',
    title: 'School Support Sensory Starter Pack',
    handle: 'school-support-sensory-starter-pack',
    price: 49.99,
    compareAtPrice: 59.99,
    rating: 5.0,
    reviewCount: 34,
    category: 'Bundles',
    productType: 'Sensory Kits',
    isSale: true,
    isBestSeller: true,
    isNew: true,
    isSoldOut: false,
    needs: ['school', 'sensory-regulation', 'fine-motor', 'chewing'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    description: 'Desk-friendly sensory tools bundle tailored for classroom focus. Includes quiet fidgets, pencil grips, silicone chew pendant, and visual task cards.',
    whyYouLoveIt: [
      'Classroom-ready quiet fidget tools that do not distract classmates',
      'Helps child maintain sensory regulation during long desk activities',
      'Includes discreet storage pouch for school backpack'
    ],
    howToUse: 'Pack pouch in school bag for daily classroom use.',
    safetyInfo: 'All items non-toxic and tested for safety.',
    whenItMayHelp: 'Great for back-to-school preparation, IEP support plans, and classroom concentration.'
  }
];

export const SHOP_BY_NEEDS = [
  {
    id: 'sensory-regulation',
    title: 'Sensory Regulation',
    subtitle: 'Proprioceptive and sensory input tools to help balance energy and soothe overstimulation.',
    iconName: 'Sparkles',
    accentColor: 'bg-[#F2DEFA] text-[#8E44AD]',
    badgeBg: 'bg-[#F2DEFA]',
    cardBorder: 'hover:border-[#8E44AD]/30',
    ctaText: 'Explore Regulation Tools',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chewing',
    title: 'Chewing & Oral Input',
    subtitle: 'Safe, 100% food-grade chewelry and oral sensory tools for kids who chew clothes or pencils.',
    iconName: 'Smile',
    accentColor: 'bg-[#FFDED3] text-[#FF7A59]',
    badgeBg: 'bg-[#FFDED3]',
    cardBorder: 'hover:border-[#FF7A59]/30',
    ctaText: 'Explore Chewing Tools',
    image: 'https://images.unsplash.com/photo-1611591475140-be3a9f0290c0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'calm-down',
    title: 'Calm Down & Rest',
    subtitle: 'Visual motion timers, tactile squishies, and soothing tools for quiet time and decompression.',
    iconName: 'HeartHandshake',
    accentColor: 'bg-[#E3F2FD] text-[#0284C7]',
    badgeBg: 'bg-[#E3F2FD]',
    cardBorder: 'hover:border-[#0284C7]/30',
    ctaText: 'Explore Calm Tools',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'school',
    title: 'School Support',
    subtitle: 'Quiet desk fidgets, handwriting pencil grips, and classroom focus aids.',
    iconName: 'GraduationCap',
    accentColor: 'bg-[#FFEAC7] text-[#D97706]',
    badgeBg: 'bg-[#FFEAC7]',
    cardBorder: 'hover:border-[#D97706]/30',
    ctaText: 'Shop School Support',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'travel',
    title: 'Travel & Outings',
    subtitle: 'Compact, portable sensory tools designed for car trips, waiting rooms, and outings.',
    iconName: 'Car',
    accentColor: 'bg-[#E0F2FE] text-[#0D9488]',
    badgeBg: 'bg-[#E0F2FE]',
    cardBorder: 'hover:border-[#0D9488]/30',
    ctaText: 'Shop Travel Solutions',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'fine-motor',
    title: 'Fine Motor Skills',
    subtitle: 'Grasp supporters, pop tubes, and dexterity games to build strength and coordination.',
    iconName: 'Puzzle',
    accentColor: 'bg-[#FCE4EC] text-[#DB2777]',
    badgeBg: 'bg-[#FCE4EC]',
    cardBorder: 'hover:border-[#DB2777]/30',
    ctaText: 'Explore Motor Tools',
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'safety',
    title: 'Safety & Mealtime',
    subtitle: 'Suction silicone plates, gentle detangling brushes, and practical daily routine tools.',
    iconName: 'ShieldCheck',
    accentColor: 'bg-[#E0F7FA] text-[#00838F]',
    badgeBg: 'bg-[#E0F7FA]',
    cardBorder: 'hover:border-[#00838F]/30',
    ctaText: 'Explore Daily Safety',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'communication',
    title: 'Communication',
    subtitle: 'Visual aids and expressive supports to help children communicate feelings and needs.',
    iconName: 'MessageSquare',
    accentColor: 'bg-[#F2DEFA] text-[#7B1FA2]',
    badgeBg: 'bg-[#F2DEFA]',
    cardBorder: 'hover:border-[#7B1FA2]/30',
    ctaText: 'Explore Communication',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'educational',
    title: 'Educational Support',
    subtitle: 'Interactive learning aids, spatial games, and sensory math & literacy tools.',
    iconName: 'BookOpen',
    accentColor: 'bg-[#FFEAC7] text-[#B45309]',
    badgeBg: 'bg-[#FFEAC7]',
    cardBorder: 'hover:border-[#B45309]/30',
    ctaText: 'Shop Educational Support',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600'
  }
];

export const CATEGORIES = [
  { name: 'Sensory Toys', count: 42, handle: 'sensory-toys', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500' },
  { name: 'Chewelry', count: 18, handle: 'chewelry', image: 'https://images.unsplash.com/photo-1611591475140-be3a9f0290c0?auto=format&fit=crop&q=80&w=500' },
  { name: 'Educational', count: 24, handle: 'educational', image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=500' },
  { name: 'Daily Use', count: 15, handle: 'daily-use', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500' },
  { name: 'Movement & Balance', count: 12, handle: 'movement-and-balance', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500' },
  { name: 'Oral Products', count: 16, handle: 'oral-products', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500' },
  { name: 'Therapy Tools', count: 14, handle: 'therapy-tools', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=500' },
  { name: 'Fidget Toys', count: 35, handle: 'fidget-toys', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=500' },
];

export const PROBLEM_SOLUTIONS = [
  {
    problem: 'Chewing Clothes or Pencils?',
    solution: 'Explore oral sensory chewelry designed specifically for children who seek oral input.',
    cta: 'Find Chewing Solutions',
    needId: 'chewing',
    accent: 'border-l-4 border-[#FF7A59] bg-[#FFDED3]/30'
  },
  {
    problem: 'After-School Meltdowns or Crashes?',
    solution: 'Discover proprioceptive heavy work tools designed for sensory regulation and decompression.',
    cta: 'Explore Calm Tools',
    needId: 'calm-down',
    accent: 'border-l-4 border-[#0284C7] bg-[#E3F2FD]/30'
  },
  {
    problem: 'School Day Struggles & Fidgeting?',
    solution: 'Find quiet classroom sensory tools and ergonomic pencil grips for school focus.',
    cta: 'Shop School Support',
    needId: 'school',
    accent: 'border-l-4 border-[#D97706] bg-[#FFEAC7]/30'
  },
  {
    problem: 'Car Trip Meltdowns & Travel Distress?',
    solution: 'Explore travel-friendly, compact sensory toys and visual calm timers for outings.',
    cta: 'Shop Travel Solutions',
    needId: 'travel',
    accent: 'border-l-4 border-[#0D9488] bg-[#E0F2FE]/30'
  },
  {
    problem: 'Mealtime Struggles & Food Mixing?',
    solution: 'Discover suction silicone divided meal trays designed to make daily routines calm.',
    cta: 'Explore Mealtime Tools',
    needId: 'safety',
    accent: 'border-l-4 border-[#DB2777] bg-[#FCE4EC]/30'
  },
  {
    problem: 'Overstimulated & Need Help Staying Calm?',
    solution: 'Explore gentle visual timers and squishy tactile tools that support self-regulation.',
    cta: 'Shop Calm-Down Tools',
    needId: 'sensory-regulation',
    accent: 'border-l-4 border-[#8E44AD] bg-[#F2DEFA]/30'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Thoughtfully Curated',
    desc: 'Every product is hand-selected with sensory needs, learning outcomes, and practical daily family routines in mind.',
    icon: 'Sparkles',
    bg: 'bg-[#FFEAC7]'
  },
  {
    title: 'Inclusive Focus',
    desc: 'Tools designed to support different sensory seeking or avoiding preferences, fidgeting needs, and learning styles.',
    icon: 'Heart',
    bg: 'bg-[#F2DEFA]'
  },
  {
    title: 'Real Dad Experience',
    desc: 'An Australian dad-owned business built from real, hands-on experience raising a neurodivergent child.',
    icon: 'UserCheck',
    bg: 'bg-[#E3F2FD]'
  },
  {
    title: 'Community Advocacy',
    desc: 'Directly supporting awareness initiatives and neurodivergent school programs through our Charity Decals.',
    icon: 'HandHeart',
    bg: 'bg-[#FFDED3]'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Sarah M. (Parent of 7yo)',
    rating: 5,
    date: '2 days ago',
    productName: 'Silicone Chewelry Pendant Necklace',
    text: 'This chewelry star necklace saved my son’s shirt collars! He wears it every day to school. The breakaway clasp gives me complete peace of mind.',
    verified: true
  },
  {
    id: 2,
    name: 'David K. (Father & Educator)',
    rating: 5,
    date: '1 week ago',
    productName: 'Movement & Deep Pressure Kit Box Bundle',
    text: 'Outstanding quality bundle. As a father of an autistic boy, finding tools that actually work for after-school decompression was tough until we found this store.',
    verified: true
  },
  {
    id: 3,
    name: 'Emma P. (Occupational Therapist)',
    rating: 5,
    date: '2 weeks ago',
    productName: 'Pencil Pal Textured Grip Set',
    text: 'I recommend the Pencil Pal grips to all my clinic families. They provide just the right tactile feedback without fatiguing small hands.',
    verified: true
  },
  {
    id: 4,
    name: 'Rachel B. (Mother of 5yo)',
    rating: 5,
    date: '3 weeks ago',
    productName: 'Cosmic Calmer Liquid Motion Timer',
    text: 'The visual liquid motion timer is magic for bedtime transitions. Beautiful color drip and very calming for my daughter during high stress moments.',
    verified: true
  }
];

export const PARENT_RESOURCES = [
  {
    id: 1,
    title: 'How to Choose the Right Sensory Tool for Your Child',
    category: 'Sensory Support',
    readTime: '4 min read',
    excerpt: 'Understanding sensory seeking vs. sensory avoiding behaviors to select tools that truly bring comfort.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 2,
    title: 'Supporting Oral Input: Safe Alternatives to Chewing Clothes',
    category: 'Chewing Support',
    readTime: '5 min read',
    excerpt: 'Why children seek oral feedback and how food-grade silicone chewelry helps maintain calm at school.',
    image: 'https://images.unsplash.com/photo-1611591475140-be3a9f0290c0?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 3,
    title: 'Creating a Peaceful After-School Decompression Routine',
    category: 'Daily Routine',
    readTime: '6 min read',
    excerpt: 'Practical heavy work strategies and quiet sensory breaks to smooth the transition from school to home.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500'
  }
];
