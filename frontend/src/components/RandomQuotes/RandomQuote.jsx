import React, { useState } from 'react'
import './RandomQuote.css'

const RandomQuote = () => {
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
        quotes = await response.json();
    }
    const [quote, setQuote] = useState({
        quote: "Where there is a will, there is a way",
        author: "Anonymous"
    });
    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }
    const share = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author.split(',')[0]}`)
    }
    loadQuotes();
    return (
        <>
        <div className="container">
            <div className="quote">{quote.quote}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">By- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <button onClick={random}>New Quote</button>
                        <button onClick={share}>Share</button>
                    </div>
                </div>
            </div>

        </div>
            <footer >
  ~ Made by <a href="https://github.com/Nikita-Gupta23" target="_blank" rel="noreferrer">Nikita Gupta</a>
</footer>
</>
    )
}
export default RandomQuote