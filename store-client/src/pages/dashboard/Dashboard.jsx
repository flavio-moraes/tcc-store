import styled from 'styled-components';
import Chart from '../../components/dashboard/Chart';
import Featured from '../../components/dashboard/Featured';
import Sidebar from '../../components/dashboard/Sidebar';
import Table from '../../components/dashboard/Table';
import Widget from '../../components/dashboard/Widget';

const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    display: flex;
    //background-color: yellow;
`;

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    //background-color: green;
`;

const WidgetArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
    height: fit-content;
    //background-color: orange;
`;

const ChartArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
    height: fit-content;
    //background-color: pink;
`;

const TableArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
    height: fit-content;
    //background-color: brown;
`;


const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <MainArea>
        <WidgetArea>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </WidgetArea>
        <ChartArea>
          <Featured />
          <Chart title="Receita (Últimos 6 meses)" aspect={2 / 1} />
        </ChartArea>
        <TableArea>
          <Table title="Últimas Transações" />
        </TableArea>
      </MainArea>
    </Container>
  )
}

export default Dashboard