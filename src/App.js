
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
        <Link to="/">
          Playrist
          </Link>
      </h1>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="/playlist">재생목록</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/write" >음악추가</Nav.Link>
          </Nav.Item>
          <Nav.Item>
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
                <th>Id</th>
                <th>Title</th>
                <th>Artist</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>pompeii</td>
                <td className="Art">
                    bastille
                  
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Why Do You Love Me</td>
                <td className="Art">
                Charlotte Lawrence
                  
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Lonely</td>
                <td className="Art">
                Imagine Dragon
                  
                </td>
                </tr>


                <tr>
                <td>4</td>
                <td>창귀</td>
                <td className="Art">
                  안예은
                  
                </td>
                </tr>



                <tr>
                <td>5</td>
                <td>고백</td>
                <td className="Art">
                  델리스파이스
                  
                </td>
                </tr>
              
              <tr>
                <td>6</td>
                <td>잊혀진 계절</td>
                <td className="Art">
                  이용
                 
                </td>
              </tr>


              <tr>
                <td>7</td>
                <td>아이스크림 사랑</td>
                <td className="Art">
                  임병수
                 
                </td>
                </tr>
                <tr>

                <td>8</td>
                <td>그대에게</td>
                <td className="Art">
                  무한궤도
                  
                </td>
                
              </tr>
              
            </tbody>
          </Table>
        </Col>
      </Row>
  </Container>
  )
}

function Index()
{
  <h2>Main Page</h2>
}

function Addmusic()
{
  return(
    <Container fluid="md">
      <div className="write">
        <form action="/add" method="post">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input name="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />          
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Artist</label>
            <input name="artist" type="text" class="form-control" id="exampleInputPassword1" />          
          </div>        
          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    </Container>
  )
}




function Footer()
{
  return(
    <address>
      이 페이지는 학습목적으로 제작되었으며 영리목적이 없음을 알립니다.
    </address>
  )
}



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route  path="/write" element={<Addmusic/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;
