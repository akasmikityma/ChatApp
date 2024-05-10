import React from 'react'
import {transFormImage} from "../../lib/features.js"
import {FileOpen} from "@mui/icons-material"
const RenderAttachMent = ({file,url}) => {
  switch(file){
    
    case "video":
        return <video src={url} preload='none' width={"200px"} controls/>
        

    case "image":
        return <img src={transFormImage(url,200)} alt="Attachment" height={"150px"} width={"200px"} style={{
            objectFit:"contain"
        }}/>
      

    case "audio":
            return <audio src={url} preload='none' width={"200px"} controls/>
            
    default:
       return <FileOpen/>
  }
}

export default RenderAttachMent