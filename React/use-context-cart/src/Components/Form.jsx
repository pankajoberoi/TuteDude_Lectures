import { useContext } from "react";
import NotificationContext from "../Context/NotificationContext";

export default function Form() {
  const { showNotification } = useContext(NotificationContext);

  return (
    <button onClick={() => showNotification("Saved Successfully!")}>
      Save
    </button>
  );
}
