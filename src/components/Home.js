// styled component
import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <div>
      <Title className="text">Thrift Shop</Title>
      <Description className="text">cheap clothing for the cheap</Description>
      <ShopImage
        className="shop-image"
        alt="Thrift shop"
        src="http://www.hawaii.edu/news/wp-content/uploads/2017/08/manoa-thrift-store-merchandise.jpg"
      />
    </div>
  );
};
export default Home;
