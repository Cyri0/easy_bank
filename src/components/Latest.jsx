import React, { useEffect, useState } from 'react'

const Latest = () => {
  const [apiData, setApiData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:8000/latest.json")
    .then(res => res.json())
    .then(data => setApiData(data))
  }, [])

  return (
    <section id="latest">
      <div className="wrapper">
        <h2>Latest</h2>
        <div className="cards">

          { apiData.map((data, idx) => <LatestCard key={idx} {...data} />) }

        </div>
      </div>
    </section>
  )
}

const LatestCard = (props) => {
  return (<div className='latest-card'>
    <img src="" alt={props.title} />
    <div>
      <h6>By {props.creator}</h6>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  </div>)
}

export default Latest