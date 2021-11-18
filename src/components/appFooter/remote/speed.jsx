import { Slider, Toast } from 'antd-mobile'
import './speed.css'



const Speed = (props) => {
  let name = props.str

  const toastValue = (value) => {
    Toast.show(`${name}：${value}`)
  }

  return <div id="speed">
    <div className="title">{name}</div>
    <Slider ticks step={50} className="slider" onAfterChange={toastValue} />
  </div>
}



export default Speed