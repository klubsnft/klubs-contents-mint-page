/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721AQueryableMock } from "../ERC721AQueryableMock";

export class ERC721AQueryableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721AQueryableMock> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC721AQueryableMock>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721AQueryableMock {
    return super.attach(address) as ERC721AQueryableMock;
  }
  connect(signer: Signer): ERC721AQueryableMock__factory {
    return super.connect(signer) as ERC721AQueryableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AQueryableMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721AQueryableMock;
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
    name: "InvalidQueryRange",
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
    name: "explicitOwnershipOf",
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
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "explicitOwnershipsOf",
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
        internalType: "struct IERC721A.TokenOwnership[]",
        name: "",
        type: "tuple[]",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "tokensOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stop",
        type: "uint256",
      },
    ],
    name: "tokensOfOwnerIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
  "0x60806040523480156200001157600080fd5b50604051620019d3380380620019d38339810160408190526200003491620001e6565b8151829082906200004d90600290602085019062000073565b5080516200006390600390602084019062000073565b5060008055506200028d92505050565b828054620000819062000250565b90600052602060002090601f016020900481019282620000a55760008555620000f0565b82601f10620000c057805160ff1916838001178555620000f0565b82800160010185558215620000f0579182015b82811115620000f0578251825591602001919060010190620000d3565b50620000fe92915062000102565b5090565b5b80821115620000fe576000815560010162000103565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014157600080fd5b81516001600160401b03808211156200015e576200015e62000119565b604051601f8301601f19908116603f0116810190828211818310171562000189576200018962000119565b81604052838152602092508683858801011115620001a657600080fd5b600091505b83821015620001ca5785820183015181830184015290820190620001ab565b83821115620001dc5760008385830101525b9695505050505050565b60008060408385031215620001fa57600080fd5b82516001600160401b03808211156200021257600080fd5b62000220868387016200012f565b935060208501519150808211156200023757600080fd5b5062000246858286016200012f565b9150509250929050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b611736806200029d6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a22cb46511610071578063a22cb46514610291578063b88d4fde146102a4578063c23dc68f146102b7578063c87b56dd146102d7578063e985e9c5146102ea57600080fd5b806370a08231146102305780638462151c1461024357806395d89b411461026357806399a2557a1461026b578063a14481941461027e57600080fd5b806323b872dd116100f457806323b872dd146101c457806342842e0e146101d757806342966c68146101ea5780635bbb2177146101fd5780636352211e1461021d57600080fd5b806301ffc9a71461013157806306fdde0314610159578063081812fc1461016e578063095ea7b31461019957806318160ddd146101ae575b600080fd5b61014461013f3660046111c0565b6102fd565b60405190151581526020015b60405180910390f35b61016161034f565b6040516101509190611235565b61018161017c366004611248565b6103e1565b6040516001600160a01b039091168152602001610150565b6101ac6101a736600461127d565b610425565b005b600154600054035b604051908152602001610150565b6101ac6101d23660046112a7565b6104c5565b6101ac6101e53660046112a7565b6104d5565b6101ac6101f8366004611248565b6104f0565b61021061020b36600461132a565b6104fe565b60405161015091906113d0565b61018161022b366004611248565b6105c5565b6101b661023e36600461143b565b6105d0565b61025661025136600461143b565b610616565b6040516101509190611456565b61016161071f565b61025661027936600461148e565b61072e565b6101ac61028c36600461127d565b6108ac565b6101ac61029f3660046114c1565b6108ba565b6101ac6102b23660046114fd565b610950565b6102ca6102c5366004611248565b61099a565b60405161015091906115bd565b6101616102e5366004611248565b610a03565b6101446102f83660046115f3565b610a94565b60006301ffc9a760e01b6001600160e01b03198316148061032e57506380ac58cd60e01b6001600160e01b03198316145b806103495750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606002805461035e90611626565b80601f016020809104026020016040519081016040528092919081815260200182805461038a90611626565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b60006103ec82610ac2565b610409576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061043082610ae9565b9050336001600160a01b038216146104695761044c8133610a94565b610469576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6104d0838383610b4a565b505050565b6104d083838360405180602001604052806000815250610950565b6104fb816001610cfa565b50565b805160609060008167ffffffffffffffff81111561051e5761051e6112e3565b60405190808252806020026020018201604052801561056957816020015b604080516060810182526000808252602080830182905292820152825260001990920191018161053c5790505b50905060005b8281146105bd5761059885828151811061058b5761058b611661565b602002602001015161099a565b8282815181106105aa576105aa611661565b602090810291909101015260010161056f565b509392505050565b600061034982610ae9565b6000816105f0576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b60606000806000610626856105d0565b905060008167ffffffffffffffff811115610643576106436112e3565b60405190808252806020026020018201604052801561066c578160200160208202803683370190505b509050610692604080516060810182526000808252602082018190529181019190915290565b60005b838614610713576106a581610e6d565b91508160400151156106b65761070b565b81516001600160a01b0316156106cb57815194505b876001600160a01b0316856001600160a01b0316141561070b57808387806001019850815181106106fe576106fe611661565b6020026020010181815250505b600101610695565b50909695505050505050565b60606003805461035e90611626565b606081831061075057604051631960ccad60e11b815260040160405180910390fd5b60008061075c60005490565b90508084111561076a578093505b6000610775876105d0565b905084861015610794578585038181101561078e578091505b50610798565b5060005b60008167ffffffffffffffff8111156107b3576107b36112e3565b6040519080825280602002602001820160405280156107dc578160200160208202803683370190505b509050816107ef5793506108a592505050565b60006107fa8861099a565b90506000816040015161080b575080515b885b88811415801561081d5750848714155b156108995761082b81610e6d565b925082604001511561083c57610891565b82516001600160a01b03161561085157825191505b8a6001600160a01b0316826001600160a01b03161415610891578084888060010199508151811061088457610884611661565b6020026020010181815250505b60010161080d565b50505092835250909150505b9392505050565b6108b68282610ea2565b5050565b6001600160a01b0382163314156108e45760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61095b848484610b4a565b6001600160a01b0383163b156109945761097784848484610ebc565b610994576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b60408051606080820183526000808352602080840182905283850182905284519283018552818352820181905292810183905290915060005483106109df5792915050565b6109e883610e6d565b90508060400151156109fa5792915050565b6108a583610fb3565b6060610a0e82610ac2565b610a2b57604051630a14c4b560e41b815260040160405180910390fd5b6000610a4260408051602081019091526000815290565b9050805160001415610a6357604051806020016040528060008152506108a5565b80610a6d84610fe1565b604051602001610a7e929190611677565b6040516020818303038152906040529392505050565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6000805482108015610349575050600090815260046020526040902054600160e01b161590565b600081600054811015610b3157600081815260046020526040902054600160e01b8116610b2f575b806108a5575060001901600081815260046020526040902054610b11565b505b604051636f96cda160e11b815260040160405180910390fd5b6000610b5582610ae9565b9050836001600160a01b0316816001600160a01b031614610b885760405162a1148160e81b815260040160405180910390fd5b6000828152600660205260408120546001600160a01b0390811691908616331480610bb85750610bb88633610a94565b80610bcb57506001600160a01b03821633145b905080610beb57604051632ce44b5f60e11b815260040160405180910390fd5b84610c0957604051633a954ecd60e21b815260040160405180910390fd5b8115610c2c57600084815260066020526040902080546001600160a01b03191690555b6001600160a01b03868116600090815260056020908152604080832080546000190190559288168252828220805460010190558682526004905220600160e11b4260a01b871781179091558316610cb15760018401600081815260046020526040902054610caf576000548114610caf5760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b6000610d0583610ae9565b60008481526006602052604090205490915081906001600160a01b03168315610d7b576000336001600160a01b0384161480610d465750610d468333610a94565b80610d5957506001600160a01b03821633145b905080610d7957604051632ce44b5f60e11b815260040160405180910390fd5b505b8015610d9e57600085815260066020526040902080546001600160a01b03191690555b6001600160a01b038216600090815260056020908152604080832080546fffffffffffffffffffffffffffffffff01905587835260049091529020600360e01b4260a01b8417179055600160e11b8316610e265760018501600081815260046020526040902054610e24576000548114610e245760008181526004602052604090208490555b505b60405185906000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a450506001805481019055505050565b604080516060810182526000808252602082018190529181019190915260008281526004602052604090205461034990611030565b6108b682826040518060200160405280600081525061106b565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610ef19033908990889088906004016116a6565b602060405180830381600087803b158015610f0b57600080fd5b505af1925050508015610f3b575060408051601f3d908101601f19168201909252610f38918101906116e3565b60015b610f96573d808015610f69576040519150601f19603f3d011682016040523d82523d6000602084013e610f6e565b606091505b508051610f8e576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b6040805160608101825260008082526020820181905291810191909152610349610fdc83610ae9565b611030565b604080516080810191829052607f0190826030600a8206018353600a90045b801561101e57600183039250600a81066030018353600a9004611000565b50819003601f19909101908152919050565b604080516060810182526001600160a01b038316815260a083901c67ffffffffffffffff166020820152600160e01b90921615159082015290565b61107583836110d8565b6001600160a01b0383163b156104d0576000548281035b61109f6000868380600101945086610ebc565b6110bc576040516368d2bf6b60e11b815260040160405180910390fd5b81811061108c5781600054146110d157600080fd5b5050505050565b600054826110f857604051622e076360e81b815260040160405180910390fd5b816111165760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b03831660009081526005602090815260408083208054680100000000000000018702019055838352600490915281204260a01b85176001851460e11b1790555b60405160018201918301906001600160a01b038616906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a482811061115d57500160005550565b6001600160e01b0319811681146104fb57600080fd5b6000602082840312156111d257600080fd5b81356108a5816111aa565b60005b838110156111f85781810151838201526020016111e0565b838111156109945750506000910152565b600081518084526112218160208601602086016111dd565b601f01601f19169290920160200192915050565b6020815260006108a56020830184611209565b60006020828403121561125a57600080fd5b5035919050565b80356001600160a01b038116811461127857600080fd5b919050565b6000806040838503121561129057600080fd5b61129983611261565b946020939093013593505050565b6000806000606084860312156112bc57600080fd5b6112c584611261565b92506112d360208501611261565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611322576113226112e3565b604052919050565b6000602080838503121561133d57600080fd5b823567ffffffffffffffff8082111561135557600080fd5b818501915085601f83011261136957600080fd5b81358181111561137b5761137b6112e3565b8060051b915061138c8483016112f9565b81815291830184019184810190888411156113a657600080fd5b938501935b838510156113c4578435825293850193908501906113ab565b98975050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156107135761142883855180516001600160a01b0316825260208082015167ffffffffffffffff16908301526040908101511515910152565b92840192606092909201916001016113ec565b60006020828403121561144d57600080fd5b6108a582611261565b6020808252825182820181905260009190848201906040850190845b8181101561071357835183529284019291840191600101611472565b6000806000606084860312156114a357600080fd5b6114ac84611261565b95602085013595506040909401359392505050565b600080604083850312156114d457600080fd5b6114dd83611261565b9150602083013580151581146114f257600080fd5b809150509250929050565b6000806000806080858703121561151357600080fd5b61151c85611261565b9350602061152b818701611261565b935060408601359250606086013567ffffffffffffffff8082111561154f57600080fd5b818801915088601f83011261156357600080fd5b813581811115611575576115756112e3565b611587601f8201601f191685016112f9565b9150808252898482850101111561159d57600080fd5b808484018584013760008482840101525080935050505092959194509250565b81516001600160a01b0316815260208083015167ffffffffffffffff169082015260408083015115159082015260608101610349565b6000806040838503121561160657600080fd5b61160f83611261565b915061161d60208401611261565b90509250929050565b600181811c9082168061163a57607f821691505b6020821081141561165b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600083516116898184602088016111dd565b83519083019061169d8183602088016111dd565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116d990830184611209565b9695505050505050565b6000602082840312156116f557600080fd5b81516108a5816111aa56fea26469706673582212204671ea6d83a4e72f6f4a4df83d7b3acfca24a4637c41b276a87619b270702b6b64736f6c63430008090033";