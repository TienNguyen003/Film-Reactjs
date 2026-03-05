import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import '~/components/LibaralyLayout/grid.css';
import Header from './layouts/components/Header/Header';
import Load from './layouts/components/Load/Load';
import Footer from './layouts/components/Footer/footer';
import Error from './components/404/404';

function App() {
    const isValidPath = (path) => {
        return publicRoutes.some((route) => {
            const regex = new RegExp(`^${route.path.replace(/:\w+/g, '[^/]+')}$`);
            return regex.test(path);
        });
    };

    return (
        <Router>
            {/* <Load /> */}
            {isValidPath(window.location.pathname) && <Header />}
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            {isValidPath(window.location.pathname) && <Footer />}
        </Router>
    );
}

export default App;
