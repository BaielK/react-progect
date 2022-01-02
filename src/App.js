import { Header } from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/Main (2)'
import { useEffect, useState } from 'react'

import './App.css'
import { CollectionPage } from './pages/Collection'

const App = () => {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    const allData = localStorage.getItem('collection') || []
    let parsedData = []

    if(!!allData.length) parsedData = JSON.parse(allData)

    console.log(parsedData)

    setCollection(parsedData)
  }, [])

  const addToCollection = (data) => {
    const allData = [ ...collection ]
    allData.push(data)

    const stringifyData = JSON.stringify(allData)

    localStorage.setItem('collection', stringifyData)

    setCollection(allData)
  }

  const removeFromCollection = (id) => {
    const allData = [ ...collection ].filter((i) => i.id !== id)

    const stringifyData = JSON.stringify(allData)

    localStorage.setItem('collection', stringifyData)

    setCollection(allData)
  }

  return (
    <div className='app-main'>
      <Header count={collection.length} />

      <Routes>
        <Route 
          path='/' 
          exact 
          element={(
            <MainPage 
              collection={collection} 
              addToCollection={addToCollection} 
              removeFromCollection={removeFromCollection}
            />
          )} 
        />

        <Route 
          path='/collection' 
          element={(
            <CollectionPage 
              collection={collection}
              addToCollection={addToCollection}
              removeFromCollection={removeFromCollection}
            />
          )} 
        />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
