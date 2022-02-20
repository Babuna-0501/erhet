import './news.scss';
import { useHistory } from "react-router-dom";
import img1 from '../../assets/news1.png'
import img2 from '../../assets/news2.png'
import img3 from '../../assets/news3.png'

const News = () => {

    const history = useHistory();
    const routeChange = () =>{ 
    let path = `/all`; 
    history.push(path);
    }
  return (
    <div className='news'>
        <div className='top'>
            <h2>Мэдээ</h2>
            <h5 onClick={routeChange}>Бүгдийг үзэх</h5>
        </div>
        <div className='bottom'>
            <div>
                <img loading='lazy' src={img1} />
                <span>АЛТАН ОХИН” М.АНХЦЭЦЭГ
                Монгол эмэгтэйн тэсвэр хатуужил, хүч чадлыг дэлхийд батлан харуулсан гавьяат тамирчин М.Анхцэцэгийн хаа ч нээгээгүй ховор түүхийг өгүүлсэн “АЛТАН ОХИН” нэвтрүүлгийг үзэгч та бүхэнд өргөн барьж байна.
                </span>
            </div>
            <div>
                 <img loading='lazy' src={img2} />
                <span>
                Монголын хүндийн өргөлтийн холбооны 65 жилийн ойн хүндэтгэлийн арга хэмжээн дээр Х.МАНДАХБАЯР захиралтай ЭРХЭТ МОНГОЛ ГРУППТ тус холбооноос “АЛТАН ТҮНШ” хэмээх хүндлэл үзүүлж, ДЭЛХИЙН АВАРГА М.АНХЦЭЦЭГ-ийн дүр бүхий хүрэл ЦОМ хүртээлээ 
                </span>
            </div>
            <div>
                 <img loading='lazy' src={img3} />
                <span>
                “Grand Residence” шинэ үеийн цогцолбор хороолол I, II ээлжийн зургаан блок орон сууцаа худалдаанд гаргаж, нээлтийн урамшуулал болгон 1 м.кв-ын үнээ 1.880.000 төгрөгөөс эхэлж буйгаа зарлалаа
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default News