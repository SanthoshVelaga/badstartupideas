function genQuote() {
  var randNum = Math.floor(Math.random() * 37) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", "VR for dogs – take your dog outside without actually having to take him outside", "T shirt company that makes shirts for failed companies such as Webvan, Enron, and Pets.com", "AI for twerking", "Publicly traded soundcloud rappers. Invest in 21 Savage", "Kale beer", "App that uses AI to help women avoid swiping right on guys who send dick pics", "Teka$hi 6ix9ine alarm clock that yells scum gang", "App that automatically sends your dad a tie he'll never wear for father's day", "social network for people who wear anti social social club", "drone bongs", "edible smartphones. the future is in your mouth", "habanero toothpaste", "app that let's your friends know how much you fucking hate gwenyth paltrow", "social network for sugar daddies", "kidz bop for soundcloud rap", "AI that predicts how long you're going to have to wait in line to get what you ordered", "smartmirror that tells you when you look like shit", "service that securely stores sexts on the blockchain", "face tats as a service. Press a button and have someone come over to tat up your face", "service that pairs wine and cheese for you using AI", "Snapchat but only for dickpics. call it dickchat", "subscription service for access to cruises. This would be ideal for old retired people with tons of money who want to spent their last moments at sea", "reusable rockets that land near the closest taco bell", "kale nuggets", "smart potato chips bags that tells you if you are eating too fast and being a fat piece of shit", "tinder for accountants", "a service that tells you if your mom (or your friend's mom) is a MILF", "T shirts that say got milf?", "A magnet that literally attracts MILFs by playing STING songs", "social network for lil pump fans", "AR goggles that allow you to watch TV and whenever Trump comes up it shows a picture of Hilary instead", "a website that counts the number of lies Trump has said on TV in real time", "a service that predicts which of your friends is the biggest d bag", "service that hires cheap labor (read people from India) to play fortnite for you while you sleep", "edible underwear subscription service", "app for parents that yells at their kids when they mess up in school", "app for students to help them share test answers", ];



