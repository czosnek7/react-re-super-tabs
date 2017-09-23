import {expect} from 'chai'
import React from 'react'
import {mount} from 'enzyme'

import {Tab} from '../src'

describe('Tab', () => {
    it('component props needs to be a react component function', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab component={component}/>)

        expect(wrapper.props().component).to.be.instanceof(Function)
    })

    it('has different index property than activeTab property', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab component={component} id='about' activeTab='info'/>)

        expect(wrapper.props().id).to.not.eql(wrapper.props().activeTab)
    })

    it('has the same index as activeTab property', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab component={component} id='about' activeTab='about'/>)

        expect(wrapper.props().id).to.eql(wrapper.props().activeTab)
    })

    it('has the same index as activeTab property after props change', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab component={component} id='about' activeTab='info'/>)

        wrapper.setProps({activeTab: 'about'});

        expect(wrapper.props().id).to.eql(wrapper.props().activeTab)
    })

    it('has label tab 1 provided by custom component', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab component={component}/>)

        expect(wrapper.text()).to.eql('tab 1')
    })

    it('has label tab 1 provided by label property', () => {
        const component = ({children}) => <div>{children}</div>
        const wrapper = mount(<Tab component={component} label='tab 1'/>)

        expect(wrapper.text()).to.eql('tab 1')
    })
})
