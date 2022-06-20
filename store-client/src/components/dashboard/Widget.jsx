import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    height: 100px;
    width: 240px;
`;

const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: rgb(160, 160, 160);
`;

const Counter = styled.div`
    font-size: 28px;
    font-weight: 300;
`;

const Waypoint = styled.div`
    width: max-content;
    font-size: 12px;
    border-bottom: 1px solid gray;
    cursor: pointer;
    //text-decoration: underline;
`;

const Variation = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const iconStyle = {
    fontSize: "18px",
    padding: "5px",
    borderRadius: "5px",
    alignSelf: "flex-end"
};


const Widget = ({type}) => {
    let data;
    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
          data = {
            title: "USUÁRIOS",
            isMoney: false,
            link: "Ver todos usuários",
            icon: (
              <PersonOutlinedIcon
                style={{...iconStyle,
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "order":
          data = {
            title: "ORDENS",
            isMoney: false,
            link: "Ver todas as ordens",
            icon: (
              <ShoppingCartOutlinedIcon
                style={{...iconStyle,
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "earning":
          data = {
            title: "LUCRO",
            isMoney: true,
            link: "Ver lucro líquido",
            icon: (
              <MonetizationOnOutlinedIcon
                style={{...iconStyle, backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
        case "balance":
          data = {
            title: "BALANÇO",
            isMoney: true,
            link: "Ver detalhes",
            icon: (
              <AccountBalanceWalletOutlinedIcon
                style={{...iconStyle,
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
    }


  return (
    <Container>
        <Area>
            <Title>{data.title}</Title>
            <Counter>{data.isMoney && "R$"} {amount}</Counter>
            <Waypoint>{data.link}</Waypoint>
        </Area>
        <Area>
            <Variation>
                <KeyboardArrowUpIcon />
                {diff} %
            </Variation>
            {data.icon}
        </Area>
    </Container>
  )
}

export default Widget