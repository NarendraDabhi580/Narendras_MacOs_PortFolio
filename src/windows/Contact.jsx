import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="adrian"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p className="dark:text-white">Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center dark:text-white">
            <p className="font-semibold">Email:</p>
            <p className="ms-2">nandudabhi580@gmail.com</p>
          </div>
          <div className="flex items-center dark:text-white">
            <p className="font-semibold">Phone:</p>
            <p className="ms-2">+91 7990333121</p>
          </div>
        </div>
    
        <ul>
          {socials?.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
