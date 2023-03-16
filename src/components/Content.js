import Box from '@mui/material/Box'
import Alert from './Alert'
import SampleUseState from './SampleUseState'
import Footer from './Footer'

const Content = () => {

    return (
        <Box sx={{
            color: '#FFED86',
            background: "#FFFFF",
            width: '100%',
            padding: '15px'
        }}>
            <h1>Content</h1>
            
                <Alert type="success" >
                    Deu certo!
                </Alert>

                <Alert type="error">
                    Deu Erro!
                </Alert>

                <Alert type="info">
                    Info!
                </Alert>

                <Alert type="warning">
                   Warning!
                </Alert>   
            
                <SampleUseState />

                <Footer />

        </Box>
    )
}

export default Content