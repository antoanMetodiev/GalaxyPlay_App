import { useRef } from "react";
import style from "../Filter/Filter.module.css";

import inputImage from "../../images/delete-comment.png";

export const Filter = ({
    allReviewsList,
    setFilteredReviewsBySelectListHandler
}) => {

    // References: 
    let formRef = useRef(null);
    let selectRef = useRef(null);

    let filteredObject = [];  // final result

    function makeFilterHandler(event) {

        if (event.target.value === 'Latest Release') {

            let allReleaseDates = []; // all release dates:

            for (const key in allReviewsList) {
                allReleaseDates.push(allReviewsList[key].releaseDate);
            };

            allReleaseDates = allReleaseDates.sort((reviewDate1, reviewDate2) => {
                // For First Review Date (reviewDate1):
                let currentDate1 = reviewDate1.split(', ');
                let year1 = Number(currentDate1[1]);
                let month1 = currentDate1[0].split(' ')[0];
                let day1 = Number(currentDate1[0].split(' ')[1]);

                // For Second Review Date (reviewDate2):
                let currentDate2 = reviewDate2.split(', ');
                let year2 = Number(currentDate2[1]);
                let month2 = currentDate2[0].split(' ')[0];
                let day2 = Number(currentDate2[0].split(' ')[1]);

                let monthConverter = {
                    January: 1,
                    February: 2,
                    March: 3,
                    April: 4,
                    May: 5,
                    June: 6,
                    July: 7,
                    August: 8,
                    September: 9,
                    October: 10,
                    November: 11,
                    December: 12,
                };

                // convert:
                month1 = monthConverter[month1];
                month2 = monthConverter[month2];

                // compare years
                if (year1 !== year2) {
                    return year2 - year1;
                }

                // compare months
                if (month1 !== month2) {
                    return month2 - month1;
                }

                // compare days
                return day2 - day1;
            });


            // debugger;
            for (let wantedDate of allReleaseDates) {

                for (const key in allReviewsList) {
                    if (allReviewsList[key].releaseDate === wantedDate) {
                        filteredObject.push(allReviewsList[key]);
                        break;
                    }
                }
            }

            formRef.current.style.display = 'none';

            setFilteredReviewsBySelectListHandler(filteredObject);

        } else if (event.target.value === 'Without Filter') {
            // clear:
            formRef.current.style.display = 'none';
            setFilteredReviewsBySelectListHandler([]);
        } else if (event.target.value === 'Platforms') {
            formRef.current.style.display = 'block';

        } else if (event.target.value === 'Genres') {
            formRef.current.style.display = 'block';

        } else if (event.target.value === 'Developers') {
            formRef.current.style.display = 'block';

        } else if (event.target.value === 'Publishers') {
            formRef.current.style.display = 'block';

        } else if (event.target.value === 'Franchises') {
            formRef.current.style.display = 'block';

        } else if (event.target.value === 'Most Liked') {
            formRef.current.style.display = 'none';

            debugger;

            let keysAndLikes = [];
            filteredObject = [];

            for (const key in allReviewsList) {
                keysAndLikes.push({
                    key: key,
                    likes: Object.keys(allReviewsList[key].likes ? allReviewsList[key].likes : []).length,
                });
            }

            keysAndLikes.sort((a, b) => b.likes - a.likes);

            keysAndLikes.forEach(object => {
                filteredObject.push(allReviewsList[object.key]);
            });

            // console.log(filteredObject);
            setFilteredReviewsBySelectListHandler(filteredObject);
        }

    }


    function showFilterResults(event) {
        event.preventDefault();

        filteredObject.length = 0;

        for (const key in allReviewsList) {

            console.log(selectRef.current.value);

            let category = selectRef.current.value.toLowerCase();
            let random = allReviewsList[key][category];
            random = random.toLowerCase();

            if (random.includes(event.currentTarget.inputText.value.trim() === ''
                ? event.currentTarget.inputText.value : event.currentTarget.inputText.value.toLowerCase())) {

                // Note:
                // - The Spagheti code above Me saying: (if the value is '' - dont use .toLowerCase(), but if not - use them!)
                filteredObject.push(allReviewsList[key]);
            }
        }

        setFilteredReviewsBySelectListHandler(filteredObject);
    }

    function sibmitFormHandler() {
        formRef.current.submit();
    }

    return (
        <>
            <select
                ref={selectRef}
                onChange={makeFilterHandler}
                className={style['filter']}
                name=""
                id="">
                <option>Without Filter</option>
                <option>Latest Release</option>
                <option>Platforms</option>
                <option>Genres</option>
                <option>Developers</option>
                <option>Publishers</option>
                <option>Franchises</option>
                <option>Most Liked</option>
            </select>

            <form
                onSubmit={showFilterResults}
                className={style['invisible-form']}
                ref={formRef}
            >

                <input
                    className={style['choose-concrete-filter']}
                    type="text"
                    name="inputText"
                    placeholder={`Search...`}
                />

                <i
                    onClick={sibmitFormHandler}
                    className="fa-solid fa-magnifying-glass" />

                {/* <input
                    className={style['input-image']}
                    type="image"
                    src={inputImage}
                    alt="input-image"
                /> */}

                <button type="submit" style={{ display: 'none' }}></button>
            </form>
        </>
    );
}