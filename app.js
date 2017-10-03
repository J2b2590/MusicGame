console.log('Live in Chicago')

$('.start').on('click', (e) =>{
	// A.play();
	// C.play();
	game.startGame()
	game.playInterval()
})

	$('.again').on('click', (e) =>{
		
		game.playIntervalAgain()
	})

		$('.next').on('click', (e) =>{
			game.playInterval()
		})


			$('.msecond').on('click', (e) =>{
				
				
				// event.currentarget get the text out of it and compare to intervalGame.intervalPlayed
				game.checkForAnswer(e)
			})

				$('.mthird').on('click', (e) =>{



					game.checkForAnswer(e)
				})

			$('.majthird').on('click', (e) =>{

				game.checkForAnswer(e)
			})

		$('.perfectFourth').on('click', (e) =>{

			game.checkForAnswer(e)
		})

	$('.perfectFifth').on('click', (e) =>{

		game.checkForAnswer(e)
	})

$('.msixth').on('click', (e) =>{

	game.checkForAnswer(e)
})

	// $('.majsixth').on('click', (e) =>{

	// 	game.checkForAnswer(e)
	// })

			$('.mseventh').on('click', (e) =>{

				game.checkForAnswer(e)
			})

				$('.majseventh').on('click', (e) =>{

					game.checkForAnswer(e)
				})








//MAKE m3 INTERVAL AND M6 INTERVAL AND OCTAVE 

const notes = [{interval: 'm2', src: ['m2a.wav']}, {interval: 'm3', src: ['m2a.wav']},
{interval: 'M3', src: ['./Intervals/M3a.wav']},{interval: 'P4', src: ['./Intervals/P4.wav']},
{interval: 'P5', src: ['./Intervals/P5.wav']}, {interval: 'm6', src: ['./Intervals/m6a.wav']},
{interval: 'm7', src: ['./Intervals/m7a.wav']},{interval: 'M7', src: ['./Intervals/M7aa.wav']}];

class IntervalGame {

	constructor(notes){
		this.time = 30;
		this.intervalPlayed = '';
		this.notes = notes;
		this.score = 0;
	}

	startGame(){

		//get timer started
		const timer = setInterval(() =>{

			this.time--

			if(this.time === 0){
				clearInterval(timer)

				alert('game over')

			}

			$('.timer').text( this.time )
			
			

		}, 2000)


		$('.score').text(`score: ${game.score}`);
		
   		
				
			

	}

	updateScore(bool){
		console.log('here')
		if(bool){
			console.log('also here')
			$('.score').text(`score: ${++this.score}`);
		}
	}



	playInterval(){
		

		// random function that will return to you something that looks like
		// {notes: 'm2' src: ['D.wav']} --> pAth is 'D.wav'
		const rando = this.notes[Math.floor(Math.random()*this.notes.length)];

		const interval = new Audio(rando.src[0])

		console.log(rando)
		console.log(interval)


			 
		interval.play()

		this.intervalPlayed = rando.interval

		console.log(this.intervalPlayed)




		}
	
	playIntervalAgain(){

		this.intervalPlayed 


	}
	
	

	checkForAnswer(event){
		this.updateScore($(event.currentTarget).children().text() === this.intervalPlayed)

		

		// event.currentarget get the text out of it and compare to intervalGame.intervalPlayed

		//compare button that was clicked to what was played
		//use this method in the buttons
	}



}


	const game = new IntervalGame(notes)










