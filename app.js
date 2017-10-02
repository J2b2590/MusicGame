console.log('Live in Chicago')

$('.start').on('click', (e) =>{
	// A.play();
	// C.play();
	game.startGame()
})


$('.second').on('click', (e) =>{
	if(e.currenttarget === this.m2)


	console.log('does this click work')
})

$('.third').on('click', (e) =>{


notesOfNotes.third()
	console.log('does this click work')
})


// for (var i = 0; i < notes.length; i++) {
// 	notes[i].play()
// }
// this loop works



const m2 = new Audio('This is a C.wav', '334536__teddy-frost__piano-normal-d4.wav', 'D.wav' )


// const A = new Audio('334536__teddy-frost__piano-normal-d4.wav');

// const D = new Audio('D.wav')




// let m2 = []

// 	notes.push(C)
// 	notes.push(A)
// 	notes.push(D)

let time = 30;

class intervalGame {

	constructor(m2,M2,m3,M3,P4,P5,m6,M6,m7,M7,time){
		this.m2 = {}
		this.M2 = {}
		this.m3 = {}
		this.M3 = {}
		this.P4 = {}
		this.P5 = {}
		this.m6 = {}
		this.M7 = {}
		this.time = 5;
	}

	startGame(){

		//get timer started
		const timer = setInterval(() =>{

			this.time--

			if(this.time === 0){
				clearInterval(timer)
				console.log('game over')

			}

			$('.timer').text('You have: ' + this.time)
			
			setInterval()

		}, 2000)

		
   		
				
			

	}

	checkForAnswer(){

		//compare button that was clicked to what was played
		//use this method in the buttons
	}

}

	const game = new intervalGame('fdsa','fdsa')














