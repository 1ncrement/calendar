/**
 * Created by increment on 06.08.16.
 */
import React from 'react'
import {render} from 'react-dom'
import './../scss/index.scss'
import {Provider} from 'react-redux'
import App from './components/app'

render(
	// <Provider>
		<App />
	// </Provider>
	,
	document.getElementById('root')
);