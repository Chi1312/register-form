import { TextField, Button } from "@mui/material/";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

export default function Register() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(false);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    setError(
      value.length < 8 ||
        value.length > 16 ||
        !hasLowercase ||
        !hasUppercase ||
        !hasNumber ||
        !hasSpecialChar
    );
  };

  return (
    <form
      onSubmit={() => {
        localStorage.setItem(Date.now(), JSON.stringify([email, password]));
        <Navigate path="/login" element={<Login />}></Navigate>;
      }}>
      <h1 className="input-text heading">Bine ai venit la inregistrare! 😎</h1>

      <div className="separator"></div>

      <div className="input-container">
        <label htmlFor="numele" className="input-text">
          Baga numele pls
        </label>
        <TextField
          className="text-field"
          id="numele"
          label="Baga numele"
          variant="outlined"
          required
          error={nameError}
          helperText={nameError}
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value.length < 3) {
              setNameError("Baga numele lasa prostiile");
            } else if (e.target.value.length > 20)
              setNameError("Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas");
            else if (!/^[a-zA-Z ]+$/.test(e.target.value)) {
              setNameError("Cum te cheama ma?");
            } else {
              setNameError(false);
            }
          }}
        />
      </div>

      <div className="input-container">
        <label htmlFor="mailu" className="input-text">
          Baga mailu pls
        </label>
        <TextField
          className="text-field"
          id="mailu"
          label="Baga mailu"
          variant="outlined"
          required
          error={emailError}
          value={email}
          helperText={emailError ? "Baga mail lasa sparla" : ""}
          type="email"
          onChange={handleEmailChange}
        />
      </div>

      <div className="input-container">
        <label htmlFor="passu" className="input-text">
          Baga passu pls
        </label>
        <TextField
          className="text-field"
          id="passu"
          label="Baga parola"
          variant="outlined"
          type="password"
          value={password}
          error={error}
          onChange={handleChange}
          helperText={error ? "Parola cam vai mortii ei" : ""}
        />
      </div>

      <Button
        size="large"
        className="button"
        variant="outlined"
        type="submit"
        disabled={password.length <= 0 || Boolean(error)}>
        baga
      </Button>
    </form>
  );
}
