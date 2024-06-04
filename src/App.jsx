const Header = () => {
  return (
    <h1>Fast React Pizza Co.</h1>
  )
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
    <Footer/>
    </>
    )
 }

export default App;
