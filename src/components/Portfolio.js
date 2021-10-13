import React,{ useState} from 'react'
import '../style/Portfolio.css'
function Portfolio({ props }) {
    let [count, setCount] = useState(0)
    let nextPxl = 300
    let style = {
        transform: `translateX(${count}px)`
    }
    let leftBtn = (countPX) => {
        if (count === 0) {
            setCount(-1200)
        } else {
            setCount(count + countPX)
        }
        // setCount(count+countPX)
        // console.log(count)
    }
    let rightBtn = (countPX) => {
        if (count === -1200) {
            setCount(0)
        } else {
            setCount(count - countPX)
        }
    }

    return (
        <div className="portfolio">
            <div onClick={()=>{leftBtn(nextPxl)}} className="leftBtn">«</div>
        <div className="portfolio_block">
            <div style={style} className="blockSlide">
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
            <div onClick={()=>{rightBtn(nextPxl)}} className="rightBtn">»</div>

            </div>
    )
}

export default Portfolio