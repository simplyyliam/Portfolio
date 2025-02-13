import { FeaturedCards } from "../components/Projects/FeaturedCard";
import { FeaturedNav } from "../components/Projects/FeaturedNav";


export function Projects () {
    
    const onProject = () => {

    }
    
  return (
    <div className="flex w-screen h-screen items-center justify-center relative">
      <section className="md:w-[46em] md:h-[30em] sm:w-[41em] sm:h-[24em] w-[21em] h-[14em] gap-20 overflow-hidden hover:scale-110 transition-transform ease-linear bg-stone-200 rounded-3xl">
        
        <FeaturedCards imageSRC="" to=''/>
      </section>
        <FeaturedNav onProjects={onProject}/>
    </div>
  );
}