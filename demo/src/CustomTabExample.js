import React from 'react'

import {Tabs, Tab, TabPanel, TabList} from '../../lib'
import CustomTab from './CustomTab'

const CustomTabExample = () =>
    <div>
        <h2>Custom tab</h2>
        <Tabs activeTab='about'>
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

export default CustomTabExample
