import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function Detail() {
    const [product, setProduct] = useState({});
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        callAPI();
    }, []);
    const callAPI = () => {
        fetch(`http://localhost:8080/api/v1/admin/products/${id}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProduct(json);
            })
            .catch((err) => console.log(err))
    }
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <img src={product.image} width="100%" />
                </Col>
                <Col lg={6}>
                    <h3>Tên sản phẩm : {product.productName}</h3>
                    <p>Mô tả san phẩm : {product.description}</p>
                    <p>Giá sp : {product.unitPrice}</p>
                    <input />
                    <button className='btn btn-secondary'>Thêm vào giỏ hàng</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail