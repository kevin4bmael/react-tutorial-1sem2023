import { borderRadius, padding } from "@mui/system"

const typeColor = {
    success: "#cdefd6",
    error: '#efcdcd',
    info: '#cddeef',
    warning: '#ffff'
}

const Alert = ({type, children}) => {

    const bg = {
        background: typeColor[type],
        padding: '20px',
        borderRadius: '10px'
    }    
    
    return (
        <div style={bg}>
            {children}
        </div>
    )
}



export default Alert
