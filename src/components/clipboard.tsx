//Filename - components/Clipboard.js
'use client';
import React, { useState } from "react";
import copy from "copy-to-clipboard";

const Clipboard = () => {
    const [copyText, setCopyText] = useState("");

    const handleCopyText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCopyText(e.target.value);    
    };

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    };

    return (
        <div>
            <h1>GeeksforGeeks </h1>

            <div>
                <h2> Copy To Clipboard in React JS</h2>
                <input
                    type="text"
                    value={copyText}
                    onChange={handleCopyText}
                    placeholder="Enter the text you want to copy"
                />
                <button onClick={copyToClipboard}>
                    Copy to Clipboard
                </button>

                <input
                    type="text"
                    placeholder="Enter the text you have copied"
                />
            </div>
        </div>
    );
};

export default Clipboard;
