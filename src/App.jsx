import { useState, useEffect } from 'react'
import './styles/global.css'
import axios from 'axios'
import CRUD from './CRUD/Crud'

function App() {
  const [results, setResults] = useState([])
  const [recordId, setRecordID] = useState("")
  const [selectedRecord, setSelectedRecord] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await
        axios.get("http://localhost:5000/api/v1/results")
          .then((res) => {
            for (const key in res.data) {
              if (Object.hasOwnProperty.call(res.data, key))
                setResults(res.data[key])
            }
          })
          .catch((err) => console.log(err))
      return data
    }

    fetchData()
  }, [])

  results.sort((a, b) => (b.votes - a.votes))

  function handleRecordClick(event) {
    const recordDiv = document.getElementById(event.target.id)
    const containerDiv = recordDiv.parentElement;

    for (const element of containerDiv.children) {
      if (element != recordDiv)
        element.classList.remove("border-cyan-100")
      element.classList.remove("border-4")
      element.classList.remove("rounded-lg")
      element.classList.add("border-cyan-500")
    }
    recordDiv.classList.add("border-cyan-100")
    recordDiv.classList.add("border-4")
    recordDiv.classList.add("rounded-lg")
    recordDiv.classList.remove("border-cyan-500")

    setRecordID(event.target.id)
    const element = results.filter((result) => {
      return result._id == recordId
    })
    
    setSelectedRecord(element)
  }

  return (
    <div>
      <div className="flex flex-full flex-col w-full items-center">
        {results.map((result, index) => {
          return (
            <div id={result._id}
              onClick={handleRecordClick}
              key={index}
              className="flex flex-grow flex-row justify-between w-3/4 border-2 rounded m-2 p-2 cursor-pointer border-cyan-500  hover:border-cyan-100 hover:border-4 hover:rounded-lg">
              <h4>{result.election}</h4>
              <h4>{result.district}</h4>
              <h4>{result.party}</h4>
              <h4>{result.votes}</h4>
              <h4>{ } %</h4>
            </div>
          )
        })}
      </div>
      <CRUD RecordId={recordId} Record={selectedRecord} />
    </div>


  )
}

export default App
