import hamburguerMenu from '../assets/hamburguer.png';
import littleLemonLogo from '../assets/LogoLittleLemon.png';
import { useState } from 'react';

const styles = {
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        position: 'fixed',
        top: '0',
        right: '0',
        width: '100%',
    },
    logo: {
        height: '40px',
    },
    menu: {
        height: '50px',
        width: '50px',
        position: 'absolute',
        left: '10px',
        backgroundColor: '#0000',
    },
    menuImg: {
        height: '100%',
        resizeMode: 'contain',
    },
    pageLogo: {
        height: '50px',
        resizeMode: 'contain',
        position: 'absolute',
    },
}

function Navbar()
{
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <nav style={styles.container}>
            <button style={styles.menu} onClick={() => setShowMenu(!showMenu)}>
                <img src={hamburguerMenu} alt="Menu" style={styles.menuImg} />
            </button>
            <img style={styles.pageLogo} src={littleLemonLogo} alt="main logo" />
            <h1>Navbar</h1>
        </nav>
    );
}

export default Navbar;
