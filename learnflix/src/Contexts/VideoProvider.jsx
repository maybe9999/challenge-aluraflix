import React, { useContext, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getVideos } from '../Services/api'

const [VideosContext, useVideoContext] = [createContext(), () => useContext(VideosContext)];
export { useVideoContext };


export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState(null)
    const [videoBanner, setVideoBanner] = useState({
        categoria: "Back End",
        codigoS: "",
        descripcion:"",
        id:"bb07a657-8194-443e-a2a0-c0fccde929da",
        img:"https://i.ytimg.com/vi/G1cDRqKuxpg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEwV2ndlV0y65IJ71gQVC8d9VKxg",
        video:"https://www.youtube-nocookie.com/embed/G1cDRqKuxpg",
        videoID:"G1cDRqKuxpg",
    })

    const { pathname } = useLocation();
    const [pageActive, setPageActive] = useState({
        root: [["/"], true],
        newVideo: [["/new-video"], false]
    });

    useEffect(() => {
        const newState = Object.keys(pageActive).reduce((tempObj, key) => {
            tempObj[key] = [pageActive[key][0], pageActive[key][0].includes(pathname)];
            return tempObj;
        }, {});
        setPageActive(newState);
    }, [pathname])

    useEffect(() => {
        (async () => {
            let videosData = await getVideos();
            setVideos(videosData);
        })();
    }, [])

    return (
        <VideosContext.Provider
            value={{
                videos,
                pageActive,
                videoBanner,
                setVideoBanner
            }}
        >
            {children}
        </VideosContext.Provider>
    )
}