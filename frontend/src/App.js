import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [person, setPerson] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:5000')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPerson(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="App">
            {person && (
                <>
                    <h1>Who are you? - {person.name}</h1>
                    <h2>This is true? - {person.exist.toString()}</h2>
                </>
            )}
        </div>
    );
}

export default App;
