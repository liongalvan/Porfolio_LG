import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>
                &lt;body&gt;
            </span>
            <Outlet/>
            <span className='tags botoom-tags'>
            &lt;body&gt;
            <br/>
            <span className='bottom-tag-html'></span>
            </span>
        </div>
    </div>
    )
}

export default Layout;
