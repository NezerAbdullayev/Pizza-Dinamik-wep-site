import { useEffect, useState } from "react";
import Section from "../../components/Section";
import CreateMenuItem from "./CreateMenuItem";
import { getMenu } from "../../services/apiGetMenu";


function Menu() {
  const [menuData, setMenuData] = useState([]);

  //GET menu data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menu = await getMenu();
        setMenuData(menu);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <Section id="menu">
      <h3 className="mb-5 text-center text-4xl font-bold uppercase text-stone-800">
        Our Menu
      </h3>

      <div className="grid grid-cols-auto-fit-22rem justify-center gap-4">
          {menuData.length>0 && menuData.map((pizza) => (
            <CreateMenuItem pizza={pizza} key={pizza.id} />
          ))}

        </div>
        
    </Section>
  );
}

export default Menu;
