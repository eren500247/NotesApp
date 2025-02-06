import React from "react";
import { getInitial } from "../../utils/helper";

const ProfileInfo = ({ userInfo,onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">{getInitial(userInfo?.fullName)}</div>
      <div>
        <p className="text-small font-medium">{userInfo?.fullName}</p>
        <button onClick={() => onLogout()} className="text-slate-700 underline text-sm">Logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
