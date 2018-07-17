var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var maxNumber = document.querySelector("#maxNumber");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winingScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score === winingScore){
			p1Display.classList.add("winner")
			gameOver = true;
		}
	}
	p1Display.textContent = p1Score;
})

p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		if (p2Score === winingScore){
			p2Display.classList.add("winner")
			gameOver = true;
		}
	}
	p2Display.textContent = p2Score;
})

function reset(){
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.classList.remove("winner")
	p2Display.classList.remove("winner")
}

resetButton.addEventListener("click", function(){
	reset();
})

numInput.addEventListener("change", function(){
	maxNumber.textContent = this.value;
	winingScore = Number(this.value);
	reset();
})