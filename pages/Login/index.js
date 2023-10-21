import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function LoginPage() {
  return (
    <div className="bg-orange-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 p-5 rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-300">
          Login your account
        </h2>

        <p className="text-center text-gray-500">
          let's login your account and be socialized
        </p>

        <div className="flex justify-center flex-col gap-5 mt-10">
          <TextField
            id="outlined-basic"
            label="Enter your e-mail"
            variant="outlined"
            type="email"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter your password"
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
            LOGIN YOUR ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
}
