import style from './Paginator.module.css'

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil((totalUsersCount / 60) / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return <div>
        <button>Prev</button>
        {pages.map(p => {
            return <span className={currentPage === p ? style.selectedPage : style.spanPage}
                onClick={() => { onPageChanged(p) }} >{p}</span>
        })}
        <button>Next</button>
    </div>
}

