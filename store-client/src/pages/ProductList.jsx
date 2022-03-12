import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
`;


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Title>Produtos</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar Produtos:</FilterText>
                <Select>
                    <Option disabled selected>Cor</Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select>
                    <Option disabled selected>Tamanho</Option>
                    <Option>PP</Option>
                    <Option>P</Option>
                    <Option>M</Option>
                    <Option>G</Option>
                    <Option>GG</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Ordenação:</FilterText>
                <Select>
                    <Option selected>Recentes</Option>
                    <Option>Preço (menor para maior)</Option>
                    <Option>Preço (maior para menor)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductList