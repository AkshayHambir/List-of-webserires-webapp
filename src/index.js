import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from "./Sdata";
import Card from "./Card";

function ncard(c){
  return(
    <Card
    imgsrc = {c.imgsrc}
    sname = {c.sname}
    title = {c.title}
    link = {c.link}
    />
  );
}


ReactDOM.render(
  <>
  <h1 className='heading_style'  >List of top web series</h1>
  {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);