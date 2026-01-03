// Les différentes pages
const pages = {
  accueil: `
    <div class="page active">
      <body>

    <div id="slideshow"><div class="box" id="title" style="left: 180px; top: 80px; width: 600px; height: 230px; text-align: center;"><div style="font-size: 30px;">
		<div style="width: 100%; overflow: visible; text-align: center;">
    <span class="completion-title">COMPLETION</span>
    </div>

	<br>
	<span style="position: relative;top: -11px;">in</span>
	<br>
	<span style="font-size: 100px;line-height: 80px;position: relative;top: -15px; display:block ">VIDEO GAMES</span>
	</div>

	<div style="color:#6f6767; font-size:20px">a study by Nycia PRADEL-FERNANDES, january 2026</div>
    <br/>
    <div class="box" style="left: 180px; top: 205px; width: 600px; height: 100px; text-align: center;">
    <div class="btn-start" data-page="intro">START<br/><span style="font-family :'Gaegu', serif">study</span><div class="rarr">
    </div></div>
    </div></div></div>
    
    </body>
    </div>
  `,
  intro: `
    <div class="page active">
    <div class="main-container">
    <main class="intro">
    <div class="box transitionable" style="opacity: 1; display: block; left: 50px; width: 800px; height: 540px; text-align: center;" id="intro"><br/><br/><br/>
<span style="font-size:23px; font-family:'Bungee Shade', sans-serif;">THIS STUDY</span> started because I was curious
	<br>
	about <span style="text-decoration: underline;
  text-decoration-color:rgba(31, 140, 187); text-decoration-style:dashed;">gaming behaviour</span>.
	I personally quite enjoy hitting every stone of the map,
    and most of the time I feel fulfilled when there's nothing left to discover. 
    <br/><br> But am I playing the <span style="text-decoration: underline;
  text-decoration-color:rgba(31, 140, 187);text-decoration-style: dashed;">wrong way</span>?
	<br>
	Isn't the frustration I feel when the last few percent elude me a <span style="text-decoration: underline;
  text-decoration-color:rgba(31, 140, 187);text-decoration-style: dashed;">hindrance to my enjoyement of the game</span> ?
	<br><br>
	After a bit of a thought, I was left wondering : 
	<br>
	<span style="font-size:23px; font-family:'Bungee Shade', sans-serif;">Does someone who has <span style="
  color: rgb(31, 140, 187)">completely</span> finished a game prefer it to someone who has <span style="
  color:rgb(31, 140, 187)">simply played</span> it ?</span>
<br/>
<br/>
	<div class="btn-next-blue" data-page="data">Let's ELUCIDATE this mystery !<div class="rarr"></div> 
    </div></div>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 95%;"></div>
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
    <main class="content">
      <h1>Data</h1>
      <p>Page DOUBLE : Explications + Data </p>
      <p>Page 1 : EXPLICATIONS <br/>
      - collecter des données = où ? quand ? <br/>
      - bouton "LOAD DATA" (.btn-next)<br/>
      - Barre de complétion 12%<br/><br/>

      Page 2 : DATA
      - Boîtes que l'on peut survoler pour découvrir les infos (défilements vers le haut)<br/>
      * box1 --> Ratings (Average, No de chaque étoile, No de notes)
      * box2 --> Game (Title, developer, Date)
      * box3 --> Platforms 
      * box4 --> Status (Completion status)
      * box5 --> Summary
      * box6 --> Time (Average, finish, master)
      * box7 --> Share ?? j'aime pas ce nom :( (No reviews/like/list/wishlist) <br/>
      - bouton "ANALYSE" (.btn-next) <br/>
      - barre de complétion qui monte au fur et à mesure qu'on passe devant chaque boîte
      --> up to 26%</p>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 88%;"></div>
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
    <main class="content">
      <h1>Data Bis</h1>
      Page 2 : DATA
      - Boîtes que l'on peut survoler pour découvrir les infos (défilements vers le haut)<br/>
      * box1 --> Ratings (Average, No de chaque étoile, No de notes)
      * box2 --> Game (Title, developer, Date)
      * box3 --> Platforms 
      * box4 --> Status (Completion status)
      * box5 --> Summary
      * box6 --> Time (Average, finish, master)
      * box7 --> Share ?? j'aime pas ce nom :( (No reviews/like/list/wishlist) <br/>
      - bouton "ANALYSE" (.btn-next) <br/>
      - barre de complétion qui monte au fur et à mesure qu'on passe devant chaque boîte
      --> up to 26%</p>
    </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 88%;"></div>
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
    <main class="content">
      <h1>Graph</h1>
      <p>Montrer les résultats de la P1</p>
      <p>Éléments : <br/>
      - paragraphe qui explique la P1 et la mise en œuvre <br/>
      - le graph <br/>
      - paragraphe sur la suite <br/>
      - bouton "SPLIT DATA" (.btn-next) <br/>
      - barre de complétion = 39%</p>
      </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 61%;"></div>
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

// Cliquer vers une page
function handleButtonClick(event) {
  event.preventDefault();
  const page = this.getAttribute("data-page");
  if (page) {
    navigateTo(page);
  }
}

// Aller à une "page"
function navigateTo(pageName) {
  document.getElementById("app").innerHTML = pages[pageName];
  history.pushState({ page: pageName }, "", `/${pageName}`);

  // Ajoute des écouteurs d'événements aux nouveaux boutons
  document
    .querySelectorAll(
      ".btn-start, .btn-blue, .btn-green, .btn-violet, .btn-pink, .btn-blue-active, .btn-green-active, .btn-violet-active, .btn-pink-active, .btn-next-blue"
    )
    .forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
}

// Écouteur pour le bouton "précédent" du navigateur
window.addEventListener("popstate", (event) => {
  if (event.state) {
    document.getElementById("app").innerHTML = pages[event.state.page];

    // Réattache les écouteurs d'événements après le popstate
    document
      .querySelectorAll(
        ".btn-start, .btn-blue, .btn-green, .btn-violet, .btn-pink, .btn-blue-active, .btn-green-active, .btn-violet-active, .btn-pink-active, .btn-next-blue"
      )
      .forEach((button) => {
        button.addEventListener("click", handleButtonClick);
      });
  }
});

// Charger la page initiale
navigateTo("accueil");
