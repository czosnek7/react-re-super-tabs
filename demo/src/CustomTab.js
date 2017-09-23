import React from 'react'

const style = {'padding': '10px', 'margin': '5px', 'borderBottom': '3px solid #333', 'display': 'inline-block', 'cursor': 'pointer'}
const activeStyle = {...style, 'borderBottom': '3px solid gold'}

const CustomTab = ({children, isActive}) =>
    <span style={isActive ? activeStyle : style}>{children}</span>

export default CustomTab
