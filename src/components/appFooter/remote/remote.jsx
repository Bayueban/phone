import './remote.css'
import React, { useState } from 'react';
import Operation from './operation'
import Speed from './speed';
import { Toast } from 'antd-mobile'

const Remote = () => {
    const [text, setText] = useState('o')
    const [turnValue, setTurnValue] = useState(0)
    const [speedValue, setSpeedValue] = useState(0)

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

    const getTurnValue = (data) => {
        // console.log('转向速度' + data)
        setTurnValue(data)
    }
    const getSpeedValue = (data) => {
        // console.log('直线速度' + data)
        setSpeedValue(data)
    }

    const getLeftNipple = (data) => {
        // console.log('左舵数值' + data)
    }

    const getRightNipple = (data) => {
        // console.log('右舵数值' + data)
    }

    return <div id="remote">
        <div className="remoteSpace">
            <Speed str={"最大转角速度"} getTurnValue={getTurnValue}></Speed>
            <div className="retemoBox">
                {/* <img src="./img/八角星.png" alt=""  /> */}
                <Operation getLeftNipple={getLeftNipple}></Operation>
            </div>
        </div>
        <div className="remotemContext flexC">
            <div className="stop flexC" onClick={check}>
                {text}
            </div>
        </div>
        <div className="remoteSpace">
            <Speed str={"最大直线速度"} getSpeedValue={getSpeedValue}></Speed>
            <div className="retemoBox">
                {/* <img src="./img/arrows2.png" alt=""  /> */}
                <Operation getRightNipple={getRightNipple}></Operation>
            </div>
        </div>
    </div>
}



export default Remote