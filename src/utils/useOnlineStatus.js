import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const [onlineStatus,setOnineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnineStatus(false);
        });
        window.addEventListener('online',()=>{
            setOnineStatus(true);
        });
    })
    return onlineStatus;

}

export default useOnlineStatus ;