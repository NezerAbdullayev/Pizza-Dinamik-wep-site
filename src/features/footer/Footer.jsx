import Section from "../../components/Section";
import CreateFooterItem from "./CreateFooterItem";

const FooterData = [
  {
    id: "f3sq",
    title: "Phone Number",
    details: ["+123-456-7890", "+111-222-3333"],
    icon: "phone",
  },
  {
    id: "f322",
    title: "Our Address",
    details: ["mumbai, india - 400104"],
    icon: "addres",
  },
  {
    id: "a2d4",
    title: "Opening Hours",
    details: ["00:09am to 00:10pm"],
    icon: "hour",
  },
  {
    id: "43s3",
    title: "Email Address",
    details: ["shaikhanas@gmail.com", " anasbhai@gmail.com"],
    icon: "email",
  },
];

function Footer() {
  return (
    <footer>
      <Section>
        <div className="grid-cols-grid-cart grid gap-4">
          {FooterData.map((footerItem) => (
            <CreateFooterItem footerItem={footerItem} key={footerItem.id} />
          ))}
        </div>

        <div className="mt-9 border-t border-stone-700 pb-2.5 pt-7 text-center text-base font-light sm:text-xl">
          © copyright @ 2027
          <span className="text-pizzaRed">mr. web designer</span> | all rights
          reserved!
        </div>
      </Section>
    </footer>
  );
  // children, id = " ", bg = true, className
}
export default Footer;
