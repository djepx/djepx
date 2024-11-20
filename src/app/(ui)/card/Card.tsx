import Image from "next/image";
import styles from "./card.module.css";

interface Props {
    club_name: string;
    location: string;
    background_path: string;
    next_appearances: string;
    venue_link?: string;
}

export default function Card({
    club_name,
    location,
    background_path,
    next_appearances,
}: Props) {
    const next = next_appearances.split(",");

    return (
        <div className={styles.card}>
            <Image
                className={styles.card__image}
                src={background_path}
                alt={`Image of ${club_name}`}
                width={500}
                height={750}
            />
            <div className={styles.card__overlay}></div>
            <div className={styles.card__details}>
                <h5 className={styles.card__name}>{club_name}</h5>
                <h5 className={styles.card__location}>{location}</h5>
            </div>
            <div className={styles.next_appearance}>
                <p>
                    {next.length > 1 ? "Next Appearances:" : "Next Appearance:"}
                </p>
                {next.map((next: string, index: number) => (
                    <p key={index}>{next}</p>
                ))}
            </div>
        </div>
    );
}
