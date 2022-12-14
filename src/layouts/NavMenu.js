import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'

class NavMenu extends Component {

  render(){
    let { current, handleClick, collapse, onCollapseChange  } = this.props

    const MenuData = [
      {name: "home", desc: "Home"},
     
      {name: "skill", desc: "Skills"},
      {name: "project", desc: "Projects"},
      {name: "contact", desc: "Contact"}
    ]

    return (
      <aside className="layout-sider">
          <div className="layout-logo">
              <i className="iconfont icon-jianli" id="logo"></i>
              {!collapse && <span className="title-text">  </span>}
          </div>
          <Menu mode="inline"
              theme="dark"
              defaultSelectedKeys={['home']}
              selectedKeys={[current]}
              onClick={handleClick}
          >
            {
              MenuData.map( data => {
                const name = data.name,
                  desc = data.desc;

                return (
                  <Menu.Item key={name}>
                      <Link to={name == "home" ? "/" : `/${name}`}>
                          <i className={name == "home" ? "iconfont icon-index" : `iconfont icon-${name}`}></i>
                          {!collapse && <span className="nav-text">{desc}</span>}
                      </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className="aside-action" onClick={onCollapseChange}>
              {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
      </aside>

    )
  }
}

export default NavMenu
