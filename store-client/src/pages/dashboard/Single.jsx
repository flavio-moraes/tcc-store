import styled from 'styled-components';
import Sidebar from '../../components/dashboard/Sidebar';
import Chart from '../../components/dashboard/Chart';
import Table from '../../components/dashboard/Table';

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

const TopArea = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    height: fit-content;
`;

const InfoWidget = styled.div`
    width: 400px;
    //height: 370px;
    height: fit-content;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
    position: relative;

    .editButton {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      font-size: 12px;
      color: #7451f8;
      background-color: #7551f818;
      cursor: pointer;
      border-radius: 0px 0px 0px 5px;
    }

    .title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .item {
      display: flex;
      gap: 20px;
      padding: 10px;

      .itemImg {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }

      .details {
        .itemTitle {
          margin-bottom: 10px;
          color: #555;
        }

        .detailItem {
          margin-bottom: 10px;
          font-size: 15px;

          .itemKey {
            font-weight: bold;
            color: gray;
            margin-right: 5px;
          }

          .itemValue {
            font-weight: 300;
          }
        }
      }
    }
`;

const BottomArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
    height: fit-content;
`;



const Single = () => {
  return (
    <Container>
      <Sidebar />
      <MainArea>
        <TopArea>
          <InfoWidget>
            <div className="editButton">Editar</div>
            <h1 className="title">Dados do Usuário</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">País:</span>
                  <span className="itemValue">EUA</span>
                </div>
              </div>
            </div>
          </InfoWidget>
          <Chart aspect={3 / 1} title="Gastos do Usuário (Últimos 6 meses)" />
        </TopArea>
        <BottomArea>
          <Table title="Últimas Transações" />
        </BottomArea>
      </MainArea>
    </Container>
  )
}

export default Single