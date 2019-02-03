import React from 'react'
import { shallow } from 'enzyme'
import renderToggle from './renderToggle'

describe('renderToggle', () => {
    it('should return a react component', () => {
        const Component = renderToggle('Test')
        const output = shallow(<Component is="visible" />)

        expect(output.exists()).toBe(true)
        expect(output.isEmptyRender()).toBe(false)
    })

    it('should set the react component display name', () => {
        const Component1 = renderToggle('Test')
        const Component2 = renderToggle('AnotherTest')

        expect(Component1.displayName).toBe('IfTestBlock')
        expect(Component2.displayName).toBe('IfAnotherTestBlock')
    })

    it('should render a Show block if props.is = visible', () => {
        const Component = renderToggle('Test')
		const output = shallow(<Component is="visible" />)

        expect(output.html()).toBe(`
{block:ShowTest}

{/block:ShowTest}
`)
    })

    it('should render a Hide block if props.is = hidden', () => {
        const Component = renderToggle('Test')
        const output = shallow(<Component is="hidden" />)

        expect(output.html()).toBe(`
{block:HideTest}

{/block:HideTest}
`)
    })

    it('should render children', () => {
        const Component = renderToggle('Test')
        const output = shallow(<Component is="visible">testing</Component>)

        expect(output.html()).toBe(`
{block:ShowTest}
testing
{/block:ShowTest}
`)
    })

    it('should render prop names and values to string inside the first tag', () => {
        const Component = renderToggle<{ value: number }>('Test')
        const output = shallow(<Component is="hidden" value={35}>testing</Component>)

        expect(output.html()).toBe(`
{block:HideTest value=&quot;35&quot;}
testing
{/block:HideTest}
`)
    })
})
