import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import {
    Form,
    Input,
    Dialog,
    TextArea,
} from 'antd-mobile'
import Tabbar from '../../components/tabbar/tabbar'

import './addMap.css'
const AddMap = () => {
    let navigate = useNavigate();

    const onFinish = () => {
        Dialog.alert({
            content: "AAA"
        })
    }
    const post = () => {
        console.log(1)
    }
    return (
        <div id="addMap">
            <Tabbar
                back={{
                    name: '返回', foo: () => {
                        navigate('/map')
                    }
                }}
                post={{
                    route: '/map', name: '确定', foo: post
                }}>
            </Tabbar>
            <Form
                layout='horizontal'
            >
                <Form.Item
                    name='地图名称'
                    label='地图名称'
                    rules={[{ required: true, message: '地图名称不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='请输入地图名称' />
                </Form.Item>
                <Form.Item
                    name='地图楼层'
                    label='地图楼层'
                >
                    <Input onChange={console.log} placeholder='请输入地图楼层' />
                </Form.Item>
                <Form.Item name='address' label='地址'>
                    <TextArea placeholder='请输入地址' maxLength={100} rows={4} />
                </Form.Item>
            </Form>
        </div>
    )
}


export default AddMap;
