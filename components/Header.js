import Logo from "@/public/logo.png";
import LogoAvatar from "@/public/Avatar.jpg";

import Image from "next/image";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  return (
    <header className="w-full flex justify-between px-3  py-1 items-center">
      <div className="Logo">
        <Image src={Logo} />
      </div>

      {/* PLACHE HOLDER YAZILICAK. */}
      <div className="Search ">
        <TextField
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          id="outlined-basic"
          variant="outlined"
          placeholder="Search now..."
          InputProps={{
            style: {
              borderRadius: "20px",
            },
            startAdornment: (
              <InputAdornment position="start">
                {""}
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="profile flex  gap-4 items-center">
        <HeadsetMicIcon />
        <NotificationsActiveIcon />
        <p>Vinc.rangga</p>
        <Avatar>
          <Image src={LogoAvatar} />
        </Avatar>
        <ArrowDropDownIcon />
      </div>
    </header>
  );
}
