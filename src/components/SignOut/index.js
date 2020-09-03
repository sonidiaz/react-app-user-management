import React, {useState} from 'react';
import {SignOutStyledCmp} from './styled';
import {connect} from 'react-redux'
import {UserSignOut} from '../../redux/actions/userActions'
import {useHistory} from 'react-router-dom';

const SignOut = ({avatar, singOut}) => {
  let history = useHistory();
  const [showBoxLogout, setShowBoxLogout] = useState(false);

  const handleSignOut = () => {
    singOut();
    history.push('/')
  }
  return ( 
    <SignOutStyledCmp onClick={() => setShowBoxLogout(!showBoxLogout)}>
        <div className="avatar">
          <img src={avatar} alt="Avatar Profile"/>
        </div>
        <span className="icon-logout"></span>
        {
          showBoxLogout && (
            <div className="box-logout">
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )
        }
    </SignOutStyledCmp>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    singOut: () => {dispatch(UserSignOut())}
  }
}
 
export default connect(null, mapDispatchToProps)(SignOut);