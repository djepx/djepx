import styles from './wrappers.module.css';

interface Props{
    children: React.ReactNode;
    gap: number;
    type: "photobooth" | "general";
}

export default function GalleryWrapper({children, gap, type}: Props){
    return(
        <section className={(type === "photobooth") ? `${styles['wrapper--gallery__wedding']}` : `${styles['wrapper--gallery__general']}`} style={{"--gap": gap} as React.CSSProperties}>
            {children}
        </section>
    )
}