import { Search } from '@material-ui/icons'
import './navbar.scss';

import Logo from '../../assets/logo.png'

export default function Navbar() {
  return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo}/>
            </div>
            <div className='search'>
               <Search className='icon'/>
               <input type="text" />
            </div>
        </div>
  )
}
