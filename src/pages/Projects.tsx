import React, { useRef } from "react";
import { FeaturedCards } from "../components/Projects/FeaturedCard";
import { FeaturedNav } from "../components/Projects/FeaturedNav";


export function Projects () {
    
    const DramatiqueRef = useRef(null)
    const GallerieRef = useRef(null)

    const onProject = (projectID: string ) => {
      const refs: Record<string, React.RefObject<HTMLDivElement>> = {
        Dramatique: DramatiqueRef,
        Gallerie: GallerieRef
      }

      const sectionRef = refs[projectID]
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({behavior: "smooth"})
      }
    }
    
  return (
    <div className="flex w-screen h-screen items-center justify-center p-10 relative">
      <section className="md:w-[46em] md:h-[30em] sm:w-[41em] sm:h-[24em] w-[21em] h-[14em] gap-20 overflow-hidden hover:scale-110 transition-transform ease-linear bg-stone-200 rounded-3xl">
        
        <FeaturedCards imageSRC="/assets/images/Dramatique.png" to='' ref={DramatiqueRef}/>
        <FeaturedCards imageSRC="/assets/images/hero2.png" to='' ref={GallerieRef}/>
      </section>
        <FeaturedNav onProjects={onProject}/>
    </div>
  );
}