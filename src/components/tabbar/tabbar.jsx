import { useNavigate } from "react-router-dom"
import { Button, Toast } from 'antd-mobile'

import './tabbar.css'

const Tabbar = (props) => {
    const Btnbox = () => {
        let btns = []
        for (const key in props) {
            btns.push(<Button key={key} size="small"
                onClick={
                    () => {props[key].foo()}
                }
            >{props[key].name}</Button>)
        }
        return btns
    }


    let navigate = useNavigate();

    return (
        <div id="tabbar">
            <div id='btnbox'><Btnbox></Btnbox></div>
        </div>
    )
}


export default Tabbar;
