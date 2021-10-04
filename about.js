console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("You have successfully submitted this form!")

	
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let mouseOverCat = document.getElementById('cat')

function mouseOver(){
	alert("You're just as cool as this cat!")
}

mouseOverCat.addEventListener('mouseover', mouseOver)

//document.querySelector('img').addEventListener('mouseover', ()=> {
// alert("You're just as cool as this cat!")
// })
