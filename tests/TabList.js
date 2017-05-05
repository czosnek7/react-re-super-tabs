import {expect} from 'chai'
import React from 'react'
import {mount, shallow} from 'enzyme'

import {TabList} from '../src'

const Tab = () => <div>tab</div>

describe('TabList', () => {
    it('has 2 children', () => {
        const wrapper = mount(
            <TabList>
                <Tab />
                <Tab />
            </TabList>
        )

        expect(wrapper.props().children.length).to.eql(2)
    })

    it('has 3 children', () => {
        const wrapper = mount(
            <TabList>
                <Tab />
                <Tab />
                <Tab />
            </TabList>
        )

        expect(wrapper.props().children.length).to.eql(3)
    })

    it('has 10 children', () => {
        const wrapper = mount(
            <TabList>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
            </TabList>
        )

        expect(wrapper.props().children.length).to.eql(10)
    })

    it('contains activeTab property set to 1', () => {
        const wrapper = mount(
            <TabList {...{activeTab: 1}} >
                <Tab />
                <Tab />
            </TabList>
        )

        expect(wrapper.props()).to.have.property('activeTab', 1)
    })

    it('contains activeTab property set to "bg-red color-green"', () => {
        const wrapper = mount(
            <TabList {...{styleName: 'bg-red color-green'}} >
                <Tab />
                <Tab />
            </TabList>
        )

        expect(wrapper.props()).to.have.property('styleName', 'bg-red color-green')
    })
})
