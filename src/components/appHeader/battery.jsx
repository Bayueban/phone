import './battery.css'
const Battery = (props) => {
    return (
        <div id="battery">
            <div id="bHead"></div>
            <div id="bBody">
                <div style={{ 'background': props.battery.background, 'width': '100%', 'height': props.battery.power + '%' }}></div>
            </div>
        </div>
    )
}



export default Battery