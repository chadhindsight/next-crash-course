import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';
import styles from '../styles/Layout.module.css';
// Serves as the main hub
const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout