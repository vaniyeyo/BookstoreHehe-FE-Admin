import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';

export const SidebarData= [
    {
       title: "Home",
       icon: <HomeIcon />,
       link: "/home"
    },
    {
        title: "Book",
        icon: <MenuBookIcon />,
        link: "/book"
     },
     {
        title: "CustomerList",
        icon: <GroupIcon />,
        link: "/customerlist"
     },
]
