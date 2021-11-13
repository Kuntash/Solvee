import Navitem from './Navitem';
import Profile from './Profile';
const Navbar = (props) => {
    const navItem = ['Explore', 'Post', 'Leaderboard', 'Notification', 'Settings'];
    return (
        <nav className = "nav">
            <Profile />
            {
                navItem.map((item, i) => 
                <Navitem 
                key = {i} 
                icon = {item} 
                title = {item} />)
            }
            <p>version 1.0.0</p>
        </nav>)
}

export default Navbar;

