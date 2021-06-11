import style from './ProfileInfo.module.css'
import React from 'react'

class ProfileInfo extends React.Component {

    state = {
        editMode: false
    }
    statusEditActivate = () => {
        this.setState({
            editMode: true
        })

    }
    statusEditDeactivate = () => {
        this.setState({
            editMode: false
        })

    }

    render() {
        return (
            < div >
                {this.state.editMode ?
                    <div>
                        <input onBlur={this.statusEditDeactivate} autoFocus={true} value={this.props.status} type="text" />
                    </div> :
                    < div >
                        <span onDoubleClick={this.statusEditActivate} >{this.props.status}</span>
                    </div >
                }

            </div >
        )
    }
}

export default ProfileInfo
