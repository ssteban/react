import './button.css'

function Button_on({label, onClick}){
    return (
        <>
            <button className="button-on" onClick={onClick}>{label}</button>
        </>
    )
}

export default Button_on;