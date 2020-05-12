console.log('main things')

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

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const mailingListButton = () => {
  let domstring =`<button id="mailingListButton">Join Our Mailing List</button>`
  printToDom("#mailingList",domstring);
  document.querySelector("#mailingListButton").addEventListener('click', mlSubmitForm);
}

const mlSubmitForm = () => {
  let domstring = `<input type='email' id="emailText"><button id="mlSubmitButton">Submit</button>`
  printToDom("#mailingList",domstring);
  document.querySelector("#mlSubmitButton").addEventListener('click', mlSubmitted);
}

const mlSubmitted = () => {
  let domstring = `<H2 id="mlThanks">Thank You For Signing Up For Our Newsletter</h2>`
  printToDom("#mailingList",domstring);
}

mailingListButton();
