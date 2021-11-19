import { Slider, Toast } from 'antd-mobile'
import './speed.css'

const Speed = (props) => {
  let name = props.str

  const toastValue = (value) => {
    Toast.show(`${name}：${value}`)
    if (props.getTurnValue) {
      props.getTurnValue(value)
    }else if (props.getSpeedValue) {
      props.getSpeedValue(value)
    }
  }

  return <div id="speed">
    <div className="title">{name}</div>
    <Slider ticks step={2} className="slider" onAfterChange={toastValue} defaultValue={40} />
  </div>
}



export default Speed