import style from './ProfileInfo.module.css'
import React from 'react'

class ProfileInfo extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatusProfile(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(PrevProps, PrevState) {
        if (PrevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            < div >
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onChangeStatus} onBlur={this.statusEditDeactivate} autoFocus={true} value={this.state.status} type="text" />
                    </div> :
                    < div >
                        <span onDoubleClick={this.statusEditActivate} >{this.state.status || '----'}</span>
                    </div >
                }

            </div >
        )
    }
}

export default ProfileInfo
