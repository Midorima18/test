var number = 0;

function addNewBlock(){
	var indexWrapper = document.getElementById('indexWrapper');
	var firstNumber = document.getElementById('firstNumber');
	
	var newDiv = document.createElement('div');
	newDiv.className = 'newBlock'; 
	indexWrapper.appendChild(newDiv);

	number++;
	firstNumber.innerHTML = number;

	if (number % 5 == 0 || number % 10 == 0) {
		newDiv.style.backgroundColor = "gold";
	}
}

document.addEventListener("DOMContentLoaded", function ready(){
	var newBlock = document.getElementById('newBlock');
	newBlock.setAttribute('onclick', 'addNewBlock();');

});