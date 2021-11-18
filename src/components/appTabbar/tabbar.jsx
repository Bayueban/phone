import { useNavigate } from "react-router-dom"
import { Button, Toast } from 'antd-mobile'

import './tabbar.css'

const Tabbar = () => {

    const post = () => {
        Toast.show({
            content: '提交成功',
            afterClose: () => {
                console.log('after')
            },
        })
        setTimeout(() => {
            navigate('/')
        }, 100)
    }

    let navigate = useNavigate();
    const back = () => {
        navigate('/')
    }
    
    return (
        <div id="tabbar">
            <Button color='warning' size='mini' fill='outline'
                onClick={back}>返回控制页</Button>
            <Button color='warning' size='mini'
                onClick={post}>
                {/* <img className="btnImg" src="./img/确认.png" alt="" /> */}
                确定</Button>
        </div>
    )
}


export default Tabbar;
