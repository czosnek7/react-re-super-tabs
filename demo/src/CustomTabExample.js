import React from 'react'

import {Tabs, Tab, TabPanel, TabList} from '../../lib'
import CustomTab from './CustomTab'

class CustomTabExample extends React.Component {
    constructor () {
        super()
        this.state = {activeTab: 'about'}
    }
    render () {
        const {activeTab} = this.state
        return (
            <div>
                <h2>Custom tab</h2>
                <Tabs activeTab={activeTab}>
                    <TabList className='text-center bg-light indent-bottom--medium'>
                        <Tab component={CustomTab} label='info' id='info'/>
                        <Tab component={CustomTab} label='about' id='about'/>
                    </TabList>
                    <TabList>
                        <TabPanel component={() => <div>first tab</div>} id='info'/>
                        <TabPanel component={() => <div>second tab</div>} id='about'/>
                    </TabList>
                </Tabs>
            </div>
        )
    }
}

export default CustomTabExample
