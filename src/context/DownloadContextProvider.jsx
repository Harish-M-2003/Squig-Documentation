
import React, { useState } from "react";
import DownloadContext from "./DownloadContext";

export default function DownloadContextProvider({children}){

    const [downloade , setDownloades] = useState(0);
    const [download_url , setDownloadUrl] = useState(null);
    const [isPending , setIsPending] = useState(false);


    return (
        <DownloadContext.Provider 
        value={
            {
                download_url , 
                setDownloadUrl ,
                downloade ,
                setDownloades ,
                isPending ,
                setIsPending
            }
        }>
            {children}
        </DownloadContext.Provider>
    )
}