const creator = alice.addr;
const defaultFrozen = false;    
const unitName = "TLO"; 
const assetName = "Alice's Coins@arc3";
const url = "https://path/to/my/fungible/asset/metadata.json";
const managerAddr = undefined; 
const reserveAddr = undefined;  
const freezeAddr = undefined;
const clawbackAddr = undefined;
const total = 10000000;               // Fungible tokens have totalIssuance greater than 1
const decimals = 2;                 // Fungible tokens typically have decimals greater than 0
const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
    creator,
    total,
    decimals,
    assetName,
    unitName,
    assetURL: url,
    assetMetadataHash: metadata,
    defaultFrozen,
    freeze: freezeAddr,
    manager: managerAddr,
    clawback: clawbackAddr,
    reserve: reserveAddr,
    suggestedParams: params,}); 