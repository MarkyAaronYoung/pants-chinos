//Future(Fashion Week) Page array
futureCards = [
  {
    image: 'images/paris.png',
    location: "Paris",
    date: "January 20 - 23, 2021",
    timer: ''
  },
  {
    image: 'images/newyork.png',
    location: "New York",
    date: "February 6 - 13, 2021",
    timer: ''
  },
  {
    image: 'images/london.png',
    location: "London",
    date: "February 14 - 18, 2021",
    timer: ''
  },
  {
    image: 'images/nashville.png',
    location: "Nashville",
    date: "February 24 - March 4, 2021",
    timer: ''
  }
]

// Past Array

const pastCard = [
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/1901_-_Spanish-American_War_Veterans_-_Allentown_PA.jpg',
    name: 'Allentown Militia Officers',
    date: 1901,
    country: 'Caribbean Sea & Asia Pacific',
  },

  {
    imageUrl: 'https://www.vintagedetroit.com/blog/wp-content/uploads/2016/01/hank-greenberg-world-war-2-united-states-army.jpg',
    name: 'Hank Greenberg',
    date: 1941,
    country: 'USA',
  },

  {
    imageUrl: 'https://holeinthedonut.com/wp-content/uploads/2013/06/England-Jersey-Liberation-Day-Soldiers.jpg',
    name: 'Royal Jersey Militia Army',
    date: 2013,
    country: 'England',
  },

  {
    imageUrl: 'https://static01.nyt.com/images/2019/05/03/us/UNIFORMS-1/UNIFORMS-1-superJumbo.jpg',
    name: 'US Army',
    date: 2017,
    country: 'USA',
  },
]

// Main page array
reviews = [
  {
    title: "Good pants, just slightly large.",
    review: "These pants look good, are made from a standard, good-quality material and a reasonably priced. The waist is about 1/2 to 1 inch larger than advertised. So the 28\" pair I bought is actually more like 28.5-29\". Also, these aren't as slim as the usual slim fit in most brands. They are more like a classic fit, or somewhere in between a classic and a slim fit. Keeping that in mind, I would recommend these.",
    hearts: 4
  },
  {
    title: "Great, but attract dust like crazy",
    review: "Although they're cheap they are quite good. The only pitfall is that they attract dust like crazy!!!! Almost have to carry a lint roller just to pick the dust off.",
    hearts: 3
  },
  {
    title: "These black chinos are lint magnets.",
    review: "I bought two pairs of these chinos in black and they are a little small in the waist (which may have more to do with the excess amounts of cheese I eat than it does with the pants) but overall they are fairly comfortable. My main gripe is that these chinos are like a magnet for lint, fur-balls and hair and it is *very* noticeable. Don't even think of handling a tea towel because a lot of that tea towel is going to attach itself to your pants and come with you for the rest of the day. If you plan on hermetically sealing yourself in a jar then I'm sure these chinos would be fine, but they are unfortunate for every day use out in the real world.",
    hearts: 2
  },
  {
    title: "Extremely disappointed, very small.",
    review: "I really liked the color of this pant, but the fit was extremely small, hardly covered my ankles! Should have gone multiple sizes bigger than my regular size. The material was just about ok, nothing great about it. Overall very disappointing with this.",
    hearts: 1
  },
  {
    title: "I was VERY skeptical but bought these on his recommendation alone and glad I did",
    review: "I was very pleasantly surprised with these! Already on the lookout for something that would fit my ever growing tall, slim waisted kid (that wasnt ridiculously expensive because he outgrows pants quickly) when I spotted another student wearing these. I was VERY skeptical but bought these on his recommendation alone and glad I did. Really nice pants, especially given the price/growth of child ratio. Arrived quicky, and kept their shape after laundering. Fit my guy beautifully.",
    hearts: 5
  },
  {
    title: "Great fit!",
    review: "These slacks are great! I loved them from the first time I put them on. I am 5'2 and around 200 lbs. I ALWAYS need my pant legs shortened. Not these! I purchased the 28 inch length. Ideally, I would like to be able to buy 26 inch length. But these are close enough that I can avoid alteration charges! Maybe not a big deal to most people, but so liberating to me to be able to buy slacks and wwear them right out of the package!",
    hearts: 5
  }
]

presentCards = [
  { 
    imageUrl: "images/RyanReynolds.png",
    who: "Ryan Reynolds",
    occupation: "Actor"
  },
  {
    imageUrl: "images/BradPitt.png",
    who: "Brad Pitt",
    occupation: "Actor"
  },
  {
    imageUrl: "images/TomBrady.png",
    who: "Tom Brady",
    occupation: "Athlete"
  },
  {
    imageUrl: "images/DavidBeckham.png",
    who: "David Beckham",
    occupation: "Athlete"
  },
  {
    imageUrl: "images/ChinoMoreno.jpeg",
    who: "Chino Moreno",
    occupation: "Musician"
  },
  {
    imageUrl: "images/PrinceHarry.jpeg",
    who: "Prince Harry",
    occupation: "Politician"
  }
]
// function for printing to DOM
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const printToHeading = (header,paragraph) => {
  let domString = `<h2 id="headingHeader">${header}<h2><div id="headingText">${paragraph}</div>`
  printToDom('#pageHeader',domString)
}

//print header with image and navbar
const makeNav = ()=> {

  let domstring = 
  ` <img src="https://www.gentlemansgazette.com/wp-content/uploads/2016/09/Khakis-Chinos.jpg" style="max-width:100%;">
  <nav class="nav">
    <a class="navlink" href="./index.html">Home</a>
    <a class="navlink navlink-mid" href="./past.html">Past</a>
    <a class="navlink navlink-mid" href="./present.html">Present</a>
    <a class="navlink navlink-mid" href="./future.html">Future</a>
    <a class="navlink" href="#">Purchase</a>
  </nav>`

  printToDom("header", domstring);
}


//print footer with navbar and copyright
const makeFooter = () => {
 let domstring =  `<nav class="nav">
  <a class="navlink" href="./index.html">Home</a>
  <a class="navlink navlink-mid" href="./past.html">History</a>
  <a class="navlink navlink-mid" href="./present.html">Celebrities</a>
  <a class="navlink navlink-mid" href="./future.html" style="font-size:22px;">Fashion Shows</a>
  <a class="navlink" href="#">Shop</a>
</nav>
  <div id="copyright">© 2020 Team Chinos. All Rights Reserved</div>`

  printToDom("footer",domstring);
}



//function to parse cards for the reviews page.
const printCards = (reviewCollection) =>
{ 
  let domString = ''
  for (let i = 0; i<reviewCollection.length; i++){
    domString += `<div class="card bg-light col-md-5 m-2 h-100" style="width: 18em">
    <div class="card-header text-center"><strong>${reviewCollection[i].title}</strong></div>
    <div class="card-body">
      <h5 class="card-title text-center">${getHearts(reviewCollection[i].hearts)}</h5>
      <p class="card-text text-justify">${reviewCollection[i].review}</p>
    </div>
  </div>`
      
    }
  printToDom("#cardsDiv", domString)
}

//function to parse celebrity cards to present page.
const printCelebrityCards = (presentCardCollection) =>
{ 
  let domString = ''
  for (let i = 0; i < presentCardCollection.length; i++){
    domString += `
    <div class="card m-2" id="celebCard">
        <img class="card-img-top" id="celebPics" src="${presentCardCollection[i].imageUrl}" alt="Card image">
      <div class="card-body-present">
        <h5 class="card-title text-left">Who: ${presentCardCollection[i].who}</h5>
        <p class="card-text text-left">Occupation: ${presentCardCollection[i].occupation}</p>
      </div>
    </div>`
      
    }
  printToDom("#presentDiv", domString)
}

const filterCelebEvent = (event) => {
  const buttonId = event.target.id;
  const tempCelebCollection = [];
  
  for (let i = 0; i < presentCards.length; i++) {
    if (presentCards[i].occupation === buttonId) {
      tempCelebCollection.push(presentCards[i]);
    }
  }

  printCelebrityCards(tempCelebCollection);
}

const clickEvents = () => {
  document.querySelector('#Athlete').addEventListener('click', filterCelebEvent);
  document.querySelector('#Politician').addEventListener('click', filterCelebEvent);
  document.querySelector('#Actor').addEventListener('click', filterCelebEvent);
}


const getHearts = (num) =>{
  switch (num){
    case 1: return "❤️♡♡♡♡"
    case 2: return "❤️❤️♡♡♡"
    case 3: return "❤️❤️❤️♡♡"
    case 4: return "❤️❤️❤️❤️♡"
    case 5: return "❤️❤️❤️❤️❤️"
  }
}


// printing past cards
const printPastCards = (pastCollection) =>
{ 
  let domString = ''
  for (let i = 0; i<pastCollection.length; i++){
    domString += `<div class ="card m-2">`
    domString += `<img class ="card-img-top" src="${pastCollection[i].imageUrl}" alt="Card image">`
    domString += `<div class="card-body">`
    domString += `<h5 class ="card-title">${pastCollection[i].name}</h5>`
    domString += `<p class="card-text">${pastCollection[i].date}</p>`
    domString += `<p class="card-text">${pastCollection[i].country}</p>`
    domString += `</div>`
    domString += `</div>`
      
    }
  printToDom("#pastCardsDiv", domString)
}

const homePageHeading = () => {
  const headText = ""
  const paragraphText = "Welcome to the Chino Historical Society Information Site. Chinos have been around for over 120 years. We've dedicated ourselves to follow the world of chinos in past, present, and future.<br><br> Check Out some reviews of Chinos below and we encourage you to join our mailing list for the most up to date news on Chinos<br><br>~~US"
  printToHeading(headText,paragraphText);
}

const mailingListButton = () => {
  let domString = `<button id="mailingListButton">Sign Up For Our Mailing List</button>`
  printToDom("#mailingList",domString);
  document.querySelector("#mailingListButton").addEventListener('click', mlSubmitForm);
}

const mlSubmitForm = () => {
  let domString = `<input type='email' id="emailText" placeholder="name@domain.com"><button id="mlSubmitButton">Submit</button>`
  printToDom("#mailingList",domString);
  document.querySelector("#mlSubmitButton").addEventListener('click', mlSubmitted);
}

const mlSubmitted = () => {
  let domString = `<H2 id="mlThanks">Thank You For Signing Up For Our Newsletter</h2>`
  printToDom("#mailingList",domString);
}

//functions per page
const indexFunctions = () => {
  
  makeNav();
  makeFooter();
  homePageHeading();
  printCards(reviews);
  mailingListButton();
}

const pastFunctions = () => {
  
  makeNav();
  makeFooter();
  printPastCards(pastCard);
  
}

const presentFunctions = () => {
  
  makeNav();
  makeFooter();
  printCelebrityCards(presentCards);
  clickEvents();
}

const futureFunctions = () => {
  
  makeNav();
  makeFooter();
  printFutureCards(futureCards);
}

const init = () => {
  console.log(window.location.pathname);
  switch (window.location.pathname){
    case "/index.html": 
      indexFunctions();
      break;
    case "/past.html":
      pastFunctions();
      break;
    case "/present.html":
      presentFunctions();
      break;
    case "/future.html":
      futureFunctions();
      break;
  };
}

// future domString
const printFutureCards = (futureCollection) => { 
  let domString = ''
  for (let i = 0; i<futureCollection.length; i++) {
    domString += `<div class="card m-2">
                    <img class="card-img-top" src="${futureCollection[i].image}" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">${futureCollection[i].location}</h4>
                    <p class="card-text">${futureCollection[i].date}</p>
                    <p id="timer" class="card-text"><small class="text-muted">${(futureCollection[i].timer)}</small></p>
                  </div>
                  </div>`;
      
  }
  printToDom("#futureDiv", domString)
}

let parisDate = new Date("Jan 20, 2021 19:00:00").getTime();
let nycDate = new Date("Feb 6, 2021 19:00:00").getTime();
let londonDate = new Date("Feb 14, 2021 19:00:00").getTime();
let nashvilleDate = new Date("Feb 24, 2021 19:00:00").getTime();

// update count down every second
var second = setInterval(function() {

  var now = new Date().getTime(); // today's date and time
  let timeLeft = parisDate - now;
  
  // time calculations for days, hours, minutes, and seconds
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

init();
