
import { ethers, BrowserProvider } from "ethers";
import CertificateRegistry from "./CertificateRegistry.json";

const contractAddress = "0xb200cccC77578DBa7AE516F320ccca7d526A6df2";
const abi = CertificateRegistry.abi;

export const getBlockchain = async () => {
    if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const certificateContract = new ethers.Contract(contractAddress, abi, signer);
        return { certificateContract, signer };
    } else {
        alert("Please install MetaMask!");
        return null;
    }
};