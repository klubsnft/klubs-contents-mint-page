import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KlubsContentsNFTMinterInterface extends utils.Interface {
    contractName: "KlubsContentsNFTMinter";
    functions: {
        "feeTo()": FunctionFragment;
        "setAmount(uint256)": FunctionFragment;
        "fromId()": FunctionFragment;
        "nft()": FunctionFragment;
        "setFromId(uint256)": FunctionFragment;
        "setLimitPerTransaction(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "setPrice(uint256)": FunctionFragment;
        "price()": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "amount()": FunctionFragment;
        "limitPerTransaction()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "setFeeTo(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fromId", values?: undefined): string;
    encodeFunctionData(functionFragment: "nft", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFromId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLimitPerTransaction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "price", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "amount", values?: undefined): string;
    encodeFunctionData(functionFragment: "limitPerTransaction", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
    decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFromId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimitPerTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "limitPerTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface KlubsContentsNFTMinter extends BaseContract {
    contractName: "KlubsContentsNFTMinter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KlubsContentsNFTMinterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        feeTo(overrides?: CallOverrides): Promise<[string]>;
        setAmount(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fromId(overrides?: CallOverrides): Promise<[BigNumber]>;
        nft(overrides?: CallOverrides): Promise<[string]>;
        setFromId(_fromId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        setPrice(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        price(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(count: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        amount(overrides?: CallOverrides): Promise<[BigNumber]>;
        limitPerTransaction(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFeeTo(_feeTo: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    feeTo(overrides?: CallOverrides): Promise<string>;
    setAmount(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fromId(overrides?: CallOverrides): Promise<BigNumber>;
    nft(overrides?: CallOverrides): Promise<string>;
    setFromId(_fromId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    setPrice(_price: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    price(overrides?: CallOverrides): Promise<BigNumber>;
    mint(count: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    amount(overrides?: CallOverrides): Promise<BigNumber>;
    limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFeeTo(_feeTo: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        feeTo(overrides?: CallOverrides): Promise<string>;
        setAmount(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fromId(overrides?: CallOverrides): Promise<BigNumber>;
        nft(overrides?: CallOverrides): Promise<string>;
        setFromId(_fromId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        setPrice(_price: BigNumberish, overrides?: CallOverrides): Promise<void>;
        price(overrides?: CallOverrides): Promise<BigNumber>;
        mint(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        amount(overrides?: CallOverrides): Promise<BigNumber>;
        limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        feeTo(overrides?: CallOverrides): Promise<BigNumber>;
        setAmount(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fromId(overrides?: CallOverrides): Promise<BigNumber>;
        nft(overrides?: CallOverrides): Promise<BigNumber>;
        setFromId(_fromId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setPrice(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        price(overrides?: CallOverrides): Promise<BigNumber>;
        mint(count: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        amount(overrides?: CallOverrides): Promise<BigNumber>;
        limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFeeTo(_feeTo: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAmount(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fromId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFromId(_fromId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPrice(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(count: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        amount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        limitPerTransaction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFeeTo(_feeTo: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KlubsContentsNFTMinter.d.ts.map