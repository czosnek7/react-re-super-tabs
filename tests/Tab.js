import {expect} from 'chai'
import React from 'react'
import {mount, shallow, render} from 'enzyme'

import {Tab} from '../src'

describe('Tab', () => {
    it('component props needs to be a react component function', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab component={component}/>)

        expect(wrapper.props().component).to.be.instanceof(Function)
    })

    it('has different index property than activeTab property', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab {...{component, index: 0, activeTab: 1}}/>)

        expect(wrapper.props().index).to.not.eql(wrapper.props().activeTab)
    })

    it('has the same index as activeTab property', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab {...{component, index: 0, activeTab: 0}}/>)

        expect(wrapper.props().index).to.eql(wrapper.props().activeTab)
    })

    it('has the same index as activeTab property after props change', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab {...{component, index: 0, activeTab: 1}}/>)

        wrapper.setProps({activeTab: 0});

        expect(wrapper.props().index).to.eql(wrapper.props().activeTab)
    })

    it('has label tab 1 provided by custom component', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<Tab {...{component}}/>)

        expect(wrapper.text()).to.eql('tab 1')
    })

    it('has label tab 1 provided by label property', () => {
        const component = ({children}) => <div>{children}</div>
        const wrapper = mount(<Tab {...{component, label: 'tab 1'}}/>)

        expect(wrapper.text()).to.eql('tab 1')
    })
})
