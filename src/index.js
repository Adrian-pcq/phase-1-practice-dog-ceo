//console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then (resp => resp.json())
.then (data => renderDogsImages(data.message))

function renderDogsImages(dogsArray){
    dogsArray.forEach(dogImage => { 
        const placeOfDogs = document.getElementById("dog-image-container")
        const image = document.createElement("img")
        image.src = dogImage
        placeOfDogs.append(image)
    })
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(resp => resp.json())
.then(data => {
    const breeds = Object.keys(data.message)
    renderDogsBreeds(breeds)
})
const list = document.createElement("li")
function renderDogsBreeds(breedsArray){
    console.log(breedsArray)
    const placeOfBreeds = document.getElementById("dog-breeds")
    breedsArray.forEach(breed => {
       
        list.textContent = breed
        const dropdown = document.getElementById("breed-dropdown")
            dropdown.addEventListener("change", e =>{
                const letter = e.target.value
                const filtered = breedsArray.filter(breed => breed.startsWith(letter))
                list.textContent = filtered 
        
            })
     
        list.addEventListener("click",e =>{
            if(e.target.style.color === 'black'){
                e.target.style.color = "red"
            }else{
                e.target.style.color = "black"
            }
            
        })
        
        })
        placeOfBreeds.append(list)
        
        
       
    
}

