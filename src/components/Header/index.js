import {Link} from 'react-router-dom'

const Header = () => (
<>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/more">More</Link></li>
</ul>
</>
)
export default Header