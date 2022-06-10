import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import MyButton from '../components/Button'
import Navbar from '../components/Navbar';
import { login } from '../redux/apiCalls';
import { SERVER_URL, publicRequest, API_URL } from '../requestMethods';
import io from 'socket.io-client';
import { update } from '../redux/userSlice';


const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 60px);
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url("https://source.unsplash.com/random/1920x1080?clothing");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: clamp(400px, 23%, 500px);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0px 0px 0px 0px;
    font-size: 32px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.25);
    text-align: center;
`;

const SubTitle = styled.h2`
    margin: 30px 0px 20px 0px;
    font-size: 20px;
    font-weight: 300;
    color: white;
`;

const Input = styled.input`
    margin: 0px 0px 10px 0px;
    padding: 10px;
`;

const Link = styled.a`
    margin: 10px 0px 0px 0px;
    text-decoration: underline;
    font-size: 15px;
    cursor: pointer;
    color: white;
`;

const ErrorMsg = styled.span`
    margin: -15px 0px 20px 0px;
    color: red;
`;

const SocialButton = styled.button`
    margin-bottom: 10px;
    display: flex;
    padding: 8px;
    border: 0.5px solid gray;
    border-radius: 10px;
    background-color: #fff;
    color: #6d6d6d;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    cursor: pointer;
    
    transition: all 0.5s ease;

    &:disabled{
      background-color: gray;
      cursor: wait;
    }
`;

const ButtonIcon = styled.div`
    background-image: url(${props => props.iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
`;

const ButtonText = styled.div`
    width: calc(100% - 64px);
`;



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false }
    }, []);


    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    };

    const testClick = async (e) => {
        e.preventDefault();

        const getUser = () => {
            console.log("fetch init");
            fetch("http://localhost:5000/api/v1/auth/session", {
              method: "GET",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
              }
            }).then((response) => {
                console.log("fetch response");
              if (response.status === 200) return response.json();
              throw new Error("Autenticação falhou.");
            }).then((resObject) => {
                console.log("fetch response 2");
              console.log(resObject);
            }).catch((err) => {
              console.log(err);
            });
        };
        getUser();

        /*try {
            const res = await publicRequest.get("/auth/login/success");
            console.log(res);
        } catch(err){
            console.log(err);
        }*/
    };

    const openPopup = (e) => {
        e.preventDefault();
        const provider = e.currentTarget.dataset.provider;
        setButtonDisabled(true);
        const socket = io(SERVER_URL, {withCredentials: true});

        socket.on("connect", () => {
            console.log(socket);

            const w = 600;
            const h = 600;
            const x = (window.innerWidth / 2) - (w / 2);
            const y = (window.innerHeight / 2) - (h / 2);
            const url = API_URL+"/auth/"+provider+"?socketId="+socket.id;

            const popup = window.open(url, "", `toolbar=no, location=no, directories=no, status=no, menubar=no, 
                    scrollbars=no, resizable=no, copyhistory=no, width=${w}, 
                    height=${h}, top=${y}, left=${x}`);

            const checkPopup = setInterval(() => {
                console.log(popup);
                console.log(socket);
                if (!popup || popup.closed || popup.closed === undefined) {
                    console.log("POPUP FECHADO");
                    clearInterval(checkPopup);
                    if (isMounted.current) setButtonDisabled(false);
                    socket.disconnect();
                }
            }, 5000);

            socket.on(provider, (res) => {  
                popup.close();
                console.log(res);
                if (res.user) {
                    dispatch(update(res));
                }
                socket.disconnect();
            });
        });
        socket.on("disconnect", (reason) => {
            console.log("Socket desconectado: ", reason);
        });
    };

    const google = () => {

        //window.open("http://localhost:5000/api/v1/auth/google", "_blank", `top=${y},left=${x},width=${w},height=${h}`);
        
        //window.open("http://localhost:5000/api/v1/auth/google", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    const linkedin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
    };

  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>ENTRAR</Title>
            <Form>
                <SubTitle>Já sou cliente:</SubTitle>
                <Input placeholder="E-mail" type="email" onChange={(e) => setUsername(e.target.value)} disabled={buttonDisabled || isFetching}/>
                <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} disabled={buttonDisabled || isFetching}/>
                {error && <ErrorMsg>Usuário ou senha inválidos.</ErrorMsg>}
                <MyButton onClick={handleClick} disabled={buttonDisabled || isFetching} style={{marginTop: "5px"}}>ENTRAR</MyButton>
                <Link onClick={testClick}>Esqueceu a senha?</Link>
                <Link onClick={google} style={{marginBottom: "10px"}}>Criar uma nova Conta</Link>
                <SubTitle>Ou entre com sua rede social:</SubTitle>
                <SocialButton onClick={openPopup} data-provider="google" disabled={buttonDisabled || isFetching}>
                    <ButtonIcon iconUrl="img/google_icon.svg" /><ButtonText>Entrar com Google</ButtonText>
                </SocialButton>
                <SocialButton onClick={openPopup} data-provider="google" disabled={buttonDisabled || isFetching}>
                    <ButtonIcon iconUrl="img/facebook_icon.svg" /><ButtonText>Entrar com Facebook</ButtonText>
                </SocialButton>
                <SocialButton onClick={openPopup} data-provider="google" disabled={buttonDisabled || isFetching}>
                    <ButtonIcon iconUrl="img/github_icon.png" /><ButtonText>Entrar com GitHub</ButtonText>
                </SocialButton>

                { /* <MyButton onClick={openPopup} data-provider="google" disabled={buttonDisabled || isFetching}>GOOGLE</MyButton> */}
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Login