import './features.css'
import { useNavigate } from "react-router-dom"

const Features = () => {
    let navigate = useNavigate();

    let obj = [
        {
            name: "定位",
            href: 'icon-dingwei-dingwei',
            foo:()=>{
            }
        },
        {
            name: "地图",
            href: 'icon-ditu',
            route: 'map',
            foo:()=>{
                navigate('/map')
            }
        },
    ]

    return (<div id="featuresTab">
        {
            obj.map(it => {
                return (
                    <div key={it.href} className="featureBox" onClick={() => it.foo()}>
                        <span className={"iconfont" + " " + it.href}></span>
                    </div>
                )
            })
        }
    </div>)
}



export default Features