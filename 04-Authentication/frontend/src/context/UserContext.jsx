import React, { createContext } from 'react'

export const DataContext = createContext()
const backendURL = "http://localhost:3000/api"
const Value = {
  backendURL
}

const UserContext = ({children}) => {
  return (
    <DataContext.Provider value={Value}>
    {children}
    </DataContext.Provider>
  )
}

export default UserContext