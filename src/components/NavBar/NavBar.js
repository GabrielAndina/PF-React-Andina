import CartWidget  from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
        <h3>Pumas Store</h3>
      </Link>
      <div className='Categories'>
        <NavLink to={`/category/camisetas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
        <NavLink to={`/category/shorts`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
        <NavLink to={`/category/otros`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Otra Indumentaria</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;