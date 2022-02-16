"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Alert_1 = __importDefault(require("../component/dialogue/Alert"));
const Config_1 = __importDefault(require("../Config"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
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
        if (amount === 0) {
            new Alert_1.default("오류", "현재 민팅 진행중이 아닙니다. 민팅은 2월 16일 밤 11시부터 시작됩니다.");
        }
        else if (count > amount) {
            new Alert_1.default("오류", `남은 개수는 ${amount}개입니다.`);
        }
        else {
            const price = (await this.price()).mul(count);
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                const balance = await Klaytn_1.default.balanceOf(address);
                if (balance === undefined || balance.lt(price)) {
                    new Alert_1.default("오류", "Klay가 부족합니다.");
                }
                else {
                    await this.runWalletMethodWithValue(price, "mint", count);
                }
            }
        }
    }
}
exports.default = new MinterContract();
//# sourceMappingURL=MinterContract.js.map