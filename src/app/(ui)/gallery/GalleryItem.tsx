/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import Image from "next/image";

import styles from "./gallery.module.css";

interface Props {
    img_object: any;
    link_path?: string;
    name?: string;
    date?: string;
}

export default function GalleryItem({
    name,
    date,
    link_path,
    img_object,
}: Props) {
    return (
        <div className={styles.gallery__item}>
            {name ? (
                <>
                    <div className={styles.img__wrapper}>
                        <Link href={`/gallery/photobooth/${link_path}`}>
                            <Image
                                src={
                                    img_object.provider === "local"
                                        ? `http://127.0.0.1:1338${img_object.url}`
                                        : `${img_object.url}`
                                }
                                alt={img_object.alternativeText}
                                width={300}
                                height={240}
                            />
                        </Link>
                    </div>
                    <div className={styles.gallery__details}>
                        <h4 className={styles.gallery__name}>{name}</h4>
                        <h5 className={styles.gallery__date}>{date}</h5>
                    </div>
                </>
            ) : (
                <div className={styles.img__wrapper}>
                    <Image
                        src={
                            img_object.provider === "local"
                                ? `http://127.0.0.1:1338${img_object.url}`
                                : `${img_object.url}`
                        }
                        alt={img_object.alternativeText}
                        width={300}
                        height={240}
                    />
                </div>
            )}
        </div>
    );
}
