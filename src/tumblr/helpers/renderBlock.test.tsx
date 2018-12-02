import React from 'react'
import { shallow } from 'enzyme'
import renderBlock from './renderBlock'

describe('renderBlock', () => {
	it('should return a react component', () => {
		const Component = renderBlock('Test')
		const output = shallow(<Component />)

		expect(output.exists()).toBe(true)
		expect(output.isEmptyRender()).toBe(false)
        expect(output.html()).toBe(`
{block:Test}

{/block:Test}
`)
    })
    
    it('should set the react component display name', () => {
        const Component1 = renderBlock('Test')
        const Component2 = renderBlock('AnotherTest')

        expect(Component1.displayName).toBe('IfTestBlock')
        expect(Component2.displayName).toBe('IfAnotherTestBlock')
    })

    it('should render children', () => {
        const Component = renderBlock('Test')
        const output = shallow(<Component>testing</Component>)

        expect(output.html()).toBe(`
{block:Test}
testing
{/block:Test}
`)
    })

    it('should render prop names and values to string inside the first tag', () => {
        const Component = renderBlock<{ value: number }>('Test')
        const output = shallow(<Component value={35}>testing</Component>)

        expect(output.html()).toBe(`
{block:Test value=&quot;35&quot;}
testing
{/block:Test}
`)
    })
})
