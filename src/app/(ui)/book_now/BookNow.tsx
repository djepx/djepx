import Link from 'next/link';

import styles from './book.module.css';

export default function BookNow(){
    return(
        <div className={styles.book_now}>
            <Link href="/contact">BOOK NOW</Link>
        </div>
    )
}