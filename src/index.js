import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';

import App from './App';

ReactDOM.render(
	<Router>
		<GlobalStyles />
		<App />
	</Router>,document.getElementById('root')
)