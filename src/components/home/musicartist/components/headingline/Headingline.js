import React from 'react'
import "./headingline.css"
const Headingline = ({type}) => {
  return (
    <div  className={type === "red" ? "HeadinglineRed" : "Headingline"} />
  )
}

export default Headingline
