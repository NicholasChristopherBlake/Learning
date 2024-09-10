import { Layout } from "antd";
import { Row } from "antd/es/grid";
import React, { FC } from "react"
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth, user} = useTypedSelector(state => state.auth);
  const {logout} = useActions()

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth 
        ? <>
          <div style={{color: 'white'}}>{user.username}</div>
          <button onClick={logout}>Sign Out</button>
          </>
        :
        <button onClick={() => navigate(RouteNames.LOGIN)}>Login</button>
        }
        
      </Row>
    </Layout.Header>
  )
}

export default Navbar;
