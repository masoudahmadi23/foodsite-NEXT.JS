import Link from "next/link";
import styles from "./layout.module.css";

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">FoodBerger</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Next.js course | FoodBerger Project &copy;
            </footer>
        </>
    );
};

export default Layout;