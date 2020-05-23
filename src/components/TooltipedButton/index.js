import React, { useState } from 'react'
import { Button, Tooltip, makeStyles, Menu } from '@material-ui/core'

const labelStyles = makeStyles({
    capitalize: {
        textTransform: 'capitalize'
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    normal: {
        textTransform: 'none'
    }
})

const rootStyles = makeStyles({
    normal: {

    },
    icon: {
        width: '24px',
        margin: 0
    }
})

export default ({ 
    children,
    onClick = null,
    title = null, 
    placement = 'top', 
    textTransform = 'uppercase', 
    type = 'normal', 
    variant,
    delay = 200,
    withContextualMenu,
    contextualItems = null,
    ...props
}) => {
    const { style } = props
    const labelClasses = labelStyles()
    const classes = rootStyles()

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = _event => {
        setAnchorEl(_event.target)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Tooltip 
                title={title}
                placement={placement}
                disableHoverListener={!title}
                leaveDelay={delay}
            >
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    style={style}
                    variant={variant}
                    classes={{
                        label: labelClasses[textTransform],
                        root: classes[type]
                    }}
                    onClick={(e) => {
                        if(onClick) onClick(e)
                        if (withContextualMenu) handleClick(e)
                    }}
                >
                    { children }
                </Button>
            </Tooltip>
            {
                withContextualMenu && (
                    <Menu
                        id='context-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        transformOrigin={{
                            horizontal: 'left',
                            vertical: 'top'
                        }}
                        anchorOrigin={{
                            horizontal: 'left',
                            vertical: 'bottom'
                        }}
                    >
                        {contextualItems}
                    </Menu>
                )
            }
        </>
    )
}