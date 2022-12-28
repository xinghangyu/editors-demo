import React, { FC, useCallback, useState } from 'react';
import { BaseEditor, createEditor, Editor, Transforms } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact, ReactEditor, DefaultElement, RenderElementProps } from 'slate-react'


const CodeElement = (props: RenderElementProps) => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}

const initialValue = [{
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
}, {
    type: 'code',
    children: [{ text: 'this is a code block' }],
}]


type CustomElement = { type: string; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const SlateDemo: FC = () => {
    const [editor] = useState(() => withReact(createEditor()))

    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case 'paragraph':
                return <DefaultElement {...props} />
            default:
                return <CodeElement {...props} />
        }
    }, [])

    return (
        <div>
            <h2>Slate demo</h2>
            <Slate editor={editor} value={initialValue}>
                <Editable
                    renderElement={renderElement}
                    onKeyDown={event => {
                        if (event.key === '`' && event.ctrlKey) {
                            // Prevent the "`" from being inserted by default.
                            event.preventDefault()
                            // Otherwise, set the currently selected blocks type to "code".
                            Transforms.setNodes(
                                editor,
                                { type: 'code' },
                                { match: n => Editor.isBlock(editor, n) }
                            )
                        }
                    }} />
            </Slate>
        </div>
    )
}

export default SlateDemo;
