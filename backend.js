/* Distances are averages from Earth. Each entry points to its picture in
   assets/destination/ (the CSS-drawn planet is only a fallback if a file is missing). */
   const destinations = {
    sun: {
      name: "Sun",
      image: "./assets/destination/image-sun.png",
      description: "The center of it all. Our star holds 99.86% of the solar system’s mass and burns at about 5,500 °C on its surface. Best admired from a very respectful distance, preferably through a very dark visor.",
      distance: { value: 149.6, decimals: 1, unit: "mil. km" },
      travel: "6 months"
    },
    mercury: {
      name: "Mercury",
      image: "./assets/destination/image-mercury.webp",
      description: "The smallest planet and the closest to the Sun, Mercury races around it every 88 days. Days are scorching and nights are freezing, so pack for both.",
      distance: { value: 150, decimals: 0, unit: "mil. km" },
      travel: "6 months"
    },
    venus: {
      name: "Venus",
      image: "./assets/destination/image-venus.webp",
      description: "Wrapped in thick clouds, Venus is the hottest planet in the solar system, hotter even than Mercury. Enjoy the view from orbit, because the surface is not for sightseeing.",
      distance: { value: 150, decimals: 0, unit: "mil. km" },
      travel: "6 months"
    },
    earth: {
      name: "Earth",
      image: "./assets/destination/image-earth.png",
      description: "Home sweet home. The only world known to host life, with oceans, forests and one very friendly Moon. No travel required, but the guidebook still rates it five stars.",
      distance: { value: 0, decimals: 0, unit: "km" },
      travel: "You’re here"
    },
    moon: {
      name: "Moon",
      image: "./assets/destination/image-moon.webp",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 15 and Apollo 11 landing sites.",
      distance: { value: 384400, decimals: 0, unit: "km" },
      travel: "3 days"
    },
    mars: {
      name: "Mars",
      image: "./assets/destination/image-mars.png",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planet in the solar system. It’s two and a half times the size of Everest!",
      distance: { value: 225, decimals: 0, unit: "mil. km" },
      travel: "9 months"
    },
    jupiter: {
      name: "Jupiter",
      image: "./assets/destination/image-jupiter.webp",
      description: "The giant of the solar system, big enough to hold every other planet inside it. Don’t miss the Great Red Spot, a storm bigger than Earth that has been raging for centuries.",
      distance: { value: 778, decimals: 0, unit: "mil. km" },
      travel: "3.5 years"
    },
    saturn: {
      name: "Saturn",
      image: "./assets/destination/image-saturn.webp",
      description: "Famous for its dazzling rings of ice and rock, Saturn is a must-see. It’s so light for its size that it would float in a big enough bathtub.",
      distance: { value: 1.4, decimals: 1, unit: "bil. km" },
      travel: "6 years"
    },
    uranus: {
      name: "Uranus",
      image: "./assets/destination/image-uranus.webp",
      description: "An ice giant that rolls around the Sun tilted on its side. Each season lasts over 20 years, so plan your visit around the long sunsets.",
      distance: { value: 2.9, decimals: 1, unit: "bil. km" },
      travel: "13 years"
    },
    neptune: {
      name: "Neptune",
      image: "./assets/destination/image-neptune.webp",
      description: "The farthest planet from the Sun, deep blue and wild with supersonic winds. One trip around the Sun takes 165 years, so you’ll only catch a fraction of its year.",
      distance: { value: 4.5, decimals: 1, unit: "bil. km" },
      travel: "20 years"
    }
  };
  
  const keys = Object.keys(destinations);
  const tablist = document.getElementById("tablist");
  const panel = document.getElementById("panel");
  const planet = document.getElementById("planet-spin");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  
  /* ---------- Build tabs ---------- */
  keys.forEach(key => {
    const b = document.createElement("button");
    b.type = "button";
    b.role = "tab";
    b.id = "tab-" + key;
    b.dataset.dest = key;
    b.setAttribute("aria-controls", "panel");
    b.setAttribute("aria-selected", "false");
    b.tabIndex = -1;
    b.textContent = destinations[key].name;
    tablist.appendChild(b);
  });
  const tabs = Array.from(tablist.children);
  
  /* ---------- Planet art ---------- */
  function cssArt(key) {
    return key === "saturn"
      ? `<div class="saturn"><div class="ring ring--back"></div><div class="sphere sphere--saturn"></div><div class="ring ring--front"></div></div>`
      : `<div class="sphere sphere--${key}"></div>`;
  }
  // Looks for assets/destination/image-<name>.webp; falls back to the CSS planet if the file is missing.
  function renderArt(key, d) {
    const img = new Image();
    img.alt = "";
    img.draggable = false;
    img.onerror = () => { planet.innerHTML = cssArt(key); };
    img.src = d.image || `./assets/destination/image-${key}.webp`;
    planet.replaceChildren(img);
    planet.setAttribute("aria-label", d.name);
  }
  
  /* ---------- Running number ---------- */
  let countFrame = null;
  function countUp(el, { value, decimals, unit }, duration = 1400) {
    cancelAnimationFrame(countFrame);
    const fmt = n => n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + " " + unit;
    if (reduceMotion.matches || value === 0) { el.textContent = fmt(value); return; }
    const start = performance.now();
    const tick = now => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = fmt(value * (1 - Math.pow(1 - t, 4)));
      if (t < 1) countFrame = requestAnimationFrame(tick);
    };
    countFrame = requestAnimationFrame(tick);
  }
  
  /* ---------- Spinning planet (counter-clockwise, drag to spin) ---------- */
  const BASE_SPEED = -8;           // degrees per second; negative = counter-clockwise
  let angle = 0, velocity = reduceMotion.matches ? 0 : BASE_SPEED;
  let spinning = false, lastAngle = 0, lastT = performance.now();
  
  const pointerAngle = e => {
    const r = planet.getBoundingClientRect();
    return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
  };
  
  function frame(now) {
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;
    if (!spinning) {
      const target = reduceMotion.matches ? 0 : BASE_SPEED;
      velocity += (target - velocity) * Math.min(dt * 1.5, 1);
      angle += velocity * dt;
      planet.style.transform = `rotate(${angle}deg)`;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  
  planet.addEventListener("pointerdown", e => {
    spinning = true;
    planet.setPointerCapture(e.pointerId);
    planet.classList.add("is-dragging");
    lastAngle = pointerAngle(e);
    lastT = performance.now();
    velocity = 0;
  });
  planet.addEventListener("pointermove", e => {
    if (!spinning) return;
    const now = performance.now(), dt = Math.max((now - lastT) / 1000, 0.001);
    const a = pointerAngle(e);
    let delta = a - lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    angle += delta;
    velocity = delta / dt;
    lastAngle = a; lastT = now;
    planet.style.transform = `rotate(${angle}deg)`;
  });
  const endSpin = () => {
    if (!spinning) return;
    spinning = false;
    lastT = performance.now();
    planet.classList.remove("is-dragging");
    velocity = Math.max(Math.min(velocity, 720), -720);
  };
  planet.addEventListener("pointerup", endSpin);
  planet.addEventListener("pointercancel", endSpin);
  
  /* ---------- Switching destinations ---------- */
  function show(key) {
    const d = destinations[key];
    renderArt(key, d);
    document.getElementById("dest-name").textContent = d.name;
    document.getElementById("dest-description").textContent = d.description;
    document.getElementById("dest-travel").textContent = d.travel;
    countUp(document.getElementById("dest-distance"), d.distance);
    panel.setAttribute("aria-labelledby", "tab-" + key);
    tabs.forEach(t => {
      const on = t.dataset.dest === key;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
  }
  
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => show(tab.dataset.dest));
    tab.addEventListener("keydown", e => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      show(next.dataset.dest);
    });
  });
  
  show("sun");