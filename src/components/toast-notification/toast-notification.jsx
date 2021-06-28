import "./toast-notification.css";

const ToastNotification = ({ msg, showToast, setPos }) => {
  const pos = setPos.split(":");
  const styles = {};

  if (pos[0] === "top") {
    styles.top = `${pos[1]}px`;
  } else if (pos[0] === "bottom") {
    styles.bottom = `${pos[1]}px`;
  }

  return (
    <div
      style={styles}
      className={`toast-notification${showToast ? " show-toast" : ""}`}
    >
      {msg}
    </div>
  );
};

export default ToastNotification;
