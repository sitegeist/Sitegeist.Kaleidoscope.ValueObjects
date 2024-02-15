import * as React from 'react';

export function* validator(option: any) {
    if (!option.label) {
        yield {
            field: 'label',
            message: 'Label is required'
        };
    }

	if (!option.value) {
		yield {
			field: 'value',
			message: 'Value is required'
		};
	}
}

export const Preview: React.FC<{
    value: any
    api: any
}> = props => {
    const {IconCard} = props.api;

    return (
      <IconCard
        icon="envelope"
        title={props.value.title}
        subTitle={`${props.value.alt}`}
      />
    );
}

export const Form: React.FC<{
    api: any
}> = props => {
const {Field, Layout} = props.api;

	return (
		<Layout.Stack>
			<Field
				name="asset"
				label="Asset"
				editor="Neos.Neos/Inspector/Editors/AssetEditor"
			/>
			<Layout.Columns columns={2}>
				<Field
					name="alt"
					label="Alt"
					editor="Neos.Neos/Inspector/Editors/TextFieldEditor"
				/>
				<Field
					name="title"
					label="Title"
					editor="Neos.Neos/Inspector/Editors/TextFieldEditor"
				/>
			</Layout.Columns>
		</Layout.Stack>
	);
}
