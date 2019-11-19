import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <div style={{ height: '100vh' }}></div>
            <Footer />
        </>
    );
};

export default App;
