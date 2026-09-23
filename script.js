// ======================================================
// HONESTSHELF - MAIN JAVASCRIPT
// ======================================================

// ======================================================
// 1. HEADING CLICK TOGGLE
// ======================================================

const heading = document.querySelector("h1");

if (heading) {
  heading.addEventListener("click", function () {
    if (heading.style.color === "red") {
      heading.style.color = "white";
    } else {
      heading.style.color = "red";
    }
  });
}

// ======================================================
// 2. MOBILE NAVIGATION TOGGLE
// ======================================================

const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// ======================================================
// 3. CONTACT FORM VALIDATION
// ======================================================

const form = document.querySelector("#contact form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

if (form && nameInput && emailInput && messageInput)
  form.addEventListener("submit", function (event) {
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      messageInput.value === ""
    ) {
      event.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
    // No else block, no preventDefault() here — let Django handle a valid submission
  });

// ======================================================
// 4. READ MORE / SHOW LESS
// ======================================================

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const reviewText = button.previousElementSibling;

    if (!reviewText) {
      return;
    }

    reviewText.classList.toggle("expanded");

    if (reviewText.classList.contains("expanded")) {
      button.textContent = "Show less ↑";
    } else {
      button.textContent = "Read full review →";
    }
  });
});
// ======================================================
// 5. CURRENTLY READING
// ======================================================

const currentlyReading = [
  {
    title: "Courage",
    author: "Edwin Louis Cole",
    cover: "static/images/courage.png",
  },

  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    cover:
      "https://www.harpercollins.com/cdn/shop/files/9780060652920.jpg?v=1789085626&width=350",
  },

  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://m.media-amazon.com/images/I/71wSsgrOIhL._SL1500_.jpg",
  },
];

const list = document.querySelector("#currently-reading-list");

if (list) {
  currentlyReading.forEach(function (book) {
    const li = document.createElement("li");

    const img = document.createElement("img");

    img.src = book.cover;

    img.alt = book.title + " cover";

    const span = document.createElement("span");

    span.textContent = book.title + " by " + book.author;

    li.appendChild(img);

    li.appendChild(span);

    list.appendChild(li);
  });
}

// ======================================================
// 6. CATEGORY FILTER
// ======================================================

const filterButtons = document.querySelectorAll(".filter-btn");

const articles = document.querySelectorAll("#reviews article");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    articles.forEach(function (article) {
      const articleCategory = article.dataset.category;

      if (selectedCategory === "all" || articleCategory === selectedCategory) {
        article.style.display = "";
      } else {
        article.style.display = "none";
      }
    });
  });
});

// ======================================================
// 7. REVIEW SEARCH
// ======================================================

const searchInput = document.querySelector("#review-search");

const noResultsMessage = document.querySelector("#no-results-message");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    let anyVisible = false;

    articles.forEach(function (article) {
      const articleText = article.textContent.toLowerCase();

      if (articleText.includes(searchTerm)) {
        article.style.display = "";

        anyVisible = true;
      } else {
        article.style.display = "none";
      }
    });

    if (noResultsMessage) {
      noResultsMessage.style.display = anyVisible ? "none" : "block";
    }
  });
}

// ======================================================
// 8. CURRENTLY READING TICKER
// ======================================================

const tickerTrack = document.querySelector("#ticker-track");

function buildTicker() {
  if (!tickerTrack) {
    return;
  }

  let tickerHTML = "";

  currentlyReading.forEach(function (book) {
    tickerHTML += `
            <span>
                CURRENTLY READING: ${book.title} by ${book.author}
            </span>

            <span>•</span>
        `;
  });

  const brandPhrases = [
    "ZERO SPOILERS WITHOUT WARNING",

    "HONEST TAKES, NO INFLATED RATINGS",

    "REAL READERS, REAL REVIEWS",

    "BOOKS WORTH TALKING ABOUT",

    "READ MORE. DISCOVER MORE.",

    "GOOD STORIES. HONEST OPINIONS.",
  ];

  brandPhrases.forEach(function (phrase) {
    tickerHTML += `
            <span>${phrase}</span>
            <span>•</span>
        `;
  });

  // Duplicate the content so the ticker
  // can scroll continuously.

  tickerTrack.innerHTML = tickerHTML + tickerHTML;
}

buildTicker();

// ======================================================
// 9. ROTATING QUOTES
// ======================================================

const quotes = [
  [
    {
      text: '"THE MORE THAT YOU READ, THE MORE THINGS YOU WILL KNOW."',
      author: "— DR. SEUSS",
    },
    {
      text: '"A READER LIVES A THOUSAND LIVES BEFORE HE DIES."',
      author: "— GEORGE R.R. MARTIN",
    },
    {
      text: '"ONCE YOU LEARN TO READ, YOU WILL BE FOREVER FREE."',
      author: "— FREDERICK DOUGLASS",
    },
  ],

  [
    {
      text: '"THERE IS NO FRIEND AS LOYAL AS A BOOK."',
      author: "— ERNEST HEMINGWAY",
    },
    {
      text: '"SO MANY BOOKS, SO LITTLE TIME."',
      author: "— FRANK ZAPPA",
    },
    {
      text: '"BOOKS ARE A UNIQUELY PORTABLE MAGIC."',
      author: "— STEPHEN KING",
    },
  ],

  [
    {
      text: '"A ROOM WITHOUT BOOKS IS LIKE A BODY WITHOUT A SOUL."',
      author: "— CICERO",
    },
    {
      text: '"READING IS TO THE MIND WHAT EXERCISE IS TO THE BODY."',
      author: "— JOSEPH ADDISON",
    },
    {
      text: '"WE READ TO KNOW WE ARE NOT ALONE."',
      author: "— C.S. LEWIS",
    },
  ],

  [
    {
      text: '"UNTIL I FEARED I WOULD LOSE IT, I NEVER LOVED TO READ."',
      author: "— HARPER LEE",
    },
    {
      text: '"READING BRINGS US UNKNOWN FRIENDS."',
      author: "— HONORÉ DE BALZAC",
    },
    {
      text: '"BOOKS CAN BE QUIET COMPANIONS THROUGH LOUD TIMES."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"BOOKS ARE MIRRORS: YOU ONLY SEE IN THEM WHAT YOU ALREADY HAVE INSIDE YOU."',
      author: "— CARLOS RUIZ ZAFÓN",
    },
    {
      text: '"THINK BEFORE YOU SPEAK. READ BEFORE YOU THINK."',
      author: "— FRAN LEBOWITZ",
    },
    {
      text: '"A GREAT BOOK SHOULD LEAVE YOU WITH MANY EXPERIENCES."',
      author: "— WILLIAM STYRON",
    },
  ],

  [
    {
      text: '"BOOKS ARE THE QUIETEST AND MOST CONSTANT OF FRIENDS."',
      author: "— CHARLES WILLIAM ELIOT",
    },
    {
      text: '"READING IS A DISCOUNT TICKET TO EVERYWHERE."',
      author: "— MARY SCHMICH",
    },
    {
      text: '"READING IS A JOURNEY THAT NEVER REALLY ENDS."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"A BOOK IS LIKE A GARDEN CARRIED IN THE POCKET."',
      author: "— CHINESE PROVERB",
    },
    {
      text: '"READING GIVES US SOMEWHERE TO GO WHEN WE HAVE TO STAY WHERE WE ARE."',
      author: "— MASON COOLEY",
    },
    {
      text: '"EVERY BOOK IS A JOURNEY."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"READING IS THINKING WITH SOMEONE ELSE’S HEAD INSTEAD OF ONE’S OWN."',
      author: "— ARTHUR SCHOPENHAUER",
    },
    {
      text: '"A GOOD BOOK IS AN EVENT IN MY LIFE."',
      author: "— STENDHAL",
    },
    {
      text: '"THE WORLD BELONGS TO THOSE WHO READ."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"READING IS ESSENTIAL FOR THOSE WHO SEEK TO RISE ABOVE THE ORDINARY."',
      author: "— JIM ROHN",
    },
    {
      text: '"A PAGE TURNED IS A WORLD DISCOVERED."',
      author: "— UNKNOWN",
    },
    {
      text: '"KEEP READING. KEEP WONDERING."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"BOOKS ARE TIME MACHINES MADE OF PAPER."',
      author: "— UNKNOWN",
    },
    {
      text: '"SOME STORIES FIND YOU EXACTLY WHEN YOU NEED THEM."',
      author: "— UNKNOWN",
    },
    {
      text: '"TURN THE PAGE. THERE IS MORE TO DISCOVER."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"A GOOD STORY STAYS WITH YOU LONG AFTER THE LAST PAGE."',
      author: "— UNKNOWN",
    },
    {
      text: '"BOOKS HELP US UNDERSTAND PEOPLE WE MAY NEVER MEET."',
      author: "— UNKNOWN",
    },
    {
      text: '"THE RIGHT BOOK AT THE RIGHT TIME CAN FEEL LIKE A FRIEND."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"READING IS NOT ESCAPING LIFE. IT IS UNDERSTANDING IT."',
      author: "— UNKNOWN",
    },
    {
      text: '"A LIFE FULL OF BOOKS IS A LIFE FULL OF WORLDS."',
      author: "— UNKNOWN",
    },
    {
      text: '"READ MORE. WORRY LESS."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"A LIBRARY IS NOT A LUXURY BUT ONE OF THE NECESSITIES OF LIFE."',
      author: "— HENRY WARD BEECHER",
    },
    {
      text: '"BOOKS OPEN DOORS TO WORLDS WE NEVER KNEW EXISTED."',
      author: "— UNKNOWN",
    },
    {
      text: '"READING TAKES YOU PLACES YOUR FEET HAVE NEVER BEEN."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"LET US READ, AND LET US DANCE."',
      author: "— VOLTAIRE",
    },
    {
      text: '"A CHILD WHO READS WILL BE A CHILD WHO THINKS."',
      author: "— UNKNOWN",
    },
    {
      text: '"READING MAKES US MORE HUMAN."',
      author: "— UNKNOWN",
    },
  ],

  [
    {
      text: '"THE BEST STORIES MAKE US QUESTION OUR OWN."',
      author: "— UNKNOWN",
    },
    {
      text: '"A GREAT BOOK DOES NOT END. IT CONTINUES INSIDE YOU."',
      author: "— UNKNOWN",
    },
    {
      text: '"SOMETIMES ONE SENTENCE IS ENOUGH TO CHANGE EVERYTHING."',
      author: "— UNKNOWN",
    },
  ],
];

// ======================================================
// QUOTE STATE
// ======================================================

let currentQuoteSet = 0;

// ======================================================
// CHANGE QUOTES
// ======================================================

function changeQuotes() {
  const quote1 = document.querySelector("#quote1");

  const quote2 = document.querySelector("#quote2");

  const quote3 = document.querySelector("#quote3");

  // If the quote section doesn't exist,
  // stop without causing an error.

  if (!quote1 || !quote2 || !quote3) {
    return;
  }

  // Fade out

  quote1.classList.add("quote-changing");
  quote2.classList.add("quote-changing");
  quote3.classList.add("quote-changing");

  setTimeout(function () {
    // Move to the next set

    currentQuoteSet++;

    // Restart after the last set

    if (currentQuoteSet >= quotes.length) {
      currentQuoteSet = 0;
    }

    // ------------------------------
    // QUOTE 1
    // ------------------------------

    const quote1Text = quote1.querySelector(".quote-text");

    const quote1Author = quote1.querySelector(".quote-author");

    if (quote1Text) {
      quote1Text.textContent = quotes[currentQuoteSet][0].text;
    }

    if (quote1Author) {
      quote1Author.textContent = quotes[currentQuoteSet][0].author;
    }

    // ------------------------------
    // QUOTE 2
    // ------------------------------

    const quote2Text = quote2.querySelector(".quote-text");

    const quote2Author = quote2.querySelector(".quote-author");

    if (quote2Text) {
      quote2Text.textContent = quotes[currentQuoteSet][1].text;
    }

    if (quote2Author) {
      quote2Author.textContent = quotes[currentQuoteSet][1].author;
    }

    // ------------------------------
    // QUOTE 3
    // ------------------------------

    const quote3Text = quote3.querySelector(".quote-text");

    const quote3Author = quote3.querySelector(".quote-author");

    if (quote3Text) {
      quote3Text.textContent = quotes[currentQuoteSet][2].text;
    }

    if (quote3Author) {
      quote3Author.textContent = quotes[currentQuoteSet][2].author;
    }

    // Fade back in

    quote1.classList.remove("quote-changing");
    quote2.classList.remove("quote-changing");
    quote3.classList.remove("quote-changing");
  }, 600);
}

// Footer genre links

const footerFilterLinks = document.querySelectorAll("[data-footer-filter]");

footerFilterLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const category = link.dataset.footerFilter;

    const filterButton = document.querySelector(
      `.filter-btn[data-filter="${category}"]`,
    );

    if (filterButton) {
      filterButton.click();
    }
  });
});

// ======================================================
// CHANGE QUOTES EVERY 30 SECONDS
// ======================================================

setInterval(changeQuotes, 30 * 1000);

// ======================================================
// END OF HONESTSHELF JAVASCRIPT
// ======================================================

/* =====================================================
   THE HONEST SHELF
   HERO BACKGROUND MOUSE MOTION
   ===================================================== */

const hero = document.querySelector(".hero");

const orbs = document.querySelectorAll(".motion-orb");

if (hero && orbs.length > 0) {
  hero.addEventListener("mousemove", function (event) {
    const rect = hero.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;

    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const moveX = (mouseX - centerX) / centerX;

    const moveY = (mouseY - centerY) / centerY;

    orbs.forEach(function (orb, index) {
      const strength = (index + 1) * 8;

      orb.style.marginLeft = `${moveX * strength}px`;

      orb.style.marginTop = `${moveY * strength}px`;
    });
  });

  /* Reset when mouse leaves hero */

  hero.addEventListener("mouseleave", function () {
    orbs.forEach(function (orb) {
      orb.style.marginLeft = "0px";

      orb.style.marginTop = "0px";
    });
  });
}

/* ================================
   CONTACT FORM INTERACTION
================================ */

const contactForm = document.querySelector("#contact-form");
const contactSubmit = document.querySelector("#contact-submit");

if (contactForm && contactSubmit) {
  contactForm.addEventListener("submit", function () {
    const buttonText = contactSubmit.querySelector(".button-text");

    // Show sending state
    buttonText.textContent = "Sending...";
    contactSubmit.disabled = true;
  });
}

// ======================================================
// PASSWORD VISIBILITY TOGGLE
// ======================================================

const passwordToggles = document.querySelectorAll(".password-toggle");

passwordToggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const passwordField = toggle.parentElement.querySelector("input");

    const icon = toggle.querySelector("i");

    if (!passwordField || !icon) {
      return;
    }

    if (passwordField.type === "password") {
      passwordField.type = "text";

      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");

      toggle.setAttribute("aria-label", "Hide password");

      toggle.setAttribute("aria-pressed", "true");
    } else {
      passwordField.type = "password";

      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");

      toggle.setAttribute("aria-label", "Show password");

      toggle.setAttribute("aria-pressed", "false");
    }
  });
});
