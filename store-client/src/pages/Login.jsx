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
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0px 0px 30px 0px;
    font-size: 32px;
    font-weight: 300;
    color: white;
`;

const Input = styled.input`
    margin: 0px 0px 20px 0px;
    padding: 10px;
`;

const Link = styled.a`
    margin: 10px 0px 0px 0px;
    text-decoration: underline;
    cursor: pointer;
    color: white;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Entrar</Title>
            <Form>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                <MyButton>ENTRAR</MyButton>
                <Link>Esqueceu a senha?</Link>
                <Link>Criar uma nova Conta</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login