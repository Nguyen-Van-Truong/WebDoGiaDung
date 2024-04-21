

export  const  NOTIFICATION_COUNT ='NOTIFICATION_COUNT'
export  const  SET_NOTIFICATION_COUNT ='SET_NOTIFICATION_COUNT'

export  const  IS_NOTIFICATION = 'IS_NOTIFICATION'
export const  SET_IS_NOTIFICATION= 'SET_IS_NOTIFICATION'
export  const  notificationCount =() =>({
    type :NOTIFICATION_COUNT
})


export  const  setNotificationCount =(notificationCount)=>({
    type : SET_NOTIFICATION_COUNT,
    payload : notificationCount
})
export const isNotification =()=> ({
    type : IS_NOTIFICATION
})
export const  setIsNotification =(isNotification)=>({
    type:  SET_IS_NOTIFICATION,
    payload: isNotification
})