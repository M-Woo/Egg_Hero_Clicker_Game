

var score = 0;
var chickenOnePrice = 5
var chickenTwoPrice = 20
$('#scoreContainer').append('<div id="score">' + score + '</div>');
$('.oneTextContainer').append('<div id="oneText">' + chickenOnePrice + '</div>');


// MAIN BUTTON 
$('.button').on('click', function(){
	console.log(score);
	score++
	updateScore();
	allCondition();
});

// FIRST UPGRADE BUTTON
// if else to check if below 0
$('#one').on('click', function(){
	if (score>chickenOnePrice) {
	chickenOnePrice+=chickenOnePrice
	score-=chickenOnePrice
	var intervalOne = setInterval(function(){
	score += 5;
	$('#score').remove()
	$('#scoreContainer').append('<div id="score">' + score + '</div>');
	console.log(chickenOnePrice + 'chickenOnePrice')
	$('#oneText').remove()
	$('.oneTextContainer').append('<div id="oneText">'+'cost: ' + chickenOnePrice*2 +' +5eggs/1sec' + '</div>');
	},1000);
}
})

function updateScore() {
	$('#score').remove()
	$('#scoreContainer').append('<div id="score">' + score + '</div>');
};

function allCondition() {
	switch(true){
		case(score>5):
		$('#one')[0].style.display = 'block';
		$('p')[0].style.display = 'block';
		break;
		case(score==6):
		console.log('hello')
		$('#two')[0].style.display = 'block'
		$('p')[1].style.display = 'block'
		break;
		case(score==7):
		$('#three')[0].style.display = 'block';
		$('p')[2].style.display = 'block'
		break;
		case(score==8):
		$('#four')[0].style.display = 'block';
		$('p')[3].style.display = 'block'
		break;
		case(score==9):
		$('#five')[0].style.display = 'block';
		$('p')[4].style.display = 'block'
		break;
		case(score==10):
		$('#six')[0].style.display = 'block';
		$('p')[5].style.display = 'block'
		break;
		case(score==11):
		$('#seven')[0].style.display = 'block';
		$('p')[6].style.display = 'block'
		break;
		case(score==12):
		$('#eight')[0].style.display = 'block';
		$('p')[7].style.display = 'block'
		break;										
	}
}














