import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import style from "../PaginationList/PaginationList.module.css";
import { useLocation } from "react-router-dom";

// Обикновена променлива за съхранение на референции
let paginationRefs = [];
let firstSubPathText = "";

export const PaginationList = ({
  gameList,
  allGames,
  setGameListHandler,
  startAndEndIndexes,

  previousPathName,
  setPreviousPathNameHandler,
  currentPage,
  setCurrentPageHandler,
}) => {
  let location = useLocation();
  let currentPath = location.pathname.split("/");

  const [paginationElementsCount, setPaginationElementsCount] = useState([1]);
  let [showSearchEngineArrow, setShowSearchEngineArrow] = useState(false);

  useEffect(() => {
    debugger;
    const calculatePaginationItems = async () => {
      const count = await Math.ceil(allGames.length / 18);
      let a = "li$".repeat(count).split("$");
      a.pop();
      setPaginationElementsCount(a);
    };

    calculatePaginationItems();
  }, [allGames, location.pathname]);

  if (firstSubPathText !== currentPath[currentPath.length - 1] && currentPath[currentPath.length - 1].startsWith("-")) {
    setCurrentPageHandler(1);
  }

  useEffect(() => {
    debugger;
    const setCurrentPage = () => {
      paginationRefs.forEach((item, index) => {
        if (item) {
          item.style.backgroundColor =
            index + 1 === currentPage ? "blue" : "gray";
        }
      });
    };

    setCurrentPage();
  }, [currentPage, paginationElementsCount]);

  useEffect(() => {
    setTimeout(() => {
      setShowSearchEngineArrow(true);
    }, 2000);

    firstSubPathText = currentPath[currentPath.length - 1];
  }, []);

  useEffect(() => {
    const calculatePaginationEls = () => {
      if (!currentPath[currentPath.length - 1].startsWith("-")) {
		debugger;
        const count = Math.ceil(allGames.length / 18);
        let a = "li$".repeat(count).split("$");
        a.pop();
        setPaginationElementsCount(a);
      }
    };

    calculatePaginationEls();
  }, [location.pathname]);

  function changeThePage(event, pageIndex) {
    let endIndex = pageIndex * 18;
    let startIndex = endIndex - 18;

	  debugger;
    let newArr = allGames.slice(startIndex, endIndex);
    setGameListHandler(newArr);

    setCurrentPageHandler(pageIndex); // Обновявам си текущата страница
    window.scrollTo(0, 0);
    startAndEndIndexes.startIndex = startIndex;
    startAndEndIndexes.endIndex = endIndex;
  }


  return (
    <>
      <ul
        id="pagination-container-id"
        className={style["pagination-container"]}
      >
        {paginationElementsCount.map((_, index) => {
          return (
            <li
              className={style["pagination-item"]}
              key={index}
              ref={(el) => {
                paginationRefs[index] = el;
              }}
              onClick={(event) => changeThePage(event, index + 1)}
            >
              {index + 1}
            </li>
          );
        })}

        {showSearchEngineArrow && (
          <Link
            to="search-engine-container-id"
            className={style["goTo-search-engine"]}
            spy={true}
            smooth={true}
            duration={1100}
            offset={-100}
          >
            <i className="fa-solid fa-angles-up" />
          </Link>
        )}
      </ul>
    </>
  );
};
