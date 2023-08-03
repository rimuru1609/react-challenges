import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorPicker1 from './Solutions/ColorPicker/ColorPicker1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ColorPicker1 />
  )
}

export default App
