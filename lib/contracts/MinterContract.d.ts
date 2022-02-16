import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class MinterContract extends Contract {
    constructor();
    price(): Promise<BigNumber>;
    amount(): Promise<BigNumber>;
    mint(count: number): Promise<void>;
}
declare const _default: MinterContract;
export default _default;
//# sourceMappingURL=MinterContract.d.ts.map