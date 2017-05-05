import React from 'react'
import PropTypes from 'prop-types'

const TabPanel = ({component, index, activeTab}) => {
    const Component = component
    return (
        <div>
            {index === activeTab && <Component />}
        </div>
    )
}

TabPanel.propTypes = {
    component: PropTypes.func,
    index: PropTypes.number,
    activeTab: PropTypes.number
}

export default TabPanel
