import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  const [year, setYear] = useState();
  useEffect(() => {
    const getYear = () => {
      setYear(new Date().getFullYear());
    };
    getYear();
  });
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-300">
          <div className="grid items-start grid-cols-3 max-w-2xl  w-full m-auto md:max-w-none md:gap-5">
            {titles?.map((value, i) => (
              <div key={i} className="grid items-center">
                <h1 className="text-lg  lg:text-base md:text-sm uppercase font-semibold">
                  {value.title}
                </h1>
              </div>
            ))}
            {links?.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list?.map((value, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {value.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights{" "}
              <span className="font-semibold">JSSTACK DEVELOPERS {year}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
