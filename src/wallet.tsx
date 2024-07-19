// src/wallet.tsx
import React from 'react';
import { WagmiConfig, useAccount, useConnect, useDisconnect } from 'wagmi';
import { config } from './config';

export const Wallet = () => {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    return (
        <WagmiConfig config={config}>
            {isConnected ? (
                <div>
                    <p>Connected to {address}</p>
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            ) : (
                <div>
                    {connectors.map((connector) => (
                        <button key={connector.id} onClick={() => connect({ connector })}>
                            Connect Wallet
                        </button>
                    ))}
                </div>
            )}
        </WagmiConfig>
    );
};
