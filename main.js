//Future(Fashion Week) Page array
futureCards = [
  {
    image: images/paris.png,
    location: "Paris",
    date: "1/20/21 - 1/23/21"
  },
  {
    image: images/newyork.png,
    location: "New York",
    date: "2/6/21 - 2/13/21"
  },
  {
    image: images/london.png,
    location: "London",
    date: "2/14/21 - 2/18/21"
  },
  {
    image: images/nashville.png,
    location: "Nashville",
    date: "2/24/21 - 3/4/21"
  }
]

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

const getHearts = (num) =>{
  switch (num){
    case 1: return "❤️♡♡♡♡"
    case 2: return "❤️❤️♡♡♡"
    case 3: return "❤️❤️❤️♡♡"
    case 4: return "❤️❤️❤️❤️♡"
    case 5: return "❤️❤️❤️❤️❤️"
  }
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
  
}

const presentFunctions = () => {
  
  makeNav();
  makeFooter();
  
}

const futureFunctions = () => {
  
  makeNav();
  makeFooter();
  
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




init();
