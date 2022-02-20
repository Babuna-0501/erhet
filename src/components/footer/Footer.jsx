import './footer.scss';
import { useHistory } from "react-router-dom";
import { Facebook, LinkedIn, Twitter, YouTube } from '@material-ui/icons';

const Footer = () => {

    const history = useHistory();
    const routeChange = () =>{ 
    let path = `/society`; 
    history.push(path);
    }

  return (
    <div className='footer'>
        <div className='top'>
            <span>
               <h3>ГРУППИЙН ТУХАЙ</h3>
               <ul>
                   <li>Танилцуулга</li>
                   <li>Удирдлагын баг</li>
                   <li>Бидний амжилт</li>
               </ul>
            </span>
            <span>
                <h3>МЭДЭЭ МЭДЭЭЛЭЛ</h3>
                <ul>
                   <li onClick={routeChange}>Нийгмийн хариуцлага</li>
                   <li>Мэдээ</li>
                   <li>Ярилцлага</li>
               </ul>
            </span>
            <span>
                <h3>ХОЛБОО БАРИХ</h3>
                <ul>
                   <li>Салбар компаниуд</li>
                   <li>Хаяг байршил, утас</li>
                   <li>Санал хүсэлт</li>
               </ul>
            </span>
        </div>
        <div className='bottom'>
            <span>
                <p> © 2022 эрхэт монгол групп ХХК</p>
            </span>
            <span>
               <Twitter className='icon'/>
               <Facebook className='icon'/>
               <YouTube className='icon'/>
               <LinkedIn className='icon'/>
            </span>
            <span>
                <p>Холбоо барих</p>
            </span>
        </div>
    </div>
  )
}

export default Footer