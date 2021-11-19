import React, { useRef, useEffect } from 'react';
import nipplejs from 'nipplejs'

const Operation = (props) => {
    const boxEl = useRef(null);
    let options = null
    let manager = null


    useEffect(() => {
        function create() {
            options = {
                mode: "static",// 'dynamic', 'static' or 'semi'
                size: 65,
                position: {
                    left: "50%",
                    top: "50%"
                },//在容器内垂直居中显示
                zone: boxEl.current, //如果不提提供zone容器元素，那么默认动态生成的元素是注入在body中的。
                dynamicPage: false,
                restOpacity: 1,
            };
            manager = nipplejs.create(options);
            manager.get().ui.back.style.background = "rgba(223, 223, 223)"
            manager.get().ui.back.style.opacity = 1
            manager.get().ui.back.style.border = "2px solid rgb(255, 150, 0)"

            manager.get().ui.front.style.background = "rgb(255, 150, 0)"
            manager.get().ui.front.style.opacity = 1
            manager.get().ui.front.style.border = "5px solid rgb(61, 61, 61)"

            manager.on('move', function (e, aaa) {
                console.log(aaa.vector)
                if (props.getLedtNipple) {

                } else if (props.getRightNipple) {

                }
            })
        }
        create()
    })

    return (<div ref={boxEl} style={{ "height": "70%", }}></div>)
}
export default Operation