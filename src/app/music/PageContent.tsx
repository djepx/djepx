"use client";

import { useState, useRef, useEffect } from "react";

import FeaturedItem from "@/app/(ui)/music/FeaturedItem";
import Player from "@/app/(ui)/music/Player";
import SongItem from "@/app/(ui)/music/SongItem";
import SongList from "@/app/(ui)/music/SongList";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";
import SongListWrapper from "@/app/(ui)/wrappers/SongListWrapper";

export default function PageContent() {
    const [isPlaying, setIsPlaying] = useState(false); // sets all play/pause functionality
    const [nowPlaying, setNowPlaying] = useState<number | null>(null); // the index of the selected song
    const [nowPlayingSongName, setNowPlayingSongName] = useState("");
    const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
    const [duration, setDuraton] = useState(0);
    const [volume, setVolume] = useState(0.05);

    const audioEl = useRef(null);
    const songs = [
        "https://hundred.talkswebdevelopment.com/audio/test.mp3",
        "https://hundred.talkswebdevelopment.com/audio/test2.mp3",
    ]; // this will contain all information from api, so selection will be something like songs[nowPlaying].data.file.path

    // set the default audio level so it doesn't kill people
    useEffect(() => {
        if (audioEl.current) {
            audioEl.current.volume = 0.05;
        }
    });

    // volume slider
    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);

        if (audioEl.current) {
            audioEl.current.volume = volume;
        }
    };

    // seek bar
    const handleSeek = (time) => {
        audioEl.current.currentTime = time;
    };

    // when a track ends, what should we do
    function handleTrackEnded() {
        if (nowPlaying === songs.length - 1) {
            setIsPlaying(false);
        } else {
            setNowPlaying(nowPlaying + 1);
        }
    }

    // play/pause handler
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    }, [isPlaying]);

    // tracks the current playback time of song
    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentPlaybackTime(audioEl.current.currentTime);
        };

        if (audioEl.current) {
            audioEl.current.addEventListener("timeupdate", handleTimeUpdate);
        }

        return () => {
            if (audioEl.current) {
                audioEl.current.removeEventListener(
                    "timeupdate",
                    handleTimeUpdate
                );
            }
        };
    }, []);

    // get the duration of audio file being played ("new Audio" might not be needed)
    useEffect(() => {
        if (nowPlaying != null) {
            const audio = new Audio(songs[nowPlaying]);
            audio.onloadedmetadata = () => {
                setDuraton(audio.duration);
            };
        }
    }, [nowPlaying]); // it says songs needs to be in the dependency array, but I don't think so, that array should never be updated while a user is on the page

    return (
        <article>
            <SectionWrapper gap={50}>
                <SectionHeader title="MUSIC" showSVG={true} />
                <div className="music--featured">
                    <div className="featured__items">
                        <FeaturedItem
                            name="John Summit - Where You Are (EPX Reload Edit)"
                            album_cover_link="https://hundred.talkswebdevelopment.com/images/cover_1.jpg"
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setNowPlayingSongName={setNowPlayingSongName}
                            setNowPlaying={setNowPlaying}
                            nowPlaying={nowPlaying}
                            index={0}
                        />
                        <FeaturedItem
                            name="Chance The Rapper - All Night (EPX Edit)"
                            album_cover_link="https://hundred.talkswebdevelopment.com/images/cover_2.jpg"
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setNowPlayingSongName={setNowPlayingSongName}
                            setNowPlaying={setNowPlaying}
                            nowPlaying={nowPlaying}
                            index={1}
                        />
                        <FeaturedItem
                            name="EPX August 2020 Mix"
                            album_cover_link="https://hundred.talkswebdevelopment.com/images/cover_3.jpg"
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setNowPlayingSongName={setNowPlayingSongName}
                            setNowPlaying={setNowPlaying}
                            nowPlaying={nowPlaying}
                            index={0}
                        />
                        <FeaturedItem
                            name="Dimitri Vangelis & Wyman - Pacifier (EPX In My Mind Edit)"
                            album_cover_link="https://hundred.talkswebdevelopment.com/images/cover_4.jpg"
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setNowPlayingSongName={setNowPlayingSongName}
                            setNowPlaying={setNowPlaying}
                            nowPlaying={nowPlaying}
                            index={0}
                        />
                        <FeaturedItem
                            name="EPX April 2020 Special"
                            album_cover_link="https://hundred.talkswebdevelopment.com/images/cover_5.jpg"
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setNowPlayingSongName={setNowPlayingSongName}
                            setNowPlaying={setNowPlaying}
                            nowPlaying={nowPlaying}
                            index={0}
                        />
                    </div>
                </div>
                <SongListWrapper>
                    <SongList section_label="Singles">
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                    </SongList>
                    <SongList section_label="Mixes">
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                    </SongList>
                </SongListWrapper>
                <Player
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    nowPlayingSongName={nowPlayingSongName}
                    setVolume={setVolume}
                    handleVolumeChange={handleVolumeChange}
                    currentPlaybackTime={currentPlaybackTime}
                    duration={duration}
                    onSeek={handleSeek}
                />
            </SectionWrapper>
            <audio
                src={nowPlaying != null ? songs[nowPlaying] : ""}
                /*src="/test.mp3"*/
                ref={audioEl}
                onEnded={() => handleTrackEnded()}
            ></audio>
        </article>
    );
}
