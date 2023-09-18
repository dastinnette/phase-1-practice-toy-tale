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

const url = 'http://localhost:3000/toys'
const toyCollection = document.getElementById('toy-collection')

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)

    data.forEach(toyObj => {
      const div = document.createElement('div')
      div.classList.add('card')
      console.log(div)

      const name = document.createElement('h2')
      div.appendChild(name)
      name.textContent = toyObj.name

      const img = document.createElement('img')
      div.appendChild(img)
      img.classList.add('toy-avatar')
      img.src = toyObj.image

      const likes = document.createElement('p')
      div.appendChild(likes)
      likes.textContent = `${toyObj.likes} likes`

      const button = document.createElement('button')
      div.appendChild(button)
      button.classList.add('like-btn')
      button.textContent = "Like ❤️"
      button.id = toyObj.id

      toyCollection.append(div)
    })
  })