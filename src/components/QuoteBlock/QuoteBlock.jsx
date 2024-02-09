import React from 'react'
import styles from './QuoteBlock.module.scss'
const QuoteBlock = ({children}) => {
  return (
    <div className={styles.quote}>{children}</div>
  )
}

export default QuoteBlock