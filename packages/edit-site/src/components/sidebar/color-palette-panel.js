/**
 * WordPress dependencies
 */
import { __experimentalColorEdit as ColorEdit } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useEditorFeature } from '../editor/utils';

export default function ColorPalettePanel( { contextName, setSetting } ) {
	const colors = useEditorFeature( 'color.palette', contextName );
	return (
		<ColorEdit
			colors={ colors }
			onChange={ ( newColors ) => {
				setSetting( contextName, 'color.palette', newColors );
			} }
			emptyUI={ __(
				'Colors are empty! Add some colors to create your own color palette.'
			) }
		/>
	);
}
