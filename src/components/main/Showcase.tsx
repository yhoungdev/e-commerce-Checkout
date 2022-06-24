import Show from '../../Assets/images/shoe2.jpg'
import Actions from '../Header/Button/actions'
import './main.css'
export const Showcase = () => {
    return (
        <>

            <div className="show-case">

                 <img src={Show} alt="" className='main-img'/>

            </div>
        
        </>
    )
}


//for description
export const Description = () => {
    return (

        <>

           <div className="container">
           <div className="description">
                <h4 className="title">Sneaker Company</h4>
                <h2 className='sneaker-name py-0'> Fall Limited Edition Sneakers </h2>
                
                <p className='py'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a duration rubber outer sole, they'll with stand everything the weather can offer 
                </p>

                <div className="price">
                    <h2>$125.00 </h2>
                    <h5 className='grey'><s>$290.50</s></h5 >
                </div>

                <Actions/>

            </div>
           </div>
            
        </>

    )
}

