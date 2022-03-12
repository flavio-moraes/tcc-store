import styled from 'styled-components'
import MyButton from '../components/Button'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.80)), url("https://source.unsplash.com/random/1920x1080?clothing");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    width: clamp(400px, 23%, 500px);
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    margin: 0 0 10px 0;
    font-size: 32px;
    font-weight: 300;
    color: white;
`;

const Input = styled.input`
    //flex: 1;
    width: 100%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    color: white;
    font-size: 14px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
`;



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Criar uma conta</Title>
            <Form>
                <Input placeholder="Nome completo"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                <Input placeholder="Repetir senha"/>
                <Agreement>
                    Ao criar uma conta, concordo com o processamento dos meus dados de acordo com a <b>política de privacidade</b>.
                </Agreement>
                <MyButton>CRIAR CONTA</MyButton>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register