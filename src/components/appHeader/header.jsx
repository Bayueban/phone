import './header.css'

const Header = () => {
    return (
        <div id="header">
            <div className="states flexSA">
                <img src="./img/确认.png" alt="" />
                空闲
            </div>
            <div className="coordinate flexSA">
                <img src="./img/坐标.png" alt="" />
                x:12,221 y:23,12, yaw:21
            </div>
            <div className="power flexSA">
                100%
                <img src="./img/电池.png" alt="" />
            </div>
        </div>
    )
}

export default Header