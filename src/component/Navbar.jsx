import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="fixed-top">
        <Navbar color="light" primary expand="md">
          <NavbarBrand href="/">Selamat Datang</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#skill">Skill</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://">Skill</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Social Media
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="">Facebook</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="">Instagram</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a href="">Whatsapp</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}