import hamburguerMenu from '../assets/hamburguer.png';
import littleLemonLogo from '../assets/LogoLittleLemon.png';
import { useState } from 'react';

const styles = {
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
    },
    logo: {
        height: '40px',
    }
}

function Navbar()
{
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <nav style={styles.container}>
            <img src={hamburguerMenu} alt="Menu" onClick={() => setShowMenu(!showMenu)} />
            <img src={littleLemonLogo} alt="main logo" />
            <h1>Navbar</h1>
        </nav>
    );
}

export default Navbar;
