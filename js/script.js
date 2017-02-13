

var score = 0;
$('#scoreContainer').append('<div id="score">' + score + '</div>');

$('.button').on('click', function(){
	console.log(score);
	score++
	updateScore();
});

function updateScore() {
	$('#score').remove()
	$('#scoreContainer').append('<div id="score">' + score + '</div>');
	console.log()

}