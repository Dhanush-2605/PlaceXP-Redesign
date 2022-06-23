import React from "react";
import { H1, H3, H4 } from "./elements/Text";

export const ViewCards = ({
  data,
  title,
  text,
  setSearchInputText,
  children,
}) => {
  return (
    <>
      <div className="mb-20 w-4/5 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col  items-center lg:items-start gap-2 mb-10 lg:mb-0">
          <H3 className="text-primary-300 text-center">{title}</H3>
          <H1 className="font-extrabold text-center text-primary-900">
            {text}
          </H1>
        </div>
        <input
          className="shadow-xl px-2 py-1 w-full sm:w-96 rounded-md border-[2px] border-gray-300 focus:outline-none"
          placeholder="Search here..."
          type="text"
          onChange={({ target }) => setSearchInputText(target.value)}
        />
      </div>
      {data.length === 0 ? (
        <H4 className="pt-20">Loading...</H4>
      ) : (
        <div className="w-full flex flex-wrap justify-center gap-5">
          {children}
        </div>
      )}
    </>
  );
};
