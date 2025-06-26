'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function GSAP() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
