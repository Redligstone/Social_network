import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './paginator.module.css'



let Paginator = ({currentPage,onPageChanged,totalItemsCount,pageSize, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount =Math.ceil(pagesCount / portionSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
            <button className={s.backButton} onClick={()=>{setPortionNumber(1)}}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/arrow-72-83543.png?f=avif&w=256" alt="" />
                
            </button>}

            {pages
            .filter(p => p >=leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return (
                    <span className={currentPage === p && s.selected_page} onClick={() => { onPageChanged(p) }}> {p} </span>
                )
            })}
            {portionCount > portionNumber &&
            <button className={s.nextButton} onClick={()=>{setPortionNumber(portionNumber + 1)}}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/arrow-77-83551.png?f=avif&w=256" alt="" />
            </button>}
        </div>
    )
}


export default Paginator

