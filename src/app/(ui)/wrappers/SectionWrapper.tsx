import styles from './wrappers.module.css';

interface Props{
    children: React.ReactNode;
    gap: number;
    id?: string;
}

export default function SectionWrapper({children, gap, id}: Props){
    return(
        <section id={id} className={`${styles['wrapper--section']}`} style={{"--gap": gap} as React.CSSProperties}>
            {children}
        </section>
    )
}