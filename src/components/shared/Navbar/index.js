import React from 'react'
import clsx from 'clsx'
import { Paper, Button, Badge, Fab, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols'

import useStyles from './styles'
import AvatarWithBadge from '../../AvatarWithBadge'
import TooltipedButton from '../../TooltipedButton'

export default ({ userInfo }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <TooltipedButton
                textTransform='normal'
                style={{ borderRadius: 50, paddingRight: 15 }}
                withContextualMenu
                contextualItems={(
                    <>
                        <MenuItem>
                            <ListItemIcon><FiberManualRecordIcon style={{ color: '#44b700' }} /></ListItemIcon>
                            <ListItemText primary='Active' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><FiberManualRecordIcon style={{ color: '#f44336' }} /></ListItemIcon>
                            <ListItemText primary='Inactive' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><FiberManualRecordIcon style={{ color: '#ffeb3b' }} /></ListItemIcon>
                            <ListItemText primary='Await' />
                        </MenuItem>
                    </>
                )}
            >
                <AvatarWithBadge status='active' style={{ marginRight: 10 }} />
                Usuario@usuario.com
            </TooltipedButton>
            <Button endIcon={<EmojiSymbolsIcon />}>
                Mis cursos
            </Button>
        </Paper>
    )
}
