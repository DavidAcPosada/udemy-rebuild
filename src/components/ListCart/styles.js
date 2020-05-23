import styled from "styled-components";
import { flex } from './../../utils/styles/_mixins'
import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    'list-item': {
        width: '100%',
        cursor: 'pointer',
        transition: 'all .3s ease',
        padding: theme.spacing(1),
        boxSizing: 'border-box',
        ...flex({ to: 'mui', justifyContent: 'space-between', alignItems: 'center' }),
        '&:hover': {
            background: theme.palette.grey[200],
            transition: 'all .3s ease'
        }
    },
    'right-section': {
        ...flex({ to: 'mui', alignItems: 'center' })
    },
    image: {
        width: 50,
        paddingRight: theme.spacing(1)
    },
    details: {
        ...flex({ to: 'mui', alignItems: 'center' })
    },
    price: {
        padding: `0 ${theme.spacing(1)}px`
    }
}))

export const ListContainer = styled.div`
    ${ flex({ direction: 'column' }) }
    max-height: 50vh;
    overflow: auto;
`