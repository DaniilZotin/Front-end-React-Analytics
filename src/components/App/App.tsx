import React from 'react'
import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Dashboard from '../../pages/Dashboard/Dashboard';
import About from '../../pages/About/About';
import AdDetailPage from '../../pages/AdDetail/AdDetail';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';


const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<main className='main-content'>
				<Routes>
					<Route path='/' element={<Navigate to='/home' />} />
					<Route path='/home' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/about' element={<About />} />
					<Route path='/ad/:id' element={<AdDetailPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</main>
		</Router>
	)
}

export default App;
