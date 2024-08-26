export const swapConfig = {
  executeSwap: false, // Send tx when true, simulate tx when false
  useVersionedTransaction: true,
  tokenAAmount: 0.001, // Swap 0.01 SOL for USDC in this example
  tokenAAddress: "So11111111111111111111111111111111111111112", // Token to swap for the other, SOL in this case
  tokenBAddress: "rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof", // Render address
  maxLamports: 1500000, // Micro lamports for priority fee
  direction: "in" as "in" | "out", // Swap direction: 'in' or 'out'
  liquidityFile: "trimmed_mainnet.json",
  maxRetries: 20,
};
