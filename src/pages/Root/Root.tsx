import './root.css';

import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';

function Root() {
    return(
        <>
            <Navbar />
            <div id="page-content">
                <Outlet />
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Nicolas MEZENEN &mdash; code source dispo sur mon <a className="link" href="https://github.com/Paanolf">Github</a></p>
            </aside>
            </footer>
        </>
    )
}

export default Root;