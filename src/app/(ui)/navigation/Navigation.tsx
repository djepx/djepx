"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

import styles from './navigation.module.css';

export default function Navigation(){

    const pathname = usePathname().replace("/", "");

    const [mobileNav, setMobileNav] = useState<string | null>(null);

    function toggleMobileNav() {
        if (mobileNav === null) {
            setMobileNav("active");
        } else {
            setMobileNav(null);
        }
    }

    return(
        <>
            <nav className={`${styles['nav--main']} ${styles["mobile--" + mobileNav]}`}>
                <Link onClick={toggleMobileNav} href="/services" className={`${pathname === "services" ? styles.active : ""}`}>Services</Link>
                <Link onClick={toggleMobileNav} href="/music" className={`${pathname === "music" ? styles.active : ""}`}>Music</Link>
                <Link onClick={toggleMobileNav} href="/about" className={`${pathname === "about" ? styles.active : ""}`}>About</Link>
                <Link onClick={toggleMobileNav} href="/gallery" className={`${pathname.startsWith("gallery") === true || pathname === "gallery" ? styles.active : ""}`}>Gallery</Link>
                <Link onClick={toggleMobileNav} href="/contact" className={`${pathname === "contact" ? styles.active : ""}`}>Contact</Link>
            </nav>
            <div className={`${styles.mobile__btn} ${styles["btn--" + mobileNav]}`} onClick={toggleMobileNav}>
                <div className={styles.hamburger}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </>
    )
}