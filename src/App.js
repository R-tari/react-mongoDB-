
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Container,Row,Col,Table,CloseButton} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate  } from "react-router-dom";


function Header()
{
  return(
    <div className="container">

      <h1>
        Playrist
      </h1>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">재생목록</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">음악추가</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
    </div>
  )
}

function SecContent(props)
{
  return(
    <Container fluid="md">
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>{id}</th>
                <th>{title}</th>
                <th>{artist}</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td className="Art">
                  Otto
                  <CloseButton variant="white" />
                </td>
                
              </tr>
              
            </tbody>
          </Table>
        </Col>
      </Row>
  </Container>
  )
}




function Footer()
{
  <address>
    이 페이지는 학습목적으로 제작되었으며 영리목적이 없음을 알립니다.
  </address>
}



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route  path="/" element={<SecContent id="1" title="잊혀진 계절" artist="이용" />}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
