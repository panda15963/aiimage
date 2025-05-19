// Interface for UserContextProps
import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

interface PriceContextPropsInterface {
    BitcoinCashPrice: number | null;
    EthereumPrice: number | null;
    BitcoinPrice: number | null;
    setBitcoinCash: (price: number) => void;
    setEthereum: (price: number) => void;
    setBitcoin: (price: number) => void;
}

// Create a context called UserContext with UserContextProps as its type
const PriceContext = createContext<PriceContextPropsInterface>({
    BitcoinCashPrice: null,
    EthereumPrice: null,
    BitcoinPrice: null,
    setBitcoinCash: () => null,
    setEthereum: () => null,
    setBitcoin: () => null,
});

// Custom hook to use UserContext
export const usePrice = () => useContext(PriceContext);

// UserProvider component
// This component uses the useState hook to manage the user state
// and provides the user, login, and logout functions as values for the UserContext
export const PriceProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [BitcoinCashPrice, setBitcoinCashPrice] = useState<number | null>(null);
    const [EthereumPrice, setEthereumPrice] = useState<number | null>(null);
    const [BitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
    return (
        <PriceContext.Provider value={{ BitcoinCashPrice, EthereumPrice, BitcoinPrice, setBitcoinCash: setBitcoinCashPrice, setEthereum: setEthereumPrice, setBitcoin: setBitcoinPrice }}>
            {children}
        </PriceContext.Provider>
    );
};

export default PriceProvider;