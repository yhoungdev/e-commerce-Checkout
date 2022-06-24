import Icon from '../../Assets/images/shoe5.jpg';
import Button from '../Header/Button/Button';
const Items = () => {
    return (
        <>
            <div className="item-box">
            <img src={Icon} alt="" className='package-icon'/>
            <div className='object-text'>
                <h4>Autumn Linited Edition</h4>
                <p>$100</p>
            </div>
        </div>

        <Button value='checkout' icon='' width='100%'/>
        </>
    );
}


export default Items;