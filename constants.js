export const contractAddress = "0xf415F25481EFa61712e4Cb6FBDB57D0D668CBDb4"

export const abi = [
    [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "priceFeedAddress",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [],
            name: "NOT_OWNER",
            type: "error",
        },
        {
            inputs: [],
            name: "SEND_MORE_ETH",
            type: "error",
        },
        {
            inputs: [],
            name: "TRANSFER_FUND_FAIL",
            type: "error",
        },
        {
            stateMutability: "payable",
            type: "fallback",
        },
        {
            inputs: [],
            name: "MINIMUM_USD",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "cheaperWithdraw",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [],
            name: "fund",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "funder",
                    type: "address",
                },
            ],
            name: "getAddressToAmountFunded",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256",
                },
            ],
            name: "getFunder",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "funder",
                    type: "address",
                },
            ],
            name: "getIsAlreadyFunder",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getOnwer",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getPriceFeed",
            outputs: [
                {
                    internalType: "contract AggregatorV3Interface",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            stateMutability: "payable",
            type: "receive",
        },
    ],
]
