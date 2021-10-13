import React from 'react'
import '../style/Home.css'
function Home({ props }) {
    return (
        <div className='home_context'>
            <h1 className="home_title" >{props.title}</h1>
            <p className="home_text">{props.text}</p>
        </div>
    )
}

export default Home