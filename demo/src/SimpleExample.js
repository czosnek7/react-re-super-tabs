import React from 'react'

import {Tabs, Tab, TabPanel, TabList} from '../../lib'

const SimpleExample = () =>
    <div>
        <h2>Simple</h2>
        <Tabs activeTab='about'>
            <TabList>
                <Tab component={() => <div>info</div>} id='info'/>
                <Tab component={() => <div>about</div>} id='about' />
                <Tab component={() => <div>contact</div>} id='contact' />
            </TabList>
            <TabList>
                <TabPanel component={() => <p>info content ...</p>} id='info'/>
                <TabPanel component={() => <p>about content ...</p>} id='about'/>
                <TabPanel component={() => <p>contact content ...</p>} id='contact'/>
            </TabList>
        </Tabs>
    </div>

export default SimpleExample
