import * as React from "react";

interface Props {
  cookies?: {
    get: (arg0: string) => string;
    set: (arg0: string, arg1: string) => void;
  };
}

const ComponentA = ({ cookies }: Props): JSX.Element => {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const handleDismiss = (): void => {
    cookies.set("dismissed", "dismissed");

    setIsDismissed(true);
  };

  if (isDismissed || (cookies && cookies.get("dismissed")))
    return <span>Cookies are set</span>;

  return (
    <div>
      Component A placeholder
      <button onClick={handleDismiss}>Set cookies</button>
    </div>
  );
};

export default ComponentA;
