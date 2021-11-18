import './remote.css'
import React, { useState } from 'react';
import Operation from './operation'
import Speed from './speed';
import { Toast } from 'antd-mobile'




const Remote = () => {

    const [text, setText] = useState('o')

    const check = () => {
        if (text === "o") {
            setText("||")
            Toast.show(`机器人已停止`)
        }
        if (text === "||") {
            setText("o")
            Toast.show(`机器人已启动`)
        }
    }

    return <div id="remote">
        <div className="remoteSpace">
            <Speed str={"最大转角速度"}></Speed>
            <div className="retemoBox">
                {/* <img src="./img/八角星.png" alt=""  /> */}
                <Operation></Operation>
            </div>
        </div>
        <div className="remotemContext flexC">
            <div className="stop flexC" onClick={check}>
                {text}
            </div>
        </div>
        <div className="remoteSpace">
            <Speed str={"最大直线速度"}></Speed>
            <div className="retemoBox">
                {/* <img src="./img/arrows2.png" alt=""  /> */}
                <Operation></Operation>
            </div>
        </div>
    </div>
}



export default Remote