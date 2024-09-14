const images = [
  {
    id: 1,
    num: 270,
    url: "https://cdn3.iconfinder.com/data/icons/solar-system-3/100/Mercury-512.png",
    rotateDeg: 0,
    title: "Mercury",
    planetInfo: {
      name: "Mercury",
      diameter: "4,880 kilometers",
      distanceFromSun: "57.9 million kilometers",
      orbitalPeriod: "88 Earth days",
      rotationPeriod: "59 Earth days",
      atmosphere:
        "Thin exosphere composed of oxygen, sodium, hydrogen, helium, and potassium",
      surfaceTemperature: "Average -167°C, up to 427°C in sunlight",
      notableFeatures:
        "Smallest planet in the Solar System, closest to the Sun, no moons, heavily cratered surface",
      exploration: "Visited by Mariner 10 and MESSENGER missions",
      interestingFact:
        "Mercury has the largest temperature variation between day and night of any planet.",
    },
    info: "Mercury is the smallest planet in our Solar System and the closest to the Sun.",
    thubmnail: [
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-03/mercury-retrograde-zz-240329-5202f4.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/mercury-royalty-free-image-1697140572.jpg",
      "https://c.tadst.com/gfx/1200x630/mercury.jpg?1",
      "https://cff2.earth.com/uploads/2023/12/07064158/mercury_planet_asteroids_3medium.jpg",
      "https://cdn.pixabay.com/photo/2016/02/28/02/27/mercury-1226433_1280.jpg",
      "https://griffithobservatory.org/wp-content/uploads/2021/03/Mercury_fin_flood_LD_V3-1600x800.jpg",
      "https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/12/121823_sek_mercury_feat.jpg",
      "https://starlust.org/wp-content/uploads/2023/07/planet-mercury.webp",
      "https://orbitaltoday.com/wp-content/uploads/2023/05/How-long-is-a-day-on-Mercury-A.jpg",
      "https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/mercury_MESSENGER_M2_Global_Color_perry.jpg?mtime=1585686466",
    ],
  },
  {
    id: 2,
    num: 300,
    url: "https://png.pngtree.com/png-clipart/20231021/original/pngtree-venus-watercolor-planet-png-image_13391810.png",
    rotateDeg: 30,
    title: "Venus",
    planetInfo: {
      name: "Venus",
      diameter: "12,104 kilometers",
      distanceFromSun: "108.2 million kilometers",
      orbitalPeriod: "225 Earth days",
      rotationPeriod: "243 Earth days",
      atmosphere:
        "Thick atmosphere of carbon dioxide with clouds of sulfuric acid",
      surfaceTemperature: "Average 467°C",
      notableFeatures:
        "Hottest planet in the Solar System, no moons, extreme greenhouse effect",
      exploration: "Explored by Venera missions, Magellan spacecraft",
      interestingFact:
        "Venus rotates in the opposite direction to most other planets, making its sunrise in the west and sunset in the east.",
    },
    info: "Venus is similar in size and structure to Earth, but it has a toxic atmosphere and extreme temperatures.",
    thubmnail: [
      "https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg",
      "https://science.nasa.gov/wp-content/uploads/2023/05/venus-mariner-10-pia23791-1920x640-1.jpg?w=1920",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxzlVqpJ3w-VdX6Na8lpW0KYV-Wg5Gx06FA&s",
      "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23053042/688_Venus.jpeg?quality=90&strip=all&crop=0,0,100,66.666666666667",
      "https://media.wired.com/photos/5e59ad2b79c7100008eb6ae8/16:9/w_2000,h_1125,c_limit/photo_space_venus_1_S91-50688.jpg",
      "https://www.rmit.edu.au/content/dam/rmit/rmit-images/news/2021/jun/nasa-venus-mission/Banner_Venus_1446x540.jpg",
      "https://images.newscientist.com/wp-content/uploads/2021/04/29112534/2amj054_web.jpg",
      "https://static01.nyt.com/images/2020/09/14/science/14SCI-VENUS1-alt/14SCI-VENUS1-alt-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      "https://cdn.britannica.com/44/21144-050-64C80234/topography-image-Venus-radar-data-clouds-spacecraft.jpg",
      "https://pyxis.nymag.com/v1/imgs/83b/9ec/67368539f1b97bb111302b005c5e746244-venus.2x.rsocial.w600.jpg",
    ],
  },
  {
    id: 3,
    num: 330,
    url: "https://www.freeiconspng.com/uploads/earth-icon-3.png",
    rotateDeg: 60,
    title: "Earth",
    planetInfo: {
      name: "Earth",
      diameter: "12,742 kilometers",
      distanceFromSun: "149.6 million kilometers",
      orbitalPeriod: "365.25 Earth days",
      rotationPeriod: "24 hours",
      atmosphere:
        "Nitrogen (78%), Oxygen (21%), Argon (0.93%), Carbon dioxide (0.04%)",
      surfaceTemperature: "Average 15°C",
      notableFeatures:
        "Supports life, abundant water in liquid form, diverse climates and ecosystems",
      exploration:
        "Extensively studied, numerous satellites and space missions",
      interestingFact:
        "Earth is the only known planet with liquid water on its surface, essential for life as we know it.",
    },
    info: "Earth is the only planet known to support life, with vast oceans and diverse ecosystems.",
    thubmnail: [
      "https://cdn.mos.cms.futurecdn.net/FaWKMJQnr2PFcYCmEyfiTm-1200-80.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg",
      "https://i.natgeofe.com/n/f5453fe7-0483-42f1-b3e7-160e1d2019f8/940_16x9.jpg?w=1200",
      "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20233/6436fb312cfac278e61b35e3_Earth/Earth_hero.jpg",
      "https://parade.com/.image/t_share/MTkwNTgxNDY5Mzk2NjczNjYx/earth-facts-jpg.jpg",
      "https://static.scientificamerican.com/sciam/cache/file/3D3EBC0B-26CB-41F5-951EE45D02F52BE2_source.jpg",
      "https://c02.purpledshub.com/uploads/sites/41/2023/07/planet-earth-9f8e709.jpg?w=1029&webp=1",
      "https://cdn.mos.cms.futurecdn.net/xcLR5HMU2kxskdAy3ZVuTf-1200-80.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1442849073-648c673408c0f.jpg",
    ],
  },
  {
    id: 4,
    num: 0,
    url: "https://pngimg.com/d/mars_planet_PNG34.png",
    rotateDeg: 90,
    title: "Mars",
    planetInfo: {
      name: "Mars",
      diameter: "6,779 kilometers",
      distanceFromSun: "227.9 million kilometers",
      orbitalPeriod: "687 Earth days",
      rotationPeriod: "24.6 hours",
      atmosphere:
        "Thin atmosphere composed of carbon dioxide, nitrogen, and argon",
      surfaceTemperature: "Average -60°C, ranging from -125°C to 20°C",
      notableFeatures:
        "Known as the Red Planet due to iron oxide on its surface, two small moons (Phobos and Deimos)",
      exploration:
        "Explored by numerous missions including Mars rovers and orbiters",
      interestingFact:
        "Mars has the largest volcano in the Solar System, Olympus Mons, which stands about 22 kilometers high.",
    },
    info: "Mars is known as the Red Planet due to its reddish appearance, caused by iron oxide on its surface.",
    thubmnail: [
      "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg",
      "https://cdn.theatlantic.com/thumbor/fceiL7cYw0C_NJ0cGFvL2Q_4YGg=/0x119:4784x2810/960x540/media/img/mt/2017/01/mars_globe_valles_marineris_enhanced_full_1/original.jpg",
      "https://cdn.mos.cms.futurecdn.net/gyvJwtr8NxyGMMJ9T5Z5o3.jpg",
      "https://c02.purpledshub.com/uploads/sites/48/2023/04/GettyImages-181827946-066b3f5.jpg",
      "https://www.eso.org/public/archives/images/screen/eso1509a.jpg",
      "https://c02.purpledshub.com/uploads/sites/41/2023/07/mars-thumbnail-fb84d10.jpg",
      "https://c02.purpledshub.com/uploads/sites/48/2021/03/03.HazcamProcess_WillGater-0955302.jpg?webp=1&w=1200",
      "https://www.openaccessgovernment.org/wp-content/uploads/2021/04/dreamstime_xxl_121672573-scaled.jpg",
      "https://mediaproxy.salon.com/width/1200/height/675/https://media2.salon.com/2022/05/mars-canyons-0517221.jpg",
    ],
  },
  {
    id: 5,
    num: 30,
    url: "https://cdn.pixabay.com/photo/2013/07/12/18/36/jupiter-153563_1280.png",
    rotateDeg: 120,
    title: "Jupiter",
    planetInfo: {
      name: "Jupiter",
      diameter: "139,820 kilometers",
      distanceFromSun: "778.3 million kilometers",
      orbitalPeriod: "11.9 Earth years",
      rotationPeriod: "9.9 hours",
      atmosphere:
        "Mostly hydrogen and helium with traces of methane, ammonia, and water vapor",
      surfaceTemperature: "Average -145°C",
      notableFeatures:
        "Largest planet in the Solar System, known for its Great Red Spot, has 79 known moons",
      exploration: "Visited by Pioneer, Voyager, Galileo, and Juno missions",
      interestingFact:
        "Jupiter's Great Red Spot is a massive storm that has been raging for at least 400 years.",
    },
    info: "Jupiter is the largest planet in our Solar System and is known for its Great Red Spot, a giant storm.",
    thubmnail: [
      "https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?w=4096&format=jpeg&crop=1",
      "https://cdn.mos.cms.futurecdn.net/Mza6ccKYF6WVrqZekTtJxN-1200-80.jpg",
      "https://starwalk.space/gallery/images/jupiter-guide/1920x1080.jpg",
      "https://i.insider.com/609aa91a342837001822cbd6?width=800&format=jpeg&auto=webp",
      "https://bigthink.com/wp-content/uploads/2021/08/134268-134269.jpg?resize=1200,630",
      "https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=65&Interlaced=1&Mode=R&ResX=960&OutputFormat=jpg&Quality=80&ts=1718299199",
      "https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2017/05/052517_AY_jupiter_main_FREE.jpg",
      "https://www.funkidslive.com/wp-content/uploads/2022/10/awyeqyydhve-1024x585.jpg",
      "https://orbitaltoday.com/wp-content/uploads/2023/07/fun-facts-about-Jupiter-2.jpg",
      "https://nypost.com/wp-content/uploads/sites/2/2021/12/astrology-jupiter-sign-1-copy.jpg?quality=75&strip=all",
    ],
  },
  {
    id: 6,
    num: 60,
    url: "https://wallpapers.com/images/hd/saturn-in-astrology-png-51-h6fc6pcuwzzz0xn1.jpg",
    rotateDeg: 150,
    title: "Saturn",
    planetInfo: {
      name: "Saturn",
      diameter: "116,460 kilometers",
      distanceFromSun: "1.4 billion kilometers",
      orbitalPeriod: "29.5 Earth years",
      rotationPeriod: "10.7 hours",
      atmosphere:
        "Mostly hydrogen and helium, with trace amounts of methane and ammonia",
      surfaceTemperature: "Average -178°C",
      notableFeatures:
        "Known for its prominent ring system, has 83 known moons",
      exploration: "Explored by Pioneer, Voyager, and Cassini missions",
      interestingFact:
        "Saturn is the flattest planet in the Solar System due to its low density and rapid rotation.",
    },
    info: "Saturn is famous for its extensive ring system, composed mainly of ice particles and rock debris.",
    thubmnail: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
      "https://cdn.mos.cms.futurecdn.net/p2UBxuRToGRziJFua2EYeF.jpg",
      "https://images.theconversation.com/files/286855/original/file-20190805-117866-dgviij.jpg?ixlib=rb-4.1.0&rect=0%2C112%2C4992%2C2492&q=45&auto=format&w=1356&h=668&fit=crop",
      "https://starwalk.space/gallery/images/saturn-planet-guide/1140x641.jpg",
      "https://maxpolyakov.com/wp-content/uploads/2023/10/the-mystery-of-saturns-rings-history-of-the-study-of-the-sixth-planet.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/saturn-planet-with-rings-in-outer-space-among-star-royalty-free-image-1691506065.jpg",
      "https://www.go-astronomy.com/images/moons/planet-saturn.jpg",
      "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/Saturn1.jpeg?size=*:900",
      "https://cdnn21.img.ria.ru/images/07e5/02/0d/1597360725_0:143:1920:1223_1920x0_80_0_0_ae977b20fe25fafe918895ef0d16b56a.jpg",
    ],
  },
  {
    id: 7,
    num: 90,
    url: "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688596597_kartin-papik-pro-p-kartinki-planeta-uran-na-belom-fone-8.png",
    rotateDeg: 180,
    title: "Uranus",
    planetInfo: {
      name: "Uranus",
      diameter: "50,724 kilometers",
      distanceFromSun: "2.9 billion kilometers",
      orbitalPeriod: "84 Earth years",
      rotationPeriod: "17.2 hours",
      atmosphere:
        "Primarily hydrogen and helium with methane giving it a blue color",
      surfaceTemperature: "Average -224°C",
      notableFeatures:
        "Unique tilt of 98 degrees, which means its poles are almost in the plane of its orbit, has 27 known moons",
      exploration: "Visited by Voyager 2 spacecraft",
      interestingFact:
        "Uranus is the only planet that rotates on its side relative to its orbit, making its seasons extremely extreme.",
    },
    info: "Uranus is unique because it rotates on its side, making its axial tilt the most extreme in the Solar System.",
    thubmnail: [
      "https://cdn.mos.cms.futurecdn.net/fniNDsYDMWq9dg4EiXM2UQ-1200-80.jpg",
      "https://imageio.forbes.com/specials-images/imageserve/5f91806c76fcfa4a1e885d7c/Planet-Uranus-/960x0.jpg?format=jpg&width=960",
      "https://ichef.bbci.co.uk/images/ic/480xn/p0257vk5.jpg.webp",
      "https://bgr.com/wp-content/uploads/2021/10/rsz_adobestock_318700318.jpg?quality=82&strip=all",
      "https://cff2.earth.com/uploads/2024/04/14082129/uranus_more-gassy_less-icy_moon_1-scaled.jpg",
      "https://images.ctfassets.net/cnu0m8re1exe/5kMBUaBzV7Iq03C7e1ZsTZ/215894a6a88e73580d2cfe5370a88af5/shutterstock_1666194169.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
      "https://starwalk.space/gallery/images/uranus-facts/1920x1080.jpg",
      "https://www.astronomy.com/uploads/2023/03/Uranussideways.jpg",
      "https://media.cnn.com/api/v1/images/stellar/prod/210331213108-conclu-uranus.jpg?q=w_1920,h_1080,x_0,y_0,c_fill",
      "https://media.istockphoto.com/id/1187258342/photo/beautiful-view-of-planet-uranus-from-space-timelapse-and-stars-abstract-background-texture.jpg?s=612x612&w=0&k=20&c=Kv61_z0sYOoBH61HByHlKqOkJgNbUzhH3QTHFizCK6E=",
    ],
  },
  {
    id: 8,
    num: 120,
    url: "https://astro-obzor.ru/wp-content/uploads/2017/05/neptune-1-e1552412169966.png",
    rotateDeg: 210,
    title: "Neptune",
    planetInfo: {
      name: "Neptune",
      diameter: "49,244 kilometers",
      distanceFromSun: "4.5 billion kilometers",
      orbitalPeriod: "164.8 Earth years",
      rotationPeriod: "16.1 hours",
      atmosphere:
        "Mostly hydrogen, helium, and methane, giving it a blue color",
      surfaceTemperature: "Average -214°C",
      notableFeatures:
        "Farthest planet from the Sun, known for its Great Dark Spot, has 14 known moons",
      exploration: "Visited by Voyager 2 spacecraft",
      interestingFact:
        "Neptune has the strongest winds of any planet in the Solar System, reaching speeds of over 2,000 kilometers per hour.",
    },
    info: "Neptune is the furthest planet from the Sun, known for its intense blue color and strong winds.",
    thubmnail: [
      "https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?w=4096&format=jpeg&crop=1",
      "https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?w=4096&format=jpeg&crop=1",
      "https://www.sciencefriday.com/wp-content/uploads/2022/04/Neptune.jpg?w=1024",
      "https://images.nationalgeographic.org/image/upload/v1607339922/videos/posters/Neptune%20101.jpg",
      "https://c.tadst.com/gfx/600x337/neptune.jpg?1",
      "https://www.thefactsite.com/wp-content/uploads/2012/11/neptune-facts.webp",
      "https://starwalk.space/gallery/images/neptune-at-opposition-2021/1140x641.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKi9gl0WaqodsByOcOiQJzE7gsWFdQEuS7nw&s",
      "https://orbitaltoday.com/wp-content/uploads/2022/12/Neptune-featureIMG.jpg",
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/11/17/neptune.jpg",
    ],
  },
  {
    id: 9,
    num: 150,
    url: "https://png.pngtree.com/png-clipart/20230518/ourmid/pngtree-realistic-sun-illustration-png-image_7096994.png",
    rotateDeg: 240,
    title: "Sun",
    mainInfo: `The Sun is a star at the center of our solar system, comprising about 99.86% of the total mass of the solar system. It has a diameter of approximately 1.4 million kilometers, which is about 109 times the diameter of Earth. The Sun emits energy through nuclear fusion processes occurring in its core, where hydrogen is converted into helium, releasing a tremendous amount of energy in the form of light and heat. This energy is crucial for sustaining life on Earth.

The Sun has several layers, including the core, where nuclear fusion happens; the photosphere, which is the visible surface; the chromosphere, located above the photosphere; and the corona, the outermost layer of the Sun’s atmosphere. The Sun exhibits various types of solar activity, such as sunspots, solar flares, and coronal mass ejections, which can affect space weather and Earth's atmosphere.

The Sun follows an approximately 11-year solar cycle that includes periods of solar minimum and maximum, characterized by variations in solar activity. Its energy output and solar phenomena have significant impacts on the Earth's climate and space weather.

Located about 150 million kilometers (1 astronomical unit) away from Earth, the Sun is expected to remain in its current stable phase for about 5 billion more years before eventually becoming a red giant and then a white dwarf.`,
    info: "The Sun is the star at the center of our Solar System, providing the necessary heat and light for life on Earth.",
    thubmnail: [
      "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede-1720x968.jpg",
      "https://cdn.hswstatic.com/gif/gettyimages-1406174121.jpg",
      "https://c02.purpledshub.com/uploads/sites/41/2023/07/The-Sun-thumbnail-c8d6c09.jpg?w=1200",
      "https://cdn.mos.cms.futurecdn.net/mzvdREkye2SgLCAqAme7fY-1200-80.jpg",
      "https://images.ctfassets.net/cnu0m8re1exe/3u1zzE5h4Yrk0r3G2svT78/62abc977def3d662634beee769e855b2/sun.jpg",
      "https://cdn.mos.cms.futurecdn.net/truJRnpVqJWCE3EaEjvaTk.jpg",
      "https://th-thumbnailer.cdn-si-edu.com/PGrs6s0RrEoA-muZC5seLdC5Ax8=/1000x750/filters:no_upscale():focal(512x512:513x513)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/76/a2/76a24f25-a130-4738-93c7-55bf56c65a87/nasa_sun.jpeg",
      "https://static.scientificamerican.com/sciam/cache/file/8D6B2EC4-80E2-4C52-B954B2FD9D1C58E3_source.jpg?w=1200",
      "https://cdn.pixabay.com/photo/2016/07/03/00/15/sun-1494070_1280.jpg",
    ],
  },
  {
    id: 10,
    num: 180,
    url: "https://static.vecteezy.com/system/resources/previews/026/676/320/original/3d-rendering-of-pluto-planet-free-png.png",
    rotateDeg: 270,
    title: "Pluto",
    mainInfo: `Pluto is a dwarf planet located in the outer reaches of our solar system, beyond Neptune. It was discovered in 1930 by Clyde Tombaugh and was originally classified as the ninth planet. However, in 2006, the International Astronomical Union reclassified Pluto as a dwarf planet due to new criteria defining what constitutes a planet.

Pluto has a diameter of about 2,377 kilometers, making it significantly smaller than Earth and even smaller than Earth's Moon. Its orbit around the Sun is highly elliptical, taking about 248 Earth years to complete one orbit. The orbit is tilted relative to the plane of the solar system, which means Pluto’s path can bring it closer to the Sun than Neptune for a portion of its orbit.

The surface of Pluto is composed of a variety of ices, including nitrogen, methane, and carbon monoxide. It has a diverse landscape with mountains, plains, and possible cryovolcanoes. Pluto also has a thin atmosphere that expands and contracts as it moves closer to and farther from the Sun.

Pluto has five known moons: Charon, the largest and closest to Pluto; and four smaller moons named Styx, Nix, Kerberos, and Hydra. Charon is so large relative to Pluto that the two bodies actually orbit a common center of mass located outside of Pluto itself.

In 2015, NASA's New Horizons spacecraft conducted a flyby of Pluto, providing the first close-up images and detailed scientific data about the dwarf planet. This mission revealed a complex and intriguing world with a diverse range of geological features and a surprisingly young surface.`,
    info: "Pluto is a dwarf planet in the Kuiper Belt, once considered the ninth planet in our Solar System.",
    thubmnail: [
      "https://cdn.mos.cms.futurecdn.net/DoZSMXF87kCuzbymsuEFHo-1200-80.jpg",
      "https://c02.purpledshub.com/uploads/sites/41/2021/09/BIG_P_COLOR_2_TRUE_COLOR1-crop-38e1bae.jpg",
      "https://orbitaltoday.com/wp-content/uploads/2024/01/Is-Pluto-a-planet-.jpg",
      "https://www.usatoday.com/gcdn/-mm-/de058f9c3f28b026acb893feeeb8ed83b97e8dec/c=541-279-2050-1132/local/-/media/USATODAY/None/2014/10/02/1412256025000-pluto000001.jpg",
      "https://th-thumbnailer.cdn-si-edu.com/3Y98WlTw2kgwoq-Mk1EcZqaCJ0Q=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d4/c6/d4c6c86c-5165-4784-82b5-5a518a6d93d6/01_stern_02c_pluto_nat_color.jpg",
      "https://universemagazine.com/wp-content/uploads/2024/02/pluto-960-h-640-1.jpg",
      "https://www.nasa.gov/wp-content/uploads/2021/10/riderupes-pluto-both-planet-1.jpg",
      "https://images.ctfassets.net/cnu0m8re1exe/5ZiRM0rmAdzCxjH9sQPWZU/167d51bfc1484de5b3837b0ce18bfec6/Pluto.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/10/02/12/Pluto-REX-v3.jpg",
      "https://www.famousinreal.life/cdn/shop/articles/Pluto_2048x.progressive.jpg?v=1637268885",
    ],
  },
  {
    id: 11,
    num: 210,
    url: "https://png.pngtree.com/png-clipart/20231017/original/pngtree-3d-rendering-planet-eris-solar-system-universe-png-image_13327759.png",
    rotateDeg: 300,
    mainInfo: `Eris is a dwarf planet located in the scattered disk, a distant and loosely bound region of our solar system. It was discovered in 2005 by astronomer Mike Brown and his team. Eris is one of the largest known dwarf planets and is located far beyond Neptune, in a region of space known as the trans-Neptunian region.

Eris has a diameter of about 2,326 kilometers, making it slightly smaller than Pluto but still significant in size compared to other dwarf planets. Its orbit is highly elliptical and takes about 557 Earth years to complete one orbit around the Sun. This orbit can bring Eris closer to the Sun than Pluto for a portion of its orbit.

The surface of Eris is covered with a layer of frozen methane, giving it a bright, reflective appearance. It has a thin atmosphere composed mainly of methane, which can freeze onto the surface as Eris moves farther from the Sun. The dwarf planet is also known for its large moon, Dysnomia, which was discovered shortly after Eris and is relatively large compared to its host.

Eris was one of the key objects that led to the redefinition of the term "planet" by the International Astronomical Union (IAU) in 2006, which resulted in Pluto being reclassified as a dwarf planet. Eris’s discovery helped highlight the need for clearer definitions within the solar system.`,
    title: "Eris",
    info: "Eris is a dwarf planet in the scattered disk region, slightly smaller than Pluto but more massive.",
    thubmnail: [
      "https://astrophotographylens.com/cdn/shop/articles/Eris.webp?v=1712333156",
      "https://science.nasa.gov/wp-content/uploads/2023/06/Artists_c_oncept_of_Eris_and_Dysnomia_far_from_the_Sun-jpeg.webp?w=800",
      "https://cff2.earth.com/uploads/2024/02/20135637/Eris_icy-dwarf-planet_kuiper-belt_1m.jpg",
      "https://science.nasa.gov/_ipx/w_4096&f_webp/https://smd-cms.nasa.gov/wp-content/uploads/2023/09/nh-pluto-charon-v2-10-1-15_1600.jpg%3Fw=1600",
      "https://koala.sh/api/image/v2-3z3j4-2gm1m.jpg?width=1216&height=832&dream",
      "https://www.eso.org/public/archives/images/screen/eso1142e.jpg",
      "https://1721181113.rsc.cdn77.org/data/images/full/37848/new-horizons-nears-july-14-flyby-of-pluto.jpg",
      "https://cdn.mos.cms.futurecdn.net/FpwH7RW5xS2WQ3ffPZdhQk-1200-80.jpg",
      "https://www.renderhub.com/3dstudio/dwarf-planet-eris/dwarf-planet-eris-01.jpg",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ad8232-4e09-4675-b9e7-bc2898960870/dchfycq-8cbb392f-0368-43db-b130-35474f99f4fa.jpg/v1/fill/w_1024,h_576,q_75,strp/dwarf_planet_eris_by_jcp_johncarlo_dchfycq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvOTBhZDgyMzItNGUwOS00Njc1LWI5ZTctYmMyODk4OTYwODcwXC9kY2hmeWNxLThjYmIzOTJmLTAzNjgtNDNkYi1iMTMwLTM1NDc0Zjk5ZjRmYS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jJ5bm-XIR1KfmP3mk9xy9VLGvLwGSt5DU4AnNfw6syI",
    ],
  },
  {
    id: 12,
    num: 240,
    url: "https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-3d-rendering-planet-ceres-fictional-solar-system-universe-png-image_11495162.png",
    rotateDeg: 330,
    title: "Ceres",
    mainInfo: `Ceres is the largest object in the asteroid belt between Mars and Jupiter and is classified as a dwarf planet. It was discovered in 1801 by Italian astronomer Giuseppe Piazzi, making it the first asteroid to be discovered.

Ceres has a diameter of about 940 kilometers, making it significantly smaller than Pluto but larger than many other asteroids. Despite its size, it is still considered one of the smaller dwarf planets in our solar system.

Ceres is notable for its relatively smooth surface, which is marked by features such as craters, ridges, and large, bright spots. These bright spots are thought to be deposits of sodium carbonate (a type of salt) or ice, which reflect sunlight more effectively than the surrounding surface.

The surface of Ceres is composed of a mixture of rock and ice, and there is evidence suggesting that a subsurface ocean of liquid water may exist beneath its icy crust. This potential subsurface ocean has made Ceres a point of interest for studies related to the potential habitability of other celestial bodies.

In 2015, NASA’s Dawn spacecraft began orbiting Ceres and conducted detailed observations of the dwarf planet. The mission provided valuable data, including high-resolution images of Ceres’s surface and insights into its geological features and composition. The Dawn mission revealed the complex and diverse nature of Ceres, including the presence of organic molecules, which are key ingredients for life.`,
    info: "Ceres is the largest object in the asteroid belt between Mars and Jupiter, classified as a dwarf planet.",
    thubmnail: [
      "https://img.jakpost.net/c/2020/08/11/2020_08_11_102095_1597116571._large.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5O7sD_te6c67BGjlQrqYcQJe9DPQIc0V4QA&s",
      "https://media.newyorker.com/photos/5909681dc14b3c606c106c4f/master/pass/Lemonick-Dwarf-Planet.jpg",
      "https://stsci-opo.org/STScI-01EVSTFG11Z011TWQSTZ4ASBBW.png",
      "https://i0.wp.com/eos.org/wp-content/uploads/2016/09/ceres-northern-end.jpg?fit=820%2C615&ssl=1",
      "https://media-cldnry.s-nbcnews.com/image/upload/msnbc/2015_10/295191/2015-03-02t200805z_513390005_gm1ea1n0ogj01_rtrmadp_3_space-ceres.jpg",
      "https://interestingengineering.com/_next/image?url=https%3A%2F%2Fimages.interestingengineering.com%2Fimg%2Fiea%2Fy5wWJDq26X%2Fnearby-dwarf-planet-ceres-might-host-vast-underground-ocean-say-scientists.jpg&w=1200&q=75",
      "https://aasnova.org/wp-content/uploads/2024/04/PIA20696_hires.jpeg",
      "https://globalnews.ca/wp-content/uploads/2014/01/ceres.jpg?quality=85&strip=all",
    ],
  },
];

export default images;
