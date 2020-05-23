import React, { useState } from 'react';
import _ from 'lodash'
import WithLayout from './../WithLayout'
import SidebarNav from '../../components/shared/SidebarNav';
import Navbar from '../../components/shared/Navbar';
import ShoppingCart from './../../components/shared/ShoppingCart'

import useStyles, { MainLayoutContainer } from './styles'

export default ({ children }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Curso de React con redux',
            author: 'Cristian Acevedo',
            image: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png',
            price: 45000,
            favorite: true,
            incart: true
        },
        {
            id: 2,
            name: 'Curso de GraphQL',
            author: 'David Acevedo',
            image: null,
            price: 33000,
            favorite: false,
            incart: true
        }
    ])

    const handleFavorite = ({ id }) => {
        const find = cartItems.indexOf(_.find(cartItems, item => item.id === id));
        const items = cartItems

        items[find] = {
            ...items[find],
            favorite: !items[find].favorite
        }

        setCartItems([
            ...items
        ])
    }

    const handleDelete = ({ id }) => {
        const find = cartItems.indexOf(_.find(cartItems, item => item.id === id))
        const items = cartItems

        items.splice(find, 1)

        setCartItems([
            ...items
        ])
    }

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <MainLayoutContainer>
            <WithLayout
                top={<Navbar />}
                topHeight='50px'
                left={<SidebarNav />}
                leftWidth='20%'
            >
                { children }
            </WithLayout>
            <ShoppingCart 
                open={open} 
                handleOpen={handleOpen} 
                cartItems={cartItems} 
                handleFavorite={handleFavorite}
                handleDelete={handleDelete}
                handleClickAway={handleClickAway}
            />
        </MainLayoutContainer>
    )
}