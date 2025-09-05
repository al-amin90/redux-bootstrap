import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

const CoolCounter = () => {
    const dispatch = useAppDispatch()
    const {count} = useAppSelector((state) => state.counter)
    console.log(count);

    const handleIncrement = (amount: number) => {
        dispatch(increment({amount}))
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        marginLeft: '50rem',
    }}>
        <div style={{
            display: 'inline-block',
            padding: '2rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
        }}>
            <h2>Cool Counter</h2>
            <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</div>
            <button
                style={{
                    margin: '0 0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: '#fff',
                    color: '#6e8efb',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
                onClick={() => handleDecrement()}
            >
                - Decrement
            </button>
            <button
                style={{
                    margin: '0 0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: '#fff',
                    color: '#a777e3',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
                onClick={() => handleIncrement(5)}
            >
                + Increment 5
            </button>
            <button
                style={{
                    margin: '0 0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: '#fff',
                    color: '#a777e3',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
                onClick={() => handleIncrement(1)}
            >
                + Increment 
            </button>
        </div>
    </div>
);
};

export default CoolCounter;