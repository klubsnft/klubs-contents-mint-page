/*
import { BigNumber } from "@ethersproject/bignumber";
import Alert from "../component/dialogue/Alert";
import Config from "../Config";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";
import KlubsContentsNFTMinterArtifact from "./abi/artifacts/contracts/KlubsContentsNFTMinter.sol/KlubsContentsNFTMinter.json";
import Contract from "./Contract";

class KlaytnMinterContract extends Contract {

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
        if (amount === 0) {
            new Alert("오류", "현재 민팅 진행중이 아닙니다. 민팅은 2월 16일 밤 11시부터 시작됩니다.");
        } else if (count > amount) {
            new Alert("오류", `남은 개수는 ${amount}개입니다.`);
        } else {
            const price = (await this.price()).mul(count);
            const address = await Wallet.loadAddress();
            if (address !== undefined) {
                const balance = await Klaytn.balanceOf(address);
                if (balance === undefined || balance.lt(price)) {
                    new Alert("오류", "Klay가 부족합니다.");
                } else {
                    await this.runWalletMethodWithValue(price, "mint", count);
                    new Alert("민팅 성공!", "축하합니다! 민팅에 성공하셨습니다!");
                }
            }
        }
    }
}

export default new KlaytnMinterContract();
*/