import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import InkWell from './projects/InkWell/InkWell';
import CVCraft from './projects/cvcraft/CVCraft';
import ToDo from './projects/todo/ToDo';
import WordFall from './projects/wordfall/WordFall'
import TicTacToe from './projects/tictactoe/TicTacToe';
import Asset from './projects/asset/Asset'
import Library from './projects/library/Library'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inkwell' element={<InkWell />} />
                <Route path='/cvcraft' element={<CVCraft />} />
                <Route path='/todo' element={<ToDo />} />
                <Route path='/wordfall' element={<WordFall />} />
                <Route path='/tictactoe' element={<TicTacToe />} />
                <Route path='/asset' element={<Asset />} />
                <Route path='/library' element={<Library />} />
            </Routes>
        </Router>
    );
}

export default App;