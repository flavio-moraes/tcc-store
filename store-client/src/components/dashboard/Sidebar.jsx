import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    width: 240px;
    border-right: 0.5px solid rgb(230, 227, 227);
    min-height: 100vh;
    background-color: white;
    flex-shrink: 0;
`;

const Top = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: 0.5px solid rgb(230, 227, 227);
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

const Title = styled.div`
    font-size: 14px;
`;

const Middle = styled.div`
    padding: 10px;
`;

const SubTitle = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #ece8ff;
    }
`;

const iconStyle = {fontSize: "22px", color: "#7451f8"};

const MenuItemLabel = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #888;
    margin-left: 10px;
`;


const Sidebar = () => {
  return (
    <Container>
        <Top>
            <Link to="/gerenciamento">
                <Logo>Loja Virtual</Logo>
                <Title>Painel Administrativo</Title>
            </Link>
        </Top>
        <Middle>
            <SubTitle>COM LINKS</SubTitle>


            <Link to="/gerenciamento">
                <MenuItem>
                    <DashboardIcon style={iconStyle} />
                    <MenuItemLabel>Dashboard</MenuItemLabel>
                </MenuItem>
            </Link>
            
            <Link to="/usuarios">
                <MenuItem>
                    <PersonOutlineIcon style={iconStyle} />
                    <MenuItemLabel>Usuários</MenuItemLabel>
                </MenuItem>
            </Link>
            
            <Link to="/produtos">
                <MenuItem>
                    <StoreIcon style={iconStyle} />
                    <MenuItemLabel>Produtos</MenuItemLabel>
                </MenuItem>
            </Link>

            <SubTitle>SEM LINKS</SubTitle>
            <MenuItem>
                <CreditCardIcon style={iconStyle} />
                <MenuItemLabel>Pedidos</MenuItemLabel>
            </MenuItem>
            <MenuItem>
                <LocalShippingIcon style={iconStyle} />
                <MenuItemLabel>Entregas</MenuItemLabel>
            </MenuItem>
            <MenuItem>
                <InsertChartIcon style={iconStyle} />
                <MenuItemLabel>Estatísticas</MenuItemLabel>
            </MenuItem>
            <MenuItem>
                <PsychologyOutlinedIcon style={iconStyle} />
                <MenuItemLabel>Logs</MenuItemLabel>
            </MenuItem>
            <MenuItem>
                <SettingsApplicationsIcon style={iconStyle} />
                <MenuItemLabel>Preferências</MenuItemLabel>
            </MenuItem>
            <MenuItem>
                <ExitToAppIcon style={iconStyle} />
                <MenuItemLabel>Logout</MenuItemLabel>
            </MenuItem>
            
        </Middle>
    </Container>
  )
}

export default Sidebar