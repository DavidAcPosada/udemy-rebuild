import React from 'react'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core'


const statusColors = {
    active: '#44b700',
    inactive: '#f44336',
    wait: '#ffeb3b'
} 

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: props => statusColors[props.status],
        color: props => statusColors[props.status],
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }
}))(Badge)

export default ({ status = 'active', ...props }) => {
    const { style } = props

    return (
        <StyledBadge
            status={status}
            style={style}
            overlap='circle'
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            variant='dot'
        >
            <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' />
        </StyledBadge>
    )
}
