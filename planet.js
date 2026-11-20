/* Shared by every planet page: planet picture + rotating facts. */
(function () {
    const el = document.getElementById("planet-spin");
    const key = el.dataset.planet;
  
    /* ---------- Picture (falls back to a CSS-drawn planet if the file is missing) ---------- */
    const cssArt = key === "saturn"
      ? `<div class="saturn"><div class="ring ring--back"></div><div class="sphere sphere--saturn"></div><div class="ring ring--front"></div></div>`
      : `<div class="sphere sphere--${key}"></div>`;
    const img = new Image();
    img.alt = "";
    img.draggable = false;
    img.onerror = () => { el.innerHTML = cssArt; };
    img.src = el.dataset.image;
    el.replaceChildren(img);
  
    /* ---------- Facts: each click on the button shows the next one, looping back to the first ---------- */
    const facts = FACTS[key];
    const text = document.getElementById("fact-text");
    const count = document.getElementById("fact-count");
    const button = document.getElementById("next-fact");
    let i = 0;
  
    function showFact() {
      text.textContent = facts[i];
      count.textContent = `Fact ${i + 1} of ${facts.length}`;
      text.classList.remove("fade-in");
      void text.offsetWidth;            // restart the animation
      text.classList.add("fade-in");
    }
    button.addEventListener("click", () => { i = (i + 1) % facts.length; showFact(); });
    showFact();
  })();