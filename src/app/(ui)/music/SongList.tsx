import styles from './music.module.css';

interface Props{
    section_label: string;
    children: React.ReactNode;
}

export default function SongList({section_label, children}: Props){
    return(
        <div className={styles.songs__list}>
            <header className={styles.list__header}><h2>{section_label}</h2></header>
            <div>
                {children}
            </div>
        </div>
    )
}