import './society.scss';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import img from '../../assets/society-bg.png'

const Society = () => {
  return (
    <div className='society'>
             <Navbar/>
             <Header/> 
        <div className='bg'>
            <img src={img} alt="" />
        </div>
        <div className='s-wrapper'>
            <h2>НИЙГМИЙН ХАРИУЦЛАГА</h2>
            <ul>
                <li>	“Эрхэт монгол” ХХК нь байгуулагдсан цагаасаа ажилчдынхаа нийгмийн асуудалд онцгойлон анхаарч ирсэн баялаг түүхтэй. Тухайлбал, 2005 оноос хойш нийт 30 гаруй ажилтнаа тохилог орон сууцтай болгосон нь бизнесийн байгууллагууд тэр дундаа хэвлэл мэдээллийн салбарынханд сайн жишиг болсон.</li>
                <li>Өнгөрсөн хориод жилийн хугацаанд “Эрхэт Монгол” ХХК нь олон тооны уран бүтээлч, тамирчдыг ивээн тэтгэж хэрэгтэй цагт нь бодитой дэмжлэг үзүүлж чаддаг итгэлт хамтрагч нь болж чадсан. Зөвхөн их спортын төрөлд бус төр засгаас хамгийн бага дэмжлэг хүртдэг экстрим спорт, шинэ төрлүүдийг дэмждэгээрээ “Эрхэт монгол” ХХК олонд нэртэй. Тэдгээрээс заримыг дурдвал 2005, 2006 онуудад дэлхийн дээвэр Эверестийн оргилд нэг жилийн дотор хоёр удаа амжилттай дайралт хийж бахдам амжилт гаргасан МУГТ Г.Өсөхбаяр, хүндийг өргөлтийн тамирчин “Токио-2020” олимпийн наадмын тусгай байрын шагналт МУГТ М.Анхцэцэг, “Токио-2020” паралимпийн Алтан медальт МУГТ Э.Содномпилжээ, Хэт холын зайн гүйлтийн тамирчин Б.Буджаргал гэх мэт тамирчдыг нэр дурдаж болно.</li>
                <li>Байгаль хамгааллын чиглэлээр олон тооны ажил зохион байгуулснаас гадна “Байгаль хамгаалах говийн иргэдийн санаачилга” ТББ-ын үйл ажиллагааг дэмжиж ажилласан. Тус байгууллага нь 2019 онд Өмнөговь аймагт явагдсан Тост тосон бумбын нурууг хамгаалах жишиг тэмцэл, Монгол улсын 21 аймагт зохион байгуулагдсан “Байгаль эх хариуцлагатай уул уурхай” үндсэний хэлэлцүүлэг, Төрийн ордонд явагдсан “Байгаль эх хариуцлагатай уул уурхай” үндэсний чуулган, “Экологийн цаг” теле хэлэлцүүлгүүдийг зохион байгуулж байгаль хамгаалах нөлөөллийн хамгийн үр дүнтэй алхамуудыг хэрэгжүүлсэн байгууллага юм. </li>
                <li>Их дээд сургуульд элсэгчдэд зориулсан “Шинэ алхам” товхимлыг жил бүр уламжлал болгон хэвлүүлж хүүхэд багачуудад оюуны хөрөнгө оруулалт хийн үнэгүй тарааж ирсэн.</li>
                <li>Өмнөговь аймгийн Оюутны холбооны үйл ажиллагааг дэмжиж, жил бүр тогтмол явагддаг арга хэмжээнүүдийг ивээн тэтгэж ирсэн.</li>
                <li>2017 оны JCI байгууллагын чуулганы ивээн тэтгэгчээр оролцсон.</li>
                <li>Хүн төрөлхтний эв нэгдлийн бэлгэ тэмдэг “Токио-2020” олмпийн наадмын шууд дамжуулалтын “Мөнгөн ивээн тэтгэгч”-ээр ажилласан.</li>
                <li>“Токио-2020” олимпийн наадмыг сурвалжлах багт өөрийн зардлаар сэтгүүлчдээ илгээж тэмцээн уралдааны талаарх мэдээ, мэдээллийг цаг алдалгүй хүлээн авах боломжийг бүрдүүлсэн.</li>
                <li>Монгол Улсын Ерөнхийлөгч У.Хүрэлсүхийн санаачилсан “Тэрбум мод" тарих үндэсний хөдөлгөөнд “Эрхэт Монгол” групп нэгдэж, “Сэлбэ” олон улсын хүүхдийн зуслан, "Grand Marshal luxury villas" цогцолбор хотхоны төслийн талбайд нийт 35.000 мод тарих ажлыг 2021 оны аравдугаар сарын 9-нд буюу шинийн 3-ны дашням, балжиннямтай билэгт сайн өдөр эхлүүллээ.</li>
                <li>"Токио-2020" олимпийн наадмын шууд дамжуулалтын "Мөнгөн ивээн тэтгэгч"-ээр ажиллаж, олимпийн наадмын шагналт байрт шалгарсан гавьяат тамирчин М.Анхцэцэгт "Grand Marshal luxury villas" хотхонд гурван өрөө орон сууц бэлэглэж, тэтгэлэгт цалин, Олон улс, тив, дэлхийн аваргын тэмцээний санхүүжилтээр ивээн тэтгэх гэрээ байгуулав. </li>
                <li>Монголын хүндийг өргөлтийн холбоонд 10 сая, гавьяат тамирчин М.Анхцэцэгийн дасгалжуулагчид таван сая төгрөгийн дэмжлэг үзүүллээ. </li>
                <li>"Токио-2020" паралимпын алт, "Рио 2016" паралимпын наадмын хүрэл мeдальт, дэлхийн хошой аварга, дэлхийн рeкорд амжилтын эзэн, гавьяат тамирчин Э.Содномпилжээд "Grand Marshal luxury villas" дөрвөн улирлын тансаг зэрэглэлийн хотхонд Таун хаус бэлэглэв.</li>
                <li>Гавьяат тамирчин Э.Содномпилжээгийн дасгалжуулагч  Д.Баттулгыг "Өнө мөнх хөгжил” констракшны хамтран бүтээн байгуулж буй “Сити резиденс” хотхонд гурван өрөө байраар шагнаж, урамшуулав.</li>
            </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Society