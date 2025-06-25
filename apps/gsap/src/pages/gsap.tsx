
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
export default function GSAP() {
    const boxRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const timeline = gsap.timeline()
        // 从0到10，旋转360度，重复1次，yoyo: true 表示来回运动
        timeline.fromTo('#box', { x: 0, rotate: 0 }, { x: 10, rotate: 360, duration: 1, ease: 'power2.inOut', repeat: -1, yoyo: true })
        timeline.fromTo('#box', { x: 0, rotate: 0 }, { x: 10, rotate: 360, duration: 1, ease: 'power2.inOut', repeat: -1, yoyo: true })
    }, [boxRef])
    return (
        <div ref={boxRef} id='box'>
            <h1>Home</h1>
        </div>
    )
}