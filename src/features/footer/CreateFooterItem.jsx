import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

function checkIcon(iconType) {
  const iconStyle =
    "bg-pizzaRed text-white w-[60px] h-[60px] text-sm rounded-full p-4 mb-1";
  switch (iconType) {
    case "phone":
      return <FaPhoneAlt className={iconStyle} />;

    case "addres":
      return <IoLocationSharp className={iconStyle} />;

    case "hour":
      return <TbClockHour3 className={iconStyle} />;

    case "email":
      return <MdEmail className={iconStyle} />;

    default:
      return null;
  }
}

function CreateFooterItem({ footerItem }) {
  const { id, title, details, icon } = footerItem;

  const iconComponent = checkIcon(icon);

  return (
    <div className="flex flex-col items-center justify-between rounded bg-white p-5 shadow-md">
      {iconComponent}
      <h4 className="my-2.5 text-xl font-bold ">{title}</h4>
      <div className="flex flex-col">
        {details.map((text) => (
          <p className="font-light tracking-wide text-stone-500" key={text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CreateFooterItem;
