import React, { useEffect, useState } from 'react'

const WhyUs = () => {
  const [apiData, setApiData] = useState()

  useEffect(()=>{
    fetch('http://localhost:8000/whyus.json')
    .then(res => res.json())
    .then(data => setApiData(data))
  }, [])

  return (
    <section id="whyus">
      <div className="wrapper">
        <h2>Why choose Easybank?</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam doloribus officiis, assumenda iure sint ullam?</p>

        <div className="cards">
          {
            apiData ?
            apiData.map((data, idx) => <WhyUsCard key={idx} {...data} />) :
            <div>Loading...</div>
          }
        </div>

      </div>
    </section>
  )
}

const WhyUsCard = (props) => {
  return (
    <div className='card'>
      <div className="icon"></div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default WhyUs