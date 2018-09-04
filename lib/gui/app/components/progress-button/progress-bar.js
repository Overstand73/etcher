import * as angular from 'angular';
import { react2angular } from 'react2angular';

import ProgressButton from './progress-button';

angular
	.module('Etcher.Components.ProgressButton', [])
	.component(
		'progressButton',
		react2angular(ProgressButton),
	);
