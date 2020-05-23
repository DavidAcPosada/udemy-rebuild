import { makeStyles } from "@material-ui/core";

import { flex } from './../../../utils/styles/_mixins'

export default makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingRight: theme.spacing(2),
        borderRadius: 0,
        boxShadow: 'none',
        ...flex({ to: 'mui', justifyContent: 'flex-end', alignItems: 'center' }),
        '& > *': {
            marginLeft: 10
        },
    },
    fab: {
        background: 'transparent',
        boxShadow: 'none'
    }
}))