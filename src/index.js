const baseURL = 'http://localhost:3000/toys'

fetch(baseURL)
  .then(resp => resp.json())
  .then(toyArray => {
    toyArray.forEach(renderToy)
  })

function renderToy(toyObj) {
  const div = document.createElement('div')
  div.className = 'card'

  const h2 = document.createElement('h2')
  h2.innerText = toyObj.name 

  const img = document.createElement('img')
  img.className = 'toy-avatar'
  img.src = toyObj.image 

  const p = document.createElement('p')
  p.innerText = toyObj.likes + " likes"

  const button = document.createElement('button')
  button.className = 'like-btn'
  button.id = toyObj.id 
  button.innerText = "Like (heart)"

  div.append(h2, img, p, button)
  const toyContainer = document.getElementById('toy-collection')
  toyContainer.append(div)
  console.log(toyObj)
}

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

