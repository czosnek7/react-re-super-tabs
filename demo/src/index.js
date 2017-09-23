import React from 'react'
import {render} from 'react-dom'
import SimpleExample from './SimpleExample'
import CustomTabExample from './CustomTabExample'

const App = () =>
    <div>
        <h1>react-re-super-tabs Demo</h1>
        <SimpleExample/>
        <CustomTabExample/>
    </div>

render(<App/>, document.querySelector('#demo'))
