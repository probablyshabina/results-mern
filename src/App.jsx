import { useState, useEffect } from 'react'
import './styles/global.css'
import axios from 'axios'

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/results")
      .then((res) => {
        for (const key in res.data) {
          if (Object.hasOwnProperty.call(res.data, key)) 
            setResults(res.data[key])
        }
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="flex flex-full flex-col w-full items-center">
      {results.map((result, index) => {
        return (
          <div key={index} className="flex flex-grow flex-row justify-between w-3/4">
            <h4>{result.election}</h4>
            <h4>{result.district}</h4>
            <h4>{result.party}</h4>
            <h4>{result.votes}</h4>
            <h4>{result.percentage.toString()}</h4>
          </div>
        )
      })}
    </div>

  )
}

export default App
