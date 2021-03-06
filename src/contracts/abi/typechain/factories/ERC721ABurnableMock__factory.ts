/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721ABurnableMock } from "../ERC721ABurnableMock";

export class ERC721ABurnableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721ABurnableMock> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC721ABurnableMock>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721ABurnableMock {
    return super.attach(address) as ERC721ABurnableMock;
  }
  connect(signer: Signer): ERC721ABurnableMock__factory {
    return super.connect(signer) as ERC721ABurnableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ABurnableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721ABurnableMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOwnershipAt",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "burned",
            type: "bool",
          },
        ],
        internalType: "struct IERC721A.TokenOwnership",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "numberBurned",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurned",
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
    name: "totalMinted",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200148f3803806200148f8339810160408190526200003491620001e6565b8151829082906200004d90600290602085019062000073565b5080516200006390600390602084019062000073565b5060008055506200028d92505050565b828054620000819062000250565b90600052602060002090601f016020900481019282620000a55760008555620000f0565b82601f10620000c057805160ff1916838001178555620000f0565b82800160010185558215620000f0579182015b82811115620000f0578251825591602001919060010190620000d3565b50620000fe92915062000102565b5090565b5b80821115620000fe576000815560010162000103565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014157600080fd5b81516001600160401b03808211156200015e576200015e62000119565b604051601f8301601f19908116603f0116810190828211818310171562000189576200018962000119565b81604052838152602092508683858801011115620001a657600080fd5b600091505b83821015620001ca5785820183015181830184015290820190620001ab565b83821115620001dc5760008385830101525b9695505050505050565b60008060408385031215620001fa57600080fd5b82516001600160401b03808211156200021257600080fd5b62000220868387016200012f565b935060208501519150808211156200023757600080fd5b5062000246858286016200012f565b9150509250929050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b6111f2806200029d6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636352211e116100b8578063a2309ff81161007c578063a2309ff814610282578063b88d4fde1461028a578063c87b56dd1461029d578063d89135cd146102b0578063e985e9c5146102b8578063f2523633146102f457600080fd5b80636352211e1461022e57806370a082311461024157806395d89b4114610254578063a14481941461025c578063a22cb4651461026f57600080fd5b806323b872dd116100ff57806323b872dd146101cf5780632478d639146101e257806342842e0e146101f557806342966c68146102085780634f558e791461021b57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a366004610e59565b61033e565b60405190151581526020015b60405180910390f35b61016c610390565b60405161015b9190610ece565b61018c610187366004610ee1565b610422565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004610f16565b610466565b005b600154600054035b60405190815260200161015b565b6101b76101dd366004610f40565b610506565b6101c16101f0366004610f7c565b610516565b6101b7610203366004610f40565b610544565b6101b7610216366004610ee1565b61055f565b61014f610229366004610ee1565b61056d565b61018c61023c366004610ee1565b610578565b6101c161024f366004610f7c565b610583565b61016c6105c9565b6101b761026a366004610f16565b6105d8565b6101b761027d366004610f97565b6105e6565b6000546101c1565b6101b7610298366004610fe9565b610681565b61016c6102ab366004610ee1565b6106cb565b6101c161075d565b61014f6102c63660046110c5565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b610307610302366004610ee1565b610768565b6040805182516001600160a01b0316815260208084015167ffffffffffffffff16908201529181015115159082015260600161015b565b60006301ffc9a760e01b6001600160e01b03198316148061036f57506380ac58cd60e01b6001600160e01b03198316145b8061038a5750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606002805461039f906110f8565b80601f01602080910402602001604051908101604052809291908181526020018280546103cb906110f8565b80156104185780601f106103ed57610100808354040283529160200191610418565b820191906000526020600020905b8154815290600101906020018083116103fb57829003601f168201915b5050505050905090565b600061042d8261078e565b61044a576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b6000610471826107b5565b9050336001600160a01b038216146104aa5761048d81336102c6565b6104aa576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b610511838383610816565b505050565b600061038a826001600160a01b031660009081526005602052604090205460801c67ffffffffffffffff1690565b61051183838360405180602001604052806000815250610681565b61056a8160016109c6565b50565b600061038a8261078e565b600061038a826107b5565b6000816105a3576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b60606003805461039f906110f8565b6105e28282610b39565b5050565b6001600160a01b0382163314156106105760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b905090565b61068c848484610816565b6001600160a01b0383163b156106c5576106a884848484610b53565b6106c5576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b60606106d68261078e565b6106f357604051630a14c4b560e41b815260040160405180910390fd5b600061070a60408051602081019091526000815290565b905080516000141561072b5760405180602001604052806000815250610756565b8061073584610c4a565b604051602001610746929190611133565b6040516020818303038152906040525b9392505050565b600061067c60015490565b604080516060810182526000808252602082018190529181019190915261038a82610c99565b600080548210801561038a575050600090815260046020526040902054600160e01b161590565b6000816000548110156107fd57600081815260046020526040902054600160e01b81166107fb575b806107565750600019016000818152600460205260409020546107dd565b505b604051636f96cda160e11b815260040160405180910390fd5b6000610821826107b5565b9050836001600160a01b0316816001600160a01b0316146108545760405162a1148160e81b815260040160405180910390fd5b6000828152600660205260408120546001600160a01b0390811691908616331480610884575061088486336102c6565b8061089757506001600160a01b03821633145b9050806108b757604051632ce44b5f60e11b815260040160405180910390fd5b846108d557604051633a954ecd60e21b815260040160405180910390fd5b81156108f857600084815260066020526040902080546001600160a01b03191690555b6001600160a01b03868116600090815260056020908152604080832080546000190190559288168252828220805460010190558682526004905220600160e11b4260a01b87178117909155831661097d576001840160008181526004602052604090205461097b57600054811461097b5760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b60006109d1836107b5565b60008481526006602052604090205490915081906001600160a01b03168315610a47576000336001600160a01b0384161480610a125750610a1283336102c6565b80610a2557506001600160a01b03821633145b905080610a4557604051632ce44b5f60e11b815260040160405180910390fd5b505b8015610a6a57600085815260066020526040902080546001600160a01b03191690555b6001600160a01b038216600090815260056020908152604080832080546fffffffffffffffffffffffffffffffff01905587835260049091529020600360e01b4260a01b8417179055600160e11b8316610af25760018501600081815260046020526040902054610af0576000548114610af05760008181526004602052604090208490555b505b60405185906000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a450506001805481019055505050565b6105e2828260405180602001604052806000815250610d04565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610b88903390899088908890600401611162565b602060405180830381600087803b158015610ba257600080fd5b505af1925050508015610bd2575060408051601f3d908101601f19168201909252610bcf9181019061119f565b60015b610c2d573d808015610c00576040519150601f19603f3d011682016040523d82523d6000602084013e610c05565b606091505b508051610c25576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b604080516080810191829052607f0190826030600a8206018353600a90045b8015610c8757600183039250600a81066030018353600a9004610c69565b50819003601f19909101908152919050565b604080516060810182526000808252602082018190529181019190915260008281526004602052604090205461038a90604080516060810182526001600160a01b038316815260a083901c67ffffffffffffffff166020820152600160e01b90921615159082015290565b610d0e8383610d71565b6001600160a01b0383163b15610511576000548281035b610d386000868380600101945086610b53565b610d55576040516368d2bf6b60e11b815260040160405180910390fd5b818110610d25578160005414610d6a57600080fd5b5050505050565b60005482610d9157604051622e076360e81b815260040160405180910390fd5b81610daf5760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b03831660009081526005602090815260408083208054680100000000000000018702019055838352600490915281204260a01b85176001851460e11b1790555b60405160018201918301906001600160a01b038616906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4828110610df657500160005550565b6001600160e01b03198116811461056a57600080fd5b600060208284031215610e6b57600080fd5b813561075681610e43565b60005b83811015610e91578181015183820152602001610e79565b838111156106c55750506000910152565b60008151808452610eba816020860160208601610e76565b601f01601f19169290920160200192915050565b6020815260006107566020830184610ea2565b600060208284031215610ef357600080fd5b5035919050565b80356001600160a01b0381168114610f1157600080fd5b919050565b60008060408385031215610f2957600080fd5b610f3283610efa565b946020939093013593505050565b600080600060608486031215610f5557600080fd5b610f5e84610efa565b9250610f6c60208501610efa565b9150604084013590509250925092565b600060208284031215610f8e57600080fd5b61075682610efa565b60008060408385031215610faa57600080fd5b610fb383610efa565b915060208301358015158114610fc857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610fff57600080fd5b61100885610efa565b935061101660208601610efa565b925060408501359150606085013567ffffffffffffffff8082111561103a57600080fd5b818701915087601f83011261104e57600080fd5b81358181111561106057611060610fd3565b604051601f8201601f19908116603f0116810190838211818310171561108857611088610fd3565b816040528281528a60208487010111156110a157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156110d857600080fd5b6110e183610efa565b91506110ef60208401610efa565b90509250929050565b600181811c9082168061110c57607f821691505b6020821081141561112d57634e487b7160e01b600052602260045260246000fd5b50919050565b60008351611145818460208801610e76565b835190830190611159818360208801610e76565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061119590830184610ea2565b9695505050505050565b6000602082840312156111b157600080fd5b815161075681610e4356fea264697066735822122081dd30344aa3972bcabe410dee3eced6278117c310b26d372f6a965889401acf64736f6c63430008090033";
