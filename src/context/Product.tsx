import { createContext } from "react";

interface Item {
    children:any
}
const ProductItem = createContext(null);

const Product =({children}) => {
    return (
        <>
            <ProductItem.Provider value={null}>
                {children}
            </ProductItem.Provider>

        </>
    )
}

export {ProductItem}