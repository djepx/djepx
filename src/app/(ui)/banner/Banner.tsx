/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./banner.module.css";

interface Props {
    title: string;
    cta: string;
    img_path: string;
}

export default function Banner({ title, cta, img_path }: Props) {
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

    return (
        <div className={styles.banner}>
            <Image
                src={img_path}
                className={`${styles.background__image}`}
                alt="DJ EPX's performing at a nightclub"
                width={1920}
                height={1080}
                priority={true}
                style={{
                    ["--background-position" as any]: scrollY,
                }}
            />
            <div className={styles.cta}>
                <div className={styles.cta__header}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.cta__blurb}>
                    <p>{cta}</p>
                </div>
                <Link href="/about" className="btn--banner">
                    Learn More
                </Link>
            </div>
        </div>
    );
}
