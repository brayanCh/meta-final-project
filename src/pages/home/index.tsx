import imageFood from '../../assets/humus.jpg';
import GLOBAL_STYLES  from '../../consts';

const colors = GLOBAL_STYLES.colors;

const styles = {
    container: {
        backgroundColor: colors.olive_gray,
        width: '100vw',
        height: '600px',
        paddingTop: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col_container: {
        width: '80%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'row',
    },
    first_column: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    
}

function Home()
{
    return (
        <div style={styles.container}>
            <main style={styles.col_container}>
                <div style={styles.first_column}>
                    <h1>Little Lemon</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in eros ultrices, imperdiet erat vel, pharetra risus. Curabitur at hendrerit felis, ac finibus tellus. Ut finibus vestibulum metus, eget tempus arcu bibendum in. Cras facilisis nunc sed ornare facilisis. Vivamus sagittis a urna sit amet laoreet. Maecenas non diam est.
                    </p>
                    <button>Reserve a table</button>
                </div>  
                <img src={imageFood} alt="reserve" className="reserve" />
            </main>
        </div>
    );
}

export default Home;
