import React, { useState } from 'react';
import { uploadIPFS } from './ipfs';

const UploadFile = () => {
    const [file, setFile] = useState<File | null>(null);
    const [ipfsUrl, setIpfsUrl] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (file) {
            setStatus('Uploading to IPFS...');
            try {
                const url = await uploadIPFS(file);
                setIpfsUrl(url);
                setStatus('Upload successful!');
            } catch (error) {
                setStatus('Upload failed.');
            }
        } else {
            setStatus('No file selected.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload to IPFS</button>
            {status && <p>{status}</p>}
            {ipfsUrl && <p>IPFS URL: <a href={ipfsUrl} target="_blank" rel="noopener noreferrer">{ipfsUrl}</a></p>}
        </div>
    );
};

export default UploadFile;
