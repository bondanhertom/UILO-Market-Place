import Navbar from '../navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (<>
        <Navbar />
        <Outlet />

    </>);
}

export default Layout; <>
    <Navbar />
    <Outlet />

</>