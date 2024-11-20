import styles from './wrappers.module.css';

interface Props{
    children: React.ReactNode;
    page?: string;
}

export default function MainWrapper({children, page}: Props){
    return(
        <main className={`${styles['wrapper--main']} ${(page === "home") ? styles['main--home'] : ''}`}>
            {children}
        </main>
    )
}