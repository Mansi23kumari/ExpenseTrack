import { useEffect, useState } from "react"



export const Usewindowsize =()=>{
        const[size,usesize]=useState([window.innerWidth,0]);

        useEffect(()=>{
            const updateSize=()=>{
                usesize([window.innerWidth,window.innerHeight])
            }

            window.addEventListener('resize',updateSize)
            return ()=> window.removeEventListener('resize',updateSize)
        },[])

        return {
            width:size[0],
            height: size[1]
        }
}