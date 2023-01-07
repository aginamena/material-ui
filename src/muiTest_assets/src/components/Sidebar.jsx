import React from 'react'
import {Drawer} from "@mui/material";
import { drawerWidth } from '../util/lib';

function Sidebar() {

  return (
    <Drawer  sx={{
        width: drawerWidth,
        backgroundColor:"black",
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left">
    </Drawer>
  )
}

export default Sidebar