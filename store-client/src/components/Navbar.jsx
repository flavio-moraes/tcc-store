import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { API_URL } from '../requestMethods';
import Sidemenu from './Sidemenu';

const Container = styled.div`
    height: 60px;
    -webkit-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    -moz-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    position: relative;
    z-index: 1;
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
    display: flex;
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
    &:focus {
        outline: none;
    }
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
    const user = useSelector((state) => state.user.info);

    const logout = () => { //função a ser chamada pelo click do logout
        window.open(API_URL+"/auth/logout", "_self");
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Sidemenu/>
                    <Logo>
                        <Link to="/">Loja Virtual</Link>
                    </Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Qual produto você procura?"/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? (<><MenuItem>Olá, {user.firstname}!</MenuItem><MenuItem onClick={logout}>LOGOUT</MenuItem></>)
                    : <><MenuItem><Link to="/registrar">CADASTRAR</Link></MenuItem><MenuItem><Link to="/login">ENTRAR</Link></MenuItem></>}
                    <Link to="/carrinho">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
        /*
        {user ? (<MenuItem>user.name</MenuItem><MenuItem onClick={logout}>Logout</MenuItem>) : (<Link to="login">ENTRAR</Link>)}
        */
    )
}

export default Navbar
