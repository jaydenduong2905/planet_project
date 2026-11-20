# Space Tourism – Pick Your Destination

A single-page, responsive website for a fictional space travel agency. Visitors pick a destination in our solar system and see a picture of it, a short description, its average distance from Earth and an estimated travel time.

The page is built with plain HTML, CSS and JavaScript. There is no framework, build step or server needed.

## Features

- **10 destinations:** Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn, Uranus and Neptune, switched with tabs.
- **Running number:** the average distance counts up from zero each time you open a destination.
- **Spinning planet:** the planet turns slowly counter-clockwise. You can grab it and spin it by hand in either direction, and it keeps its momentum when you let go.
- **Responsive layout:** separate layouts and background images for mobile, tablet (600px and up) and desktop (1024px and up).
- **Accessible tabs:** the tabs use proper ARIA roles and work with the left and right arrow keys.
- **Reduced motion:** if the visitor has "reduce motion" turned on, the count-up and idle spin are switched off.
- **Fallback art:** if a planet image is missing, the page draws that planet with CSS instead.

## Project structure

```
starter_code/
├── index.html
└── assets/
    ├── favicon-32x32.png
    ├── designs/
    │   ├── my-design version.jpeg
    │   └── space tourism design.png
    ├── destination/
    │   ├── background-destination-desktop.jpg
    │   ├── background-destination-tablet.jpg
    │   ├── background-destination-mobile.jpg
    │   ├── image-sun.webp
    │   ├── image-mercury.webp
    │   ├── image-venus.webp
    │   ├── image-earth.webp
    │   ├── image-moon.webp
    │   ├── image-mars.webp
    │   ├── image-jupiter.webp
    │   ├── image-saturn.webp
    │   ├── image-uranus.webp
    │   └── image-neptune.webp
    └── shared/
        └── logo.svg
```

## Getting started

1. Put `index.html` at the root of the project, next to the `assets` folder.
2. Open `index.html` in a browser, or serve the folder with any static server.
3. An internet connection is needed for the fonts (Bellefair, Barlow Condensed and Barlow from Google Fonts). Without it the browser uses default fonts.

## Customising

All destination content lives in the `destinations` object at the top of the script in `index.html`. Each entry has:

| Field | What it does |
| --- | --- |
| `name` | Title shown for the destination |
| `image` | Path to the planet picture |
| `description` | Paragraph under the title |
| `distance` | `{ value, decimals, unit }` used by the count-up |
| `travel` | Estimated travel time text |

To add a destination, add a new entry to this object. A tab is created for it automatically.

To change the spin speed or direction, edit `BASE_SPEED` in the script. A negative number spins counter-clockwise and a positive number spins clockwise.

## Notes on the data

- Distances are averages from Earth. Travel times are rough estimates made up for this page, not real mission figures.
- Earth shows 0 km and "You're here", since there is nowhere to travel.

## Image credits

- The Moon and Mars images come from the original starter assets.
- The Sun image is a computer-generated render made for this project.
- The Mercury, Venus, Earth, Jupiter, Saturn, Uranus and Neptune images were cut from a supplied planet montage. Check that you have the right to use that source before publishing the site publicly.