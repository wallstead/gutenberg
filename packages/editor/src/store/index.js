/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';
import { controls as dataControls } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import controls from './controls';
import { STORE_KEY } from './constants';

/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */
export const storeConfig = {
	reducer,
	selectors,
	actions,
	controls: {
		...dataControls,
		...controls,
	},
};

/**
 * Store registered for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */
export default registerStore( STORE_KEY, {
	...storeConfig,
	persist: [ 'preferences' ],
} );
