import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { AiTwotoneDollar,AiTwotoneCreditCard } from 'react-icons/ai';
import "../HomePage/Home.css"
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";


const HomePage = () => {
  
const [rowData, setRowData] = React.useState([
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
]);

// Column Definitions: Defines & controls grid columns.
const [colDefs, setColDefs] = React.useState([
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
]);
  return (
    
    <Container >
            <div className='üstcubuk d-flex flex-column mt-1 w-full'>
              <Navbar.Brand href="#" className='navbar d-flex '><b>Sabit Üst Çubuk</b></Navbar.Brand> 
            </div>
      <Row>
        <Col className="border-end border-dark">
          <div className="still d-flex flex-wrap gap-3 mt-3">
            <button type="submit" className="stokBtn">
              Stok 1
            </button>
            <button type="submit" className="stokBtn">
              Stok 2
            </button>
            <button type="submit" className="stokBtn">
              Stok 3
            </button>
            <button type="submit" className="stokBtn">
              Stok 4
            </button>
            <button type="submit" className="stokBtn">
              Stok 5
            </button>
            <button type="submit" className="stokBtn">
              Stok 6
            </button>
             <button type="submit" className="stokBtn">
              Stok 7
            </button>
            <button type="submit" className="stokBtn">
              Stok 8
            </button>
            <button type="submit" className="stokBtn">
              Stok 9
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 1
            </button>
            <button type="submit" className="stokBtn">
              Stok 2
            </button>
            <button type="submit" className="stokBtn">
              Stok 3
            </button>
            <button type="submit" className="stokBtn">
              Stok 4
            </button>
            <button type="submit" className="stokBtn">
              Stok 5
            </button>
            <button type="submit" className="stokBtn">
              Stok 6
            </button>
             <button type="submit" className="stokBtn">
              Stok 7
            </button>
            <button type="submit" className="stokBtn">
              Stok 8
            </button>
            <button type="submit" className="stokBtn">
              Stok 9
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 1
            </button>
            <button type="submit" className="stokBtn">
              Stok 2
            </button>
            <button type="submit" className="stokBtn">
              Stok 3
            </button>
            <button type="submit" className="stokBtn">
              Stok 4
            </button>
            <button type="submit" className="stokBtn">
              Stok 5
            </button>
            <button type="submit" className="stokBtn">
              Stok 6
            </button>
             <button type="submit" className="stokBtn">
              Stok 7
            </button>
            <button type="submit" className="stokBtn">
              Stok 8
            </button>
            <button type="submit" className="stokBtn">
              Stok 9
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            <button type="submit" className="stokBtn">
              Stok 10
            </button>
            
          </div>
        </Col>
        <Col className="border-end border-dark">
        <InputGroup className="mb-3 mt-3">
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control
          placeholder="Ürün Barkodunu Okutunuz"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
        </Col>
        <Col>
            <div className="still d-flex flex-wrap gap-3 mt-3">
                <button type="submit" className="odemeBtn">
                    <AiTwotoneDollar color='#228dcd' size={36} />
                    <br/>
                    Nakite Ödeme
                </button>
                <button type="submit" className="odemeBtn">
                    <AiTwotoneCreditCard  size={36} />
                    <br/>
                    Kredi Kartı Ödeme
                </button>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
