export const RunInputAbi = [
  {
    components: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "network",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "intent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delegateType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "dataMask",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct Ix2y2.OrderItem[]",
            name: "items",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "signVersion",
            type: "uint8",
          },
        ],
        internalType: "struct Ix2y2.Order[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum Ix2y2.Op",
            name: "op",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "orderIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "itemHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "executionDelegate",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "dataReplacement",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "bidIncentivePct",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "aucMinIncrementPct",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "aucIncDurationSecs",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "percentage",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
            ],
            internalType: "struct Ix2y2.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
        ],
        internalType: "struct Ix2y2.SettleDetail[]",
        name: "details",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountToEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountToWeth",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "bool",
            name: "canFail",
            type: "bool",
          },
        ],
        internalType: "struct Ix2y2.SettleShared",
        name: "shared",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    internalType: "struct Ix2y2.RunInput",
    name: "input",
    type: "tuple",
  },
];

export const Pair721Abi = [
  {
    components: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    internalType: "struct Ix2y2.Pair721",
    name: "input",
    type: "tuple",
  },
];

export const Pair1155Abi = [
  {
    components: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    internalType: "struct Ix2y2.Pair1155",
    name: "input",
    type: "tuple",
  },
];

export const Pair721ArrayAbi = [
  {
    components: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    internalType: "struct Ix2y2.Pair721[]",
    name: "input",
    type: "tuple[]",
  },
];

export const Pair1155ArrayAbi = [
  {
    components: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    internalType: "struct Ix2y2.Pair1155[]",
    name: "input",
    type: "tuple[]",
  },
];
