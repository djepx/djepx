"use client";

import Image from "next/image";

import styles from "./music.module.css";

export default function Player(props) {
    const play = (
        <svg
            className={styles.btn__play_pause}
            onClick={() => props.setIsPlaying(!props.isPlaying)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
        </svg>
    );
    const pause = (
        <svg
            className={styles.btn__play_pause}
            onClick={() => props.setIsPlaying(!props.isPlaying)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
        </svg>
    );
    const next = (
        <svg
            onClick={() => props.handleNext()}
            className={styles.btn__next}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z" />
        </svg>
    );
    const prev = (
        <svg
            onClick={() => props.handlePrev()}
            className={styles.btn__prev}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z" />
        </svg>
    );

    const playback_minutes = Math.floor(props.currentPlaybackTime / 60);
    const playback_seconds = Math.round(
        props.currentPlaybackTime - playback_minutes * 60
    );

    const duration_minutes = Math.floor(props.duration / 60);
    const duration_seconds = Math.round(props.duration - duration_minutes * 60);

    const handleDurationChange = (event) => {
        props.onSeek(event.target.value);
    };

    return (
        <>
            {props.nowPlayingSongName ? (
                <div className={styles.player}>
                    <div className={styles.player__details}>
                        <Image
                            src={props.songCover}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className={styles.song__info}>
                            <p>{props.nowPlayingSongName}</p>
                            <p className={styles.song__artists}>
                                {props.songArtists}
                            </p>
                        </div>
                    </div>
                    <div className={styles.player__controls}>
                        <div className={styles.player__btns}>
                            {prev}
                            {props.isPlaying ? pause : play}
                            {next}
                        </div>
                        <div className={styles.player__trackbar}>
                            <p>
                                {playback_minutes}:
                                {playback_seconds < 10
                                    ? `0${playback_seconds}`
                                    : playback_seconds}
                            </p>
                            <input
                                type="range"
                                min="0"
                                max={props.duration}
                                value={props.currentPlaybackTime}
                                onChange={handleDurationChange}
                            />
                            <p>
                                {duration_minutes}:
                                {duration_seconds < 10
                                    ? `0${duration_seconds}`
                                    : duration_seconds}
                            </p>
                        </div>
                    </div>
                    <div className={styles.volume__control}>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.05"
                            className={styles.slider}
                            onChange={props.handleVolumeChange}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
