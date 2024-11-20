"use client";

import { useState, useRef, useEffect } from "react";

import FeaturedItem from "@/app/(ui)/music/FeaturedItem";
import Player from "@/app/(ui)/music/Player";
import SongItem from "@/app/(ui)/music/SongItem";
import SongList from "@/app/(ui)/music/SongList";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";
import SongListWrapper from "@/app/(ui)/wrappers/SongListWrapper";

interface AudioFile {
    url: string;
}

interface SongCover {
    url: string;
}

interface Songs {
    song_title: string;
    audio_file: AudioFile;
    song_cover: SongCover;
    song_artists: string;
    featured: boolean;
    id: number;
    index: number;
    category: string;
}

interface Props {
    songs: Songs[];
}

export default function PageContent({ songs }: Props) {
    const [isPlaying, setIsPlaying] = useState(false); // sets all play/pause functionality
    const [nowPlaying, setNowPlaying] = useState<number | null>(null); // the index of the selected song
    const [nowPlayingSongName, setNowPlayingSongName] = useState("");
    const [songCover, setSongCover] = useState("");
    const [songArtists, setSongArtists] = useState("");
    const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
    const [duration, setDuraton] = useState(0); // the song length of currently playing file
    const [volume, setVolume] = useState(0.05);

    const audioEl = useRef<HTMLAudioElement>(null);

    // separate the song list into their respective sections, but keeping the original array for playlist purposes
    const featured_songs = songs.filter(
        (song: Songs) => song.featured === true
    );

    const singles = songs.filter(
        (song: Songs) => song.featured != true && song.category === "single"
    );

    const mixes = songs.filter(
        (song: Songs) => song.featured != true && song.category === "mix"
    );

    // set the default audio level so it doesn't kill people
    useEffect(() => {
        if (audioEl.current) {
            audioEl.current.volume = 0.05;
        }
    }, []);

    // volume slider
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);

        if (audioEl.current) {
            audioEl.current.volume = volume;
        }
    };

    // seek bar
    const handleSeek = (time: number) => {
        if (audioEl.current) {
            audioEl.current.currentTime = time;
        }
    };

    // when a track ends, what should we do
    function handleTrackEnded() {
        if (nowPlaying === songs.length - 1) {
            setIsPlaying(false);
        } else if (nowPlaying != null) {
            setNowPlayingSongName(songs[nowPlaying + 1].song_title);
            setSongCover(songs[nowPlaying + 1].song_cover.url);
            setSongArtists(songs[nowPlaying + 1].song_artists);
            setNowPlaying(nowPlaying + 1);
        }
    }

    // play/pause handler
    useEffect(() => {
        if (isPlaying && audioEl.current) {
            audioEl.current.play();
        } else if (audioEl.current) {
            audioEl.current.pause();
        }
    });

    // tracks the current playback time of song
    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioEl.current) {
                setCurrentPlaybackTime(audioEl.current.currentTime);
            }
        };

        const currentAudioEl = audioEl.current;
        if (audioEl.current) {
            audioEl.current.addEventListener("timeupdate", handleTimeUpdate);
        }

        return () => {
            if (currentAudioEl) {
                currentAudioEl.removeEventListener(
                    "timeupdate",
                    handleTimeUpdate
                );
            }
        };
    }, []);

    // get the duration of audio file being played ("new Audio" might not be needed)
    useEffect(() => {
        if (nowPlaying != null) {
            const audio = new Audio(songs[nowPlaying].audio_file.url);
            audio.onloadedmetadata = () => {
                setDuraton(audio.duration);
            };
        }
    }, [nowPlaying]); // it says songs needs to be in the dependency array, but I don't think so, that array should never be updated while a user is on the page // ie: the index changes but not its position in the array // songs[0] is the same unless the page is remounted, but that value "0" will change and should trigger this effect unless I'm an idiot

    return (
        <article>
            <SectionWrapper gap={50}>
                <SectionHeader title="MUSIC" showSVG={true} />
                <div className="music--featured">
                    <div className="featured__items">
                        {featured_songs.length > 0 ? (
                            featured_songs.map((song: Songs) => (
                                <FeaturedItem
                                    key={song.id}
                                    name={song.song_title}
                                    album_cover_link={song.song_cover.url}
                                    artists={song.song_artists}
                                    isPlaying={isPlaying}
                                    setIsPlaying={setIsPlaying}
                                    setNowPlayingSongName={
                                        setNowPlayingSongName
                                    }
                                    setSongArtists={setSongArtists}
                                    setSongCover={setSongCover}
                                    setNowPlaying={setNowPlaying}
                                    nowPlaying={nowPlaying}
                                    index={song.index}
                                />
                            ))
                        ) : (
                            <p>no featured songs</p>
                        )}
                    </div>
                </div>
                <SongListWrapper>
                    <SongList section_label="Singles">
                        {singles.length > 0 ? (
                            singles.map((song: Songs) => (
                                <SongItem
                                    key={song.id}
                                    name={song.song_title}
                                    album_cover_link={song.song_cover.url}
                                    artists={song.song_artists}
                                    isPlaying={isPlaying}
                                    setIsPlaying={setIsPlaying}
                                    setNowPlayingSongName={
                                        setNowPlayingSongName
                                    }
                                    setSongArtists={setSongArtists}
                                    setSongCover={setSongCover}
                                    setNowPlaying={setNowPlaying}
                                    nowPlaying={nowPlaying}
                                    index={song.index}
                                />
                            ))
                        ) : (
                            <p>no singles</p>
                        )}
                    </SongList>
                    <SongList section_label="Mixes">
                        {mixes.length > 0 ? (
                            mixes.map((song: Songs) => (
                                <SongItem
                                    key={song.id}
                                    name={song.song_title}
                                    album_cover_link={song.song_cover.url}
                                    artists={song.song_artists}
                                    isPlaying={isPlaying}
                                    setIsPlaying={setIsPlaying}
                                    setNowPlayingSongName={
                                        setNowPlayingSongName
                                    }
                                    setSongArtists={setSongArtists}
                                    setSongCover={setSongCover}
                                    setNowPlaying={setNowPlaying}
                                    nowPlaying={nowPlaying}
                                    index={song.index}
                                />
                            ))
                        ) : (
                            <p>no mixes</p>
                        )}
                    </SongList>
                </SongListWrapper>
                <Player
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    nowPlayingSongName={nowPlayingSongName}
                    songCover={songCover}
                    songArtists={songArtists}
                    setVolume={setVolume}
                    handleVolumeChange={handleVolumeChange}
                    currentPlaybackTime={currentPlaybackTime}
                    duration={duration}
                    onSeek={handleSeek}
                />
            </SectionWrapper>
            <audio
                src={nowPlaying != null ? songs[nowPlaying].audio_file.url : ""}
                /*src="/test.mp3"*/
                ref={audioEl}
                onEnded={() => handleTrackEnded()}
            ></audio>
        </article>
    );
}
