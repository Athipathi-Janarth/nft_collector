import axios from 'axios';
import FormData from 'form-data';

// Replace with your Pinata JWT token
const JWT = '';

// Function to upload a file to IPFS using Pinata
export const uploadIPFS = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    // Add optional metadata
    const pinataMetadata = JSON.stringify({
        name: file.name,
    });
    formData.append('pinataMetadata', pinataMetadata);

    // Add optional pinning options
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
    });
    formData.append('pinataOptions', pinataOptions);

    try {
        console.log('Starting upload to IPFS via Pinata...');
        const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            // maxBodyLength: 'Infinity', // Allow large files
            headers: {
                Authorization: `Bearer ${JWT}`, // Add the JWT token for authorization
            },
        });
        console.log('File added to IPFS:', res.data);
        return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error;
    }
};
