import React, { useEffect, useState, useContext } from "react";
import assest1 from "../assets/loader-assest-1.png";
import { AppContext } from "../context/AppContext";

const Loader = () => {
  const {
    state: { quotes, quotesIndex },
  } = useContext(AppContext);

  //To Remove Html tags from the quote coming from api
  function removeTags(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-[#000000] shadow-md shadow-black grid grid-cols-[2fr_1fr] text-white max-w-[952px] mx-auto mt-10 rounded-xl">
        <div className="pl-5 py-3">
          <h2 className="font-light text-[40px] leading-[40px]">Sonal</h2>
          <p className="text-sm mt-2 leading-[21.79px] font-normal">
            Nunc nulla adipiscing volutpat tortor sed dui maecenas sed purus.
          </p>
        </div>
        <img src={assest1} className="assest1 h-full object-fill" />
      </div>

      <div className="mt-56 flex justify-center">
        <div className="px-4 w-[306px] shadow-md shadow-[#97979740] h-[306px] flex justify-between items-center bg-gradient-to-l from-[#FFC107] to-[#FFC1079E] rounded-full">
          {quotes.length > 0 && (
            <p className="text-[16px] text-[#333333] text-center leading-[21.79px]">
              {removeTags(quotes[quotesIndex]?.content.rendered)} -{" "}
              {quotes[quotesIndex]?.title.rendered}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
