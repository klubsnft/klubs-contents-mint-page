import { BigNumber } from "@ethersproject/bignumber";
import Config from "../Config";
import ExtWallet from "../klaytn/ExtWallet";
import KlubsContentsNFTMinterArtifact from "./abi/artifacts/contracts/KlubsContentsNFTMinter.sol/KlubsContentsNFTMinter.json";
import Contract from "./Contract";

class MinterContract extends Contract {

    constructor() {
        super(Config.contracts.Minter, KlubsContentsNFTMinterArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }

    public async amount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("amount"));
    }

    public async mint(count: number): Promise<void> {
        const amount = (await this.amount()).toNumber();
        if (count > amount) {
            alert(`남은 개수는 ${amount}개입니다.`);
        } else {
            const price = (await this.price()).mul(count);
            const balance = await ExtWallet.loadBalance();
            if (balance === undefined || balance.lt(price)) {
                alert("Klay가 부족합니다.");
            } else {
                await this.runWalletMethodWithValue(price, "mint", count);
            }
        }
    }
}

export default new MinterContract();
