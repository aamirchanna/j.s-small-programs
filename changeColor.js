// task 1 change bg color 

var index = 0;
function changeColor() {
  var color = ["purple", "red", "black", "yellow", "white"]

  document.getElementsByTagName("body")[0].style.background = color[index++]
  if (index > color.length - 1)
    index = 0

}

// task 2 change hex color

function changeColorbtn() {
  var hex_numbers = ['0', "1", '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  var hex_code = ''
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * hex_numbers.length);
    hex_code += hex_numbers[random]

  }
  document.getElementById("hex-code").innerHTML = hex_code
  document.getElementsByTagName('body')[0].style.background = '#' + hex_code
}

// task 3 quote generator
const quotes = [
  { author: "Albert Einstein", quote: "Imagination is more important than knowledge." },
  { author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated." },
  { author: "Mark Twain", quote: "The secret of getting ahead is getting started." },
  { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
  { author: "Jane Austen", quote: "There is no charm equal to tenderness of heart." },
  { author: "Nelson Mandela", quote: "It always seems impossible until it’s done." },
  { author: "J.K. Rowling", quote: "It does not do to dwell on dreams and forget to live." },
  { author: "George Orwell", quote: "In a time of deceit telling the truth is a revolutionary act." },
  { author: "Helen Keller", quote: "The only thing worse than being blind is having sight but no vision." },
  { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

// task 4 digital click 
function digitalClock(){
  const date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var sec = date.getSeconds();
  const day = date.getDay()
  var ampm = hour>= 12? "pm" : "am"
  hour = hour % 12;
  hour = hour? 12 : "12";
  minutes = minutes < 10 ? "0" + minutes : minutes 
  sec  = sec< 10 ? "0" + sec : sec 

  const daynames =document.getElementById("daynames")
  var hours =document.getElementById("hour").innerText =hour
  var minute =document.getElementById("minute").innerText =minutes
  var sec =document.getElementById("second").innerText = sec
  var am =document.getElementById("ampm").innerText =ampm
setTimeout(digitalClock , 1000)
  // daynames.innerText = day[]
  // hours.innerText = hour
}
digitalClock()