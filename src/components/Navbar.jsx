import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  return (
    <nav>
      {/* NavLinks */}
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Narendra's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* NavIcons₹ */}
      <div>
        <ul>
          {navIcons?.map(({ id, img }) => (
            <li key={id}>
              <img className="icon-hover" src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        {/* NavDateTime */}
        <time>{dayjs().format("ddd D MMM H:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
