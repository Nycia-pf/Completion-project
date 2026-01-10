// Les différentes pages
const pages = {
  accueil: `
    <div class="page active">
      <body>
        <div id="slideshow">
          <div
            class="box"
            id="title"
            style="
              left: 180px;
              top: 80px;
              width: 600px;
              height: 230px;
              text-align: center;
            "
          >
            <div style="font-size: 30px">
              <div style="width: 100%; overflow: visible; text-align: center">
                <span class="completion-title">COMPLETION</span>
              </div>

              <br />
              <span style="position: relative; top: -11px">in</span>
              <br />
              <span
                style="
                  font-size: 100px;
                  line-height: 80px;
                  position: relative;
                  top: -15px;
                  display: block;
                "
                >VIDEO GAMES</span
              >
            </div>

            <div style="color: #6f6767; font-size: 20px">
              a study by Nycia PRADEL-FERNANDES, january 2026
            </div>
            <br />
            <div
              class="box"
              style="
                left: 180px;
                top: 205px;
                width: 600px;
                height: 100px;
                text-align: center;
              "
            >
              <div class="btn-start" data-page="intro">
                START<br /><span style="font-family: 'Gaegu', serif"
                  >study</span
                >
                <div class="rarr"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  `,
  intro: `
    <div class="page active">
      <div class="main-container">
        <main class="intro">
          <div
            class="box transitionable"
            style="
              opacity: 1;
              display: block;
              left: 50px;
              width: 800px;
              height: 540px;
              text-align: center;
            "
            id="intro"
          >
            <br /><br /><br />
            <span
              style="font-size: 23px; font-family: 'Bungee Shade', sans-serif"
              >THIS STUDY</span
            >
            started because I was curious
            <br />
            about
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(31, 140, 187);
                text-decoration-style: dashed;
              "
              >gaming behaviour</span
            >. I personally quite enjoy hitting every stone of the map, and most
            of the time I feel fulfilled when there's nothing left to discover.
            <br /><br />
            But am I playing the
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(31, 140, 187);
                text-decoration-style: dashed;
              "
              >wrong way</span
            >?
            <br />
            Isn't the frustration I feel when the last few percent elude me a
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(31, 140, 187);
                text-decoration-style: dashed;
              "
              >hindrance to my enjoyement of the game</span
            >
            ? <br /><br />
            After a bit of a thought, I was left wondering :
            <br />
            <span style="font-size: 27px; text-transform: uppercase"
              >Does someone who has
              <span style="color: rgb(31, 140, 187)">completely</span> finished
              a game prefer it to someone who has
              <span style="color: rgb(31, 140, 187)">simply played</span> it
              ?</span
            >
            <br />
            <br />
            <div class="btn-next-blue" data-page="data">
              Let's ELUCIDATE this mystery !
              <div class="rarr"></div>
            </div>
          </div>
        </main>
        <aside class="progress-bar">
          <div class="progress-container">
            <div class="progress" style="height: 95%"></div>
          </div>
        </aside>
        <nav class="bottom-nav">
          <ul>
            <button class="btn-blue-active" data-page="intro">0</button>
            <button class="btn-blue" data-page="data">1</button>
            <button class="btn-green" data-page="graph">2</button>
            <button class="btn-green" data-page="finishable">3</button>
            <button class="btn-violet" data-page="comments">4</button>
            <button class="btn-violet" data-page="people">5</button>
            <button class="btn-pink" data-page="results">6</button>
          </ul>
        </nav>
      </div>
    </div>
  `,
  data: `
    <div class="page active">
      <div class="main-container">
        <main class="intro">
          <div
            class="box transitionable"
            style="
              opacity: 1;
              display: block;
              left: 300px;
              width: 800px;
              height: 540px;
              text-align: center;
            "
            id="intro"
          >
            <br /><br /><br /><br />
            As this is a
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(31, 140, 187);
                text-decoration-style: dashed;
              "
              >data</span
            >
            study, we'll need some to perform analysis...<br />
            <br /><span style="font-size: 28px; font-weight: 700"
              >THE DATA</span
            >
            used here are the result of<br />scraping the website
            <a href="https://backloggd.com/" style="color: rgba(31, 140, 187)"
              >Backloggd</a
            >, on november 2025.<br />
            The collection took over 10 000 of<br />the most popular games of
            the platform. <br /><br /><br /><span style="color: #6f6767">
              /!&#92; The
              <span
                style="
                  text-decoration: underline;
                  text-decoration-color: rgb(234, 222, 206);
                  text-decoration-style: dashed;
                "
                >MORE</span
              >
              rated, not the
              <span
                style="
                  text-decoration: underline;
                  text-decoration-color: rgb(234, 222, 206);
                  text-decoration-style: dashed;
                "
                >HIGHEST</span
              >-rated,<br />which would've biased the analysis /!&#92; </span
            ><br />
            <br />
            <div class="btn-next-blue" data-page="data_bis">
              LOAD
              <span style="font-family: 'Bungee Shade', sans-serif">DATA</span>
              <div class="rarr"></div>
            </div>
          </div>
        </main>
        <aside class="progress-bar">
          <div class="progress-container">
            <div class="progress" style="height: 88%"></div>
          </div>
        </aside>
        <nav class="bottom-nav">
          <ul>
            <button class="btn-blue" data-page="intro">0</button>
            <button class="btn-blue-active" data-page="data">1</button>
            <button class="btn-green" data-page="graph">2</button>
            <button class="btn-green" data-page="finishable">3</button>
            <button class="btn-violet" data-page="comments">4</button>
            <button class="btn-violet" data-page="people">5</button>
            <button class="btn-pink" data-page="results">6</button>
          </ul>
        </nav>
      </div>
    </div>
  `,
  data_bis: `
    <div class="page active">
      <div class="main-container">
        <main class="data-box">
          <div
            class="box transitionable"
            style="
              opacity: 1;
              display: block;
              width: 90%;
              height: 96%;
              text-align: center;
            "
            id="intro"
          >
            <div class="grid-data">
              <div class="data1"><div>Ratings</div></div>
              <div class="data2">Completion<br />status</div>
              <div class="data3">Platforms</div>
              <div class="data4">Game</div>
              <div class="data5">Summary</div>
              <div class="data6">Share</div>
              <div class="data7">Time</div>
              <div class="data8">
                <div
                  class="btn-next-blue"
                  data-page="graph"
                  style="font-family: 'Bungee Shade', sans-serif"
                >
                  Analyse<br />...
                  <div class="rarr"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside class="progress-bar">
          <div class="progress-container">
            <div class="progress" style="height: 74%"></div>
          </div>
        </aside>
        <nav class="bottom-nav">
          <ul>
            <button class="btn-blue" data-page="intro">0</button>
            <button class="btn-blue-active" data-page="data">1</button>
            <button class="btn-green" data-page="graph">2</button>
            <button class="btn-green" data-page="finishable">3</button>
            <button class="btn-violet" data-page="comments">4</button>
            <button class="btn-violet" data-page="people">5</button>
            <button class="btn-pink" data-page="results">6</button>
          </ul>
        </nav>
      </div>
    </div>
  `,
  graph: `
  <div class="page active">
    <div class="main-container">
      <main class="data-box">
        <div class="grid-graph">
          <div class="graph1">
            <div style="padding: 10px ; text-align: left">
              <span
                style="
                  font-family: 'Bungee Shade', sans-serif;
                  font-size: 24px;
                  color: rgba(128, 168, 62);
                "
              >
                FINISHABLE</span
              > vs<br><span
                style="
                  font-family: 'Bungee Shade', sans-serif;
                  font-size: 24px;
                  color: rgba(64, 85, 31);
                "
              >
                NON-FINISHABLE</span
              >  RATINGS <br /><br />
              <span style="font-size: 20px">
                This graph shows how
                <span style="color: rgba(128, 168, 62)"
                  >finishable games</span
                >
                (games that can be 100% completed) tend to have
                <span
                  style="text-decoration: underline dashed rgba(128, 168, 62)"
                  >higher average ratings</span
                >
                compared to
                <span style="color: rgba(64, 85, 31)"
                  >non-finishable games</span
                >. <br />
                The trend is clear: as ratings increase, the proportion of
                finishable games grows significantly.
              </span>
            </div>
          </div>

          <div class="graph2">
            <img src="flèche1.png" />
          </div>

          <div class="graph3">
            <div
              id="ratings-chart-container"
              style="width: 90%; height: 100%; padding : 10% 0 0 5%;"
            >
              <canvas id="ratings-chart"></canvas>
            </div>
          </div>

          <div class="graph4">
            <img src="flèche2.png" />
          </div>

          <div class="graph5">
            <div style="text-align: left; font-size: 20px">
              <span style="color: rgba(128, 168, 62)">●</span> Finishable
              games peak at
              <span style="color: rgba(128, 168, 62); font-weight: bold"
                >4.0 rating</span
              ><br />
              <span style="color: rgba(64, 85, 31)">●</span> Non-finishable
              peak at
              <span style="color: rgba(64, 85, 31); font-weight: bold"
                >3.5 rating</span
              ><br /><br />
              But are games we can't finish that interesting ? 
              Let's try to only study the data of "finishable" games ;
              What about splitting our database ? 
              
            </div>
          </div>

          <div class="graph6" >
            <img src="flèche1.png" />
          </div>

          <div class="graph7" style="padding: 10px 0 0 0">
            <div
                class="btn-next-green"
                data-page="finishable"
                style="font-family: 'Bungee Shade', sans-serif"
              >
                Split data
                <div class="rarr"></div>
          </div>
        </div>
      </main>
      <aside class="progress-bar">
        <div class="progress-container">
          <div class="progress" style="height: 61%"></div>
        </div>
      </aside>
      <nav class="bottom-nav">
        <ul>
          <button class="btn-blue" data-page="intro">0</button>
          <button class="btn-blue" data-page="data">1</button>
          <button class="btn-green-active" data-page="graph">2</button>
          <button class="btn-green" data-page="finishable">3</button>
          <button class="btn-violet" data-page="comments">4</button>
          <button class="btn-violet" data-page="people">5</button>
          <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
  </div>
  `,
  finishable: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
      <h1>Finishable ?</h1>
      <p>Page DOUBLE : Explications + Data </p>
      <p>Page 1 : DIVISION <br/>
      - Diviser les données = Pourquoi ? quoi ? <br/><br/>
      - bouton "Calculate" (.btn-next)<br/>
      - Barre de complétion 47%<br/><br/>
      Page 2 : RATIO M-F <br/>
      - Qu'est-ce que le ratio M-F ? <br/>
      - expliquer qu'on a besoin de données plus précises sur la masterisation <br/>
      - bouton "Load more Data" (.btn-next)<br/>
      - Barre de complétion 58%<br/><br/>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 53%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green-active" data-page="finishable">3</button>
        <button class="btn-violet" data-page="comments">4</button>
        <button class="btn-violet" data-page="people">5</button>
        <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
    </div>
  `,
  finishable_bis: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
      <h1>Finishable_2 ?</h1>
      Page 2 : RATIO M-F <br/>
      - Qu'est-ce que le ratio M-F ? <br/>
      - expliquer qu'on a besoin de données plus précises sur la masterisation <br/>
      - bouton "Load more Data" (.btn-next)<br/>
      - Barre de complétion 58%<br/><br/>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 53%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green-active" data-page="finishable">3</button>
        <button class="btn-violet" data-page="comments">4</button>
        <button class="btn-violet" data-page="people">5</button>
        <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
    </div>
  `,
  comments: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
      <h1>Comments</h1>
      <p>Bienvenue sur mon site SPA !</p>
      <p>Ce site change de contenu sans recharger la page.</p>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 30%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green" data-page="finishable">3</button>
        <button class="btn-violet-active" data-page="comments">4</button>
        <button class="btn-violet" data-page="people">5</button>
        <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
    </div>
  `,
  people: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
      <h1>People</h1>
      <p>Bienvenue sur mon site SPA !</p>
      <p>Ce site change de contenu sans recharger la page.</p>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 16%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green" data-page="finishable">3</button>
        <button class="btn-violet" data-page="comments">4</button>
        <button class="btn-violet-active" data-page="people">5</button>
        <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
    </div>
  `,
  results: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
      <h1>Results</h1>
      <p>Bienvenue sur mon site SPA !</p>
      <p>Ce site change de contenu sans recharger la page.</p>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 0%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green" data-page="finishable">3</button>
        <button class="btn-violet" data-page="comments">4</button>
        <button class="btn-violet" data-page="people">5</button>
        <button class="btn-pink-active" data-page="results">6</button>
        </ul>
      </nav>
    </div>
    </div>
  `,
  bonus: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
      <h1>Bonus (112% ??)</h1>
      <p>Bienvenue sur mon site SPA !</p>
      <p>Ce site change de contenu sans recharger la page.</p>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 0%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green" data-page="finishable">3</button>
        <button class="btn-violet" data-page="comments">4</button>
        <button class="btn-violet" data-page="people">5</button>
        <button class="btn-pink" data-page="results">6</button>
        <button class="btn-bonus" data-page="bonus">
        </ul>
      </nav>
    </div>
    </div>
  `,
};

// FUNCTION PART

let currentPage = "accueil";

// Fonction pour naviguer
function navigateTo(pageName) {
  if (!pages[pageName]) {
    console.error(`Page ${pageName} not found`);
    pageName = "accueil";
  }
  currentPage = pageName;
  document.getElementById("app").innerHTML = pages[pageName];
  if (window.location.hash !== `#${pageName}`) {
    window.location.hash = pageName;
  }
  attachButtonListeners();
  if (pageName === "graph") {
    setTimeout(() => {
      if (typeof Chart !== "undefined") {
        initializeChart();
      }
    }, 50);
  }
}

function handleButtonClick(event) {
  event.preventDefault();
  const page = this.getAttribute("data-page");
  if (page && pages[page]) {
    navigateTo(page);
  }
}

function attachButtonListeners() {
  document
    .querySelectorAll(
      ".btn-start, .btn-blue, .btn-green, .btn-violet, .btn-pink, .btn-blue-active, .btn-green-active, .btn-violet-active, .btn-pink-active, .btn-next-blue, [data-page]"
    )
    .forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
      button.addEventListener("click", handleButtonClick);
    });
}

window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1);
  const availablePages = Object.keys(pages);
  navigateTo("accueil");
});

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1);
  const availablePages = Object.keys(pages);

  if (hash && availablePages.includes(hash)) {
    currentPage = hash;
    document.getElementById("app").innerHTML = pages[hash];
    attachButtonListeners();
  }
});

// ====== FONCTION POUR LE GRAPHIQUE ======
function initializeChart() {
  // Vérifier que le canvas existe
  const canvas = document.getElementById("ratings-chart");
  if (!canvas) {
    console.error("Canvas not found for chart");
    return;
  }

  // Vérifier que Chart est disponible
  if (typeof Chart === "undefined") {
    console.error("Chart.js is not loaded");
    return;
  }

  const ctx = canvas.getContext("2d");

  // Données du graphique
  const ratingsData = {
    labels: ["0.5", "1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0", "4.5"],
    datasets: [
      {
        label: "Non-Finishable",
        data: [2, 25, 105, 324, 1050, 2549, 3264, 1681, 286],
        backgroundColor: "rgba(64, 85, 31, 0.7)",
        borderColor: "rgb(234, 222, 206)",
        borderWidth: 1,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: "Finishable",
        data: [0, 0, 2, 3, 21, 106, 332, 403, 151],
        backgroundColor: "rgba(128, 168, 62, 0.7)",
        borderColor: "rgb(234, 222, 206)",
        borderWidth: 1,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const chartConfig = {
    type: "bar",
    data: ratingsData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "rgb(234, 222, 206)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 14,
            },
            padding: 20,
          },
        },
        tooltip: {
          backgroundColor: "rgba(43, 38, 35, 0.95)",
          titleColor: "rgb(234, 222, 206)",
          bodyColor: "rgb(234, 222, 206)",
          borderColor: "rgb(234, 222, 206)",
          borderWidth: 1,
          titleFont: {
            family: "'Gaegu', sans-serif",
            size: 14,
          },
          bodyFont: {
            family: "'Gaegu', sans-serif",
            size: 13,
          },
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              label += context.parsed.y.toLocaleString() + " games";
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: false,
          grid: {
            color: "rgba(234, 222, 206, 0.1)",
            drawBorder: false,
          },
          ticks: {
            color: "rgb(234, 222, 206)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 12,
            },
          },
        },
        y: {
          beginAtZero: true,
          stacked: false,
          grid: {
            color: "rgba(234, 222, 206, 0.1)",
            drawBorder: false,
          },
          ticks: {
            color: "rgb(234, 222, 206)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 12,
            },
            callback: function (value) {
              if (value >= 1000) {
                return value / 1000 + "k";
              }
              return value;
            },
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      animation: {
        duration: 1000,
        easing: "easeOutQuart",
      },
    },
  };

  // Créer le graphique
  const ratingsChart = new Chart(ctx, chartConfig);

  // Animation d'entrée
  const container = document.querySelector("#ratings-chart-container");
  if (container) {
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }

  // Retourner l'instance pour référence
  return ratingsChart;
}

// // On verra plus tard :)
// TRANSITIIIOOOOOONN !!
