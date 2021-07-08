import style from './Paginator.module.css'

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil((totalUsersCount / 250) / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && style.selectedPage}
                onClick={() => { onPageChanged(p) }} >{p}</span>
        })}
    </div>
}

