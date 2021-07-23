import "./toast-notification.css";

const ToastNotification = ({ msg, setPos }) => {
  const pos = setPos.split(":");
  const styles = {};

  switch (pos[0]) {
    case "top":
      styles.top = `${pos[1]}px`;
      break;
    case "bottom":
    default:
      styles.bottom = `${pos[1]}px`;
      break;
  }

  return (
    <div style={styles} className="toast-notification show-toast">
      {msg}
    </div>
  );
};

export default ToastNotification;
