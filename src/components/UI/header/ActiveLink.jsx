import React from 'react'
import { useRouter } from 'next/router'
import styles from "./activeLink.module.scss"

const ActiveLink = ({ children, href }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${ router.asPath === href ? styles.ActiveLink : styles.Link}`}>
      {children}
    </a>
  )
}

export default ActiveLink