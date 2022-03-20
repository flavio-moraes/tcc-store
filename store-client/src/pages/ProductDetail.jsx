import { Add, Remove } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { themeColors } from "../data";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 32px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 0.5px solid black;
  background-color: ${themeColors.buyButton};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: ${themeColors.buyButtonHighlight};
    transition: all 0.5s ease;
  }
`;

const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSizey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "desc") {
      if (quantity > 1) setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({...product, quantity, color, size}));
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          {/*<--Image src="https://source.unsplash.com/random/500x500?jean"/>*/}
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          {/*<Title>Calça Jeans</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum, voluptas quaerat error quasi expedita, veritatis odio, iste rem porro earum? Ab suscipit illum quam rem quo iusto debitis consequatur!</Desc>
                <Price>R$ 90,00</Price>*/}
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>R$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cor:</FilterTitle>
              {/*<FilterColor color="blue"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>*/}
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Tamanho:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
                {/*<FilterSizeOption>PP</FilterSizeOption>
                            <FilterSizeOption>P</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>G</FilterSizeOption>
                            <FilterSizeOption>GG</FilterSizeOption>*/}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("desc")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>Adicionar ao Carrinho</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductDetail;
