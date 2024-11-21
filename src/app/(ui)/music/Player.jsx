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

    const volume_high = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className={styles.volume__icon}
        >
            <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
        </svg>
    );
    const volume_medium = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className={styles.volume__icon}
        >
            <path d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
        </svg>
    );
    const volume_low = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className={styles.volume__icon}
        >
            <path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
        </svg>
    );
    const volume_off = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className={styles.volume__icon}
        >
            <path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
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

    let volume_icon = volume_low;
    if (Number(props.volume) > 0.7) {
        volume_icon = volume_high;
    } else if (Number(props.volume) > 0.35) {
        volume_icon = volume_medium;
    } else if (Number(props.volume) > 0) {
        volume_icon = volume_low;
    } else {
        volume_icon = volume_off;
    }

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
                        {volume_icon}
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
