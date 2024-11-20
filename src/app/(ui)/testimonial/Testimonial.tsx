import styles from "./testimonial.module.css";

interface Props {
    name: string;
    description: string;
    service: string;
}

export default function Testimonial({ name, description }: Props) {
    return (
        <div className={styles.testimonial}>
            <header className={styles.testimonial__header}>
                <h4 className={styles.name}>{name}</h4>
            </header>
            <div
                className={styles.testimonial__description}
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></div>
        </div>
    );
}
