import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #dcecf1;
    --myw: 100vw;
`;

const Left = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    margin: 8px 0px 20px;
`;

const Desc = styled.p`
    margin: 0px;
    font-size: small;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
`;

const Center = styled.div`
    padding: 20px;
    --value: calc(100vw - 900px);
    --binary: calc(clamp(0px, calc(var(--value) + 1px / 1000000), calc(1px / 1000000)) * 1000000);
    width: calc(300px + var(--binary) * 100);
`;

const Title = styled.h3`
    margin: 20px 0px;
    width: 300px;
    //margin-left: auto;
    //margin-right: auto;
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    //background-color: green;
`;

const ListItem = styled.div`
    width: 180px;
    margin-bottom: 10px;
    margin-right: 20px;
    //background-color: yellow;
`;

const Right = styled.div`
    width: 300px;
    padding: 20px;
`;

const PayMethod = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 200px;
`;

const PayMethodItem = styled.img`
    margin-right: 8px;
    margin-top: 6px;
`;


const Footer = () => {
  return (
    <Container>
        <Left>  
            <Logo>Loja Virtual</Logo>
            <Desc>
                <p style={{margin: "0px"}}>Copyright © Loja Virtual S.A. 2021-2022</p>
                <p style={{margin: "8px 0px"}}>Av Prof Alceu Maynard de Araújo, 698</p>
                <p style={{margin: "8px 0px"}}>CEP 12345-678 - Rio de Janeiro/RJ <br/>CNPJ 12.345.678/9999-00</p>
            </Desc>
            <SocialContainer>
                <SocialIcon><Facebook/></SocialIcon>
                <SocialIcon><Instagram/></SocialIcon>
                <SocialIcon><Twitter/></SocialIcon>
                <SocialIcon><YouTube/></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links Úteis</Title>
            <ListContainer>
                <ListItem>Página inicial</ListItem>
                <ListItem>Carrinho de compras</ListItem>
                <ListItem>Minha conta</ListItem>
                <ListItem>Meus pedidos</ListItem>
                <ListItem>Lista de desejos</ListItem>
                <ListItem>Ajuda / Contato</ListItem>
                <ListItem>Quem somos</ListItem>
            </ListContainer>
        </Center>
        <Right>
            <Title>Formas de Pagamento</Title>
            <PayMethod>
                <PayMethodItem src="img/visa.svg"/>
                <PayMethodItem src="img/mastercard.svg"/>
                <PayMethodItem src="img/amex.svg"/>
                <PayMethodItem src="img/dinersclub.svg"/>
                <PayMethodItem src="img/hipercard.svg"/>
                <PayMethodItem src="img/elo.svg"/>
                <PayMethodItem src="img/boleto.svg"/>
            </PayMethod>
        </Right>
    </Container>
  )
}

export default Footer;