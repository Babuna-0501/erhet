import './header.scss';
import { useHistory } from "react-router-dom";






export default function Header() {
  const history = useHistory();
  const routeChange = () =>{ 
  let path = `/`; 
  history.push(path);
  }


  return (
    <div className='header'>
        <div className='left'>
            <span onClick={routeChange}>Нүүр</span>
            <span>Бидний тухай</span>
            <span>Бизнесийн салбар</span>
            <span>Тогтвортой хөгжил</span>
            <span>Мэдээ мэдээлэл</span>
        </div>
        <div className='right'>
            <span>Ажлын байр</span>
            <span>Худалдан авалт </span>
        </div>
    </div>
  )
}
