import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setLoading] = useState(false);

  function fetchQuote() {
    setLoading(true);
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data))
      .finally(setLoading(false))
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="App">
      <div id="quote-box" className='d-flex-column'>
        {isLoading
        ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        : <div>
          <h2 id="text" className='text-center'>""{quote.content}""</h2>
            <div className='text-end mt-4'>
              <h4 id="author">- {quote.author}</h4>
            </div>
          </div>
        }
        <div className="text-end mt-4">
          <button type="button" className="btn btn-primary" id="new-quote" onClick={fetchQuote}>New quote</button>
        </div>
        <div className='text-end mt-3'>
          <a id="tweet-quote" href='https://twitter.com/intent/tweet' target="_blank">Tweet Quote</a>
        </div>
      </div>
    </div>
  )
}

export default App
