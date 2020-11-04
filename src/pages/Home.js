import React from 'react'
import {motion} from 'framer-motion';

export default function Home() {
    return (
        <motion.div className="flex h-screen">
            <motion.h1  className="m-auto text-3xl">Welcome Home</motion.h1>
        </motion.div>  
    )
}
