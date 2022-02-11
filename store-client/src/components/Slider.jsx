import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow  = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${props => props.side === "left" && "10px"};
    right: ${props => props.side === "right"? "10px" : ""};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;


const Slider = () => {

    const handleClick = (direction) => {

    };

    return (
        <Container>
            <Arrow side="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src=" https://source.unsplash.com/random/200x200"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>TEMPORADA OUTONO-INVERNO</Title>
                        <Desc>Confira as novas ofertas da temporada!</Desc>
                        <Button>VER PRODUTOS</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src=" https://source.unsplash.com/random/200x200?id=1"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>MAIS VENDIDOS</Title>
                        <Desc>Conheça os produtos mais populares do site!</Desc>
                        <Button>VER PRODUTOS</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src=" https://source.unsplash.com/random/200x200?id=2"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>FRETE GRÁTIS</Title>
                        <Desc>Obtenha frete grátis nas compras acima de R$ 100.</Desc>
                        <Button>VER PRODUTOS</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow side="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
