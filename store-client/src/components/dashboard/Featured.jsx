import styled from "styled-components"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Container = styled.div`
    width: 400px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: gray;
`;

const Bottom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const Chart = styled.div`
    width: 100px;
    height: 100px;
`;

const Amount = styled.p`
    font-size: 30px;
`;

const Desc = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: gray;
    text-align: center;
`;

const Summary = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Item = styled.div`
    //
`;

const ItemTitle = styled.h2`
    font-size: 14px;
    color: gray;
`;

const ItemResult = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
`;

const ItemResultAmount = styled.p`
    //
`;


const Featured = () => {
  return (
    <Container>
        <Top>
            <Title>Receita Total</Title>
            <MoreVertIcon fontSize="small" />
        </Top>
        <Bottom>
            <Chart>
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </Chart>
            <Title>Total de vendas de hoje:</Title>
            <Amount>R$ 420,00</Amount>
            <Desc>Processando transações anteriores. Últimos pagamentos podem não estar inclusos.</Desc>
            <Summary>
                <Item>
                    <ItemTitle>Alvo</ItemTitle>
                    <ItemResult>
                        <KeyboardArrowDownIcon fontSize="small" />
                        <ItemResultAmount>R$ 12.400,00</ItemResultAmount>
                    </ItemResult>
                </Item>
                <Item>
                    <ItemTitle>Última Semana</ItemTitle>
                    <ItemResult>
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <ItemResultAmount>R$ 12.400,00</ItemResultAmount>
                    </ItemResult>
                </Item>
                <Item>
                    <ItemTitle>Último Mês</ItemTitle>
                    <ItemResult>
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <ItemResultAmount>R$ 12.400,00</ItemResultAmount>
                    </ItemResult>
                </Item>
            </Summary>
        </Bottom>
    </Container>
  )
}

export default Featured