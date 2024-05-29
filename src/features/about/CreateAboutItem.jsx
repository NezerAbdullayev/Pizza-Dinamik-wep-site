import Button from "../../components/Button";
import Cart from "../../components/Cart";

function CreateAboutItem({ about }) {
  const { url, title, info } = about;

  return (
    <Cart>
      <img className="mb-5" src={url} alt={title} />
      <div className=" text-2xl font-bold">{title}</div>
      <p className="my-2.5 text-base text-stone-500  leading-loose">{info}</p>
      <Button type="rota" href="#menu">
        Our Menu
      </Button>
    </Cart>
  );
}

export default CreateAboutItem;
