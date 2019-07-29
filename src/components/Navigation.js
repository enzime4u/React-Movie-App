import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

 const Navigation = (props) => {
  return (
      <Menu inverted borderless>
        <Menu.Item
          icon='film'
          name='React Movie App'
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' onChange={(e) => props.onChangeSearchText(e.target.value)} value={props.searchTerm}/>
          </Menu.Item>
          <Menu.Item
            name='login'
          />
        </Menu.Menu>
      </Menu>
    )
  }

export default Navigation;