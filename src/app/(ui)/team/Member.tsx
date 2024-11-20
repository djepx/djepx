/* eslint-disable @next/next/no-img-element */

import styles from "./team.module.css";

interface Props {
    name: string;
    headshot: string;
    bio: string;
    featured: boolean;
}

export default function Member({ name, headshot, bio, featured }: Props) {
    const featured_class = featured === true ? "featured" : "";
    return (
        <div className={`${styles.member} ${styles[featured_class]}`}>
            <div className={`${styles["member__headshot"]}`}>
                <img src={headshot} alt="" />
            </div>
            <div className={`${styles["member__details"]}`}>
                <div className={`${styles["member__labels"]}`}>
                    <h4>{name}</h4>
                    {featured === false ? (
                        <h5 className={styles.label}>Weddings Only</h5>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={`${styles["member__bio"]}`}>
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    );
}
