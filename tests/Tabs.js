import {expect} from 'chai'
import React from 'react'
import {mount, shallow} from 'enzyme'

import {Tab} from '../src'

describe('Tab', () => {
    it('implements changeTab functionality', () => {
        const wrapper = mount(<Tab />)
        console.log(wrapper.props)
        console.log('-----------------------------------------------------')
        // expect(wrapper.node.changeTab).to.be.instanceof(Function)
    })
})
