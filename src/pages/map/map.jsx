import { useNavigate } from "react-router-dom"
import './map.css'
const Map = () => {
  let navigate = useNavigate();

    return (
        <div id="map">
            <button onClick={() => {
                navigate("/");
            }}>返回</button>
            新建任务页面
        </div>
    )
}


export default Map;
