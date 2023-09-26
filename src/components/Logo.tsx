import React from 'react'

function Logo({className} :{className? :string } ) {
  return (
    <a className={`logo ${className} `} href="/">
    <img
      className="logo-img"
      src={require("../assets/logoImage.png")}
      alt="logoimage"
    />
    Omar Mohsen
  </a>
  )
}

export default Logo