let addToy = false;

const toysURL = 'http://localhost:3000/toys'

// use fetch() to GET /toys and render all toys to DOM

// fetch returns a promise 
fetch(toysURL)
  .then(responseObj => {
    return responseObj.json()
  })
  .then(toysArray => {
    toysArray.forEach(renderToy)
  })

function updateLikes(eventObj) {
  // find the element we wish to change
  const theCard = eventObj.target.parentElement
  const likesContainer = theCard.querySelector('p')

  // grab the string we're trying to change
  const oldString = likesContainer.innerText
  
  // isolate number from the string
  const stringSplitToArray = oldString.split(" ")

  // add one to number
  const oldNumber = stringSplitToArray[0]
  stringSplitToArray[0] = parseInt(oldNumber) + 1

  //changing the DOM back to the new string
  const theNewString = stringSplitToArray.join(" ")

  likesContainer.innerText = theNewString
}

const newToyForm = document.querySelector(".add-toy-form")

newToyForm.addEventListener('submit', e => {
  e.preventDefault()

  const newName = e.target.name.value
  const newImage = e.target.image.value 
  const newLikes = 0

  const newToy = {
    name: newName,
    image: newImage,
    likes: newLikes
  }

  renderToy(newToy)
})

function renderToy(toyObject) {
      // make a card, aka div
      const div = document.createElement('div')
      div.className = 'card'

      // put toyObject info in other elements
      const h2 = document.createElement('h2')
      toyObject.name = toyObject.name
      
      const img = document.createElement('img')
      img.src = toyObject.image
      img.className = 'toy-avatar'
      
      const p = document.createElement('p')
      p.innerText = toyObject.likes + " likes"

      const button = document.createElement('button')
      button.innerText = "Like ❤️"
      button.className = "like-btn"
      button.id = toyObject.id

      button.addEventListener('click', updateLikes)

      // append other elements to first div 
      div.append(h2, img, p, button)

      // append card to page 
      const toysContainer = document.getElementById('toy-collection')
      toysContainer.append(div)
}

document.addEventListener("DOMContentLoaded", () => {
  attachHideAndShowListener();
});

function attachHideAndShowListener() {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & show with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
}
