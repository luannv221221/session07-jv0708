import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProduct from '../components/CardProduct'
import { dataProduct } from '../data/product';

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getDataFormAPI();

    }, []);

    async function getDataFormAPI() {
        const url = "http://localhost:8080/api/v1/admin/products";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            setProducts(json.content);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Container>
            <h2 className='text-center'>Danh sách sản phẩm </h2>
            <Row>
                {products.map(item =>
                    <Col lg={4} key={item.productId}>
                        <CardProduct product={item} />
                    </Col>
                )}

            </Row>
        </Container>
    )
}

export default Home