import { css } from 'styled-components'

export const flex = ({ 
    to = 'styled', 
    direction = 'row', 
    alignItems = 'flex-start', 
    justifyContent = 'flex-start',
    wrap = 'no-wrap'
}) => {
    if (to === 'mui') {
        return ({
            display: 'flex',
            flexDirection: direction,
            flexWrap: wrap,
            justifyContent,
            alignItems
        })
    }

    return css`
        display: flex;
        flex-direction: ${direction};
        flex-wrap: ${wrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
    `
}