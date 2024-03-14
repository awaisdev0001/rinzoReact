export const BlurExchangeExecuteParams = [
  {
    "components": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "trader",
            "type": "address"
          },
          {
            "internalType": "enum Side",
            "name": "side",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "matchingPolicy",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "collection",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "listingTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationTime",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint16",
                "name": "rate",
                "type": "uint16"
              },
              {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
              }
            ],
            "internalType": "struct Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "salt",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "extraParams",
            "type": "bytes"
          }
        ],
        "internalType": "struct Order",
        "name": "order",
        "type": "tuple"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "extraSignature",
        "type": "bytes"
      },
      {
        "internalType": "enum SignatureVersion",
        "name": "signatureVersion",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "internalType": "struct Input",
    "name": "sell",
    "type": "tuple"
  },
  {
    "components": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "trader",
            "type": "address"
          },
          {
            "internalType": "enum Side",
            "name": "side",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "matchingPolicy",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "collection",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "listingTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationTime",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint16",
                "name": "rate",
                "type": "uint16"
              },
              {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
              }
            ],
            "internalType": "struct Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "salt",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "extraParams",
            "type": "bytes"
          }
        ],
        "internalType": "struct Order",
        "name": "order",
        "type": "tuple"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "extraSignature",
        "type": "bytes"
      },
      {
        "internalType": "enum SignatureVersion",
        "name": "signatureVersion",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "internalType": "struct Input",
    "name": "buy",
    "type": "tuple"
  }
];

export const BlurExchangeBulkExecuteParams = [
  {
    "components": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "trader",
                "type": "address"
              },
              {
                "internalType": "enum Side",
                "name": "side",
                "type": "uint8"
              },
              {
                "internalType": "address",
                "name": "matchingPolicy",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collection",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "paymentToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "listingTime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "expirationTime",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint16",
                    "name": "rate",
                    "type": "uint16"
                  },
                  {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                  }
                ],
                "internalType": "struct Fee[]",
                "name": "fees",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "extraParams",
                "type": "bytes"
              }
            ],
            "internalType": "struct Order",
            "name": "order",
            "type": "tuple"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "extraSignature",
            "type": "bytes"
          },
          {
            "internalType": "enum SignatureVersion",
            "name": "signatureVersion",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          }
        ],
        "internalType": "struct Input",
        "name": "sell",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "trader",
                "type": "address"
              },
              {
                "internalType": "enum Side",
                "name": "side",
                "type": "uint8"
              },
              {
                "internalType": "address",
                "name": "matchingPolicy",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collection",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "paymentToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "listingTime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "expirationTime",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint16",
                    "name": "rate",
                    "type": "uint16"
                  },
                  {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                  }
                ],
                "internalType": "struct Fee[]",
                "name": "fees",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "extraParams",
                "type": "bytes"
              }
            ],
            "internalType": "struct Order",
            "name": "order",
            "type": "tuple"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "extraSignature",
            "type": "bytes"
          },
          {
            "internalType": "enum SignatureVersion",
            "name": "signatureVersion",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          }
        ],
        "internalType": "struct Input",
        "name": "buy",
        "type": "tuple"
      }
    ],
    "internalType": "struct Execution[]",
    "name": "executions",
    "type": "tuple[]"
  }
];
