import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Wallet} from "./wallet";
import UploadFile from "./UploadFile";
import MintNFT from "./MintNFT";
import {WagmiProvider} from "wagmi";
import {config} from "./config";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <h1>NFT Collection Creator</h1>ß
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
        <Wallet />
        <hr />
        <UploadFile />
        <hr />
        <MintNFT />
            </QueryClientProvider>
        </WagmiProvider>
      </div>
    </div>
  );
}

export default App;
