import { useEffect } from "react";
const Alert = ({ alert, showAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return (
    <div>
      <p
        style={alert.type === "danger" ? { color: "red" } : { color: "green" }}
      >
        {alert.msg}
      </p>
    </div>
  );
};
export default Alert;
