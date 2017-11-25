console.log('Live in Chicago')

$('.start').on('click', (e) =>{
	
	game.startGame()
	game.playInterval()
	$('.start').addClass('hidden')

})

$('.again').on('click', (e) =>{
		
	game.playIntervalAgain()
})

$('.next').on('click', (e) =>{
	game.playInterval()
			})

$('.msecond').on('click', (e) =>{
				
	game.checkForAnswer(e)
			})
	
$('.majsecond').on('click', (e) =>{

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

$('.majsixth').on('click', (e) =>{

	game.checkForAnswer(e)
			})

$('.mseventh').on('click', (e) =>{

	game.checkForAnswer(e)
			})

$('.majseventh').on('click', (e) =>{

	game.checkForAnswer(e)
			})

$('.octave').on('click', (e) =>{

	game.checkForAnswer(e)
			})








//MAKE m3 INTERVAL AND M6 INTERVAL AND OCTAVE 

const notes = 	[{interval: 'm2', src: ['m2a.wav']}, 
				{interval: 'M2', src: ['./jeez/M2a.wav']}, 
				{interval: 'm3', src: ['./forgot/m3a.wav']},
				{interval: 'M3', src: ['./Intervals/M3a.wav']},
				{interval: 'P4', src: ['./Intervals/P4.wav']},
				{interval: 'P5', src: ['./Intervals/P5.wav']}, 
				{interval: 'm6', src: ['./Intervals/m6a.wav']},
				{interval: 'M6', src: ['./forgot/M6a.wav']},
				{interval: 'm7', src: ['./Intervals/m7a.wav']},
				{interval: 'M7', src: ['./Intervals/M7aa.wav']},
				{interval: 'Octave', src: ['./forgot/octave.wav']}];

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

			$('.timer').text( '0:' + this.time )
			
			

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
		

		
		const rando = this.notes[Math.floor(Math.random()*this.notes.length)];

		const interval = new Audio(rando.src[0])

		console.log(rando)
		console.log(interval)


			 
		interval.play()

		this.intervalPlayed = rando.interval

		console.log(this.intervalPlayed)




		}
	
	playIntervalAgain(event){

		for(let i = 0; i < this.notes.length; i++){

			

			if(this.notes[i].interval === this.intervalPlayed){
				
				console.log('is this hitting')
				console.log(this.intervalPlayed, ' intervalPlayed')
				console.log(this.notes[i].interval, ' this is notes')
				
				const again = new Audio(this.notes[i].src[0])

				again.play()
				
				} 

				

			

			// console.log(toAgain)
			// console.log(this.intervalPlayed)
		}


	}
	flashBack(){
		console.log('being called')

		if($(event.currentTarget).children().text() === this.intervalPlayed){
			
			$('.container').velocity({
		    backgroundColor: '#00FF25',
		}, {duration: 1000}).velocity({
			backgroundColor: '#ffffff'
		}, {duration: 500});

		}
		else{
			$('.container').velocity({
		    backgroundColor: '#FF0F00',
		}, {duration: 1000}).velocity({
			backgroundColor: '#ffffff'
		}, {duration: 500});
			
		}

		// const changeBack => (){



		// }




	}
	










	checkForAnswer(event){
		
		console.log('this is being called')

		

		if($(event.currentTarget).children().text() === this.intervalPlayed){
			console.log('true')
				this.updateScore(true)
				this.flashBack(event)
		} else {
			console.log(false)
			this.flashBack(event)
		}


		
		
		
  	
		// event.currentarget get the text out of it and compare to intervalGame.intervalPlayed

		//compare button that was clicked to what was played
		//use this method in the buttons
	}



}


	const game = new IntervalGame(notes)
	// $('.timer').css('fontSize', '140px');
	// $('.timer').css('fontHeight', '40px');









