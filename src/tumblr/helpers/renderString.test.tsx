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
		const Component = renderString<{ text: string }>(
			'Test',
			({ text }) => `Test ${text}`
		)
		const output = shallow(<Component text="example" />)

		expect(output.html()).toBe('Test example')
	})

	it('should render a html element if specified', () => {
		const Component = renderString('Test')
		const output = shallow(<Component element="a" />)

		expect(output.html()).toBe('<a>{Test}</a>')
	})

	it('should render the string as an element prop if specified', () => {
		const Component = renderString('Image')
		const output = shallow(<Component element="img" asProp="src" />)

		expect(output.html()).toBe('<img src="{Image}"/>')
	})

	it('should render children if asProp is specified', () => {
		const Component = renderString('URL')
		const output = shallow(
			<Component element="a" asProp="href">
				content
			</Component>
		)

		expect(output.html()).toBe('<a href="{URL}">content</a>')
	})

	it('should render props if specified', () => {
		const Component = renderString('URL')
		const output = shallow(
			<Component
				element="a"
				asProp="href"
				props={{ className: 'link', id: 'main' }}
			>
				content
			</Component>
		)

		expect(output.html()).toBe(
			'<a class="link" id="main" href="{URL}">content</a>'
		)
	})
})
