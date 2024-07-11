import { useEffect } from "react";

export const Success = ({ user = { email: "Anonim" } }) => {
  useEffect(() => {
    // component did mount

    return () => {
      // component will unmount
      alert("Çıkış yaptınız, Success component unmount!");
    };
  }, []);

  return <h2> Hoşgeldin {user.email}! </h2>;
};
