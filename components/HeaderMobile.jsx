import { useState } from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function HeaderMobile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="flex justify-between px-3 py-6 border-b-2 border-gray-200">
      <Image src={Logo} height={55} />

      <div className="flex items-center gap-3">
        <ExpandMoreIcon sx={{ fontSize: 28 }} />
      </div>

      {isDrawerOpen && (
        <div className="sticky z-50 top-0 left-0  bg-gray-300 w-full h-full p-6">
          <div className="flex justify-between w-full items-center">
            <h1>User Menu</h1>
            <span
              className="bg-gray-500 p-3 rounded"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              X
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
