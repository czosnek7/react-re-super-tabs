import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({component, label, id, changeTab, activeTab}) => {
    const Component = component
    const isActive = id === activeTab
    return (
        <span onClick={changeTab} data-id={id}>
      <Component isActive={isActive}>{label}</Component>
    </span>
    )
}

Tab.propTypes = {
    component: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    changeTab: PropTypes.func,
    activeTab: PropTypes.string
}

export default Tab
