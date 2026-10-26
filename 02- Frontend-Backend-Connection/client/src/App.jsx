import axios from 'axios'
import React, { useState } from 'react'

function App() {
    const [username, setUsername] = useState(null)
    const [age, setAge] = useState(null)
    const [city, setCity] = useState(null)

    const URL = `http://localhost:3000/`

    // async function fetchData(params) {
    //   let res = await fetch(`http://localhost:3000/`)
    //   let data = res.json()
    //   data.
    //   then((data) => console.log(data))
    //   .catch(err => console.log(err))
    // }

    function fetchData() {
      axios.get(`http://localhost:3000/`)
      .then(res => console.log(res.data)) 
      .catch(err => console.log(err))
    }

    async function getResponse(params) {
      axios.post(URL, {
        username,
        age,
        city
      })
      
    }

  return (
    <div>
      {/* {data && <div> User name: {data.name}, User age: {data.age}</div>} */}
      <input type="text" name="" id="" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" name="" id="" placeholder='city' value={city} onChange={(e) => setCity(e.target.value)}  />
      <input type="text" name="" id="" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)}  />
      <button onClick={getResponse}>Send</button>
    </div>
  )
}

export default App