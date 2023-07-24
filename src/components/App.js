import Header from './Header';
// import { motion } from 'framer-motion';
import Content from './Content';
// import React, { useEffect, useState } from 'react';

export default function App() {

    // const [mousePosition, setMousePosition] = useState({
    //     x: 0,
    //     y: 0
    // })
    // console.log(mousePosition)
    // useEffect(() => {
    //     const mouseMove = e => {
    //         setMousePosition({
    //             x: e.clientX,
    //             y: e.clientY
    //         })
    //     }

    //     window.addEventListener("mousemove", mouseMove)

    //     return () => {
    //         window.removeEventListener("mousemove", mouseMove)
    //     }
    // }, [])

    // const variants = {
    //     default: {
    //         x: mousePosition.x - 100,
    //         y: mousePosition.y - 100
    //     }
    // }

    return (
        <>
            <Header />
            <Content />

            {/* <motion.div className='cursor'
                variants={variants}
                animate="default" /> */}
        </>
    )
}