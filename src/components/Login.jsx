import { useEffect } from "react";
import { useState } from "react";
import { Success } from "./Success";

export const Login = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [degerAtanmamis, setDegerAtanmamis] = useState();
  console.log("degerAtanmamis: ", degerAtanmamis);

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      // setSubmitted(true);
      // setUser({ ...formData });

      axios.post("login-endpoint", formData)
      .then(res => {
        if (res.loginSuccess) {
          // ana sayfaya yönlenme
          history.push("/");
        }
      })
      .catch(err => {
        // show error to user
        // stay on the login form
      })
    }
  };

  const runValidations = () => {
    // Email Check
    const emailValid = String(formData.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!emailValid) {
      setErrors((prev) => ({
        ...prev,
        email: "Lütfen geçerli bir email adresi giriniz...",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: null,
      }));
    }

    // Password Check
    const passwordValid = String(formData.password)
      .toLowerCase()
      .match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/);
    if (!passwordValid) {
      setErrors((prev) => ({
        ...prev,
        password:
          "Lütfen rakam, özel karakter, büyük harf ve küçük harf içeren en az 8 karakterli bir şifre oluşturun.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        password: null,
      }));
    }

    const termsValid = formData.terms;
    if (!termsValid) {
      setErrors((prev) => ({
        ...prev,
        terms: "Terms alanını seçili yapmalısınız.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        terms: null,
      }));
    }

    return emailValid && passwordValid && termsValid;
  };

  const changeDeger = () => {
    console.log(degerAtanmamis);
    setDegerAtanmamis("Merhaba");
    console.log(degerAtanmamis);
  };

  useEffect(() => {
    setIsFormValid(runValidations());
  }, [formData]);

  return user ? (
    <>
      <button onClick={() => setUser(null)}>Log out!</button>
      <Success user={user} />
    </>
  ) : (
    <form onSubmit={loginFormSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={inputChangeHandler}
          data-cy="email-input"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={inputChangeHandler}
          data-cy="password-input"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label>Terms</label>
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={inputChangeHandler}
          data-cy="terms-input"
        />
        {errors.terms && <p className="error">{errors.terms}</p>}
      </div>
      <div>
        <button type="submit" disabled={!isFormValid} data-cy="submit-btn">
          Login
        </button>
      </div>
      <button onClick={changeDeger}>Set Değer Atanmamış</button>
    </form>
  );
};
