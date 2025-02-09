import {
    SectionBannerStyled,
    DivConteinerInfoBanner,
    H1TitleBanner,
    PDescriptionBanner,
    DivConteinerVideoStyled,
    LiteYouTubeEmbedStyled
} from "./home.styled";

import { useVideoContext } from "../../Contexts/VideoProvider";
import { useEffect } from "react";

export const Home = () => {
    const { videos,
        videoBanner,
        setVideoBanner } = useVideoContext()

    const resetBaner = () => {
        let tempVideoBanner = [...videos][Math.floor(Math.random() * videos.length)];
        console.log("temp video", tempVideoBanner);
        setVideoBanner(tempVideoBanner);
    }

    useEffect(() => {
        if (videos) {
            resetBaner()
            const a = setInterval(() => {
                resetBaner()
                console.log("reset")
                console.log("videoID", videoBanner.videoID)
            }, 20000);
            return () => clearInterval(a)
        }
    }, [videos]);

    //conseguir el thumbail del video yt
    return <>
        <SectionBannerStyled urlImg={videoBanner.img}>
            <DivConteinerInfoBanner>
                <H1TitleBanner category={videoBanner.categoria}>{videoBanner.categoria}</H1TitleBanner>
                <PDescriptionBanner category={videoBanner.categoria}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat accusantium consectetur provident magnam dolore quisquam tempora architecto fuga aliquam repellendus! Placeat nesciunt ad laboriosam magnam quis. Quidem enim at impedit!</PDescriptionBanner>
            </DivConteinerInfoBanner>
            <DivConteinerVideoStyled>
                <LiteYouTubeEmbedStyled
                    id={videoBanner.videoID}
                    thumbnail={videoBanner.img}
                    aspectHeight={6}
                    aspectWidth={12}/>
            </DivConteinerVideoStyled>
        </SectionBannerStyled>
    </>
}