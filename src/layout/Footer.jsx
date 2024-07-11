import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    console.warn(
      " *************************** FOOTER DID MOUNT ***************************"
    );
  }, []);
  return (
    <footer>
      <h1>Navigasyon Menü</h1>
    </footer>
  );
};
