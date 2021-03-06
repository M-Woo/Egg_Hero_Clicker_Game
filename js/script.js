

var score = 0;

//Starting eggs per second
var chickenOnePriceAdd =  0;
var chickenTwoPriceAdd = 0;
var chickenThreePriceAdd = 0;
var chickenFourPriceAdd = 0;
var chickenFivePriceAdd = 0;
var chickenSixPriceAdd = 0;
var chickenSevenPriceAdd = 0;
var chickenEightPriceAdd = 0;

//cost of chickens
var chickenOnePrice =   10
var chickenTwoPrice =   100
var chickenThreePrice = 500
var chickenFourPrice =  5000
var chickenFivePrice =  50000
var chickenSixPrice =   500000
var chickenSevenPrice = 5000000
var chickenEightPrice = 50000000

//Audio
var quackSound = $('#quack')[0];
quackSound.volume = .5;
var backgroundSound = $('#background')[0];
backgroundSound.volume = 1;
backgroundSound.loop = true;
var firstSound = $('#first')[0];
firstSound.volume = .5;




backgroundSound.play();

$('#scoreContainer').append('<div id="score">' + score + '</div>');

$('.oneTextContainer').append('<div id="oneText">' + 'Cost: 10eggs' + '</div>');
$('.twoTextContainer').append('<div id="twoText">' + 'Cost: 100eggs' + '</div>');
$('.threeTextContainer').append('<div id="threeText">' + 'Cost: 500eggs' + '</div>');
$('.fourTextContainer').append('<div id="fourText">' + 'Cost: 5000eggs' + '</div>');
$('.fiveTextContainer').append('<div id="fiveText">' + 'Cost: 50000eggs' + '</div>');
$('.sixTextContainer').append('<div id="sixText">' + 'Cost: 500000eggs' + '</div>');
$('.sevenTextContainer').append('<div id="sevenText">' + 'Cost: 5000000eggs' + '</div>');
$('.eightTextContainer').append('<div id="eightText">' + 'Cost: 50000000eggs' + '</div>');

// MAIN BUTTON 
$('.button').on('click', function(){
	console.log(score);
	quackSound.play();
	score++
	updateScore();
	allCondition();
});
// FIRST UPGRADE BUTTON
// if else to check if below 0
$('#one').on('click', function(){
	if (score>chickenOnePrice) {
		quackSound.play();
		score-=chickenOnePrice
		chickenOnePrice+=chickenOnePrice
		chickenOnePriceAdd += 1;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 1;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		// console.log(chickenOnePrice + 'chickenOnePrice')
		$('#oneText').remove()
		$('.oneTextContainer').append('<div id="oneText">'+'Cost: ' + chickenOnePrice +'eggs' + ' '+ chickenOnePriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#two').on('click', function(){
	if (score>chickenTwoPrice) {
		quackSound.play();
		console.log('works')
		score-=chickenTwoPrice
		chickenTwoPrice+=chickenTwoPrice
		chickenTwoPriceAdd += 100;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 50;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		$('#twoText').remove()
		$('.twoTextContainer').append('<div id="twoText">'+'Cost: ' + chickenTwoPrice +'eggs' + ' '+ chickenTwoPriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#three').on('click', function(){
	if (score>chickenThreePrice) {
		quackSound.play();
		console.log('works')
		score-=chickenThreePrice
		chickenThreePrice+=chickenThreePrice
		chickenThreePriceAdd += 500;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 250;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		$('#threeText').remove()
		$('.threeTextContainer').append('<div id="threeText">'+'Cost: ' + chickenThreePrice +'eggs' + ' '+ chickenThreePriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#four').on('click', function(){
	if (score>chickenFourPrice) {
		quackSound.play();
		console.log('works')
		score-=chickenFourPrice
		chickenFourPrice+=chickenFourPrice
		chickenFourPriceAdd += 5000;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 2500;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		// console.log(chickenOnePrice + 'chickenOnePrice')
		$('#fourText').remove()
		$('.fourTextContainer').append('<div id="fourText">'+'Cost: ' + chickenFourPrice +'eggs' + ' '+ chickenFourPriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#five').on('click', function(){
	if (score>chickenFivePrice) {
		quackSound.play();
		console.log('works')
		score-=chickenFivePrice
		chickenFivePrice+=chickenFivePrice
		chickenFivePriceAdd += 50000;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 25000;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		// console.log(chickenOnePrice + 'chickenOnePrice')
		$('#fiveText').remove()
		$('.fiveTextContainer').append('<div id="fiveText">'+'Cost: ' + chickenFivePrice +'eggs' + ' '+ chickenFivePriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#six').on('click', function(){
	if (score>chickenSixPrice) {
		quackSound.play();
		console.log('works')
		score-=chickenSixPrice
		chickenSixPrice+=chickenSixPrice
		chickenSixPriceAdd += 500000;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 250000;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		// console.log(chickenOnePrice + 'chickenOnePrice')
		$('#sixText').remove()
		$('.sixTextContainer').append('<div id="sixText">'+'Cost: ' + chickenSixPrice +'eggs' + ' '+ chickenSixPriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#seven').on('click', function(){
	if (score>chickenSevenPrice) {
		quackSound.play();
		console.log('works')
		score-=chickenSevenPrice
		chickenSevenPrice+=chickenSevenPrice
		chickenSevenPriceAdd += 5000000;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 2500000;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		// console.log(chickenOnePrice + 'chickenOnePrice')
		$('#sevenText').remove()
		$('.sevenTextContainer').append('<div id="sevenText">'+'Cost: ' + chickenSevenPrice +'eggs' + ' '+ chickenSevenPriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})

$('#eight').on('click', function(){
	if (score>chickenEightPrice) {
		quackSound.play();
		firstSound.play();
		$('img').addClass('animated infinite flash');
		$('.button').addClass('animated infinite flash')
		$('#title').addClass('animated infinite slideOutUp');
		$('#scoreContainer').addClass('animated infinite swing')
		$('p').addClass('animated infinite hinge')
		$('body').addClass('animated infinite jello')
		$('img').addClass('animated infinite bounce');
		$('.button').addClass('animated infinite flash')
		console.log('works')
		score-=chickenEightPrice
		chickenEightPrice+=chickenEightPrice
		chickenEightPriceAdd += 50000000;
		allCondition()
		var intervalOne = setInterval(function(){
		score += 525000000;
		$('#score').remove()
		$('#scoreContainer').append('<div id="score">' + score + '</div>');
		// console.log(chickenOnePrice + 'chickenOnePrice')
		$('#eightText').remove()
		$('.eightTextContainer').append('<div id="eightText">'+'Cost: ' + chickenEightPrice +'eggs' + ' '+ chickenEightPriceAdd +'eggs/1sec' + '</div>');
		},1000);
	}
})


function updateScore() {
	$('#score').remove()
	$('#scoreContainer').append('<div id="score">' + score + '</div>');
};

function allCondition() {
	if(score==10){
		console.log('works');
		$('#one')[0].style.display = 'block'
		$('p')[0].style.display = 'block';
	}
	if(score>100){
		$('#two')[0].style.display = 'block'
		$('p')[1].style.display = 'block';
	}
	if(score>500){
		$('#three')[0].style.display = 'block'
		$('p')[2].style.display = 'block'
	}
	if(score>5000){
		$('#four')[0].style.display = 'block'
		$('p')[3].style.display = 'block'
	}
	if(score>50000){
		$('#five')[0].style.display = 'block'
		$('p')[4].style.display = 'block'
	}
	if(score>500000){
		$('#six')[0].style.display = 'block'
		$('p')[5].style.display = 'block'
	}
	if(score>5000000){
		$('#seven')[0].style.display = 'block'
		$('p')[6].style.display = 'block'
	}
	if(score>50000000){
		$('#eight')[0].style.display = 'block'
		$('p')[7].style.display = 'block'
	}
}


$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}








