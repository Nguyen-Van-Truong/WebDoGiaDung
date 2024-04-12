import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        // Create an array from the selected files with an additional identifier (e.g., timestamp)
        const newFiles = Array.from(event.target.files).map(file => ({
            file,
            id: Date.now() + Math.random() // Simple unique identifier
        }));
        // Append new files to the existing list
        setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
    };

    const handleRemoveFile = (fileId) => {
        // Remove the file with the specified id from the list
        setSelectedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
    };

    const handleUpload = () => {
        const formData = new FormData();
        selectedFiles.forEach(({ file }) => formData.append('files', file));

        axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error uploading files:', error));
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileSelect} />
            <ul>
                {selectedFiles.map(({ file, id }) => (
                    <li key={id}>
                        {file.name}{" "}
                        <button onClick={() => handleRemoveFile(id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;
