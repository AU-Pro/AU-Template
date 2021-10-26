import * as React from 'react'

import styles from './App.module.less'
import Time from './components/Time'

const App = () => {
  const handleClick = React.useCallback(() => {
    console.log('hellow')
  }, [])

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
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
