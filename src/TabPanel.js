import React from 'react'
import PropTypes from 'prop-types'

const TabPanel = ({component, id, activeTab}) => {
    const Component = component
    return (
        <div>
            {id === activeTab && <Component />}
        </div>
    )
}

TabPanel.propTypes = {
    component: PropTypes.func,
    id: PropTypes.string,
    activeTab: PropTypes.string
}

export default TabPanel
