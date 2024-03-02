import "./App.css";
import ImageUpload from "./task/ImageUpload";
import Search from "./task/Search";
import UserAuth from "./task/UserAuth";

function App() {
  
//  Random Quote
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The mind is everything. What you think you become. - Buddha",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The greatest wealth is to live content with little. - Plato",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Life is what happens when you're busy making other plans. - John Lennon"
];

const randomQuote = Math.floor(Math.random()*quotes.length);
// console.log(randomQuote)

  return <>
  {/* <h1>Quote Generator</h1> */}
  {/* {quotes[randomQuote]}
  <ImageUpload /> */}
  {/* <UserAuth /> */}
  <Search />
  </>;
}

export default App;
