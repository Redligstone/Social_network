import React from 'react';
import s from './info.module.css'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    // Оба консоль лого дадут false потому что setState - ассинхронный
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <>  {!this.state.editMode &&
                <div className={s.content}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                </div>
            }
                {this.state.editMode &&
                    <div className={s.content}>
                        <input onChange={this.onStatusChange} type="text" value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </>

        )
    }

}

export default ProfileStatus