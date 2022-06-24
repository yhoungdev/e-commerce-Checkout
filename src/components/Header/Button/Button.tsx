import './button.css'
interface Items  {
    value: string ,
    icon: string
    width: string
    
}


const Button = (props:Items) => {
    return (
        <>
            <button className='btn' style={{
                width: props.width
            }}>{props.value}</button>
        </>
    )
}

export default Button;