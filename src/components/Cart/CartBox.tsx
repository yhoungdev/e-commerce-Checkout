import './cart.css'
import Items from './item';
const CartBox = (props: any) => {
    return (
        
        <>

            <div className="cart-box"  style={
                {
                    display: props.display ? 'block' : 'none'
                }
            }>

                <h3 className='my top'>Cart</h3>

                <Items/>

            </div>

        </>

    )
}

export default CartBox;