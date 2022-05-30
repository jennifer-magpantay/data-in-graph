import Logo from "../assets/logo.svg";

const listItems = ["Overview", "Subject 1", "Subject 2", "Subject 3"];

export const Aside = () => {
  return (
    <aside className="aside">
      {/* logo */}
      <div className="aside--header">
        <img src={Logo} alt="Logpipsum" />
      </div>
      {/* menu list */}
      <ul className="aside--list">
        {listItems.map((item) => (
          <li className="aside--list-item">{item}</li>
        ))}
      </ul>
    </aside>
  );
};
