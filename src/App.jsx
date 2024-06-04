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

const Menu = () => {
  return <>
    <div>
      <img src="pizzas/focaccia.jpg" alt="pizza1" />
      <img src="pizzas/funghi.jpg" alt="" />
      <img src="pizzas/margherita.jpg" alt="" />
      <img src="pizzas/prosciutto.jpg" alt="" />
      <img src="pizzas/salamino.jpg" alt="" />
      <img src="pizzas/spinaci.jpg" alt="" />
    </div>
  </>
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
