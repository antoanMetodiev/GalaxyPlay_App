
import style from "../../../AllChats/AllChats.module.css";

export const SearchEngine = ({
    allChatUsers,
    setFilteredUsersHandler,
}) => {


    function filterUsers(event) {
        let filteredObject = {};

        for (const key in allChatUsers) {
            if (key.toLowerCase().includes(event.currentTarget.value)) {
                filteredObject[key] = allChatUsers[key];
            }
        }

        setFilteredUsersHandler(filteredObject);
    }


    return (
        <input
            onChange={filterUsers}
            placeholder="Search..."
            className={style['search-engine']}
            type="text" />
    );
}