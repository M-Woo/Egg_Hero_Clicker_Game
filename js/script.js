

var score = 0;
$('#scoreContainer').append('<div id="score">' + score + '</div>');



$('.button').on('click', function(){
	console.log(score);
	score++
	updateScore();
	firstCondition();
});

function updateScore() {
	$('#score').remove()
	$('#scoreContainer').append('<div id="score">' + score + '</div>');

	console.log()
};

function firstCondition() {
	if(score==5){
		console.log('works');
		$('#one')[0].style.display = 'block'
		console.log($('#one'))
	}
	else if(score==10){
		$('#two')[0].style.display = 'block'
	}
	else if(score==15){
		$('#three')[0].style.display = 'block'
	}
	else if(score==20){
		$('#four')[0].style.display = 'block'
	}
	else if(score==25){
		$('#five')[0].style.display = 'block'
	}
	else if(score==30){
		$('#six')[0].style.display = 'block'
	}
	else if(score==35){
		$('#seven')[0].style.display = 'block'
	}
	else if(score==40){
		$('#eight')[0].style.display = 'block'
	}
}
