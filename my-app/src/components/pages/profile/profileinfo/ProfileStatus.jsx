import React from "react";

class ProfileStatus extends React.Component {
  onStatusChange(value){
    this.setState({...this.state,status:value})
  }
  onInputStatusChange=(value)=>{this.onStatusChange(value)}
  onInputStatusUpdate=(value)=>{this.props.updateStatusThunkAC(value);this.setState({ editMode: false })}
  state = {
    editMode: false,
    status: this.props.status,
  };
  componentDidUpdate(s){
    this.props.getStatusThunkAC(this.props.id)
    if (s.status===this.props.status){
  }else{this.setState({...this.state,status:this.props.status})}}
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
            onChange={(el)=>this.onInputStatusChange(el.currentTarget.value)}
              type="text"
              value={this.state.status}
              onBlur={(el) => {
                this.onInputStatusUpdate(el.currentTarget.value);
              }}
              autoFocus={true}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={() => {if(this.props.logginedUserid===this.props.id)this.setState({ editMode: true })}}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
