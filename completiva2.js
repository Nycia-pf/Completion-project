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
            <button class="btn-green" data-page="division">3</button>
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
            <button class="btn-green" data-page="division">3</button>
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
          >
            <div class="grid-data">
              <div class="data1">
                <div>
                  <span style="color: rgb(234, 222, 206)">Ratings</span>
                  <span style="text-align: left"
                    ><br />● Average Rating <br />● Number of Ratings<br />●
                    [0.5-5] Number of Ratings</span
                  >
                </div>
              </div>
              <div class="data2">
                <span style="color: rgb(234, 222, 206)">Completion status</span>
                <span style="text-align: left"
                  ><br />● Playing <br />● Played <br />● Completed <br />●
                  Shelved <br />● Abandoned</span
                >
              </div>
              <div class="data3">
                <span style="color: rgb(234, 222, 206)">Details</span>
                <span style="text-align: left"><br />● Platforms & Genres</span>
              </div>
              <div class="data4">
                <span style="color: rgb(234, 222, 206)">Game</span>
                <span style="text-align: left"
                  ><br />● Name <br />● Developer</span
                >
              </div>
              <div class="data5">
                <span style="color: rgb(234, 222, 206)">Summary</span>
                <span style="text-align: left"
                  ><br />● Summary of the game<br />● Released Date</span
                >
              </div>
              <div class="data6">
                <span style="color: rgb(234, 222, 206)">Share</span>
                <span style="text-align: left"
                  ><br />● Reviews <br />● Likes & Lists</span
                >
              </div>
              <div class="data7">
                <span style="color: rgb(234, 222, 206)">Time</span>
                <span style="text-align: left"
                  ><br />● Average Time <br />● Time to finish / to master</span
                >
              </div>
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
            <button class="btn-green" data-page="division">3</button>
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
              <span style="font-size: 26px">
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
            <div style="text-align: left; font-size: 24px">
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
                data-page="division"
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
          <button class="btn-green" data-page="division">3</button>
          <button class="btn-violet" data-page="comments">4</button>
          <button class="btn-violet" data-page="people">5</button>
          <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
  </div>
  `,
  division: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
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
            <div class="grid-div" style="padding: 20 0 0 0">
              <div class="div1"><p>By dividing our data, we focus on games that we can <span style = "text-decoration: underline; text-decoration-color : rgba(128, 168, 62, 1); text-decoration-style : dashed">actually complete</span>.</p></div>
              <div class="div2">
  <div class="games-mini-visualization">
    <div class="games-title">
      <h3>Games Library</h3>
    </div>
    
    <div class="games-visual">
      <div class="games-dots">
        <div class="dots-container" id="games-dots"></div>
      </div>
      
      <div class="games-stats-mini">
        <div class="stat-mini finishable">
          <div class="stat-dot" style="background: rgba(128, 168, 62, 1)"></div>
          <div class="stat-text">
            <span class="stat-number">261</span>
            <span class="stat-label">Finishable</span>
            <span class="stat-percent">2.5%</span>
          </div>
        </div>
        
        <div class="stat-mini non-finishable">
          <div class="stat-dot" style="background: rgb(64, 85, 31)"></div>
          <div class="stat-text">
            <span class="stat-number">10,306</span>
            <span class="stat-label">Non-finishable</span>
            <span class="stat-percent">97.5%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div style="display: flex; align-items: center; gap: 15px;">
    <span style="color : rgb(43, 38, 35)">OOOOOOOO</span>
  <div class="btn-next-green" data-page="ratio_MF" style="font-family: 'Bungee Shade', sans-serif">
    So...
    <div class="rarr"></div>
  </div>
  <img style="width: 150px; height: auto;" src="flèche3.png" alt="Flèche directionnelle" />
</div>
</div>
      <div class="div3">
  <div class="ratio-simple">
    <div class="ratio-context">
      We also decided to create a <span style = "text-decoration: underline; text-decoration-color : rgba(128, 168, 62, 1); text-decoration-style : dashed">new variable</span> to add more depth to our analysis.
                <br>Let's introduce the <span style = "color : rgba(128, 168, 62, 1)">RATIO M-F</span> (between the time needed to finish a game and the time to master it ):
    </div>
    
    <div class="formula-container">
      <div class="formula-wrapper">
        <div class="formula-label">Master-Finish Ratio</div>
        <div class="formula-equation">
          <span class="variable">ratio M-F</span>
          <span class="operator">=</span>
          <div class="division">
            <div class="top">T<sub>master</sub>- T<sub>finish</sub></div>
            <div class="line"></div>
            <div class="bottom">T<sub>finish</sub></div>
          </div>
        </div>
        <div class="formula-description">
          Where <span class="highlight">T<sub>master</sub></span> = time to master<br>
          and <span class="highlight">T<sub>finish</sub></span> = time to finish
        </div>
      </div>
    </div>
    
    <div class="ratio-insights">
      <div class="insight">
        <div class="insight-marker"></div>
        <div class="insight-content">
          <strong>Higher ratio</strong> indicates games with extensive post-completion content
        </div>
        <br><div class="insight-marker"></div>
        <div class="insight-content">
          <strong>Lower ratio</strong> suggests mastery is achieved quickly after finishing it
        </div>
      </div>
    </div>
  </div>
</div>
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
  ratio_MF: `
    <div class="page active">
      <div class="main-container">
        <main class="data-box">
          <div class="grid-graph">
            <div class="graph1">
              <div style="padding: 10px; text-align: right">
                <p>
                  Our first intuition about the time spent to master a game was
                  that
                  <span style="color: rgba(128, 168, 62, 1)"
                    >not spending enough</span
                  >
                  additional time didn't convey any
                  <span
                    style="
                      text-decoration: underline;
                      text-decoration-style: dashed;
                      text-decoration-color: rgba(128, 168, 62, 1);
                    "
                    >fulfilling feeling</span
                  >, but spending
                  <span style="color: rgba(128, 168, 62, 1)">too much</span>
                  time might create
                  <span
                    style="
                      text-decoration: underline;
                      text-decoration-style: dashed;
                      text-decoration-color: rgba(128, 168, 62, 1);
                    "
                    >frustration</span
                  >
                  upon completion.
                </p>
              </div>
            </div>

            <div class="graph3" style="height: 400px">
              <div
                id="simple-ratio-chart-container"
                style="width: 92%; height: 78%; padding: 10% 0 0 5%"
              >
                <canvas id="simple-ratio-chart"></canvas>
              </div>
            </div>

            <div class="graph4"></div>

            <div class="graph5">
              <span style="display: inline-flex">
                <img
                  style="width: auto; height: 50px; transform: scaleX(-1)"
                  src="flèche3.png"
                  alt="Flèche directionnelle"
                />
                <div
                  class="btn-next-green"
                  data-page="comments"
                  style="
                    font-family: 'Bungee Shade', sans-serif;
                    text-align: right;
                    display: inline-block;
                  "
                >
                  Load people :)
                  <div class="rarr"></div>
                </div>
              </span>
            </div>

            <div class="graph6"></div>

            <div class="graph8" style="padding: 10px 0 0 0">
              <p style="text-align: right">
                Now we have EVERY INGREDIENTS to answer our question : <br />
                do
                <span
                  style="
                    text-decoration: underline;
                    text-decoration-style: dashed;
                    text-decoration-color: rgba(128, 168, 62, 1);
                  "
                  >people</span
                >
                who mastered a game prefer it? <br /><br />Wait...
                <span style="color: rgba(128, 168, 62, 1)">People</span> ?
                <br />
                Maybe we'll need more data...
              </p>
            </div>
          </div>
        </main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 42%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green-active" data-page="division">3</button>
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
          >
            <div class="grid-comments">
              <!-- Titre et introduction -->
              <div class="comments1">
                <h2
                  style="
                    color: rgba(136, 98, 162, 1);
                    font-family: 'Bungee Shade', sans-serif;
                    font-size: 36px;
                    margin-bottom: 20px;
                  "
                >
                  PLAYER REVIEWS
                </h2>
                <div
                  style="
                    color: rgb(234, 222, 206);
                    font-size: 28px;
                    line-height: 1.4;
                  "
                >
                  We scraped the reviews of the 100 first finishable games in
                  our dataset.<br />
                  <span style="color: #6f6767; font-size: 20px">
                    Yeah! An access to what players REALLY think!
                  </span>
                </div>
              </div>

              <!-- Zone MASTERED (comments2) -->
              <div class="comments2">
                <div
                  style="
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  "
                >
                  <div
                    style="font-size: 20px; color: #6f6767; margin-bottom: 5px"
                  >
                    MASTERED
                  </div>
                  <div
                    style="
                      font-size: 28px;
                      font-weight: bold;
                      padding: 5px 15px;
                      border-radius: 8px;
                      background: rgba(136, 98, 162, 0.1);
                      min-width: 80px;
                    "
                    id="comment-mastered"
                  ></div>
                </div>
              </div>

              <!-- Zone STATUS (comments9) -->
              <div class="comments9">
                <div
                  style="
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  "
                >
                  <div
                    style="font-size: 20px; color: #6f6767; margin-bottom: 5px"
                  >
                    STATUS
                  </div>
                  <div
                    style="
                      font-size: 18px;
                      font-weight: bold;
                      padding: 5px 12px;
                      border-radius: 8px;
                      background: rgba(136, 98, 162, 0.2);
                      min-width: 100px;
                    "
                    id="comment-status"
                  ></div>
                </div>
              </div>

              <div class="comments3">
                <div
                  class="btn-load-comment"
                  id="load-random-comment"
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                    padding-top: 2px;
                  "
                >
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <div class="rarr" style="margin-top: 5px"></div>
                </div>
              </div>

              <div class="comments4" id="comment-display">
                <div
                  style="
                    padding: 22px;
                    height: 90%;
                    display: flex;
                    flex-direction: column;
                  "
                >
                <div id="review-counter" style="font-size: 18px; color: #6f6767; margin-bottom: 10px; text-align: right;">#0</div>
                  <div
                    id="comment-placeholder"
                    style="
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      height: 100%;
                      text-align: center;
                      color: #6f6767;
                      font-size: 24px;
                      line-height: 1.5;
                    "
                  >
                    Click the button
                    <i
                      class="fa-solid fa-arrows-rotate"
                      style="color: rgba(136, 98, 162, 0.2)"
                    ></i>
                    to load<br />
                    a random review from<br />
                    our database!
                  </div>
                  <div
                    id="comment-content"
                    style="display: none; flex-direction: column; height: 100%"
                  >
                    <div style="margin-bottom: 15px">
                      <div
                        style="
                          font-size: 22px;
                          color: rgba(136, 98, 162, 1);
                          font-weight: bold;
                          margin-bottom: 5px;
                          text-transform: uppercase;
                        "
                        id="comment-game"
                      ></div>
                      <div
                        style="
                          display: flex;
                          justify-content: space-between;
                          font-size: 20px;
                          color: #6f6767;
                        "
                      >
                        <span id="comment-date"></span>
                      </div>
                    </div>

                    <div
                      style="
                        flex-grow: 1;
                        overflow-y: auto;
                        padding-right: 10px;
                        padding-bottom: 20px;
                      "
                    >
                      <div
                        style="font-size: 22px; line-height: 1.5"
                        id="comment-text"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="comments7">
                <div
                  style="
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  "
                >
                  <div style="font-size: 20px; margin-bottom: 5px">RATING</div>
                  <div
                    style="
                      font-size: 28px;
                      font-weight: bold;
                      color: rgba(136, 98, 162, 1);
                    "
                    id="comment-rating"
                  ></div>
                </div>
              </div>

              <!-- Bouton NEXT (comments8) -->
              <div class="comments8">
                <div
                  class="btn-next-violet"
                  data-page="people"
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                    padding: 10px;
                  "
                >
                  <span
                    style="
                      font-family: 'Bungee Shade', sans-serif;
                      font-size: 20px;
                      text-align: center;
                    "
                  >
                    Let's<br />ANALYZE PEOPLE !
                  </span>
                  <div class="rarr" style="margin-top: 10px"></div>
                </div>
              </div>

              <!-- Flèche (comments10) -->
              <div class="comments10">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  "
                >
                  <img
                    src="flèche1.png"
                    style="height: auto; width: 120px; transform: rotate(0deg)"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside class="progress-bar">
          <div class="progress-container">
            <div class="progress" style="height: 30%"></div>
          </div>
        </aside>
        <nav class="bottom-nav">
          <ul>
            <button class="btn-blue" data-page="intro">0</button>
            <button class="btn-blue" data-page="data">1</button>
            <button class="btn-green" data-page="graph">2</button>
            <button class="btn-green" data-page="division">3</button>
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
          <div class="grid-people">
            <div class="people1">
              <p style="text-align: center">
                Now we <span style="text-decoration: underline; text-decoration-color: rgba(136, 98, 162, 1); text-decoration-style: dashed;">really</span> 
                have <span style="text-decoration: underline; text-decoration-color: rgba(136, 98, 162, 1); text-decoration-style: dashed;">all the ingredients</span> 
                for our big soup : the <span style="color: rgba(136, 98, 162, 1)">mastery</span
              > and the <span style="color: rgba(136, 98, 162, 1)">ratings</span
              > of <span style="text-decoration: underline; text-decoration-color: rgba(136, 98, 162, 1); text-decoration-style: dashed;">gamers</span>. We can start our analysis
                with the hypothesis we did upon the ratio M-F :<br />
                <span style="text-transform: uppercase ; color: rgba(136, 98, 162, 1);">can it influence a game's grade ?</span>
              </p>
            </div>
            <div class="people2">
              <div style="font-size: 22px; text-align: left;">
                <div style="display: flex; justify-content: flex-end ;">
  <img src="flèche1.png" style="height:auto; width:150px; transform: scaleY(-1) scaleX(-1);" />
</div>
  ========================================<br />
  <span class="spacer">---</span><span class="spacer">--</span><span class="spacer">--</span><span class="spacer">--</span>
  
  <span class="tooltip-container">
    <span class="tooltip-header">coef</span>
    <span class="tooltip-text"><span style="text-transform: uppercase ;">How much things change</span><br>for each 1-unit increase in analyzed variables</span></span>
  </span>
  
  <span class="spacer">---</span>
  
  <span class="tooltip-container">
    <span class="tooltip-header">std err</span>
    <span class="tooltip-text"><span style="text-transform: uppercase ;">How precise our guess is</span><br>Small number = we're pretty sure<br>Big number = less certain</span>
  </span>
  
  <span class="spacer">---</span>
  
  <span class="tooltip-container">
    <span class="tooltip-header">t</span>
    <span class="tooltip-text"><span style="text-transform: uppercase ;">How strong the signal is</span> compared to the noise : <br>>2 = probably real effect<br><2 = might be random</span>
  </span>
  
  <span class="spacer">---</span>
  
  <span class="tooltip-container">
    <span class="tooltip-header">P>|t|</span>
    <span class="tooltip-text"><span style="text-transform: uppercase ;">Probability this happened by random chance</span><br><0.05 = significant interaction<br>≥0.05 = could be random</span>
  </span>
  
  <br />----------------------------------------<br />
  
  <span class="tooltip-container" data-position="right">
    <span class="variable-name">Intercept</span>
    <span class="tooltip-text">Baseline rating when the variable(s) below = 0</span>
  </span><span class="spacer">----</span>3.8800 <span class="spacer">--</span> 0.025 <span class="spacer">--</span> 156.153 <span class="spacer">-</span> 0.000<br />
  
  <span class="tooltip-container" data-position="right">
    <span class="variable-name">Ratio_M-F</span>
    <span class="tooltip-text">The variable(s)<br>we are analyzing</span>
  </span><span class="spacer">---</span> 0.0892<span class="spacer">---</span>0.029 <span class="spacer">---</span>3.065 <span class="spacer">--</span>0.002<br />
  ========================================
  <div style="display: flex; justify-content: center ;">
  <img src="flèche2.png" style="height:120px; width:auto; padding:5px" /></div><div
                  class="btn-next-violet"
                  data-page="mastery"
                  style="font-family: 'Bungee Shade', sans-serif"
                >
                  Mastery criterias
                  <div class="rarr"></div>
              </div>
</div>
</div>
            <div class="people3">
              <br>
              This table shows us that games tend to be better rated when the additional time to complete them is higher. 
              But the effect is <span style="color:rgba(136, 98, 162, 1)">reeeaally low </span>. 

              <br>
              <p style="color: #6f6767">
                Afraid you don't really understand the table ?<br />
                Don't panic ! Just explore it<br />with your
                <span style="text-transform: uppercase">mouse</span><br />
                (you might need this knowledge<br />on the next page :)
              </p>
            </div>
        </main>
        <aside class="progress-bar">
          <div class="progress-container">
            <div class="progress" style="height: 16%"></div>
          </div>
        </aside>
        <nav class="bottom-nav">
          <ul>
            <button class="btn-blue" data-page="intro">0</button>
            <button class="btn-blue" data-page="data">1</button>
            <button class="btn-green" data-page="graph">2</button>
            <button class="btn-green" data-page="division">3</button>
            <button class="btn-violet" data-page="comments">4</button>
            <button class="btn-violet-active" data-page="people">5</button>
            <button class="btn-pink" data-page="results">6</button>
          </ul>
        </nav>
      </div>
    </div>
  `,
  mastery: `
    <div class="page active">
    <div class="main-container">
    <main class="content">
  <div class="grid-mastery">   
    <div class="mastery1" style="
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 30px;
">
  
  <div style="
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  ">
    <h2 style="
      color: rgba(136, 98, 162, 0.7);
      font-family: 'Bungee Shade', sans-serif;
      font-size: 36px;
      margin: 0;
      white-space: nowrap;
    ">
      A mastery study
    </h2>
  </div>
  
  <div style="
    margin-left: auto;
    transform: scale(0.85);
    transform-origin: right center;
  ">
    <img src="flèche1.png" style="width:70px; height:auto ; transform : rotate(-35deg) scaleY(-1)"/>
    <div
      class="btn-next-violet"
      data-page="results"
      style="
        font-family: 'Bungee Shade', sans-serif;
        padding: 12px 25px;
        font-size: 20px;
      "
    >
      100%...
      <div class="rarr" style="margin-top: 5px;"></div>
    </div>
  </div>
  
</div>
    
    <div class="mastery2" style="
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    ">
      <div style="
        font-size: 22px; 
        text-align: left;
        width: 90%;
        margin: 0 auto;
      ">
        <span style="color:rgba(136, 98, 162, 0.7); text-transform:uppercase">A) MASTERING WITH CONTROL QUALITY</span>
        ========================================<br />
        <span class="spacer">---</span><span class="spacer">--</span><span class="spacer">--</span><span class="spacer">--</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">coef</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">How much things change</span><br>for each 1-unit increase in analyzed variables</span></span>
        </span>
        
        <span class="spacer">---</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">std err</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">How precise our guess is</span><br>Small number = we're pretty sure<br>Big number = less certain</span>
        </span>
        
        <span class="spacer">---</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">t</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">How strong the signal is</span> compared to the noise : <br>>2 = probably real effect<br><2 = might be random</span>
        </span>
        
        <span class="spacer">---</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">P>|t|</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">Probability this happened by random chance</span><br><0.05 = significant interaction<br>≥0.05 = could be random</span>
        </span>
        
        <br />---------------------------------------<br />
        <span class="tooltip-container" data-position="right">
          <span class="variable-name">Intercept</span>
          <span class="tooltip-text">Baseline rating when the variable(s) below = 0</span>
        </span><span class="spacer">----</span>0.5141 <span class="spacer">--</span> 0.035 <span class="spacer">--</span> 27.801 <span class="spacer">--</span>0.000<br />
        
        <span class="tooltip-container" data-position="right">
          <span class="variable-name">Mastered</span>
          <span class="tooltip-text">Do you consider to have ENTIRELY finished the game ?</span>
        </span><span class="spacer">----</span>0.3504<span class="spacer">---</span>0.004<span class="spacer">---</span>85.584 <span class="spacer">-</span> 0.000<br />
        
        <span class="tooltip-container" data-position="right">
          <span class="variable-name">Average rating</span>
          <span class="tooltip-text">The mean of all the ratings (even those without a comments)</span>
        </span><span class="spacer"></span> 0.8839<span class="spacer">---</span>0.004<span class="spacer">--</span> 235.929<span class="spacer">--</span>0.000<br />
        ========================================<br><br>
        
        <div style="
          text-align: center; 
          width: 80%;
          margin: 10px auto;
          padding: 15px;
        ">
          And if we dive deeper in the preferences of mastered comments, we find the <span style="color:rgba(136, 98, 162, 1)">same tendency</span> as in the 
          the previous "global" results.<br>When a game has more additional time, 
          it's average rating is better,<br>
          and the effect is <span style="color:rgba(136, 98, 162, 1)">stronger</span> among mastered comments.<br>
        </div>
      </div>
    </div>
  
    <div class="mastery3" style="
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    ">
      
      <div style="
        text-align: center; 
        width: min(90%, 850px);
        margin: 0 auto;
        padding: 10px;
        font-size: 22px;
      ">
        Here the mastery effect is <span style="color:rgba(136, 98, 162, 1)">significative</span>.<br> But even BETTER !<br>
        It's <span style="color:rgba(136, 98, 162, 1)">independent</span> from the average rating.<br>
        <span style="color: #6f6767; font-size: 20px">-- it means that a higher average rating of a game doesn't influence the results --</span><br>
        People (on Backloggd) really like <span style="color:rgba(136, 98, 162, 1)">MASTERING</span> a game, not only play a good one !!
      </div>
      <br>
      <div style="
        font-size: 22px; 
        text-align: left;
        width: min(90%, 850px);
        margin: 0 auto;
      ">
        <span style="color:rgba(136, 98, 162, 0.7); text-transform:uppercase">B) Among mastered comments only</span>
        ========================================<br />
        <span class="spacer">---</span><span class="spacer">--</span><span class="spacer">--</span><span class="spacer">--</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">coef</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">How much things change</span><br>for each 1-unit increase in analyzed variables</span></span>
        </span>
        
        <span class="spacer">---</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">std err</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">How precise our guess is</span><br>Small number = we're pretty sure<br>Big number = less certain</span>
        </span>
        
        <span class="spacer">---</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">t</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">How strong the signal is</span> compared to the noise : <br>>2 = probably real effect<br><2 = might be random</span>
        </span>
        
        <span class="spacer">---</span>
        
        <span class="tooltip-container">
          <span class="tooltip-header">P>|t|</span>
          <span class="tooltip-text"><span style="text-transform: uppercase ;">Probability this happened by random chance</span><br><0.05 = significant interaction<br>≥0.05 = could be random</span>
        </span>
        
        <br />---------------------------------------<br />
        
        <span class="tooltip-container" data-position="right">
          <span class="variable-name">Intercept</span>
          <span class="tooltip-text">Baseline rating when the variable(s) below = 0</span>
        </span><span class="spacer">----</span>0.9735 <span class="spacer">--</span> 0.016 <span class="spacer">--</span> 32.980 <span class="spacer">--</span>0.000<br />
        
        <span class="tooltip-container" data-position="right">
          <span class="variable-name">Ratio_M-F</span>
          <span class="tooltip-text">The additional time to master</span>
        </span><span class="spacer">---</span> 0.1509<span class="spacer">---</span>0.035<span class="spacer">---</span>27.801<span class="spacer">---</span>0.000<br />
        
        <span class="tooltip-container" data-position="right">
          <span class="variable-name">Average rating</span>
          <span class="tooltip-text">The mean of all the ratings (even those without a comments)</span>
        </span><span class="spacer"></span> 0.8435<span class="spacer">---</span>0.008<span class="spacer">--</span> 99.898<span class="spacer">---</span>0.000<br />
        ========================================
      </div>
      
    </div>
    
  </div>
</main>
    <aside class="progress-bar">
    <div class="progress-container">
        <div class="progress" style="height: 8%;"></div>
      </div>
    </aside>
      <nav class="bottom-nav">
        <ul>
        <button class="btn-blue" data-page="intro">0</button>
        <button class="btn-blue" data-page="data">1</button>
        <button class="btn-green" data-page="graph">2</button>
        <button class="btn-green" data-page="division">3</button>
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
            <br /><br />
            <span style="font-size: 36px">
              FINALLY, its time for conclusion !</span
            ><br />
            <br />We now know that people that
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(198, 62, 123, 1);
                text-decoration-style: dashed;
              "
            >
              mastered</span
            >
            a video games seems more inclined to appreciate it.<br /><br />However,
            our study presents
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(198, 62, 123, 1);
                text-decoration-style: dashed;
              "
            >
              some limits</span
            >: we only have the most popular games, scraped upon one platform,
            or would've benefited from more comments ; and all those details
            could've brought bias to the analysis... But that open
            <span
              style="
                text-decoration: underline;
                text-decoration-color: rgba(198, 62, 123, 1);
                text-decoration-style: dashed;
              "
            >
              new perspectives</span
            >
            for future project ! So for now, let's just...
            <br />
            <br />REMEMBER THAT
            <span
              style="text-transform: uppercase; color: rgba(198, 62, 123, 1)"
            >
              you should
              <span style="color: rgb(234, 222, 206)">always</span> feel free to
              play
              <span style="color: rgb(234, 222, 206)"
                >the way you prefer !
              </span>
              :)</span
            ><br /><br />
            <br />
            <div class="btn-next-pink" data-page="bonus">
              <span style="font-family: 'Bungee Shade', sans-serif"
                >112% ?!</span
              >
              <div class="rarr"></div>
            </div>
          </div>
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
        <button class="btn-green" data-page="division">3</button>
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
    <br>
    <br>
    <br>
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
                <span class="completion-title">Congrats !</span>
              </div>

              <br />
              <span style="position: relative; top: -11px">you found a</span>
              <br />
              <span
                style="
                  font-size: 60px;
                  line-height: 80px;
                  position: relative;
                  top: -15px;
                  display: block;
                "
                >NOT ACHIEVED PAGE</span
              >
            </div>

            <div style="color: #6f6767; font-size: 20px">
              but something told me that waiting might be worth your time...<br>
              additional one IS better for happiness ! (well, in gaming at least)
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
                Turn<br /><span style="font-family: 'Gaegu', serif"
                  >back</span
                >
                <div class="rarr"></div>
              </div>
            </div>
          </div>
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
        <button class="btn-green" data-page="division">3</button>
        <button class="btn-violet" data-page="comments">4</button>
        <button class="btn-violet" data-page="people">5</button>
        <button class="btn-pink" data-page="results">6</button>
        </ul>
      </nav>
    </div>
    </div>
  `,
};

// FUNCTION PART
let currentPage = "accueil";
let reviewCounter = 0;

const commentsData = [
  {
    game: "Grand Theft Auto V",
    date: "Dec 04, 2025",
    comment: "Fun. Story mid",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Grand Theft Auto V",
    date: "Oct 14, 2025",
    comment:
      "Played the ps3, ps4 and pc versions, over 1500 h in game, including story mode and online, had so much fun over the years, kinda hate what the online has become the last updates...",
    rating: 5.0,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "The Legend of Zelda: Breath of the Wild",
    date: "Nov 04, 2025",
    comment:
      "You have to understand this game is what hostaged us to the open world genre and this was so defining to the gaming industry. I cried when Princess Zelda cried in the forest in that one memory. Honestly, so well written and I did ALL SHRINES",
    rating: 4.0,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "The Legend of Zelda: Breath of the Wild",
    date: "Sep 06, 2025",
    comment:
      "Cornerstone of that era of games and undoubtedly a masterpiece in polish, exploration, and atmosphere. However, the game has a hard time keeping me playing, and I have tried several times to complete the game only to lose steam a couple Divine Beasts in.",
    rating: 4.0,
    mastered: 0,
    status: "Shelved",
  },
  {
    game: "The Legend of Zelda: Breath of the Wild",
    date: "Feb 22, 2022",
    comment: "Gaming perfection",
    rating: 5.0,
    mastered: 1,
    status: "Played",
  },
  {
    game: "Elden Ring",
    date: "May 08, 2025",
    comment:
      "Peak game, good for people who haven't play Fromsoft games before.",
    rating: 5.0,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "Elden Ring",
    date: "May 02, 2025",
    comment:
      "The best of the souls combat mixed with a massive world that was a joy to explore. The game provides the player with so many different ways to defeat a boss and create a build. If you think you'd like a somewhat difficult game with great rpg elements, exploration, and combat give it a try.",
    rating: 5.0,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "Elden Ring",
    date: "Apr 14, 2025",
    comment:
      "it's From Software's I Wanna Be The Guy except they forgot the joke. leaving a like for ranni; leaving one and a half stars for realizing the only games i want to look up frame data for are fighting games.",
    rating: 1.5,
    mastered: 0,
    status: "Abandoned",
  },
  {
    game: "Portal",
    date: "Apr 26, 2025",
    comment:
      "Classic game, definitely feels mostly like a series of levels rather than a coherent story (like its sequel) but still a collectively enjoyable experience.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Portal",
    date: "Apr 24, 2025",
    comment: "manquerait juste un side kick super drôle pour que ce soir",
    rating: 4.5,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "Portal",
    date: "Apr 15, 2024",
    comment: "The cake is a lie!!!!",
    rating: 4.5,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "Red Dead Redemption 2",
    date: "Jun 21, 2025",
    comment: "its the greatest story in any video game",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Red Dead Redemption 2",
    date: "Jun 10, 2025",
    comment:
      "literally a LIFE CHANGING game i can't emphasise enough how much everyone needs to experience this story and its characters",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Red Dead Redemption 2",
    date: "Jun 06, 2025",
    comment:
      "WOW. THIS IS THE BEST THING IVE EVER WITNESSED ACROSS ANY MEDIUM OF STORYTELLING",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Hollow Knight",
    date: "Nov 19, 2025",
    comment:
      "Game is good so far I've just been playing too many things and lost interest in it for now, expecting big things from this game and the sequel when I eventually pick it back up.",
    rating: 4.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Hollow Knight",
    date: "Nov 09, 2025",
    comment:
      "par for the course metroidvania. a lot of exploring is met with lackluster rewards. geo, which you run out of uses for pretty quickly, or a charm with a unique yet mostly useless effect is less of an actual upgrade than 5 missiles in metroid, for example. the first few hours were very boring, and while it does get better later on, the lategame gives you absolutely 0 direction on how to access any of its content. it really desperately needs some kind of guiding npc or something, because you can say, miss a completely random unremarkable room which has a simple key and be entirely locked out of an important segment of the game unless you spend hours combing through areas you've already been just to find the one specific spot where that simple key was. after 17 hours i still have no idea who the 'grimm troupe' are or where to find them despite being otherwise stuck. i just finished white palace (after running around aimlessly forever to find more essence only for a friend to tell me a random boss can be gone back to to collect more), a tedious platforming area that i hated only for the reward it gives to be seemingly unhelpful anywhere (it obviously does have some use i just have no idea what it is and the hint given means nothing to me). i may pick this up again but i am extremely frustrated for now. i should not be having to look specific information up to find whole chunks of the game.",
    rating: 2.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Hollow Knight",
    date: "Nov 04, 2025",
    comment:
      "A perfect game that made people who have not played Metroid or Castlevania games call Metroidvanias Hollow Knight-esque.",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Hollow Knight",
    date: "Mar 04, 2025",
    comment:
      "Really good metroidvania with a good mix of exploration and combat. Some bosses are really hard, but they are fair. The combat just takes some getting used to. Also, f*ck primal aspids.",
    rating: 4.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Super Mario Odyssey",
    date: "Aug 15, 2022",
    comment:
      "In my opinion the best Mario game it has a interesting enough story for Mario and the cappy gimmick is very fun and all the words you see are great",
    rating: 4.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Super Mario Odyssey",
    date: "Apr 19, 2022",
    comment: "Fun first playthrough",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Cyberpunk 2077",
    date: "Oct 11, 2025",
    comment:
      "I'm probably very biased for this, but I was extremely excited for this game to come out. I found out about the teaser trailer and original first gameplay about a year or less before the game released and I was hooked, it was the perfect game that I wanted to play. I went to gamestop with granny when it got announced and put down the 5 dollars to reserve a copy and got the complementary necklace and postcard with it. When I finally did get it I was thoroughly underwhelmed, the guns felt weak, the netrunning abilities were lackluster and janky. The game felt weightless, everything was obviously unfinished. I was disappointed...but i got to have sex with a male prostitute. I came back to the game after the updates and to my surprise, it was the exact same as it had been before. Weak, weightless combat that felt bullet spongy and unfulfilling. The story felt pointless and un-engaging at times although my initial playthrough i was enthralled. The city is weak and even still feels empty despite everything, police don't even work properly STILL.",
    rating: 3.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Celeste",
    date: "Jul 29, 2025",
    comment:
      "Depression simulator lore wise et brisage de table simulator gameplay wise",
    rating: 4.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Celeste",
    date: "Jun 29, 2025",
    comment: "Very pretty. Need to try it again",
    rating: 3.5,
    mastered: 0,
    status: "Shelved",
  },
  {
    game: "Clair Obscur: Expedition 33",
    date: "Oct 08, 2025",
    comment:
      "A generational game like no other, and my Game of the Year. Many, MANY people have tried their hand at their spin on JRPGs, but to pull it off and excel on the level Sandfall has done here while making it their own thing is beyond compare. Standing ovation.",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Clair Obscur: Expedition 33",
    date: "Oct 02, 2025",
    comment:
      "This is, hands down, one of the best games I've ever played, and the best game I've played in the last decade. They nailed the pacing and the storytelling of this game. The combat is insanely fun and allows for a limitless amount of builds and strategies for your characters and teams. I've never had a game make me simultaneously laugh and cry as much as this one did. 10s all around. It's truly something special, and they weren't afraid to make turn-based combat cool again. Thank you, Sandfall.",
    rating: 5.0,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "Papers, Please",
    date: "Apr 19, 2022",
    comment: "simple, fun, repetitive and funny :)",
    rating: 3.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Papers, Please",
    date: "Dec 27, 2021",
    comment:
      "Papers please. It's a fun game with a very interesting story and step up. I really want a sequel for this.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "The Walking Dead",
    date: "Oct 23, 2025",
    comment: "#mauvaissouvenir #onoublietout",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "The Walking Dead",
    date: "Nov 16, 2023",
    comment:
      "I made choices I would make in real life, which often turned out to be the wrong ones, so it was very relatable in that sense.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Stray",
    date: "Oct 19, 2025",
    comment:
      "When it came out I was #1 hater, what do you mean simple and uninteresting (if it wasn't the cat) adventure game won the best indie the same year games like tunic or sifu came out? For three years I had it on my wish list to buy it cheap, hateplay it and write how much I despise this game. And now my friend in our steam family has it and I played it and... it was pretty fun I guess... I mean it's still simple and pretty uninteresting adventure game but the story and lore, even if not complicated, can be engaging to follow, movement, even if limited, feels smoother, involves going through and looking at beautiful cyberpunk city so it's nice anyway. I wouldn't pay for stray $30 but it was a fun ride... oh, and the cat is cute :3",
    rating: 3.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Stray",
    date: "Oct 02, 2025",
    comment:
      "A game that relies a lot more on atmosphere than story or characters. Credit where it's due, the environments are gorgeous, and seeing how the robots function in the different zones is really cool. The gameplay is pretty boring, but the game's short length ensures it doesn't get old.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Stray",
    date: "Aug 06, 2022",
    comment:
      "It's a miracle that the O button still works on my controller, since I used it to meow a million times. I started this game because of the cute cat (cats rule), but stayed and enjoyed every single minute of it because of its characters, its unique and profound story, its wonderful design and lighting. What a game. B-12, you're the best of all of us man.",
    rating: 4.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Dark Souls II: Scholar of the First Sin",
    date: "Aug 21, 2025",
    comment:
      "Dark Souls 2: Scholar of the First Sin remains the black sheep of the souls trilogy and for good reasons. FromSoftware under the direction of Yui Tanimura rather than Miyazaki produced a title that completely misses what made the original magical. The game confuses difficulty and injustice at every turn, multiplying frustrating situations that give the impression that the level design was conceived by someone sadistic rather than talented.",
    rating: 2.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Dark Souls II: Scholar of the First Sin",
    date: "Apr 23, 2025",
    comment:
      "Frustrating, Still Good. Dark Souls 2 is a good game, just not a great Dark Souls game. It still features great combat, a vast world that's fun to explore and full of secrets, and a ton of fun weapons and builds to use. If you're new to the series, I don't recommend starting with this one as it is frustratingly difficult at parts.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Super Mario Galaxy 2",
    date: "Mar 14, 2025",
    comment:
      "Super Mario Galaxy 2 is exactly what the title suggests. It takes the masterpiece of the first game and continues it with just about platforming perfection. Each level with more new ideas than the last, nothing ever overstaying its welcome or feeling uninspired. Even when so much is carried over from the predecessor, every level proves that there was so much left in the tank that it stands just as tall as what came before.",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Super Mario Galaxy 2",
    date: "Apr 07, 2024",
    comment:
      "Galaxy felt grand but this feels astronomical, more joyful, less lonely, better polished, cooler and overall a modern ageless experience. Not hard to call this one of the best games of all time that is sadly very much limited by the wii's resolution and forced motion controls.",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Super Mario Galaxy 2",
    date: "Mar 15, 2024",
    comment:
      "Here I am. I feel like this game personally has changed a lot for me. It means a lot to me as it's the first Mario game I ever played. Cloud Mario is the best powerup in this entire franchise and no one can convince me otherwise. The design is great, the ability is awesome and used so well throughout the game.",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "The Last of Us Remastered",
    date: "May 06, 2025",
    comment:
      "Super cool game, which I could get into it more but it's hard and I don't have access anymore.",
    rating: 4.0,
    mastered: 0,
    status: "Retired",
  },
  {
    game: "The Last of Us Remastered",
    date: "Nov 09, 2024",
    comment:
      "Currently playing through this and I absolutely hate it so far - it's the first game in quite a while to thoroughly frustrate me with how rigid and restrictive its gameplay is. I want to get invested in the characters and story but the janky gameplay keeps getting in the way.",
    rating: 1.0,
    mastered: 0,
    status: "Played",
  },
  {
    game: "The Last of Us Remastered",
    date: "Feb 15, 2024",
    comment:
      "This was a big one, one of the hardest and most time-consuming platinums I've done but also a masterpiece. The online was brutal. The single player was a delight, I actually liked the plot better the more I played. The attention to detail becomes a lot more clear and I came to appreciate how well written the characters were.",
    rating: 4.5,
    mastered: 1,
    status: "Completed",
  },
  {
    game: "Death Stranding",
    date: "Jul 27, 2025",
    comment:
      "Death Stranding is a unique game. The gameplay is fairly classic, involving travelling from one point to another and delivering packages, but it's packed with features that make it excellent, such as the use of equipment to overcome obstacles, mutual assistance between players, and events that can drastically change your journey.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Death Stranding",
    date: "Jul 14, 2025",
    comment: "Pretentious meat slop.",
    rating: 1.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Death Stranding",
    date: "Jul 07, 2025",
    comment:
      "I understand why people dislike this game; it's very niche and something I don't think everyone will enjoy. But I loved quite a bit about this game. The cast and acting are amazing, I loved so many of the characters and performances, and the character-building is well done.",
    rating: 4.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Elden Ring",
    date: "Apr 04, 2022",
    comment:
      "Almost perfect, if you don't mind repetitive boss battles. Such a great game, a masterpiece to experience.",
    rating: 4.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Elden Ring",
    date: "Mar 11, 2022",
    comment:
      "Some bosses good, many bosses too aggressive and annoying. Everything else really good :))))))))))",
    rating: 5.0,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Hollow Knight",
    date: "Jun 06, 2025",
    comment:
      "I've played the game, again and again. It's a Masterpiece, masterfully crafted game, and has close to no flaws but... it's not for me. The sheer amount of content is insane, it's an enormous game, with loads of things to explore, discover, share with friends or just enjoy by yourself.",
    rating: 3.5,
    mastered: 0,
    status: "Completed",
  },
  {
    game: "Hollow Knight",
    date: "Jun 05, 2025",
    comment:
      "It's a game with a beautiful soundtrack, especially the bosses. Tough platforming that always is rewarding, has various mechanics ranging from mobility to offense and is generally a big game for a small map. The bosses are difficult and usually reward you with something great once you defeated that boss.",
    rating: 4.5,
    mastered: 0,
    status: "Completed",
  },
];

function getRandomComment() {
  if (!commentsData || commentsData.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * commentsData.length);
  return commentsData[randomIndex];
}

function displayComment(comment) {
  const placeholder = document.getElementById("comment-placeholder");
  const content = document.getElementById("comment-content");
  const counterElement = document.getElementById("review-counter");

  if (placeholder && content && counterElement) {
    placeholder.style.display = "none";
    content.style.display = "flex";
    content.style.flexDirection = "column";

    reviewCounter++;
    counterElement.textContent = `#${reviewCounter}`;

    document.getElementById("comment-game").textContent = comment.game;
    document.getElementById("comment-date").textContent = comment.date;
    document.getElementById("comment-text").textContent = comment.comment;
    document.getElementById("comment-rating").textContent =
      comment.rating.toFixed(1);

    // Gérer le statut "Mastered"
    const masteredElement = document.getElementById("comment-mastered");
    if (comment.mastered === 1) {
      masteredElement.textContent = "YES";
      masteredElement.style.color = "rgba(198, 62, 123, 1)";
      masteredElement.style.background = "rgba(198, 62, 123, 0.1)";
    } else {
      masteredElement.textContent = "NO";
      masteredElement.style.color = "#6f6767";
      masteredElement.style.background = "rgba(111, 103, 103, 0.1)";
    }

    document.getElementById("comment-status").textContent = comment.status;
  }
}

function updateStats() {
  if (!commentsData) return;

  const total = commentsData.length;
  const mastered = commentsData.filter((c) => c.mastered === 1).length;
  const notMastered = total - mastered;
}

function handleRandomReviewClick() {
  const comment = getRandomComment();
  if (comment) {
    displayComment(comment);

    const button = document.getElementById("load-random-comment");
    if (button) {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    }
  }
}

function handleCommentsNextClick(e) {
  e.preventDefault();
  const page = "people";
  if (pages[page]) {
    navigateTo(page);
  }
}

window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1);
  const availablePages = Object.keys(pages);

  if (hash && availablePages.includes(hash)) {
    navigateTo(hash);
  } else {
    navigateTo("accueil");
  }
});

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1);
  const availablePages = Object.keys(pages);

  if (hash && availablePages.includes(hash)) {
    navigateTo(hash);
  }
});

// ====== FONCTION POUR LE GRAPHIQUE ======
function initializeChart() {
  const canvas = document.getElementById("ratings-chart");
  if (!canvas) {
    console.error("Canvas not found for chart");
    return;
  }

  if (typeof Chart === "undefined") {
    console.error("Chart.js is not loaded");
    return;
  }

  const ctx = canvas.getContext("2d");

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

  const ratingsChart = new Chart(ctx, chartConfig);

  const container = document.querySelector("#ratings-chart-container");
  if (container) {
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }

  return ratingsChart;
}

// --- Division ---
function generateMiniDots() {
  const container = document.getElementById("games-dots");
  if (!container) return;

  container.innerHTML = "";

  const finishableCount = 8;
  const nonFinishableCount = 92;

  for (let i = 0; i < nonFinishableCount; i++) {
    const dot = document.createElement("div");
    dot.className = "game-dot-mini non-finishable";
    dot.style.animationDelay = `${i * 0.02}s`;
    container.appendChild(dot);
  }

  for (let i = 0; i < finishableCount; i++) {
    const dot = document.createElement("div");
    dot.className = "game-dot-mini finishable";
    dot.style.animationDelay = `${(nonFinishableCount + i) * 0.02}s`;
    container.appendChild(dot);
  }
}

// Ratio_M-F
function initializeSimpleRatioChart() {
  const canvas = document.getElementById("simple-ratio-chart");
  if (!canvas) {
    console.error("Canvas not found for simple ratio chart");
    return;
  }

  if (typeof Chart === "undefined") {
    console.error("Chart.js is not loaded");
    return;
  }

  const ctx = canvas.getContext("2d");

  const rawData = [
    { ratio: 0.2, count: 44, leg: "20%" },
    { ratio: 0.5, count: 36, leg: "50%" },
    { ratio: 0.3, count: 36, leg: "30%" },
    { ratio: 0.0, count: 36, leg: "0%" },
    { ratio: 0.4, count: 35, leg: "40%" },
    { ratio: 0.6, count: 25, leg: "60%" },
    { ratio: 0.7, count: 14, leg: "70%" },
    { ratio: 0.8, count: 13, leg: "80%" },
    { ratio: 0.1, count: 12, leg: "10%" },
    { ratio: 0.9, count: 3, leg: "90%" },
    { ratio: -0.1, count: 2, leg: "-10%" },
    { ratio: -0.2, count: 2, leg: "-20%" },
    { ratio: -0.4, count: 1, leg: "-40%" },
    { ratio: -12.0, count: 1, leg: "Outlier" },
    { ratio: -0.3, count: 1, leg: "-30%" },
  ];

  const sortedData = [...rawData].sort((a, b) => a.ratio - b.ratio);
  const labels = sortedData.map((d) =>
    d.ratio === -12.0 ? "Outlier" : d.leg.toString()
  );
  const data = sortedData.map((d) => d.count);
  const totalGames = data.reduce((a, b) => a + b, 0);

  Chart.defaults.font.family = "'Gaegu', sans-serif";
  Chart.defaults.font.size = 14;

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Number of Games",
          data: data,
          backgroundColor: sortedData.map((d) => {
            if (d.ratio < 0) return "rgba(64, 85, 31, 0.6)";
            if (d.ratio === 0) return "rgba(234, 222, 206, 0.6)";
            return "rgba(128, 168, 62, 0.6)";
          }),
          borderColor: sortedData.map((d) => {
            if (d.ratio < 0) return "rgba(64, 85, 31, 1)";
            if (d.ratio === 0) return "rgba(234, 222, 206, 1)";
            return "rgba(128, 168, 62, 1)";
          }),
          borderWidth: 1.5,
          borderRadius: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        duration: 1000,
        easing: "easeOutQuart",
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(43, 38, 35, 0.95)",
          titleColor: "rgb(234, 222, 206)",
          bodyColor: "rgb(234, 222, 206)",
          borderColor: "rgba(128, 168, 62, 0.8)",
          borderWidth: 1,
          titleFont: {
            family: "'Gaegu', sans-serif",
            size: 14,
          },
          bodyFont: {
            family: "'Gaegu', sans-serif",
            size: 14,
          },
          callbacks: {
            label: (context) => {
              const value = context.raw;
              const percent = ((value / totalGames) * 100).toFixed(1);
              return `${value} games (${percent}%)`;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Ratio M-F Value",
            color: "rgba(234, 222, 206, 0.9)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 16,
              weight: "bold",
            },
          },
          ticks: {
            color: "rgba(234, 222, 206, 0.8)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 13,
            },
          },
          grid: {
            color: "rgba(234, 222, 206, 0.1)",
            drawBorder: false,
          },
        },
        y: {
          title: {
            display: true,
            text: "Number of Games",
            color: "rgba(234, 222, 206, 0.9)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 16,
              weight: "bold",
            },
          },
          ticks: {
            color: "rgba(234, 222, 206, 0.8)",
            font: {
              family: "'Gaegu', sans-serif",
              size: 13,
            },
            stepSize: 10,
          },
          grid: {
            color: "rgba(234, 222, 206, 0.1)",
            drawBorder: false,
          },
          beginAtZero: true,
        },
      },
    },
  });

  const container = document.querySelector("#simple-ratio-chart-container");
  if (container) {
    setTimeout(() => {
      container.classList.add("active");
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }, 50);
  }

  return chart;
}

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

  if (pageName === "division") {
    setTimeout(() => {
      generateMiniDots();
    }, 50);
  }

  if (pageName === "ratio_MF") {
    setTimeout(() => {
      if (typeof Chart !== "undefined") {
        initializeSimpleRatioChart();
      }
    }, 50);
  }

  if (pageName === "comments") {
    setTimeout(() => {
      initializeCommentsPage();
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

function initializeCommentsPage() {
  reviewCounter = 0;
  const counterElement = document.getElementById("review-counter");
  if (counterElement) {
    counterElement.textContent = "#0";
  }

  const placeholder = document.getElementById("comment-placeholder");
  const content = document.getElementById("comment-content");
  if (placeholder && content) {
    placeholder.style.display = "flex";
    content.style.display = "none";
  }

  updateStats();

  const loadButton = document.getElementById("load-random-comment");
  if (loadButton) {
    loadButton.removeEventListener("click", handleRandomReviewClick);
    loadButton.addEventListener("click", handleRandomReviewClick);
  }

  const nextButton = document.querySelector('.comments8 [data-page="people"]');
  if (nextButton) {
    nextButton.removeEventListener("click", handleCommentsNextClick);
    nextButton.addEventListener("click", handleCommentsNextClick);
  }
}
