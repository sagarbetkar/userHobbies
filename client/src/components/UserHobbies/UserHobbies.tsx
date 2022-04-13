import * as React from "react";
import { connect } from "react-redux";
import { User, Hobby } from "../../types";
import { Dispatch } from "redux";
import "./UserHobbies.scss";
import { createHobby, deleteHobby, setHobbies } from "../../features/hobby/hobbiesActions";
import { createUser, fetchUsers } from "../../features/user/usersActions";
import Hobbies from "../Hobbies";
import Users from "../Users";
import Split from 'react-split';


export interface IUserHobbiesProps {
  users: User[];
  hobbies: Hobby[];
  fetchUsers: typeof fetchUsers;
  fetchHobbies: typeof setHobbies;
  addUser: typeof createUser;
  removeHobby: typeof deleteHobby;
  addHobby: typeof createHobby;
}

export interface IUserHobbiesState {
  selectedUserId: string;
}
// Container component connecting to the store
class UserHobbies extends React.Component<IUserHobbiesProps,IUserHobbiesState> {
  constructor(props: IUserHobbiesProps) {
    super(props);
    this.state = {
      selectedUserId: ''
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onAddHobby = (hobby: Hobby, userId: string) => {
    this.props.addHobby(hobby, userId);
  };

  selectUser = (user: User) => {
    this.setState({ selectedUserId: user._id });
    this.props.fetchHobbies(user.hobbies);
  };

  render() {
    const { users, hobbies, removeHobby, addUser } = this.props;
    const { selectedUserId } = this.state;
    return (
      <Split direction="vertical" style={{ height: "calc(100vh - 4rem)"}}>
        <Split style={{ display: "flex" }} sizes={[50, 50]} minSize={[300, 600]}>
          <Users
            users={users}
            selectedUserId={selectedUserId}
            onAdd={addUser}
            selectUser={this.selectUser}
          />
          {selectedUserId ? (
            <div style={{overflowX: "hidden"}}>
                <Hobbies onRemove={removeHobby}
                onAdd={this.onAddHobby}
                userId={selectedUserId}
                hobbies={hobbies}
              />
            </div>
          ) : (
            <div style={{ backgroundColor: "#ccc" }}></div>
          )}
        </Split>
        <div style={{backgroundColor: "#000"}}></div>
      </Split>
    );
  }
}

const mapStateToProps = (store: any) => ({
  users: store.users.users,
  hobbies: store.hobbies.hobbies
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addUser: (username: string) => dispatch(createUser(username)),
  removeHobby: (id: string, userId: string) => dispatch(deleteHobby(id, userId)),
  addHobby: (hobby: Hobby, userId: string) => dispatch(createHobby(hobby, userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchHobbies: (hobbies: Hobby[]) => dispatch(setHobbies(hobbies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHobbies);