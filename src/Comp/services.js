import './services.css';
import { Link } from "react-router-dom";
function Services()
{
    return(
        <div className="services">
            <div className='cont'>
                <div className='serv' id='bmi'>
                    <Link to='/bmi' id='bmi1'>BMI</Link>
                </div>
                <div className='serv'  id='cal'>
                    <Link to='Calorie' id='cal1'>Calorie Calculator</Link>
                </div>
            </div>
            <div className='cont'>
                <div className='serv' id='fit'>
                    <Link to='Fitness' id='fit1'>Fitness Prodcuts</Link>
                </div>
                <div className='serv'  id='gal'>
                    <Link to='Gallery' id='gal1'>Gallery</Link>
                </div>
            </div>
        </div>
    )
};
export default Services;