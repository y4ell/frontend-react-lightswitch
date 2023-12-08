import React from 'react';
import './App.css';

function App() {
    const [light, setLight] = React.useState(false);
    console.log(light)

    return (
        <main className={light === true ? 'on' : 'off'}>
            <section>
                <div className="dot"></div>
                <button type="button"
                        onClick={() => setLight(!light)}>
                    {light === false ? 'Turn on' : 'Turn off'}
                </button>
            </section>
        </main>

    );
}

export default App;
