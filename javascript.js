function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", "VR for dogs – take your dog outside without actually having to take him outside", "T shirt company that makes shirts for failed companies such as Webvan, Enron, and Pets.com", "AI for homework", "Publicly traded soundcloud rappers. Invest in the upwards trajectory of such legends as Teka$hi 6ix9ine", "Kale beer. It's good for you", "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",];



