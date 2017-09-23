import {expect} from 'chai'
import React from 'react'
import {mount} from 'enzyme'

import {TabPanel} from '../src'

describe('TabPanel', () => {
    it('component props needs to be a react component function', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<TabPanel component={component}/>)

        expect(wrapper.props().component).to.be.instanceof(Function)
    })

    it('has different index property than activeTab property', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<TabPanel component={component} id='info' activeTab='about'/>)

        expect(wrapper.props().index).to.not.eql(wrapper.props().activeTab)
    })

    it('has the same index as activeTab property', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<TabPanel component={component} id='info' activeTab='info'/>)

        expect(wrapper.props().id).to.eql(wrapper.props().activeTab)
    })

    it('has the same index as activeTab property after props change', () => {
        const component = () => <div>tab 1</div>
        const wrapper = mount(<TabPanel component={component} id='info' activeTab='about'/>)

        wrapper.setProps({activeTab: 'info'});

        expect(wrapper.props().id).to.eql(wrapper.props().activeTab)
    })

    it('has container that contains "panel aside" provided by custom component', () => {
        const component = () => <div>panel
            <div className="container">
                <div className='panel__aside'>panel aside</div>
            </div>
        </div>
        const wrapper = mount(<TabPanel component={component} id='about' activeTab='about'/>)
        expect(wrapper.find('.panel__aside').text()).to.eql('panel aside')
    })

    it('should not be rendered when active tab prop is not equal to index prop', () => {
        const component = () => <div>panel
            <div className="container">
                <div className='panel__aside'>panel aside</div>
            </div>
        </div>
        const wrapper = mount(<TabPanel component={component} id='info' activeTab='about'/>)

        expect(wrapper.find('.panel__aside').length).to.eql(0)
    })
})
