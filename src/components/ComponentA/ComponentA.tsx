import * as React from "react";
import { useCookies } from "react-cookie";

const ComponentA = (): JSX.Element => {
  const [cookies, setCookies] = useCookies(["dismissed"]);

  const handleDismiss = (): void => {
    setCookies("dismissed", "dismissed");
  };

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">React Cookie</p>
      </header>
      <div className="card-content">
        <div className="content">
          {cookies && cookies.dismissed
            ? "Cookies are set"
            : "Component A placeholder"}

          <div className="buttons">
            <button
              className="button is-primary is-light"
              disabled={cookies && cookies.dismissed}
              onClick={handleDismiss}
            >
              Set cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentA;
