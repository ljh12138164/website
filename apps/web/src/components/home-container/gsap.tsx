'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
export default function GSAP() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
