import { useState } from 'react'
import Editor from './components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Editor/>
    </div>
  )
}

export default App
