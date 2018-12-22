function genQuote() {
  var randNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", "VR for dogs – take your dog outside without actually having to take him outside", "T shirt company that makes shirts for failed companies such as Webvan, Enron, and Pets.com", "AI for twerking", "Publicly traded soundcloud rappers. Invest in 21 Savage", "Kale beer", "App that uses AI to help women avoid swiping right on guys who send dick pics", "Teka$hi 6ix9ine alarm clock that yells scum gang", "App that automatically sends your dad a tie he'll never wear for father's day", "social network for people who wear anti social social club", "drone bongs", ];



