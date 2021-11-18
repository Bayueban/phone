import './header.css'
import { Popover, Toast } from 'antd-mobile'
import { useState, useEffect } from 'react'



const Header = () => {
    const states = [
        {
            text: '空闲',
            style: {
                background: "rgb(59, 216, 119)"
            },
        },
        {
            text: '任务11111111111111111111111111111111',
            style: {
                background: "rgb(100, 116, 119)"
            },
        },
        {
            text: '任务3',
            style: {
                background: "rgb(100, 6,0 )"
            },
        }
    ]
    let [title, setTitle] = useState({
        text: '空闲',
        style: {
            background: "rgb(59, 216, 119)"
        },
    })

    const check = (node) => {
        setTitle(node)
        Toast.show(`已切换 ${node.text}`)
    }


    return (
        <div id="header">
            <Popover.Menu
                actions={states}
                onAction={(node) => { check(node) }}
                placement='bottomLeft'
                trigger='click'
            >
                <div className="states" style={title.style}>
                    <span className="statesImg flexC">
                        <img src="./img/确认.png" alt="" />
                    </span>
                    <span className="stateText flexC">
                        {title.text}
                    </span>
                </div>
            </Popover.Menu>

            <div className="coordinate flexSA">
                <img src="./img/坐标.png" alt="" />
                x:12,221 y:23,12, yaw:21
            </div>
            <div className="power flexSA">
                100%
                <img src="./img/电池.png" alt="" />
            </div>
        </div>
    )
}

export default Header