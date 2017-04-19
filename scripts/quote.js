var quoteArray=[
"Never give up on anybody,Miracles happen everyday",
"The days you are most uncomfortable are the days you learn the most about yourself",
"The secret of happiness is to count your blessings while others are adding up their troubles",
"It's never too late - never too late to start over, never too late to be happy",
"To succeed in your mission, you must have single-minded devotion to your goal"
];
var randomNumber=Math.floor((Math.random()*5)+1);
document.getElementById('quote').innerHTML=quoteArray[randomNumber-1];
