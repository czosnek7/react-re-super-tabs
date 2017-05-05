import {expect} from 'chai'
import React from 'react'
import {mount, shallow} from 'enzyme'

import {Tabs} from '../src'

describe('Tabs', () => {
    it('contains proper initial state', () => {
        const wrapper = mount(<Tabs />)
        expect(wrapper.state('activeTab')).to.eql(0)
    })

    it('implements changeTab functionality', () => {
        const wrapper = mount(<Tabs />)
        expect(wrapper.node.changeTab).to.not.be.undefined
    })
})
