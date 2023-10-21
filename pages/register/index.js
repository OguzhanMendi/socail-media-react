import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function RegisterPage() {
  // const [name, setName] = useState("");
  // const [surName, setsurName] = useState("");
  // const [userName, setuserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <div className="bg-orange-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 p-5 rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-300">
          Create new account
        </h2>

        <p className="text-center text-gray-500">
          let's create your account and be socialized
        </p>

        <div className="flex justify-center flex-col gap-5 mt-10">
          <div className="flex gap-5">
            <TextField
              id="outlined-basic"
              label="Name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Surname"
              value={form.surname}
              onChange={(event) =>
                setForm({ ...form, surname: event.target.value })
              }
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />
          </div>

          <div className="flex gap-5">
            <TextField
              id="outlined-basic"
              label="Enter your Username"
              value={form.username}
              onChange={(event) =>
                setForm({ ...form, username: event.target.value })
              }
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Enter your e-mail"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              variant="outlined"
              type="email"
              sx={{
                width: "100%",
              }}
            />
          </div>

          <TextField
            id="outlined-basic"
            label="Enter your password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            variant="outlined"
            type="password"
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label=" Re-Type your password"
            value={form.password2}
            onChange={(event) =>
              setForm({ ...form, password2: event.target.value })
            }
            variant="outlined"
            type="password"
            sx={{
              width: "100%",
            }}
          />

          <a href="#" className="text-end text-blue-500">
            Forgot your Password?
          </a>

          <Button
            variant="contained"
            className="bg-gray-900 py-3 text-lg"
            sx={{
              "&:hover": {
                backgroundColor: "#2A3442",
              },
            }}
          >
            Create a New Account
          </Button>
        </div>
      </div>
    </div>
  );
}
