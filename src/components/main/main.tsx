import React from 'react'
import { Description, Showcase } from './Showcase';
import Button from '../Header/Button/Button';
const Main = () => {

    return (
        <>
            

            <div className="container main-container">

                <div className="main">

                    <div className="showcase">
                        <Showcase/>
                    </div>

                    {/* Show images here  */}

                   <div className="action">

                        <Description/>
                        {/* action buttons */}
                        

                   </div>


                </div>

            </div>
        
        </>
    )

}

export default Main;