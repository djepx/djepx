/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ModalImage from "react-modal-image";
import Link from "next/link";

import deleteAfterString from "@/app/(utility)/strings";

import styles from "./gallery.module.css";

interface Props {
    img_object: any;
    link_path?: string;
    name?: string;
    date?: string;
    interior: boolean;
    count?: number;
}

export default function GalleryItem({
    name,
    date,
    link_path,
    img_object,
    interior,
    count,
}: Props) {
    let large_image,
        medium_image = "";

    if (interior === true) {
        const image_url_base = deleteAfterString(
            img_object.ThumbnailUrl,
            "/Th/"
        );

        if (img_object.OriginalHeight / img_object.OriginalWidth > 1) {
            medium_image = image_url_base.replace("/Th/", "/XL/");
            medium_image = medium_image + img_object.FileName + "-XL.jpg";
        } else {
            medium_image = image_url_base.replace("/Th/", "/S/");
            medium_image = medium_image + img_object.FileName + "-S.jpg";
        }

        large_image = image_url_base.replace("/Th/", "/X5/");
        large_image = large_image + img_object.FileName + "-X5.jpg";
    }

    const display_date = date ? new Date(date) : undefined;

    return (
        <div className={styles.gallery__item}>
            {interior === false ? (
                <>
                    <div className={styles.img__wrapper}>
                        <Link href={`/gallery/${link_path}?page=1`}>
                            <img src={img_object} alt={name} />
                        </Link>
                    </div>
                    <div className={styles.gallery__details}>
                        <div>
                            <h4 className={styles.gallery__name}>{name}</h4>
                            <h5>{count} images</h5>
                        </div>
                        <div className={styles.album__details}>
                            <h5 className={styles.gallery__date}>
                                {display_date?.toLocaleDateString()}
                            </h5>
                        </div>
                    </div>
                </>
            ) : (
                <div
                    className={`${styles.img__wrapper} ${styles.interior__img}`}
                >
                    <ModalImage small={medium_image} large={large_image} />
                    {/*<a href={large_image} target="_blank">
                        <img src={medium_image} alt="" loading="lazy" />
                    </a>*/}
                </div>
            )}
        </div>
    );
}
