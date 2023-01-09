import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

function UserContainer({ usersData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {usersData.loading ? (
        <h3>Loading...</h3>
      ) : usersData.error ? (
        <div>{usersData.error}</div>
      ) : (
        usersData && usersData.users && usersData.users.map((user,i) => {
          return <div key={i} >{user.name} 
          <p>{user.email}</p>
          <p><a href={user.website} >{user.website}</a></p>
          </div>;
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usersData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
