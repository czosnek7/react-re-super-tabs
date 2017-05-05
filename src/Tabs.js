import React from 'react'
import PropTypes from 'prop-types'

class TabsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeTab: 0}
        this.changeTab = this.changeTab.bind(this)
    }

    render() {
        const {activeTab} = this.state
        const childrenWithProps = React.Children.map(this.props.children,
            (child, index) => React.cloneElement(child, {
                index, changeTab: this.changeTab, activeTab
            })
        )

        return (<div>{childrenWithProps}</div>)
    }

    changeTab(event) {
        const {currentTarget} = event
        const activeTab = parseInt(currentTarget.getAttribute('data-tab'))

        this.setState(() => ({activeTab}))
    }
}

TabsContainer.propTypes = {
    children: PropTypes.array
}

export default TabsContainer
