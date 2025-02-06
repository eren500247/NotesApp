import React from "react";
import { MdClose } from "react-icons/md";
import moment from "moment";

const DetailCard = ({data,onClose}) => {
  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50 cursor-pointer"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <h1 className="text-2xl font-bold mb-5">{data?.title}</h1>
      <div className="mb-5">
        <p>
            {data.content}
        </p>
      </div>
      <p className="text-slate-400">Created At : {moment(data.createdOn).format("Do MMM YYYY")}</p>
    </div>
  );
};

export default DetailCard;
