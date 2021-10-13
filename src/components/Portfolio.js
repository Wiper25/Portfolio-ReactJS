import React from 'react'
import '../style/Portfolio.css'
function Portfolio({props}) {
console.log(props)
    return (
        <div className="portfolio">
            <div className="leftBtn">«</div>
        <div className="portfolio_block">
            <div className="blockSlide">
                {props.map((item) =>
                    <div key={item.id} className="portfolio_card">
                        <img src={item.img} />
                        <hr/>
                        <h3>{item.title}</h3>
                        <hr/>
                        <p>{item.text}</p>
                    </div>
                )}
            </div>
            </div>
            <div className="rightBtn">»</div>

            </div>
    )
}

export default Portfolio