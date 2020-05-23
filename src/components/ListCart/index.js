import React from 'react'
import _ from 'lodash'
import { Typography, IconButton, Tooltip } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'

import formatter from '../../utils/functions/formatter'

import useStyles, { ListContainer } from './styles'

export default ({ cartItems = [], handleFavorite, handleDelete }) => {
    const classes = useStyles()
    const favorite = false

    return (
        <ListContainer>
            {
                cartItems.map((item, index) => (
                    <div key={index} className={classes['list-item']}>
                        <div className={classes.details}>
                            <img className={classes.image} src={item.image ? item.image : 'https://i.imgur.com/50xfV7B.png'} />
                            <div>
                                <Typography variant='h6'>{_.truncate(item.name, { length: 32, separator: ' ' })}</Typography>
                                <Typography variant='caption'>{item.author}</Typography>
                            </div>
                        </div>
                        <div className={classes['right-section']}>
                            <div className={classes.price}>
                            <Typography variant='subtitle2'>{ formatter.format(item.price) }</Typography>
                            </div>
                            <div>
                                <Tooltip title='Añadir a favoritos' arrow placement='top'>
                                    <IconButton 
                                        size='small' 
                                        onClick={() => handleFavorite({id: item.id})} 
                                        color={item.favorite ? 'secondary' : 'default'}
                                    >
                                        { item.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Eliminar' arrow placement='top'>
                                    <IconButton size='small' onClick={() => handleDelete({ id: item.id })}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                ))
            }
    </ListContainer>
    )
}
