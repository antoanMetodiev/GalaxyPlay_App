import { Link } from "react-scroll";

export const HeaderContacts = () => {
    return (
    <ul>
      <Link to="HomePage-footer" spy={true} smooth={true} offset={-100} duration={1000} style={{cursor: "pointer"}}>
        Contacts
      </Link>
    </ul>
  );
};
