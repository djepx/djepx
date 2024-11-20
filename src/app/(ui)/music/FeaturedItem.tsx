/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./music.module.css";

interface Props {
    name: string;
    album_cover_link: string;
    artists: string;
    isPlaying: boolean;
    setIsPlaying: any;
    setNowPlayingSongName: any;
    setSongArtists: any;
    setSongCover: any;
    setNowPlaying: any;
    index: number;
    nowPlaying: any;
}

export default function FeaturedItem({
    name,
    album_cover_link,
    artists,
    isPlaying,
    setIsPlaying,
    setNowPlayingSongName,
    setSongArtists,
    setSongCover,
    setNowPlaying,
    index,
    nowPlaying,
}: Props) {
    function test() {
        setNowPlaying(index);
        setNowPlayingSongName(name);
        setSongCover(album_cover_link);
        setSongArtists(artists);
        if (nowPlaying != index) {
            setIsPlaying(true);
        } else {
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className={styles.featured__item}>
            <div className={styles.featured__cover} onClick={() => test()}>
                <img src={album_cover_link} alt="" />
                <div className={styles.featured__play_btn}></div>
            </div>
            <div className={styles.featured__details}>
                <h3 className={styles.featured__name}>{name}</h3>
            </div>
        </div>
    );
}
