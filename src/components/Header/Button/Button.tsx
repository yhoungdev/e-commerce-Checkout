import './button.css'
interface Items  {
    value: string ,
    icon: string
    
}


const Button = (props:Items) => {
    return (
        <>
            <button className='btn'>{props.value}</button>
        </>
    )
}

export default Button;