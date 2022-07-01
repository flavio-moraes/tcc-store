import styled from 'styled-components';
import Datatable from '../../components/dashboard/Datatable';
import Sidebar from '../../components/dashboard/Sidebar';

const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    display: flex;
`;

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    //background-color: green;
`;


const List = () => {
  return (
    <Container>
      <Sidebar />
      <MainArea>
        <Datatable title="Lista de Usuários" />
      </MainArea>
    </Container>
  )
}

export default List