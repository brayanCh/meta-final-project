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
    title: {
        fontFamily: 'MarkaziMedium',
        color: colors.yellow,
        fontSize: '4rem',
        //backgroundColor: '#0f07',
        margin: 0,
    },
    paragraph: {
        color: '#ffffff',
        fontSize: '1.2rem',
        fontFamily: 'KarlaRegular',
        marginBottom: '40px',
        //backgroundColor: '#f007',
    },
    img: {
        width: '400px',
        borderRadius: '20px',
        objectFit: 'contain',
    },
    second_column: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '55%',
        backgroundColor: '#f000',
    },
    reserveButton: {
        backgroundColor: colors.yellow,
        color: colors.dark_gray,
        fontWeight: 'bold',
        fontFamily: 'KarlaBold',
        fontSize: '1.2rem',
        padding: '10px 20px',
        borderRadius: '10px',
        outline: 'none',
        border: 'none',
        textDecoration: 'none',
    },
    rest_content: {
        width: '100vw',
        height: '800px',
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blank_space: {
        color: '#555',
        fontFamily: 'KarlaBold',
    },
}

export default styles;
