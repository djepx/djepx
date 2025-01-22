"use client";

import Link from "next/link";

import styles from "./pagination.module.css";

interface Props {
    total: number;
    current: number;
    start: number;
    album_id: string;
}

export default function GalleryPagination({
    current,
    total,
    start,
    album_id,
}: Props) {
    // need to figure out how many pages there will be
    // total / 100

    const pages = Math.ceil(total / 100);
    const results_total = current < pages ? current * 100 : total;
    const page_links = [];
    for (let i = 1; i <= pages; i++) {
        const active = i === current ? "active" : "";
        page_links.push(
            <div
                className={`${styles.link__wrapper} ${styles[active]}`}
                key={i}
            >
                <Link
                    className={`${styles.pagination__link}`}
                    href={`/gallery/${album_id}?page=${i}`}
                >
                    {i}
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.pagination__wrapper}>
            {/*<p>
                Current: {current} || Pages: {pages} Total: {total} || Start:{" "}
                {start}
            </p>*/}
            <div className={styles.links__wrapper}>{page_links}</div>
            <div>
                {current > pages ? (
                    ""
                ) : (
                    <p>
                        Results: {start} - {results_total} of {total}
                    </p>
                )}
            </div>
        </div>
    );
}
