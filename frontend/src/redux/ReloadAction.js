

export const  RELOAD_STATUS ='RELOAD_STATUS';
export  const   SET_RELOAD_STATUS ='SET_RELOAD_STATUS'
export const setReloadStatus =(status)=>({
    type:SET_RELOAD_STATUS,
    payload : status
})