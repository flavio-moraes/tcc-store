import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Recentes");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    }

  return (
    <Container>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar Produtos:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled selected>Cor</Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
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
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Recentes</Option>
                    <Option value="asc">Preço (menor para maior)</Option>
                    <Option value="desc">Preço (maior para menor)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Footer/>
    </Container>
  )
}

export default ProductList