import productDesktop from "./images/image-product-desktop.jpg";
import productMobile from "./images/image-product-mobile.jpg";
import cart from "./images/icon-cart.svg";
import Card from "./component/Card";

function App() {
  return (
    <div className="bg-cream h-screen flex items-center justify-center">
      <Card>
        <Card.Image imgDesktop={productDesktop} imgMobile={productMobile} />
        <div className="flex flex-col mx-5 mobile:mr-5 my-3 gap-3">
          <Card.Category category={"Parfume"} />
          <Card.Name name={"Gabrielle Essence Eau De Parfum"} />
          <Card.Description>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Card.Description>
          <Card.Price
            priceAfterDiscount={"$149.99"}
            priceBeforeDiscount={"$169.99"}
          />
          <Card.Button icon={cart} text={"Add to Cart"} />
        </div>
      </Card>
    </div>
  );
}

export default App;
