document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()
})
const dogBar = document.querySelector(`div#dog-bar`)
const dogInfo = document.querySelector(`#dog-info`)
const dogSpan = document.createElement("SPAN")
const dogImg = document.createElement("img")
const dogName = document.createElement("h2")
const isGoodDog = document.createElement("button")

fetch("http://localhost:3000/pups")
    .then((response)=> response.json())
    .then((data) => {
        const pupsArray = data
        pupsArray.forEach((dog)=>{
            dogSpan.textContent = `${pupsArray.name}`
        })
        dogBar.appendChild(dogSpan)
    })
