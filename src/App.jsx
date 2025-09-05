import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <header>
        Header
      </header> */}
      <main>
        <img src="https://wallpapers.com/images/hd/lotr-landscape-artwork-44crsr9vijwvjrqd.jpg" alt="lotr-bg" className='bg-img'/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
