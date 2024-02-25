// for run this code just paste this code into yor reactproject-->App.jsx

import { useState } from "react"

export default function App() {

    const [color, setColor] = useState("black")
    return (
        <>
            <div className=' w-screen h-screen' style={{ backgroundColor: color }}>
                <div className="fixed flex bottom-10 inset-x-0 px-2">
                    <div className="flex flex-col justify-center gap-3 shadow-lg bg-white p-3 rounded-3xl">
                        <button className=" bg-red-600 p-2 text-white hover:text-xl   hover:p-3  text-2xl rounded-full align-middle" onClick={() => setColor('red')}>Red</button>
                        <button className=" bg-green-600 p-2 text-white hover:text-xl  hover:p-3  text-2xl rounded-full align-middle" onClick={() => setColor('green')}>green</button>
                        <button className=" bg-blue-600 p-2 text-white hover:text-xl  hover:p-3  text-2xl rounded-full align-middle" onClick={() => setColor('blue')}>blue</button>
                        <button className=" bg-purple-600 p-2 text-white hover:text-xl  hover:p-3  text-2xl rounded-full align-middle" onClick={() => setColor('purple')}>purple</button>
                        <button className=" bg-orange-600 p-2 text-white hover:text-xl  hover:p-3  text-2xl rounded-full align-middle" onClick={() => setColor('orange')}>orange</button>
                        <button className=" bg-gray-600 p-2 text-white hover:text-xl  hover:p-3  text-2xl rounded-full align-middle" onClick={() => setColor('gray')}>gray</button>
                    </div>
                </div>
            </div>
        </>
    )
}