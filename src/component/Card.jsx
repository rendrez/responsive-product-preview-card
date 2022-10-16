export default function Card({ children }) {
  return (
    <div className="bg-white sm:w-[550px] flex flex-col items-center mobile:flex-row mobile:justify-between gap-3 mobile:gap-[2px] sm:gap-6 rounded-xl overflow-hidden mx-4">
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
        className="h-[280px] sm:h-[400px] hidden mobile:block"
      />
      <img src={imgMobile} alt="product" className="w-[360px] mobile:hidden" />
    </>
  );
}

function Category({ category }) {
  return (
    <h6 className=" text-darkGrayishBlue text-[10px] font-montserrat uppercase">
      {category}
    </h6>
  );
}

function Name({ children, name }) {
  return (
    <h1 className={`font-fraunces text-3xl text-veryDarkBlue`}>
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
    <div className="flex gap-2 sm:gap-4">
      <h1 className={`font-fraunces text-3xl text-darkCyan`}>
        {priceAfterDiscount}
      </h1>
      <del className="font-montserrat text-darkGrayishBlue text-sm pt-1">
        {priceBeforeDiscount}
      </del>
    </div>
  );
}

function Button({ icon, text }) {
  return (
    <button className="bg-darkCyan rounded-md text-white font-montserrat flex items-center justify-center gap-2 py-2 px-3 hover:bg-veryDarkCyan active:bg-veryDarkCyan">
      <img src={icon} alt="cart" />
      {text}
    </button>
  );
}

function Body({ children }) {
  return (
    <div className="flex flex-col mx-5 justify-center pb-5 sm:pb-0 gap-1 sm:gap-3">
      {children}
    </div>
  );
}

Card.Image = Image;
Card.Category = Category;
Card.Name = Name;
Card.Description = Description;
Card.Price = Price;
Card.Button = Button;
Card.Body = Body;
