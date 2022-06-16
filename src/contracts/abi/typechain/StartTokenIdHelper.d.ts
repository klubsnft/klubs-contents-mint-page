/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface StartTokenIdHelperInterface extends ethers.utils.Interface {
  functions: {
    "startTokenId()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "startTokenId",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "startTokenId",
    data: BytesLike
  ): Result;

  events: {};
}

export class StartTokenIdHelper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StartTokenIdHelperInterface;

  functions: {
    startTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startTokenId()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  startTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  "startTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    startTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "startTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    startTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "startTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    startTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startTokenId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}