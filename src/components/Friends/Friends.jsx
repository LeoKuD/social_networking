import Friend from './Friend/Friend'

const Friends = (props) => {

    let state = props.state.friendsPage.friends

    let friendElement = state.map(
        f => <Friend name={f.name} />
    )
    return (
        <div>
            {friendElement}
        </div>

    )
}

export default Friends