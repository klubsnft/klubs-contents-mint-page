"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const Alert_1 = __importDefault(require("../component/dialogue/Alert"));
const MinterContract_1 = __importDefault(require("../contracts/MinterContract"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Home {
    constructor() {
        this.TODAY_COUNT = 1000;
        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)("section.home-view", (0, skynode_1.el)("header", (0, skynode_1.el)("nav", (0, skynode_1.el)("img", { src: "/images/shared/logo/klubs.png", alt: "klubs" }))), (0, skynode_1.el)("article", (0, skynode_1.el)(".menu", (0, skynode_1.el)("a.item", "Opensea", { href: "https://opensea.io/collection/babyping", target: "_blank" }), (0, skynode_1.el)("a.item", "Officiel PFP Site", { href: "https://www.babyping.net/", target: "_blank" })), (0, skynode_1.el)("img.logo", { src: "/images/shared/logo/babyping.png" }), (0, skynode_1.el)("h1", "You can mint your own < Babyping > below\nGet your own NFT from and "), (0, skynode_1.el)("h2", "ENJOY!"), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".price-container", (0, skynode_1.el)("article", (0, skynode_1.el)("header", "Mint Price of 1NFT:"), this.priceDisplay = (0, skynode_1.el)("p", ".. KLAY")), (0, skynode_1.el)("article", (0, skynode_1.el)("header", "Your Klay balance:"), this.klayBalance = (0, skynode_1.el)("p", ".. KLAY"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mint-container", (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("header", "Wallet Address"), this.walletAddress = (0, skynode_1.el)("p", "...")), (0, skynode_1.el)("article", (0, skynode_1.el)("header", "Mint Limit"), this.countInput = (0, skynode_1.el)("input", { value: "1" })), (0, skynode_1.el)("article", (0, skynode_1.el)("header", "Mint Progress"), (0, skynode_1.el)("progress", this.bar = (0, skynode_1.el)(".progress-bar"))), (0, skynode_1.el)(".caption-container", (0, skynode_1.el)(".caption", "* 1트랜젝션당 10개까지 민팅이 가능합니다."), this.mintCount = (0, skynode_1.el)("p", "... / 10000 NFT"))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "Mint", {
            click: async () => {
                const count = parseInt(this.countInput.domElement.value, 10);
                if (count > 10) {
                    new Alert_1.default("오류", "한번에 최대 10개까지 민팅이 가능합니다.");
                }
                else {
                    await MinterContract_1.default.mint(count);
                }
            },
        }))))));
        Wallet_1.default.on("connect", () => this.loadBalance());
        this.interval = setInterval(() => this.progress(), 1000);
        this.load();
    }
    async load() {
        const price = await MinterContract_1.default.price();
        this.priceDisplay.empty().appendText(`${ethers_1.utils.formatEther(price)} KLAY`);
    }
    async loadBalance() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText(address);
            const balance = await Klaytn_1.default.balanceOf(address);
            const remainder = balance.mod(1e14);
            this.klayBalance.empty().appendText(`${ethers_1.utils.formatEther(balance.sub(remainder))} KLAY`);
        }
    }
    async progress() {
        this.loadBalance();
        const remains = (await MinterContract_1.default.amount()).toNumber();
        const d = 200;
        this.bar.style({ width: `${d / this.TODAY_COUNT * 100}%` });
        this.mintCount.empty().appendText(`${d} / ${this.TODAY_COUNT} NFT`);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map