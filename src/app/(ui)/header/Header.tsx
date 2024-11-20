"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Navigation from "@/app/(ui)/navigation/Navigation";

import styles from './header.module.css';

export default function Header(){
    const pathname = usePathname().replace("/", "");

    return(
        <header className={`${styles['header--main']} ${pathname === "" ? styles.home : styles.interior}`}>
            <Link href="/" className={styles.logo}><Image src="https://hundred.talkswebdevelopment.com/images/edwin/logo.png" alt="DJ EPX's Logo" width={200} height={67} /></Link>
            <Navigation />
            <Link href="/contact" className={styles.btn}>Book Now</Link>
        </header>
    )
}