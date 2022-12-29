
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = () => {
    const [value, setValue] = useState('');

    const onReplace = (): void => {
        const newValue = value.replace("{clientName}", "Richard")
        setValue(newValue)
    }
    return (
        <div style={{ margin: "2rem" }}>
            <button onClick={onReplace} >Test </button>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <div>HTML</div>
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
        </div>)
}

export default Quill