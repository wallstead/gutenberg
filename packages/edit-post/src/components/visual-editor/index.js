/**
 * WordPress dependencies
 */
import {
	VisualEditorGlobalKeyboardShortcuts,
	PostTitle,
} from '@wordpress/editor';
import {
	WritingFlow,
	Typewriter,
	ObserveTyping,
	BlockList,
	CopyHandler,
	BlockSelectionClearer,
	MultiSelectScrollIntoView,
	__experimentalBlockSettingsMenuFirstItem,
	__experimentalUseResizeCanvas as useResizeCanvas,
} from '@wordpress/block-editor';
import { Popover } from '@wordpress/components';

/**
 * Internal dependencies
 */
import BlockInspectorButton from './block-inspector-button';
import { useSelect } from '@wordpress/data';

function VisualEditor() {
	const { deviceType, templateZoomOut } = useSelect( ( select ) => {
		const { isFeatureActive, __experimentalGetPreviewDeviceType } = select(
			'core/edit-post'
		);
		return {
			deviceType: __experimentalGetPreviewDeviceType(),
			templateZoomOut: isFeatureActive( 'templateZoomOut' ),
		};
	}, [] );

	const inlineStyles = useResizeCanvas( deviceType );

	return (
		<BlockSelectionClearer
			className="edit-post-visual-editor editor-styles-wrapper"
			style={ inlineStyles }
		>
			<VisualEditorGlobalKeyboardShortcuts />
			<MultiSelectScrollIntoView />
			<Popover.Slot name="block-toolbar" />
			<Typewriter>
				<CopyHandler>
					<WritingFlow>
						<ObserveTyping>
							{ ! templateZoomOut && (
								<div className="edit-post-visual-editor__post-title-wrapper">
									<PostTitle />
								</div>
							) }
							<BlockList />
						</ObserveTyping>
					</WritingFlow>
				</CopyHandler>
			</Typewriter>
			<__experimentalBlockSettingsMenuFirstItem>
				{ ( { onClose } ) => (
					<BlockInspectorButton onClick={ onClose } />
				) }
			</__experimentalBlockSettingsMenuFirstItem>
		</BlockSelectionClearer>
	);
}

export default VisualEditor;
