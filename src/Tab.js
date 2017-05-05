import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({component, label, index, changeTab, activeTab}) => {
    const Component = component
    return (
        <span onClick={changeTab} data-tab={index}>
      <Component {...{isActive: (index === activeTab)}} >{label}</Component>
    </span>
    )
}

Tab.propTypes = {
    component: PropTypes.func,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    index: PropTypes.number,
    changeTab: PropTypes.func,
    activeTab: PropTypes.number
}

export default Tab
