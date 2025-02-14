import { useState } from "react";

interface Props {
  onProjects: (imageID: string) => void
}

export function FeaturedNav({onProjects}:Props):JSX.Element {

    const [active, setActive] = useState('Dramatique')

    const onTabClick = (currentTab: string) => {
      if (active !== currentTab) {
        setActive(currentTab)
      }
    }

  return (
    <div className="flex md:flex-row sm:flex-row flex-col  md:gap-10 gap-7 absolute md:bottom-10 md:right-10 bottom-10 left-10 justify-end ">
      <button onClick={() => onProjects('Dramatique')} onMouseDown={() => onTabClick('Dramatique')}>
        <h1 className={`font-lora text-4xl text-start ${active === 'Dramatique' ? 'text-black transition ease-linear' : 'text-[#01010150] transition ease-linear'}`}>Dramatique</h1>
      </button>
      <button onClick={() => onProjects('Gallerie')} onMouseDown={() => onTabClick('Gallerie')}>
        <h1 className={`font-lora text-4xl text-start ${active === 'Gallerie' ? 'text-black transition ease-linear' : 'text-[#01010150] transition ease-linear'}`}>Gallerie</h1>
      </button>
      <button onClick={() => onProjects('Dockly')} onMouseDown={() => onTabClick('Dockly')}>
        <h1 className={`font-lora text-4xl text-start ${active === 'Dockly' ? 'text-black transition ease-linear' : 'text-[#01010150] transition ease-linear'}`}>Dockly</h1>
      </button>
      <button onClick={() => onProjects('Stature')} onMouseDown={() => onTabClick('Simple Series')}>
        <h1 className={`font-lora text-4xl text-start ${active === 'Simple Series' ? 'text-black transition ease-linear' : 'text-[#01010150] transition ease-linear'}`}>Stature</h1>
      </button>
    </div>
  );
}
