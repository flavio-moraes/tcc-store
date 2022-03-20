import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    //align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    text-align: left;
    padding-left: 10px;
`;

const Logo = styled.h1`
    font-weight: bold;
    margin: 0;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    //align-items: center;
`;

const SearchContainer = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-right: 30px;
    padding: 5px;
`;

const Input = styled.input`
    flex: 1;
    border: none;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        Loja Virtual
                    </Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>REGISTRAR</MenuItem>
                    <MenuItem>ENTRAR</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
