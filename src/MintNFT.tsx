import React, { useState } from 'react';
import { mintNFT } from './contract';

const MintNFT = () => {
    const [recipient, setRecipient] = useState<string>('');
    const [tokenURI, setTokenURI] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [contractAddress, setContractAddress] = useState<string>(''); // Replace with your deployed contract address

    const handleMint = async () => {
        if (recipient && tokenURI) {
            setStatus('Minting NFT...');
            try {
                debugger;
                await mintNFT(contractAddress, recipient, tokenURI);
                setStatus('NFT minted successfully!');
            } catch (error) {
                setStatus('Error minting NFT.');
            }
        } else {
            setStatus('Please enter recipient address and token URI.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Recipient address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="text"
                placeholder="IPFS token URI"
                value={tokenURI}
                onChange={(e) => setTokenURI(e.target.value)}
            />
            <button onClick={handleMint}>Mint NFT</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default MintNFT;
