import { useContext } from "react";
import NotificationContext from "../Context/NotificationContext";

export default function Notification() {
  const { message } = useContext(NotificationContext);
  return message && <div>{message}</div>;
}