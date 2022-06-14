import Header from './Header';
import { Navbar, Container } from 'react-bootstrap';
import '../css/TopHeader.css';


const TopHeader = () => {
  return (
      <>
        <Navbar className='topnavbar'>
            <Container>
                <Navbar.Brand href="/" className='topnavbar_container'>
                    Whatsapp
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <Navbar.Text className='topnavbar_container'>
                    Signed in as: <a href="/home">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Header/>
      </>
   
  );
};

export default TopHeader;