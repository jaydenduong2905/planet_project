/* Eight facts per planet. Edit, add or remove sentences here; the pages rotate through whatever is listed. */
const FACTS = {
    sun: [
      "Sunlight takes about 8 minutes and 20 seconds to cross the roughly 150 million km to Earth, so you always see the Sun as it looked a little over 8 minutes ago.",
      "The Sun holds about 99.86% of all the mass in the solar system. It is so big that around 1.3 million Earths could fit inside it.",
      "In the Sun’s core the temperature is about 15 million °C. There, nuclear fusion turns roughly 4 million tonnes of matter into energy every single second.",
      "The Sun is about 4.6 billion years old, roughly halfway through its life. In around 5 billion years it will swell into a red giant.",
      "The Sun’s visible surface is about 5,500 °C, yet its outer atmosphere, the corona, is hotter than 1 million °C. Why it is so much hotter is still an open question for scientists.",
      "Sunspots look dark because they are cooler, at about 3,500 °C, than the surrounding surface. Their number rises and falls in a cycle of roughly 11 years.",
      "The Sun constantly streams charged particles into space at around 400 km/s. This solar wind is what sparks the auroras when it meets Earth’s magnetic field.",
      "The Sun is not solid, so it spins at different speeds. Its equator turns once in about 25 days, while its poles take about 35 days."
    ],
    mercury: [
      "Mercury is the smallest planet in the solar system, only a little bigger than our Moon, with a diameter of about 4,880 km.",
      "One day on Mercury, from sunrise to sunrise, lasts about 176 Earth days. That is twice as long as its 88-day year.",
      "Mercury has almost no atmosphere to hold in heat, so temperatures swing from about 430 °C in daylight to around -180 °C at night.",
      "The Caloris Basin is a giant impact crater about 1,550 km wide, left by an asteroid strike so powerful that it shook the opposite side of the planet.",
      "Mercury’s huge iron core makes up most of the planet. As the core cooled, the planet shrank and its crust wrinkled into cliffs hundreds of kilometres long.",
      "Even though it is the closest planet to the Sun, Mercury has water ice. It hides in deep craters near the poles that never see sunlight.",
      "Mercury races around the Sun at about 47 km/s, faster than any other planet. The Romans named it after their swift messenger god.",
      "Only two spacecraft have orbited or flown past it up close: Mariner 10 in the 1970s and MESSENGER, which orbited from 2011 to 2015. A joint European–Japanese mission, BepiColombo, launched in 2018 to study it further."
    ],
    venus: [
      "Venus is the hottest planet, with a surface temperature of about 465 °C. That is hot enough to melt lead, even though Mercury is closer to the Sun.",
      "Venus spins backwards compared with most planets, and very slowly. One day there lasts about 243 Earth days, which is longer than its 225-day year.",
      "Its atmosphere is about 96% carbon dioxide. The pressure at the surface is around 92 times Earth’s, like being nearly a kilometre deep in the ocean.",
      "The thick clouds of Venus are made of sulfuric acid droplets. They reflect so much sunlight that Venus is the brightest planet in our sky.",
      "Because of its backwards spin, the Sun rises in the west and sets in the east on Venus.",
      "Venus has more volcanoes than any other planet in the solar system, with well over 1,000 large ones spread across its surface.",
      "In 1970 the Soviet probe Venera 7 became the first spacecraft to send data back from the surface of another planet, before the heat and pressure ended its mission.",
      "Venus is often called Earth’s twin because the two planets are almost the same size. Their conditions, however, could hardly be more different."
    ],
    earth: [
      "About 71% of Earth’s surface is covered by water, and the oceans hold about 97% of it. That is why our planet looks so blue from space.",
      "Earth is the only world known to host life. Its air is about 78% nitrogen and 21% oxygen, and it is also the only place we know where liquid water sits on the surface.",
      "Earth is not a perfect sphere. It spins so fast that it bulges at the equator, making it about 43 km wider there than from pole to pole.",
      "Earth formed about 4.54 billion years ago. Life appeared surprisingly early, probably within the first billion years.",
      "Earth’s magnetic field acts like a shield, deflecting harmful particles from the Sun. Some of those particles slip in near the poles and light up the sky as auroras.",
      "Earth’s axis is tilted by about 23.4 degrees. That tilt, not distance from the Sun, is what gives us the seasons.",
      "At the equator, the ground moves at about 1,670 km/h because of Earth’s spin, while the whole planet travels around the Sun at roughly 107,000 km/h.",
      "Earth is the only planet known to have active plate tectonics. The continents drift a few centimetres a year, about as fast as your fingernails grow."
    ],
    moon: [
      "The Moon is about 384,400 km away, and it is slowly drifting farther, by about 3.8 cm every year.",
      "The Moon is tidally locked, so it always shows the same face to Earth. The side we never see is the far side, not the “dark side”, because it gets sunlight too.",
      "Most scientists think the Moon formed about 4.5 billion years ago, after a Mars-sized object crashed into the young Earth and flung out debris that joined together.",
      "Twelve astronauts walked on the Moon between 1969 and 1972. Gravity there is only about one sixth of Earth’s, so they could take huge bouncing steps.",
      "With no real atmosphere, the Moon’s temperature swings from about 127 °C in sunlight to around -173 °C in the dark.",
      "The Moon has moonquakes, caused by Earth’s gravity pulling on it and by the surface cooling. Some of the ones recorded by Apollo seismometers lasted for several minutes.",
      "The Moon’s gravity pulls on Earth’s oceans and creates the tides. Twice a day, sea levels rise and fall because of it.",
      "By a lucky coincidence the Sun is about 400 times wider than the Moon and also about 400 times farther away. That is why the Moon can cover the Sun exactly in a total solar eclipse."
    ],
    mars: [
      "Olympus Mons is the tallest volcano in the solar system, rising about 22 km high and spanning roughly 600 km. That is about two and a half times the height of Everest.",
      "Sunsets on Mars look blue, the opposite of Earth’s red ones, because the fine dust in its sky scatters blue light toward your eyes.",
      "Mars is red because its soil and dust are rich in iron oxide, which is basically rust.",
      "A day on Mars, called a sol, lasts about 24 hours and 39 minutes, very close to ours. Its year is much longer, about 687 Earth days.",
      "The air on Mars is about 95% carbon dioxide and extremely thin, with a surface pressure less than 1% of Earth’s. You would need a pressurized suit to survive there.",
      "Mars has two tiny, potato-shaped moons, Phobos and Deimos. Phobos is slowly spiraling closer to Mars and will break apart or crash in tens of millions of years.",
      "Valles Marineris is a canyon system about 4,000 km long and up to 7 km deep. It is long enough to stretch across the whole United States.",
      "Mars once had rivers and lakes. The Perseverance rover landed in Jezero Crater in 2021 to search for signs of ancient life, and the little Ingenuity helicopter made the first powered flights on another planet."
    ],
    jupiter: [
      "Jupiter is more than twice as massive as all the other planets combined, and more than 1,300 Earths could fit inside it.",
      "The Great Red Spot is a giant storm wider than Earth. It has been watched for more than 150 years, although it has been slowly shrinking.",
      "Ganymede, one of Jupiter’s moons, is the largest moon in the solar system and is even bigger than the planet Mercury.",
      "Jupiter spins faster than any other planet, completing a full turn in just under 10 hours. This makes it noticeably flattened at the poles.",
      "Jupiter has no solid surface. It is mostly hydrogen and helium, and the deeper you go, the hotter and denser it gets.",
      "Its magnetic field is by far the strongest of any planet, trapping intense radiation around it that would be deadly to astronauts and damaging to spacecraft.",
      "The moon Io is the most volcanically active place in the solar system, with hundreds of volcanoes, some shooting lava fountains high above the surface.",
      "Under its icy crust, the moon Europa hides a huge salty ocean, which makes it one of the best places to look for life beyond Earth. NASA’s Europa Clipper launched in 2024 to study it."
    ],
    saturn: [
      "Saturn’s rings stretch about 280,000 km across, yet they are incredibly thin, often only about 10 metres thick in places.",
      "The rings are made mostly of water ice. The pieces range from tiny grains to chunks as big as houses.",
      "Saturn is the least dense planet. It is so light for its size that it would float in a big enough bathtub, because its average density is lower than water’s.",
      "Winds on Saturn can reach about 1,800 km/h near the equator, several times faster than the strongest hurricanes on Earth.",
      "Titan, Saturn’s biggest moon, is larger than Mercury. It has a thick orange atmosphere and lakes and rivers of liquid methane and ethane.",
      "The moon Enceladus shoots geysers of water ice into space from cracks near its south pole, feeding one of Saturn’s rings and hinting at an ocean below.",
      "At Saturn’s north pole there is a strange six-sided jet stream called the hexagon. It is about 30,000 km wide, wide enough to hold nearly two Earths.",
      "A day on Saturn lasts only about 10.5 hours. The Cassini spacecraft explored it from 2004 until 2017, when it was deliberately sent into Saturn’s atmosphere to protect its moons."
    ],
    uranus: [
      "Uranus is tilted by about 98 degrees, so it rolls around the Sun almost on its side. It is probably the result of a huge collision long ago.",
      "Uranus takes 84 Earth years to orbit the Sun, so each season lasts about 21 years. Each pole gets around 42 years of continuous sunlight, then 42 years of darkness.",
      "Despite being closer than Neptune, Uranus has the coldest atmosphere of any planet, dropping to about -224 °C.",
      "William Herschel discovered Uranus in 1781, making it the first planet found with a telescope. He first thought it was a comet, and wanted to call it “George’s Star”.",
      "The blue-green color comes from methane in its atmosphere, which absorbs red light and reflects blue-green light.",
      "Uranus has 13 known faint rings and more than two dozen moons. Many of the moons are named after characters from the works of Shakespeare and Alexander Pope.",
      "Only one spacecraft has ever visited Uranus. Voyager 2 flew past in 1986 and sent back almost everything we know up close.",
      "Uranus’s magnetic field is strangely tilted about 59 degrees from its spin axis and is not centered on the planet, so it wobbles wildly as Uranus spins."
    ],
    neptune: [
      "Neptune has the fastest winds in the solar system, blowing at more than 2,000 km/h, even though it is so far from the Sun’s energy.",
      "Neptune was found with math before it was seen. In 1846, astronomers predicted where it should be from irregularities in Uranus’s orbit, and found it in the sky that same night.",
      "One year on Neptune lasts about 165 Earth years. It finished its first orbit since its discovery in 2011.",
      "Its largest moon, Triton, orbits backwards, which suggests it was captured from the Kuiper Belt. It is also incredibly cold, at about -235 °C, with geysers of nitrogen.",
      "Neptune has giant dark storms that come and go. The Great Dark Spot seen by Voyager 2 in 1989 was about the size of Earth.",
      "Neptune’s deep blue color comes partly from methane in its atmosphere, along with another, still unidentified, ingredient that makes the blue richer than on Uranus.",
      "Only Voyager 2 has visited Neptune, flying past in 1989 and discovering six of its moons.",
      "Neptune is about 30 times farther from the Sun than Earth, so the sunlight there is roughly 900 times dimmer. Noon on Neptune looks like dim twilight."
    ]
  };