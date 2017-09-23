import React from 'react'
import PropTypes from 'prop-types'

const TabList = ({children, changeTab, activeTab, className}) => {
    const childrenWithProps = React.Children.map(children,
        child => React.cloneElement(child, {
            changeTab, activeTab
        })
    )

    return (
        <div className={className}>{childrenWithProps}</div>
    )
}

TabList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]),
    changeTab: PropTypes.func,
    activeTab: PropTypes.string,
    className: PropTypes.string
}

export default TabList
