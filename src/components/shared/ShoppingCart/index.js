import React from 'react'
import _ from 'lodash'
import { Card, Typography, CardHeader, Fab, Badge, CardActions, ClickAwayListener } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

import useStyles from './styles'
import clsx from 'clsx'
import ListCart from '../../ListCart'
import formatter from '../../../utils/functions/formatter'

export default ({ cartItems = [], open, handleOpen, handleClickAway, handleFavorite, handleDelete }) => {
    const classes = useStyles()

    const cartClasses = clsx({
        [classes.root]: true,
        [classes.active]: open
    })

    const cartButtonClasses = (type) => clsx({
        [classes.fab]: true,
        [classes.fabActive]: type === 'open' ? open : !open
    })

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <Fab className={cartButtonClasses('open')} onClick={handleOpen} color='primary'>
                    <Badge badgeContent={cartItems.length} color='error'>
                        { cartItems.length ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon /> }
                    </Badge>
                </Fab>
                <Fab 
                    className={cartButtonClasses('close')} 
                    onClick={handleOpen} 
                    color='secondary' 
                    size='small'
                    style={{ bottom: 15 + (56/20), right: 15 + (56/20) }}
                >
                    <CloseIcon />
                </Fab>
            
                <Card className={ cartClasses }>
                    <CardHeader
                        className={classes.header}
                        title='Carrito de compra'
                    />
                    {
                        cartItems.length 
                            ? (<ListCart cartItems={cartItems} handleFavorite={handleFavorite} handleDelete={handleDelete} />) 
                            : (<Typography className={classes.empty} variant='subtitle2'>El carrito esta vacío</Typography>)
                    }
                    <CardActions>
                        <div className={classes.total}>
                            <Typography className={classes['total-title']}>Total:</Typography>
                            <Typography variant='subtitle2'>{ formatter.format(_.sumBy(cartItems, 'price')) }</Typography>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </ClickAwayListener>
    )
}
