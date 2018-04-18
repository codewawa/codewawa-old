import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.scss';
export default function(props) {
  console.log(props.info.image);

  return (
    <div className="card">
      <Link to={props.link}>
      <img className="card__image" src={props.info.image} />
      <div className="card__details">
        <h2>{props.info.title}</h2>
        <p className="card__descryption">{props.info.descryption}</p>
        <span>{props.info.author}</span>
      </div>
      </Link>
    </div>
  )
}
