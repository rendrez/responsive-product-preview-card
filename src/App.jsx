import productDesktop from "./images/image-product-desktop.jpg";
import productMobile from "./images/image-product-mobile.jpg";
import cart from "./images/icon-cart.svg";
import Card from "./component/Card";

function App() {
  return (
    <div className="bg-cream h-screen flex flex-col items-center justify-center">
      <Card>
        <Card.Image imgDesktop={productDesktop} imgMobile={productMobile} />
        <Card.Body>
          <Card.Category category={"P e r f u m e"} />
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
        </Card.Body>
      </Card>
      <div className="text-[11px] text-center">
        Challenge by {""}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-link">
          Muhammad Randy
        </a>
        .
      </div>
    </div>
  );
}

export default App;
