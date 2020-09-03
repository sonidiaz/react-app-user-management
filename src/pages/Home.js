import React, {useState, useEffect} from 'react'
import UserCard from '../components/UserCard';
import {getUsersAction} from '../redux/actions/usersActions';

import {connect} from 'react-redux';
const Home = ({users, getUsers, isAuth}) => {
  const [page] = useState(1);
  useEffect(() => {
    (users.length === 0) && getUsers(page);
  }, [page, getUsers, users.length])
  return ( 
    <div className="wrapper-app">
        <div className="container">
          {/* <button onClick={ () => setPage(2)}>PAge 2</button> */}
          <div className="row">
            {
              users.map((user) => (
                <UserCard
                  key={user.id} 
                  id={user.id}
                  name={user.first_name} 
                  lastname={user.last_name}
                  login={isAuth}
                />
              ))
            }
          </div>
        </div>
      </div>
   );
}

const mapStateToProps = (state) => {
  return {
    users: state.listUsers.listUsers,
    isAuth: state.userInfo.isAuth
  }
}
const dispatchStateToProps = (dispatch) => {
  return {
    getUsers: (page) => {dispatch(getUsersAction(page))},
  }
}
 
export default connect(mapStateToProps, dispatchStateToProps)(Home);