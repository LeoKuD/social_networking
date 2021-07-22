import { useState } from 'react'
import style from './Paginator.module.css'

export const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [currentPortionNumber, setCurrentPortion] = useState(1)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let rightPortionPageNumber = currentPortionNumber * portionSize
    let leftPortionPageNumber = (currentPortionNumber - 1) * portionSize +1


    return <div>
        {currentPortionNumber >  1 &&
        <button onClick={() => setCurrentPortion(currentPortionNumber - 1)} >Prev</button> }
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
        .map((p) => {
            return <span className={currentPage === p ? style.selectedPage : style.spanPage}
                onClick={() => { onPageChanged(p) }} >{p}</span>
        })}
        {currentPortionNumber < portionCount  &&
        <button onClick={() => setCurrentPortion(currentPortionNumber + 1)} >Next</button>}
        {currentPortionNumber}
    </div>
}

