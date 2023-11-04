import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
export default function RegisterPage() {
  // const [name, setName] = useState("");
  // const [surName, setsurName] = useState("");
  // const [userName, setuserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  const router = useRouter();

  const mainPage = () => {
    router.push("/");
  };

  //  CheckBox State'i
  const [termsCheck, setTermsCheck] = useState(false);
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    let userToken = localStorage.getItem("user_token");
    if (userToken) {
      window.location.href = "/";
    }
  }, []);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // tek bir fonksiyonda değiştirme
  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const createAccountService = async () => {
    // http://localhost:3000/auth/register

    const requestBody = {
      name: form.name,
      lastname: form.surname,
      username: form.username,
      email: form.email,
      password: form.password,
    };

    /*
    const response = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          body: JSON.stringify(requestBody),
    })
    */

    const response = await axios.post(
      "http://localhost:3000/auth/register",
      requestBody
    );

    if (response.status === 200) {
      setUserToken(response.data.token);
      localStorage.setItem("user_token", response.data.token);
      mainPage();
    } else {
      alert("An Error occured while creating your account.");
    }
  };

  const handleSubmit = async () => {
    if (!termsCheck) {
      alert("Lütfen tikleyin");
    } else if (form.password !== form.password2) {
      alert("Şifreler Aynı Değil.");
    } else {
      await createAccountService();
    }
  };

  return (
    <div className="bg-orange-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 p-5 rounded-lg shadow-lg shadow-cyan-500/50">
        <h2 className="text-center text-2xl font-bold text-gray-300">
          Create new account
        </h2>

        <p className="text-center text-gray-500">
          let's create your account and be socialized
        </p>

        <div className="flex justify-center flex-col gap-5 mt-10">
          {/* 
          
           BU KOMUT OBJELERİ DÜZ STRİNG HALİNE ÇEVİRİR.
          {JSON.stringify(form)}
           
          
          */}

          <div className="flex gap-5">
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              value={form.name}
              onChange={(event) => handleOnChange(event)}
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Surname"
              name="surname"
              value={form.surname}
              onChange={(event) => handleOnChange(event)}
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
              name="username"
              value={form.username}
              onChange={(event) => handleOnChange(event)}
              variant="outlined"
              type="text"
              sx={{
                width: "100%",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Enter your e-mail"
              name="email"
              value={form.email}
              onChange={(event) => handleOnChange(event)}
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
            name="password"
            value={form.password}
            onChange={(event) => handleOnChange(event)}
            variant="outlined"
            type="password"
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label=" Re-Type your password"
            name="password2"
            value={form.password2}
            onChange={(event) => handleOnChange(event)}
            variant="outlined"
            type="password"
            sx={{
              width: "100%",
            }}
          />

          <div className="flex  items-center">
            <Checkbox
              checked={termsCheck}
              onChange={() => {
                setTermsCheck(!termsCheck);
              }}
            />
            <span>I Accept the privacy Policy adn Trems Of use</span>
          </div>

          <Button
            variant="contained"
            disabled={termsCheck === false}
            onClick={() => {
              handleSubmit();
            }}
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
