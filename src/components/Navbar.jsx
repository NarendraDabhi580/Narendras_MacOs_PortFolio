import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import { openWindow } from "#RTK/windowSlice";

const Navbar = () => {
  return (
    <nav>
      {/* NavLinks */}
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Narendra's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow({ windowKey: type })}>
              <p className="no-underline hover:no-underline decoration-transparent hover:decoration-transparent">
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* NavIcons */}
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
