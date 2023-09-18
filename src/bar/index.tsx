import hamburguerMenu from '../assets/hamburguer.png';
import littleLemonLogo from '../assets/LogoLittleLemon.png';
import { useState } from 'react';
import styles from './styles';


function Navbar()
{
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <nav style={styles.container}>
            <button style={styles.menu} onClick={() => setShowMenu(!showMenu)}>
                <img src={hamburguerMenu} alt="Menu" style={styles.menuImg} />
            </button>
            <img style={styles.pageLogo} src={littleLemonLogo} alt="main logo" />
        </nav>
    );
}

export default Navbar;
