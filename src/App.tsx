import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-4">
          <a href="https://vite.dev" target="_blank" className="flex items-center">
        <img src={viteLogo} className="h-8" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="flex items-center">
        <img src={reactLogo} className="h-8" alt="React logo" />
          </a>
        </div>
        <ul className="flex list-none gap-8 m-0">
          <li>
        <a href="#" className="text-white no-underline font-bold hover:underline">Home</a>
          </li>
          <li>
        <a href="#" className="text-white no-underline font-bold hover:underline">About</a>
          </li>
          <li>
        <a href="#" className="text-white no-underline font-bold hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
      <h1 className="text-4xl font-bold mt-8 mb-4 text-center">Vite + React</h1>
      <div className="card bg-white rounded shadow p-6 mx-auto max-w-md">
        <Button
          onClick={() => setCount((count) => count + 1)}
          
        >
          count is {count}
        </Button>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center mt-6 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
