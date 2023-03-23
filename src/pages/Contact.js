import Box from '@mui/material/Box'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Contact = () => {
  return (
    <>
      <Header />
      <MainMenu />

      
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <h1>Entre em contato</h1>
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default Contact