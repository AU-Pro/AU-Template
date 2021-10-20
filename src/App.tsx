import * as React from 'react'

import Time from './components/Time'
import './App.css'

const App = () => {
  const handleClick = React.useCallback(() => {
    console.log('hellow')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3
          style={{
            color: '#fff'
          }}
        >
          AU-VIDE-NODE
        </h3>

        <Time onClick={handleClick} />
      </header>
    </div>
  )
}

export default App
