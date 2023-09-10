import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './bar';
import './App.css'

function App()
{
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div>
                <Navbar />
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
        </>
    )
}

export default App
