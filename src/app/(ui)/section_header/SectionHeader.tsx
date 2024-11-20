import AudioSVG from "@/app/(ui)/audio_svg/AudioSVG";

import styles from './sectionheader.module.css';

interface Props{
    title: string;
    size?: string;
    showSVG: boolean;
}

export default function SectionHeader({title, size, showSVG}: Props){
    const sizing = (size) ? size : "";
    const displaySVG = (showSVG === true) ? "show" : "hide";
    return(
        <header className={`${styles['header--section']} ${styles[sizing]} ${styles[displaySVG]}`}>
            <AudioSVG />
            <h1>{title}</h1>
            <AudioSVG />
        </header>
    )
}