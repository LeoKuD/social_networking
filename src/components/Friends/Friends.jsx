import Friend from './Friend/Friend'

const Friends = (props) => {

    let friendElement = props.state.friends.map(
        f => <Friend name={f.name} />
    )
    return (
        <div>
            {friendElement}
        </div>

    )
}

export default Friends