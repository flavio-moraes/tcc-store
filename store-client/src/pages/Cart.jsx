import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Bottom = styled.div`
    
`;


const Cart = () => {
    const cart = useSelector(state=>state.cart);

    //parte do redux: video 3, 01:05:00
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Carrinho de Compras</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart