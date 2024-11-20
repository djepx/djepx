import styles from './wrappers.module.css';

interface Props{
    children: React.ReactNode;
}

export default function SongListWrapper({children}: Props){
    return(
        <div className={`${styles['wrapper--song_list']}`}>
            {children}
        </div>
    )
}