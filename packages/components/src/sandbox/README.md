# Sandbox

This component provides an isolated environment for arbitrary HTML via iframes.

## Usage

```jsx
import { SandBox } from '@wordpress/components';

const MySandBox = () => (
	<SandBox
		html="<p>Content</p>"
		title="Sandbox"
		type="embed"
	/>
);
```

### Extensibility

The `editor.Sandbox` is a filter that allows extending the component. For instance, it's useful when adding custom styles are required:

```es6
const extendedSandboxed = Sandbox => props => {
	const style = `
		.my-full-width-embed {
			width: 100%;
			min-width: 100%;
		};
	`;

	return (
		<Sandbox { ...props } styles={ [ style ] } />
	);
};

addFilter( 'editor.Sandbox', 'my-site/loom-custom-sandbox', extendedSandboxed );
```
