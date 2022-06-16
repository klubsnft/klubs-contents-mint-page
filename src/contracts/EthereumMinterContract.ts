import { BigNumberish } from "ethers";
import YabaiGoblinMinterArtifact from "./abi/artifacts/contracts/YabaiGoblinMinter.sol/YabaiGoblinMinter.json";
import { YabaiGoblinMinter } from "./abi/typechain";
import EthereumContract from "./EthereumContract";

class EthereumMinterContract extends EthereumContract<YabaiGoblinMinter> {

    constructor() {
        super("0x4bDa14aE7e8C0137e9d5410e7F30FF62A51c6041", YabaiGoblinMinterArtifact.abi, []);
    }

    public async mint(count: BigNumberish) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.mint(count);
    }
}

export default new EthereumMinterContract();
