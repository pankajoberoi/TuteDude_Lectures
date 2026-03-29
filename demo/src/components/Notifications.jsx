import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeNotification } from "../features/notification/notificationSlice";

const Notifications = () => {
  const notifications = useAppSelector(
    state => state.notifications.list
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      {notifications.map(note => (
        <div key={note.id}>
          <p>{note.message}</p>
          <button onClick={() =>
            dispatch(removeNotification(note.id))
          }>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;