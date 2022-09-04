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


 
 fetch('http://localhost:3000/toys')  
.then(response => response.json())
.then(data => addToysToDom(data))


const container = document.getElementById("toy-collection")
function addToysToDom(data){
  console.log(data)
  data.forEach(toy => {
    const div = document.createElement("div");
    div.setAttribute("class", "card")
    const h2 = document.createElement("h2");
    h2.textContent = `${toy.name}`
    const img = document.createElement("img")
    img.className = "toy-avatar"
    img.src =`${toy.image}`
    const p = document.createElement("p")
    p.innerText = `${toy.likes}`
    const button = document.createElement("button")
    button.textContent = "Like ❤️"
    button.id = `${toy.id}`
    button.className="like-btn"
//Append to the DOM
    container.appendChild(div)
    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(button)
    button.addEventListener("click", () => {
      p.innerText = incrementLikes(data)
    })
  })
}
function  addFromInput() {
  const input = document.querySelector("form").elements[name="name"].value
  const input2 = document.querySelector("form").elements[name="image"].value
  console.log("input2", input)
  return  {
    "name" : input,
    "image" : input2,
    "likes" : 0,
  }
}
  

