import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './componentes/Header';


<React.StrictMode>
    <GlobalStyle/>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/favoritos" element={<App />} />
            </Routes>
        </BrowserRouter>
    <App />
    </React.StrictMode>