/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./music.module.css";

interface Props {
    name: string;
    album_cover_link: string;
    isPlaying: boolean;
    setIsPlaying: any;
    setNowPlayingSongName: any;
    setNowPlaying: any;
    index: number;
    nowPlaying: any;
}

export default function FeaturedItem({
    name,
    album_cover_link,
    isPlaying,
    setIsPlaying,
    setNowPlayingSongName,
    setNowPlaying,
    index,
    nowPlaying,
}: Props) {
    function test() {
        if (nowPlaying != index) {
            setIsPlaying(true);
        } else {
            setIsPlaying(!isPlaying);
        }
        setNowPlayingSongName(name);
        setNowPlaying(index);
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
