import Button from "./Button";
import CartButton from './CartBtn';
const Actions = () => {
    return (
        <>
            <div>
            <div className="action-section">

                <CartButton/>
                <Button value='Add to Cart' icon=''/>

                </div>
            </div>
        </>


    )
}

export default Actions;