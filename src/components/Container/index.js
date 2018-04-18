import React, { Component } from 'react'
import './style.scss';
export default function(props) {
  return (
    <div className="container-wrapper">
      <div {...props}
        className={`container ${props.narrow ? 'narrow' : ''} ${props.className ? props.className : ''} `}
        >
          {props.children}</div>
    </div>
  )
}
