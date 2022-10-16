export default function Card({ children }) {
  return (
    <div className="bg-white mobile:w-[550px] flex flex-col mobile:flex-row mobile:justify-between gap-6 rounded-xl overflow-hidden mx-4">
      {children}
    </div>
  );
}

function Image({ imgDesktop, imgMobile }) {
  return (
    <>
      <img
        src={imgDesktop}
        alt="product"
        className="h-[390px] hidden mobile:block"
      />
      <img src={imgMobile} alt="product" className="w-[360px] mobile:hidden" />
    </>
  );
}

function Category({ category }) {
  return (
    <h6 className=" text-darkGrayishBlue font-montserrat uppercase">
      {category}
    </h6>
  );
}

function Name({ children, name }) {
  return (
    <h1 className={`text-3xl font-fraunces text-veryDarkBlue`}>
      {children || name}
    </h1>
  );
}

function Description({ children }) {
  return (
    <p className=" text-darkGrayishBlue font-montserrat text-sm">{children}</p>
  );
}

function Price({ priceAfterDiscount, priceBeforeDiscount }) {
  return (
    <div className="flex gap-4">
      <h1 className={`text-3xl font-fraunces text-darkCyan`}>
        {priceAfterDiscount}
      </h1>
      <del className=" font-montserrat text-darkGrayishBlue text-sm">
        {priceBeforeDiscount}
      </del>
    </div>
  );
}

function Button({ icon, text }) {
  return (
    <button className="bg-darkCyan rounded-md text-white font-montserrat flex items-center justify-center gap-2 py-2 px-3 active:bg-veryDarkCyan">
      <img src={icon} alt="cart" />
      {text}
    </button>
  );
}

Card.Image = Image;
Card.Category = Category;
Card.Name = Name;
Card.Description = Description;
Card.Price = Price;
Card.Button = Button;
