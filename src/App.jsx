import { useEffect, useState } from 'react'

const Pizza = () => {
  return (
    <div>
      <h2>Pizza</h2>
    </div>
  )
}
 function App(){
  
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])
  
  return <>
    <h1>Hello World</h1>
    <Pizza/>
  </>
 }

export default App
