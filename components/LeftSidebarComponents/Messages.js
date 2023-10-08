import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Chip from "@mui/material/Chip";

export default function Messages() {
  const messages = [
    {
      senderFullName: "Oğuzhan Mendi",
      Avatar: "O",
      message: "Kumca alksd ğsdf şpsdf",
      count: 1,
    },
    {
      senderFullName: " Canberk",
      Avatar: "C",
      message: "Hello today is good day",
      count: 3,
    },
    {
      senderFullName: "Mustafa",
      Avatar: "M",
      message: "How are you",
    },
    {
      senderFullName: "Ahmet",
      Avatar: "A",
      message: "May you call me today",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="font-bold  text-xl">Message</span>
        <span className="text-red-600 font-bold">See All</span>
      </div>
      {messages.map((item) => {
        return (
          <div className="flex justify-between mt-10">
            <div className="flex items-center gap-3">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>{item.Avatar}</Avatar>
              <div>
                <span>{item.senderFullName}</span>
                <p>{item.message}</p>
              </div>
            </div>

            <div className="">
              {item.count && <Chip label={item.count} color="error" />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
