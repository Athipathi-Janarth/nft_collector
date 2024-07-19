import { ethers } from 'ethers';
import NFTCollection from './Contracts/NFTCollection.json';

const provider = new ethers.BrowserProvider((window as any).ethereum);
const signer = provider.getSigner();

export const mintNFT = async (contractAddress: string, recipient: string, tokenURI: string) => {
    try {
        const contract = new ethers.Contract(contractAddress, NFTCollection.abi, await signer);
        const tx = await contract.mint(recipient, tokenURI);
        await tx.wait();
        console.log('NFT minted successfully');
    } catch (error) {
        console.error('Error minting NFT:', error);
        throw error;
    }
};