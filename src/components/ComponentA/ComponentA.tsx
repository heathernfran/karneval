import * as React from "react";
import { useCookies } from "react-cookie";

const ComponentA = (): JSX.Element => {
  const [cookies, setCookies] = useCookies(["dismissed"]);

  const handleDismiss = (): void => {
    setCookies("dismissed", "dismissed");
  };

  if (cookies && cookies.dismissed) return <span>Cookies are set</span>;

  return (
    <div>
      Component A placeholder
      <button onClick={handleDismiss}>Set cookies</button>
    </div>
  );
};

export default ComponentA;
