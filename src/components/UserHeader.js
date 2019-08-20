import React from "react";
import { fetchPostsAndUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    //this.props.fetchPostsAndUser(this.props.userId);
  }
  render() {
    if (!this.props.user) {
      return null;
    }
    return <div className="header"> {this.props.user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUser }
)(UserHeader);
