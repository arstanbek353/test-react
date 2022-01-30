import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Filter from './components/filter/Filter'
import Home from './components/home/Home'
import Analytics from './components/analytics/Analytics'
import Customers from './components/customers/Customers'
import Employees from './components/employees/Employees'

function App() {

    return (
        <div className="App">
            <div className="App__sidebar">
                {<Sidebar />}
            </div>
            <div className="App__inner">
                <div className="App__header">
                    {<Header />}
                </div>
                <div className="App__filter">
                    {<Filter />}
                </div>
                <div className="App__content">
                    {
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                            <Route path={'/customers'} element={<Customers />} />
                            <Route path={'/employees'} element={<Employees />} />
                            <Route path={'/analytics'} element={<Analytics />} />
                        </Routes>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
