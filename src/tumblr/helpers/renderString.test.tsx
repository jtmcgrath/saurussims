import React from 'react'
import { shallow } from 'enzyme'
import renderString from './renderString'

describe('renderString', () => {
	it('should return a react component', () => {
        const Component = renderString('Test', () => 'example')
        const output = shallow(<Component />)

		expect(output.exists()).toBe(true)
		expect(output.isEmptyRender()).toBe(false)
		expect(output.html()).toBe('example')
	})

	it('should set the react component display name', () => {
		const Component1 = renderString('Test', () => 'test')
		const Component2 = renderString('AnotherTest', () => 'test')

		expect(Component1.displayName).toBe('Test')
		expect(Component2.displayName).toBe('AnotherTest')
	})

	it('should render the tag when no renderString function is passed', () => {
		const Component = renderString('Test')
		const output = shallow(<Component />)

		expect(output.html()).toBe('{Test}')
	})

	it('should render a string based on props', () => {
		const Component = renderString<{ text: string }>('Test', ({ text }) => `Test ${text}`)
		const output = shallow(<Component text="example" />)

		expect(output.html()).toBe('Test example')
	})
})
