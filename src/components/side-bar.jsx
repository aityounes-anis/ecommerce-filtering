import Categories from "./Categories";
import Colors from "./colors";
import Prices from "./prices";

const Sidebar = () => {
  return (
    <section>
      <Categories />
      <Prices />
      <Colors />
    </section>
  );
};

export default Sidebar;
