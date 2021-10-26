import * as React from 'react'

import Menu from '../../layout/Menu'

import styles from './index.module.less'

type Props = {
  onClick(e: React.MouseEvent<HTMLElement, Event>): void
}

const Time: React.FC<Props> = ({ onClick: handleClick }) => {
  const [time, setTime] = React.useState(Date.now())
  const timeAdd = React.useCallback<() => void>(() => {
    setTime(Date.now())
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      timeAdd()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <div className={styles.time} onClick={handleClick}>
        Time: {time} ---
      </div>

      <Menu />
    </>
  )
}

export default Time
