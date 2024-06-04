const Header = () => {

}

const Footer  = () => {
  return (
    <h3>Copyright {new Date().getFullYear()}</h3>
  )
}

 function App(){
    return (
    <> 
    <Header/>
    <Menu/>
    <Footer/>
    </>
    )
 }

export default App;
