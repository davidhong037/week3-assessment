let favColor = document.getElementById('color')
let favPlace = document.getElementById('place')
let favRitual = document.getElementById('ritual')

function favoriteColor(){
    alert('My favorite colors are orange and blue!')
}

function favoritePlace(){
    alert('My favorite place is anywhere where there is food and beer')
}

function favoriteRitual(){
    alert('My favorite ritual is playing "Paul Johnson - Get Get Down" on spotify everytime I walk out of my house')
}

favColor.addEventListener('click', favoriteColor)
favPlace.addEventListener('click', favoritePlace)
favRitual.addEventListener('click', favoriteRitual)

