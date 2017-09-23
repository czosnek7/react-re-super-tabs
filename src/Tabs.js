import React from 'react'
import PropTypes from 'prop-types'

class TabsContainer extends React.Component {
    constructor(props) {
        super(props)
        const {activeTab} = props
        this.state = {activeTab}
        this.changeTab = this.changeTab.bind(this)
    }

    render() {
        const {activeTab} = this.state
        const childrenWithProps = React.Children.map(this.props.children,
            (child, index) => React.cloneElement(child, {
                index, changeTab: this.changeTab, activeTab
            })
        )

        return (
            <div>{childrenWithProps}</div>
        )
    }

    changeTab(event) {
        const {currentTarget} = event
        const activeTab = currentTarget.getAttribute('data-id')

        this.setState(() => ({activeTab}))
    }
}

TabsContainer.propTypes = {
    activeTab: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ])
}

export default TabsContainer
