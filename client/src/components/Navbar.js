import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Image, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import utoob from "./assets/utoob-logo.png";
import avatar from "./assets/user-avatar.png";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

  

    if (user) {
      return (
        <>
        <Menu.Menu position="right">
          <Image src="https://cdn1.iconfinder.com/data/icons/ui-5/502/upload-512.png" size= 'tiny'/>
            
          <Menu.Item
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
        <Menu.Menu position = "right" >
          <Image src={avatar} size='tiny' />
        <Menu.Item
          onClick={() => handleLogout(this.props.history)}
        />
        </Menu.Menu >
        </>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Image src={utoob} size='small'/>
            <Menu.Item
              
              id="home"
              active={this.props.location.pathname === "/"}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
      
     
        
    
      
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);

{
  /* <Image src="/assets/utoob-logo.png"/> */
}
