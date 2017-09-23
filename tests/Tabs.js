import {expect} from 'chai'
import React from 'react'
import {mount} from 'enzyme'

import {Tabs} from '../src'

describe('Tabs', () => {
    it('render div as a root', () => {
        const wrapper = mount(<Tabs />)
        expect(wrapper.node.render().type).to.eql('div')
    })

    it('contains proper initial state', () => {
        const wrapper = mount(<Tabs activeTab='about'/>)
        expect(wrapper.state('activeTab')).to.eql('about')
    })

    it('implements changeTab functionality', () => {
        const wrapper = mount(<Tabs />)
        expect(wrapper.node.changeTab).to.not.be.undefined
    })

    it('change the state when invoking changeTab', () => {
        const wrapper = mount(<Tabs />)
        wrapper.node.changeTab({
            currentTarget: {
                getAttribute: (tab) => 1
            }
        })
        expect(wrapper.state('activeTab')).to.eql(1)
    })
})
