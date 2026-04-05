import React from 'react'
import { useAppDispatch, useAppSelector } from '../Store/hooks'
import { removeNotification } from '../Features/notification/notification';

const Notification = () => {

    const notificationList=useAppSelector(state => state.notification.list)

    const dispatch=useAppDispatch();

    function removeItem(id){
        dispatch(removeNotification(id))
    }

  return (
    <div>
        {
            notificationList.map(note => (
                <div key={note.id}>
                    <p>{note.message}</p>
                    <button onClick={()=> removeItem(note.id)}>X</button>
                </div>
            ))
        }
    </div>
  )
}

export default Notification