import { Menu, MenuItem } from "@blueprintjs/core"
import * as React from "react"
import styled from "@emotion/styled"
import { IDashboardTab } from "../utilities"

/**
 * <SidebarComponent tabs={props.tabs}/>
 */

interface ISidebarProps {
  tabs: IDashboardTab[]
}

const Sidebar = styled.div`
  position: absolute;
`

const buildMenuItems = (adminTabs: IDashboardTab[]) =>
  adminTabs.map(tab => (
    <MenuItem
      key={tab.slug}
      href={tab.url_path_prefix}
      className=""
      text={`${tab.category} :: ${tab.name}`}
    />
  ))

export const SidebarComponent = (props: ISidebarProps) => (
  <Sidebar>
    <Menu>{buildMenuItems(props.tabs)}</Menu>
  </Sidebar>
)
