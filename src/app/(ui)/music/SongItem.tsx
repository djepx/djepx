import styles from './music.module.css';

export default function SongItem(){
    return(
        <div className={styles.song}>
            <p>play btn</p>
            <p>song name</p>
            <p>49:21</p>
        </div>
    )
}