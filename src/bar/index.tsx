//import hamburguerMenu from '../assets/hamburguer.png';
import littleLemonLogo from '../assets/LogoLittleLemon.png';
//import { useState } from 'react';
import styles from './styles';
import { Link } from 'react-router-dom';


function Navbar()
{
    //    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <>

            {/* @ts-ignore */}
            <nav style={styles.container}>
                {/*
            <button style={styles.menu} onClick={() => setShowMenu(!showMenu)}>
                <img src={hamburguerMenu} alt="Menu" style={styles.menuImg} />
            </button>
                  */}
            {/* @ts-ignore */}
                <Link style={styles.img_link} to={"/"} style={styles.link}>
                    <img style={styles.pageLogo} src={littleLemonLogo} alt="main logo" />
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
