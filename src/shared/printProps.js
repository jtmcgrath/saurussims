import React from 'react'

const PrintProps = props => <pre>{JSON.stringify(props, null, 2)}</pre>

export default PrintProps
