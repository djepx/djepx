/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from './slider.module.css';

import { useEffect, useState } from "react";

export default function Slider(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function setPosition() {
            setScrollY(window.scrollY);
        }
        function watchScroll() {
            window.addEventListener("scroll", setPosition);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", setPosition);
        };
    }, [scrollY]);

    return(
        <div className={styles.slider__wrapper} style={{["--slider-position" as any]: scrollY,}}>
            <div className={styles.slider}>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
                <h5>#TeamEPX</h5>
            </div>
        </div>
    )
}