import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [time, setTime] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    console.log('time', time)

    return (
        <>
            <div className='flex'>
                <p>00</p> : <p>00</p> : <p>{time}</p>
            </div>
        </>
    )
}

export default App
