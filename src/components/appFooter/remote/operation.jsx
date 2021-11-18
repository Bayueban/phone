import React, { useRef, useEffect } from 'react';
import nipplejs from 'nipplejs'

const JoyCon = () => {
    const boxEl = useRef(null);
    useEffect(() => {
        let options = {
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
        let manager = nipplejs.create(options);
        manager.get().ui.back.style.background = "rgba(223, 223, 223)"
        // manager.get().ui.back.style.background = "none"
        manager.get().ui.back.style.opacity = 1
        manager.get().ui.back.style.border = "2px solid rgb(255, 140, 46)"

        manager.get().ui.front.style.background = "rgb(255, 140, 46)"
        // manager.get().ui.front.style.background = "rgb(88, 88, 88)"
        manager.get().ui.front.style.opacity = 1
        manager.get().ui.front.style.border = "5px solid rgb(61, 61, 61)"
        // console.log(manager.get().ui.back.style)
    })
    return (<div ref={boxEl} style={{"height":"70%"}}></div>)
}
export default JoyCon