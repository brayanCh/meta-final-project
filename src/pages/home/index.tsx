import imageFood from '../../assets/humus.jpg';
import Navbar from '../../bar';
import styles from './styles';
import { Link } from 'react-router-dom';

function Home()
{

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <main style={styles.col_container}>
                    <div style={styles.first_column}>
                        <h1 style={styles.title}>Little Lemon</h1>
                        <p style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in eros ultrices, imperdiet erat vel, pharetra risus. Curabitur at hendrerit felis, ac finibus tellus. Ut finibus vestibulum metus, eget tempus arcu bibendum in.
                        </p>
                        <button style={styles.reserveButton}>Reserve a table</button>
                    </div>  
                    <div style={styles.second_column}>
                        <img style={styles.img} src={imageFood} alt="reserve" className="reserve" />
                    </div>
                </main>
            </div>
            <div style={styles.rest_content}>
                <h1 style={styles.blank_space}>blank space</h1>
            </div>
        </>
    );
}

export default Home;
