import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='footer_wrap'>
                <div className='footer_logo'>
                    <Link to="#"><img src=''></img></Link>
                </div>
                <div className='footer_info'>
                    <Link to="#"><h2>네이처컴바인드㈜</h2></Link>
                    <p>Tel : 000-0000-0000</p>
                    <address>경기도 화성시 OOO OOO OO</address>
                </div>
                <div className='footer_privacy'>
                    <Link to="#"><button className='privacy_btn'>개인정보취급방침</button></Link>
                </div>
            </div>
        </footer>
    );
}