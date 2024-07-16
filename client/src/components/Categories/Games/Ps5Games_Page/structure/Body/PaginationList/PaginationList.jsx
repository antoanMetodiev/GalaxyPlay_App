import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import style from "../PaginationList/PaginationList.module.css";

// Обикновена променлива за съхранение на референции
let paginationRefs = [];
let currentPage = 1;

export const PaginationList = ({
  gameList,
  allGames,
  setGameListHandler,
  startAndEndIndexes,
}) => {
	
  const [paginationElementsCount, setPaginationElementsCount] = useState([1]);
  let [showSearchEngineArrow, setShowSearchEngineArrow] = useState(false); 

  useEffect(() => {
    debugger;
    const calculatePaginationItems = async () => {
      const count = await Math.ceil(allGames.length / 18);
      console.log(count);
      let a = "li$".repeat(count).split("$");
      a.pop();
      setPaginationElementsCount(a);
    };

    calculatePaginationItems();

	

  }, [allGames]);

  useEffect(() => {
    // Приложете стила на активния елемент
    paginationRefs.forEach((item, index) => {
      if (item) {
        item.style.backgroundColor = index + 1 === currentPage ? 'blue' : 'gray';
      }
    });
  }, [currentPage, paginationElementsCount]);


  useEffect(() => {
	setTimeout(() => {
		setShowSearchEngineArrow(true);
	}, 2000);

  }, []);


  function changeThePage(event, pageIndex) {
    debugger;
    let endIndex = pageIndex * 18;
    let startIndex = endIndex - 18;

    let newArr = allGames.slice(startIndex, endIndex);
    setGameListHandler(newArr);

    currentPage = pageIndex; // Обновяване на текущата страница
    window.scrollTo(0, 0);
    startAndEndIndexes.startIndex = startIndex;
    startAndEndIndexes.endIndex = endIndex;
  }

  return (
    <>
      <ul id="pagination-container-id" className={style["pagination-container"]}>
        {paginationElementsCount.map((_, index) => {
          return (
            <li
              className={style['pagination-item']}
              key={index}
              ref={(el) => { paginationRefs[index] = el; }}
              onClick={(event) => changeThePage(event, index + 1)}
            >
              {index + 1}
            </li>
          );
        })}

        {showSearchEngineArrow &&
		<Link
          to="search-engine-container-id"
          className={style["goTo-search-engine"]}
          spy={true}
          smooth={true}
          duration={1100}
		  offset={-100}
        >
          <i className="fa-solid fa-angles-up" />
        </Link>}
      </ul>
    </>
  );
};
