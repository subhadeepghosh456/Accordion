import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import { BiSolidUpArrowCircle } from "react-icons/bi";

const Card = ({ item, condition, index, setShow }) => {
  return (
    <div className="w-full bg-white border rounded-xl shadow-md">
      <div className="flex justify-between px-3 py-3 ">
        <span className="font-bold">{item.title}</span>
        {!condition ? (
          <span className="cursor-pointer" onClick={() => setShow(index)}>
            <AiFillDownCircle size={25} />
          </span>
        ) : (
          <span className="cursor-pointer" onClick={() => setShow(-1)}>
            <BiSolidUpArrowCircle size={25} />
          </span>
        )}
      </div>
      {condition && (
        <div className="flex items-center py-3 mx-2">
          <div className="w-3/12">
            <img
              src={item.src}
              alt=""
              className="w-full object-contain aspect-video"
            />
          </div>
          <p className="w-9/12 px-3 text-center">{item.about}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
