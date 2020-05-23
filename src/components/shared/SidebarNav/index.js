import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, Icon } from '@material-ui/core'
import useStyles from './styles'

const categoriesToShow = [
    {
        id: 1,
        name: 'Desarrollo',
        description: 'Aprende sobre desarrollo',
        icon: 'computer'
    },
    {
        id: 2,
        name: 'Diseño',
        description: 'Aprende sobre diseño',
        icon: 'create'
    },
    {
        id: 3,
        name: 'Matematicas',
        description: 'Aprende sobre matematicas',
        icon: 'casino'
    }
]

export default () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <List component='nav'>
                {
                    categoriesToShow.map(item => (
                        <ListItem button key={item.id}>
                            <ListItemIcon>
                                <Icon>{ item.icon }</Icon>
                            </ListItemIcon>
                            <ListItemText primary={item.name} secondary={item.description} />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}
