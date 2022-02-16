"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Config_1 = __importDefault(require("../Config"));
const ExtWallet_1 = __importDefault(require("../klaytn/ExtWallet"));
const KlubsContentsNFTMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/KlubsContentsNFTMinter.sol/KlubsContentsNFTMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class MinterContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Minter, KlubsContentsNFTMinter_json_1.default.abi);
    }
    async price() {
        return bignumber_1.BigNumber.from(await this.runMethod("price"));
    }
    async amount() {
        return bignumber_1.BigNumber.from(await this.runMethod("amount"));
    }
    async mint(count) {
        const amount = (await this.amount()).toNumber();
        if (count > amount) {
            alert(`남은 개수는 ${amount}개입니다.`);
        }
        else {
            const price = (await this.price()).mul(count);
            const balance = await ExtWallet_1.default.loadBalance();
            if (balance === undefined || balance.lt(price)) {
                alert("Klay가 부족합니다.");
            }
            else {
                await this.runWalletMethodWithValue(price, "mint", count);
            }
        }
    }
}
exports.default = new MinterContract();
//# sourceMappingURL=MinterContract.js.map