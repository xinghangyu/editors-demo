import React, { useRef } from 'react';

import EmailEditor from 'react-email-editor';

const EmailEditorDemo = () => {
    const emailEditorRef = useRef<EmailEditor>(null);

    const exportHtml = () => {
        if (emailEditorRef?.current) {
            emailEditorRef?.current.exportHtml((data) => {
                const { design, html } = data;
                console.log('exportHtml', html);
            });
        }

    };

    const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    }

    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };

    return (
        <div>
            <div>
                <button onClick={exportHtml}>Export HTML</button>
            </div>

            <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
        </div>
    );
};

export default EmailEditorDemo