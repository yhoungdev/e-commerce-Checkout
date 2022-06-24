import './cart.css'
import Items from './item';
import Button from '../Header/Button/Button';
const CartBox = (props: any) => {
    const itemCount = 2;
    const totalItem = 1;
    return (
        
        <>

            <div className="cart-box"  style={
                {
                    display: props.display ? 'block' : 'none'
                }
            }>

                <h3 className='my top'>Cart</h3>

                {/* //check if there is any item in the cart */}
                 {
                    itemCount > 0 ? (
                        <>
                            {/* loop and display the items in the cart */}
                            {
                                //map through total item in the cart
                                [...Array(totalItem)].map((_, index) => {
                                    return (
                                        <>
                                        <Items key={index}/>
                                        
                                        </>
                                    )
                                }
                                )
                            }

                            <Button value='checkout' icon='' width='100%' my=''/>
                        </>
                    ) : 
                    (
                        <center>
                            <h5>Cart is Empthy</h5>
                        </center>
                    )

                     }   
                        

            </div>

        </>

    )
}

export default CartBox;