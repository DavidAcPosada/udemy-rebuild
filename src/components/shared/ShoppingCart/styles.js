import styled from 'styled-components'
import { makeStyles } from "@material-ui/core";
import { flex } from '../../../utils/styles/_mixins';

export default makeStyles(theme => ({
    root: {
        width: 500,
        position: 'absolute',
        bottom: 0,
        right: 0,
        boxShadow: '-3px -3px 10px 5px rgba(0, 0, 0, .16)',
        clipPath: 'circle(0% at 91% 91%)',
        borderRadius: 0,
        borderTopLeftRadius: 20,
        transition: theme.transitions.create(
            ['clip-path'],
            { duration: theme.transitions.duration.standard }
        )
    },
    active: {
        clipPath: 'circle(150% at 91% 91%)',
        transition: theme.transitions.create(
            ['clip-path'],
            { duration: theme.transitions.duration.standard }
        )
    },
    header: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    headerButton: {
        color: theme.palette.common.white
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1,
        transform: 'scale(1)',
        transition: theme.transitions.create(
            ['transform'],
            { duration: theme.transitions.duration.shortest }
        )
    },
    fabActive: {
        transform: 'scale(0)',
        transition: theme.transitions.create(
            ['transform'],
            { duration: theme.transitions.duration.shortest }
        )
    },
    empty: {
        padding: `${theme.spacing(2)}px 0`,
        textAlign: 'center'
    },
    total: {
        width: '84%',
        padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
        ...flex({ to: 'mui', justifyContent: 'space-between', alignItems: 'center' })
    },
    'total-title': {
        fontWeight: 'bold'
    }
}))
