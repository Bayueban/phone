import React, { useState } from 'react'
import {
    Form,
    Input,
    Dialog,
    TextArea,
} from 'antd-mobile'
import Tabbar from '../../components/appTabbar/tabbar'

import './map.css'
const Map = () => {
    const onFinish = () => {
        Dialog.alert({
            content: "AAA"
        })
    }


    return (
        <div id="map">
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
            <Tabbar></Tabbar>
        </div>
    )
}


export default Map;
