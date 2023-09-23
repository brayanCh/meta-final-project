import {useState} from 'react';
import Navbar from '../../bar'
import GLOBAL_STYLES  from '../../consts';
//import cakeImg from '../../assets/cake.jpg';

const colors = GLOBAL_STYLES.colors;

const styles = {
    first_section: {
        backgroundColor: colors.olive_gray,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '70px',
        paddingBottom: '100px',
        paddingLeft: '20%',
        paddingRight: '20%',
        alignItems: 'center',
    },
    yellow_title: {
        fontFamily: 'MarkaziMedium',
        color: colors.yellow,
        fontSize: '2rem',
        //backgroundColor: '#0f07',
        marginTop: 30,
        marginBottom: 0,
    },
    white_label: {
        fontFamily: 'KarlaBold',
        color: '#ffffff',
        fontSize: '1.3rem',
        //backgroundColor: '#0f07',
    },
    paragraph_first_sec: {
        color: '#ffffff',
        fontSize: '1.2rem',
        fontFamily: 'KarlaRegular',
        //backgroundColor: '#f007',
    },
    input_base: {
        backgroundColor: '#ffffff',
        border: '1px solid #333',
        borderRadius: '12px',
        width: '450px',
        height: '40px',
        color: '#333',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    img: {
        width: '400px',
        borderRadius: '20px',
        objectFit: 'contain',
    },
    button: {
        fontFamily: 'KarlaBold',
        color: '#000',
        fontSize: '1rem',
        backgroundColor: colors.yellow,
        borderRadius: '12px',
        padding: '10px',
        marginTop: '40px',
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}
const checkEmpty = (value: string) : boolean => value === '';

const appendIfEmpty = (val: string, message: string, arr: Array<string>) => checkEmpty(val) ? arr.concat(message) : arr;

function Reservation ()
{
    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [amountOfTables, setAmountOfTables] = useState<number>(0);
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const onSubmit = (e: any) : void => {

        let errors : Array<string> = [];
        e.preventDefault();
        
        errors = appendIfEmpty(date, '-Date is empty', errors);
        errors = appendIfEmpty(time, '-Time is empty', errors);
        errors = appendIfEmpty(amountOfTables === 0 ? '' : 'else', '-Amount of tables is empty', errors);
        errors = appendIfEmpty(name, '-Name is empty', errors);
        errors = appendIfEmpty(email, '-Email is empty', errors);

        if (errors.length > 0) {
            const message = 'The Reservation could not be done: \n' +errors.join('\n');
            alert(message);
            return;
        }
        alert('The Reservation was done successfully!');
    };

    return (
        <>
            <Navbar />
            <section style={styles.first_section}>
                <h1 style={styles.yellow_title}>Reserve a table</h1>
                <div>
                    {/*<img src={cakeImg} style={styles.img}/> */}
                    <p style={styles.paragraph_first_sec}>We need some details about the reservation.</p>
                </div>
                <form onSubmit={onSubmit} style={styles.col}>
                    <h3 style={styles.white_label}>Date</h3>
                    <input value={date} onChange={(t) => setDate(t.currentTarget.value)} type="date" style={styles.input_base}/>
                    <h3 style={styles.white_label}>Time</h3>
                    <input value={time} onChange={(t) => setTime(t.currentTarget.value)} type="time" style={styles.input_base}/>
                    <h3 style={styles.white_label}>Amount of tables</h3>
                    <input value={amountOfTables} onChange={(t) => setAmountOfTables(Number(t.currentTarget.value))} type="number" style={styles.input_base}/>
                    <h3 style={styles.white_label}>Your name</h3>
                    <input value={name} onChange={(t) => setName(t.currentTarget.value)} type="text" style={styles.input_base}/>
                    <h3 style={styles.white_label}>Your email adress</h3>
                    <input value={email} onChange={(t) => setEmail(t.currentTarget.value)} type="email" style={styles.input_base}/>
                    <h3 style={styles.white_label}>Your phone number (optional)</h3>
                    <input type="text" style={styles.input_base}/>

                    <button style={styles.button}>
                        Reserve
                    </button>
                </form>
            </section>
        </>
    )
}

export default Reservation;
