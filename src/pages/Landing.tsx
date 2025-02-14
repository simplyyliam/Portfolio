import { Landing_Hero } from "../components/Landing/Hero";
import { About } from "./About";
import { Projects } from "./Projects";


export function Landing () {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-screen h-screen md:sm:p-20">
                <Landing_Hero/>
            </section>

            <section className="w-screen h-screen flex items-center justify-center">
                <About/>
            </section>

            <section className="flex w-screen h-screen items-center justify-center">
                <Projects/>
            </section>
        </>
    )
}