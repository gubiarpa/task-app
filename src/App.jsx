import { useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { TaskBanner } from './components/TaskBanner';

function App() {

    const [userName, setUserName] = useState('Billy');

    return (
        <>
            <TaskBanner userName={userName} />
            <Container />
        </>
    );
}

export default App;