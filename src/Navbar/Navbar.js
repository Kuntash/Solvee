import Navitem from './Navitem';
const Navbar = () => {
    const navItem = ['Explore', 'Questions', 'Rating', 'Notification', 'Settings'];
    return (
        <nav className = "nav">
            <div className = "nav-brand"> Logo</div>
            {
                navItem.map((item, i) => <Navitem key = {i} title = {item} />)
            }
            <p>version 1.0.0</p>
        </nav>)
}

export default Navbar;

