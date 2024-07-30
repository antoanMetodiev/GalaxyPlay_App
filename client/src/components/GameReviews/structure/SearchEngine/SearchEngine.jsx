import style from "../SearchEngine/SearchEngine.module.css";

export const SearchEngine = ({
    allReviewsList,
    setFilteredReviewsByInputList,
}) => {


    function showFilteredResult(event) {
        let filteredObj = {};

        // debugger;
        if (event.target.value.trim() === '') {
            setFilteredReviewsByInputList({});
        } else {

            for (const key in allReviewsList) {

                let random = allReviewsList[key];
                if (random.gameTitleName.toLowerCase().includes(event.target.value.toLowerCase())) {
                    filteredObj[key] = allReviewsList[key];
                }
            }
    
            setFilteredReviewsByInputList(filteredObj);
        }
    };


    return (
        <input 
        onChange={showFilteredResult}
        type="text"
        className={style['search-reviews-engine']}
        placeholder="Search..."
         />
    );
};