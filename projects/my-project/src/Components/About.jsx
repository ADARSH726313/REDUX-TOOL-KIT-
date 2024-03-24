import React from 'react'
import { useParams } from 'react-router-dom'

function About() {

  const id = useParams();
  console.log(id);
  return (
    <div>
        <h1>ABOUT US </h1> <br />
        <p>i am learning react using this project</p>
        <h4>Wish me good luck</h4>


    </div>
  )
}

export default About