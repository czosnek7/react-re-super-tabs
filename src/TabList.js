import React from 'react'
import PropTypes from 'prop-types'

const TabList = ({children, changeTab, activeTab, styleName}) => {
    const childrenWithProps = React.Children.map(children,
        (child, index) => React.cloneElement(child, {
            index, changeTab, activeTab
        })
    )

    return (<div className={styleName}>{childrenWithProps}</div>)
}

TabList.propTypes = {
    children: PropTypes.array,
    changeTab: PropTypes.func,
    activeTab: PropTypes.number,
    styleName: PropTypes.string
}

export default TabList
