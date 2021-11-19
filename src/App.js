import Footer from './components/appFooter/footer'
import Center from './components/appCenter/center'
import Header from './components/appHeader/header'
import { useLocation } from 'react-router-dom';

const App = () => {
  let location = useLocation()
  const a = location.state
  return (
    <div id="App" style={{ height: '100%', width: '100%' }}>
      <Header></Header>
      <Center></Center>
      <Footer></Footer>
    </div>
  )
}

export default App;