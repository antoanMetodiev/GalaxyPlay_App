import { Link } from "react-scroll";

export const HeaderContacts = () => {
    return (
    <ul>
      <Link to="HomePage-footer" spy={true} smooth={true} offset={50} duration={500}>
        Contacts
      </Link>
    </ul>
  );
};
