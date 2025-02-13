import { forwardRef } from "react";
import { NavLink, To } from "react-router-dom";

interface Props {
  imageSRC: string;
  to: To
}

export const FeaturedCards = forwardRef<HTMLDivElement, Props>(
  ({ imageSRC, to }, ref) => {
    return (
      <section
        ref={ref}
        className={` w-[46em] h-[30em] rounded-xl overflow-hidden`}
      >
        <NavLink to={to}>
           <img src={imageSRC} alt="" />
        </NavLink>
      </section>
    );
  }
);