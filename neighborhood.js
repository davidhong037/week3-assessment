var clubArray = ['House of Yes', 'Elsewhere', 'Nowadays', 'Lot45']

const showClubs = () => {
	const randomPick = clubArray[Math.floor(Math.random() * clubArray.length)]

	const clubTitle = document.createElement('h3')
	clubTitle.innerText = randomPick
	let section = document.querySelector('.randomizer')
	section.appendChild(clubTitle)

	
}

const clubButton = document.querySelector('.randomizer')

clubButton.addEventListener('click', showClubs)
