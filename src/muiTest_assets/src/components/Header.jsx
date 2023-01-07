import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

function Header() {
  return (
    <AppBar>
        <Toolbar>
            <Grid container spacing = {2}>
                <Grid>
                    <InputBase />
                </Grid>
                <Grid item>
                    <IconButton >
                        <Badge badgeContent={333} >
                        <MailIcon />
                        </Badge>
                    </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Header;