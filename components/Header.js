import Logo from "@/public/logo.png";
import LogoAvatar from "@/public/Avatar.jpg";

import Image from "next/image";

import * as React from "react";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  return (
    <header className="w-full flex justify-between px-7  py-6 items-center border-b-2 border-gray-200">
      <Image src={Logo} />

      <TextField
        sx={{
          width: 750,
        }}
        variant="outlined"
        placeholder="Search now..."
        InputProps={{
          style: {
            borderRadius: "20px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <div className="flex  items-center gap-3">
        <HeadsetMicIcon
          sx={{
            color: "#374151",
            fontSize: 42,
            border: "1px solid #e5e7eb",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <NotificationsActiveIcon
          sx={{
            color: "#374151",
            fontSize: 42,
            border: "1px solid #e5e7eb",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <span className="text-xl font-bold ml-7">Vinc.rangga</span>
        <Avatar>
          <Image src={LogoAvatar} />
        </Avatar>
        <ArrowDropDownIcon sx={{ fontSize: 28 }} />
      </div>
    </header>
  );
}
