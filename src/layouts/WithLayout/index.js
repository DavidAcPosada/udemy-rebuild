import React from 'react'
import * as Layout from './styles'

export default ({ 
    children, 
    left, 
    leftWidth = '0', 
    right, 
    rightWidth = '0', 
    top, 
    topHeight = '0', 
    bottom, 
    bottomHeight = '0', 
    className 
}) => 
    (
        <Layout.Main className={className}>
            { left && <Layout.FlexibleSize width={ leftWidth }>{ left }</Layout.FlexibleSize> }
             <Layout.LeftRightMain>
                { top && <Layout.FlexibleSize height={ topHeight }>{ top }</Layout.FlexibleSize> }
                 <Layout.TopBottomMain>
                     <Layout.FullWidthContainer>
                        { children }
                     </Layout.FullWidthContainer>
                 </Layout.TopBottomMain>
                { bottom && <Layout.FlexibleSize height={ bottomHeight }>{ bottom }</Layout.FlexibleSize> }
             </Layout.LeftRightMain>
            { right && <Layout.FlexibleSize width={ rightWidth }>{ right }</Layout.FlexibleSize> }
        </Layout.Main>
    )