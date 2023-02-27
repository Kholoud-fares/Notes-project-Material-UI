import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar} from '@mui/material'
import { format } from 'date-fns'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Layout({children}) {
    const page= {
        background: '#f9f9f9',
        width: '100%',
        padding: 24,
        marginTop:60,
        height: 613,
    }

    const drawer= {
      width: '210px',

    }

    const drawerPaper= {
      width: '210px',
    }

    const root={
      display: 'flex',
    }

    const active={
      background: '#f4f4f4',
    }

    const title={
      padding: 16,
    }

    const appbar={
      width: `calc(100% - 210px)`,
    }

    const date={
      flexGrow: 1,
    }

    const avatar={
      marginLeft: 16,
    }

    const menuItems=[
      {
        text: "My Notes",
        icon: <SubjectOutlined color='secondary' />,
        path: "/",
      },
      {
        text: "Create Note",
        icon: <AddCircleOutlineOutlined color='secondary' />,
        path: "/create",
      }
    ]

  const navigate= useNavigate();
  const location= useLocation();
  return (
    <div style={root}>
      <AppBar position="fixed" color="secondary" style={appbar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" style={date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Kholoud
          </Typography>
          <Avatar src='/Avatar.png' style={avatar}/>
        </Toolbar>
      </AppBar>

      <Drawer 
       style={drawer}
       variant="permanent"
       anchor='left'
      > 
         <div style={drawerPaper}>  
           <Typography variant='h5' style={title}>
             My Notes 
           </Typography>
         </div>
         <List>
           {menuItems.map(item => (
             <ListItem key={item.text}
              button 
              onClick={ () => navigate(item.path)}
              style={location.pathname === item.path ? active : null}
              >
               <ListItemIcon>{item.icon}</ListItemIcon>
               <ListItemText primary={item.text} />
             </ListItem>
           ))}
         </List>
         
      </Drawer>

      <div style={page}>
        {children}
      </div>
    </div>
  )
}
