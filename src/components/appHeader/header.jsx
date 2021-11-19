import './header.css'
import { useState, useEffect } from 'react'
import Battery from './battery'


const Header = () => {
    const [title, setTitle] = useState({
        text: '空闲',
        style: {
            background: "rgb(59, 216, 119)",
        },
    })

    const [coordinate, setCoordinate] = useState({
        x: [12, 221], y: [23, 12], yaw: 21
    })

    const [battery, setBattery] = useState({
        power: 50,
        background: "rgb(0, 255, 119)"
    })

    useEffect(() => {
        let timer = setTimeout(() => {
            setBattery({
                power: battery.power + 5,
                background: "rgb(255, 255, 9)"
            })
        }, 1000)

        if (battery.power >= 100) {
            clearTimeout(timer)
        }

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div id="header">
            <div className="states" style={title.style}>
                <span className="statesImg flexC">
                    <img src="./img/确认.png" alt="" />
                </span>
                <span className="stateText flexC">
                    {title.text}
                </span>
            </div>
            <div className="coordinate flexSA">
                <img src="./img/坐标.png" alt="" />
                <div>
                    <span>
                        x: {coordinate.x[0]},{coordinate.x[1]}
                    </span>
                    <span>
                        y: {coordinate.y[0]},{coordinate.y[1]}
                    </span>
                    yaw: {coordinate.yaw}
                </div>
            </div>
            <div className="power flexSA">
                <span className="batteryTitle">{battery.power}%</span>
                {/* <span style={{'color':battery.background}}>{battery.power}</span>% */}
                {/* <img src="./img/电池.png" alt="" /> */}
                <Battery battery={battery}></Battery>
            </div>
        </div>
    )
}

export default Header