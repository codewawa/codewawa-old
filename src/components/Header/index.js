import React, { Component } from 'react'
import './style.scss';
export default function(props) {
  return (
    <header className="header" {...props}>
      <div className="header__content">{props.children}</div>
    </header>
  )
}
