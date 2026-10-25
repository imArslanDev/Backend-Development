import axios from 'axios'
import React, { useState } from 'react'

function App() {
    const [username, setUsername] = useState(null)
    const [age, setAge] = useState(null)
    const [city, setCity] = useState(null)

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

  return (
    <div>
      {/* {data && <div> User name: {data.name}, User age: {data.age}</div>} */}
      <input type="text" name="" id="" placeholder='username' />
      <input type="text" name="" id="" placeholder='city' />
      <input type="text" name="" id="" placeholder='age' />
      <button onClick={fetchData}>Send</button>
    </div>
  )
}

export default App