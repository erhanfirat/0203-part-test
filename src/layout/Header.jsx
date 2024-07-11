import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    console.warn(
      " *************************** HEADER DID MOUNT ***************************"
    );
  }, []);

  return (
    <header>
      <h1>Sayfama Hoşgeldiniz</h1>
    </header>
  );
};
