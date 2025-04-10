import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  { quote: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
  { quote: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
  { quote: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.", author: "Albert Schweitzer" },
  { quote: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" },
  { quote: "El futuro pertenece a quienes creen en la belleza de sus sueños.", author: "Eleanor Roosevelt" },
  { quote: "La mejor manera de predecir el futuro es crearlo.", author: "Peter Drucker" },
  { quote: "Cree que puedes y estarás a mitad del camino.", author: "Theodore Roosevelt" },
  { quote: "Nuestra mayor gloria no está en no caer jamás, sino en levantarnos cada vez que caemos.", author: "Confucio" },
  { quote: "La felicidad no es algo hecho. Viene de tus propias acciones.", author: "Dalai Lama" },
  { quote: "Sé el cambio que deseas ver en el mundo.", author: "Mahatma Gandhi" },
  { quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan" }
];

function App() {
  const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    generateRandomQuote();
  }, []);

  useEffect(() => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${currentQuote.quote}" - ${currentQuote.author}`
    )}`;
    const tweetLink = document.getElementById('tweet-quote');
    if (tweetLink) {
      tweetLink.href = tweetUrl;
    }
  }, [currentQuote]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const generateRandomQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <main id="quote-box">
      <div id="text">{currentQuote.quote}</div>
      <div id="author">- {currentQuote.author}</div>
      <div className="buttons">
        <button id="new-quote" onClick={generateRandomQuote}>New Quote</button>
        <a id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer">Tweet</a>
      </div>
    </main>
  );
}

export default App;