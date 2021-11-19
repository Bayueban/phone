import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Card, Button, TextArea } from 'antd-mobile'
import Tabbar from '../../components/tabbar/tabbar'
import './map.css'
const Map = () => {
    const [value, setValue] = useState('')
    let navigate = useNavigate();

    const onClick = () => {
        navigate('/',{state:{num:1}})
    }

    const CardList = () => {
        let arr = [0, 0, 0, 0, 9, 9, 9]
        return (
            arr.map((it, index) => {
                return (
                    <Card key={index} className='card' onClick={onClick}
                        title={
                            <div>
                                地图名称:
                            </div>
                        }
                    >
                        <div className="cardImg">
                            <img src="./img/狐狸.png" alt="" />
                            <div className="cardDetaild">
                                <div>楼层：1楼</div>
                                <span>地址：<TextArea
                                    style={{ '--color': 'white' }}
                                    value={'111111111sadawdaw111111111111111111111111111111111111111111111111111111111dad11111111'}
                                    maxLength={30}></TextArea></span>

                            </div>
                        </div>
                    </Card>
                )
            })
        )
    }


    return (
        <div id="map">
            <Tabbar
                back={{
                    name: '返回', foo: () => {
                        navigate('/')
                    }
                }} next={{
                    name: '新增', foo:
                        () => {
                            navigate('/addmap')
                        }
                }}></Tabbar>
            <div id="cards">
                <CardList />
            </div>

        </div>
    )
}


export default Map;
