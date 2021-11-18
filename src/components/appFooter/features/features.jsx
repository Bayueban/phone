import './features.css'
import { useNavigate } from "react-router-dom"

let obj = [
    {
        name: "取消任务",
        href: 'icon-quxiaodingdan'
    },
    {
        name: "新建地图",
        href: 'icon-xinjian'
    },
]


const Features = () => {
    let navigate = useNavigate();
    return (<div id="featuresTab">
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox" onClick={() => {
                        navigate("/map");
                    }}>
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox">
                        <span className={"iconfont" + " " + it.href}></span>
                        {/* <span className="text">{it.name}</span> */}
                    </div>
                )
            })
        }

    </div>)
}



export default Features