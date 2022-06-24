import './button.css'
interface Items  {
    value: string ,
    icon: string
    width: string,
    my: string
    
}


const Button = (props:Items) => {
    return (
        <>
            <button className='btn' style={{
                width: props.width,
                my: props.my
            }}>{props.value}</button>
        </>
    )
}

export default Button;