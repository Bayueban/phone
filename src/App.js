import Footer from './components/appFooter/footer'
import Center from './components/appCenter/center'
import Header from './components/appHeader/header'

const App = () => {
  return (
    <div id="App" style={{ height: '100%', width: '100%' }}>
      <Header></Header>
      <Center></Center>
      <Footer></Footer>
    </div>
  )
}


export default App;
