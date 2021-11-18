import './footer.css'
import Romete from "./remote/remote"
import Features from './features/features'

const Footer = () => {
    return <div id="footer">
        <div id="more">
            <Features></Features>
        </div>
        <Romete></Romete>
    </div>
}


export default Footer