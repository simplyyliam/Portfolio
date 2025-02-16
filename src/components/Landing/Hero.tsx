import gsap from 'gsap';
import { useEffect, useRef } from 'react';
export function Landing_Hero () {

    const HeroRef = useRef(null)
    const HeaderRef = useRef(null)

    gsap.registerPlugin(gsap)

    useEffect(() => {
        const mm = gsap.matchMedia()
    
        mm.add("(max-width: 600px)", () => {
            gsap.to(HeroRef.current, {height: 700, width: 400, delay: 0.3, borderRadius: 20})
            gsap.to(HeaderRef.current, {
                scale: 1.5, // Scale the text
                duration: 2,
                ease: "elastic.out(1, 0.75)", // Elastic effect for scaling
            })
        })
        mm.add("(max-width: 375px)", () => {
            gsap.to(HeroRef.current, {height: 600, width: 300, delay: 0.3, borderRadius: 20})
            gsap.to(HeaderRef.current, {
                scale: 1.5, // Scale the text
                duration: 2,
                ease: "elastic.out(1, 0.75)", // Elastic effect for scaling
            })
        })

        mm.add('(min-width: 992px)', () => {
            gsap.to(HeroRef.current, {height: 700, width: 1300, delay: 0.3, borderRadius: 20})
            gsap.to(HeaderRef.current, {
                scale: 1.5, // Scale the text
                duration: 2,
                ease: "elastic.out(1, 0.75)", // Elastic effect for scaling
            }) 
        })
    })
    

    

    return (
        <div ref={HeroRef} className="Hero flex w-full h-full bg-stone-300 p-5 absolute">
            <div className="flex items-center justify-center w-full h-full  bg-[#ffffff1] backdrop-blur-[5px]">
                <div className="flex flex-col gap-6">
                    <h1 ref={HeaderRef} className="text-white md:text-3xl  md:w-fit text-[0.65em] text-center  font-medium scale-0">Frontend Developer Building, One Pixel at a Time</h1>
                </div>
            </div>
        </div>
    )
}