import './features.css'
import { useNavigate } from "react-router-dom"

let obj = [
    {
        name: "任务",
        href: 'icon-quxiaodingdan',
        route: '/tast'
    },
    {
        name: "地图",
        href: 'icon-xinjian',
        route: '/map'
    },
]


const Features = () => {

    let navigate = useNavigate();
    const goPage = (e,route) => {
        navigate(route)
    }

    return (<div id="featuresTab">
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox" onClick={(e) => goPage(e,it.route)}>
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