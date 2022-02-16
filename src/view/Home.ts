import { BodyNode, DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import Alert from "../component/dialogue/Alert";
import Confirm from "../component/dialogue/Confirm";
import Prompt from "../component/dialogue/Prompt";
import MinterContract from "../contracts/MinterContract";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";

export default class Home implements View {

    private TODAY_COUNT = 1000;

    private priceDisplay: DomNode;
    private klayBalance: DomNode;
    private mintCount: DomNode;
    private walletAddress: DomNode;
    private bar: DomNode;

    private countInput: DomNode<HTMLInputElement>;

    private container: DomNode;
    private interval: any;

    constructor() {
        BodyNode.append(
            this.container = el("section.home-view",
                el("header",
                    el("nav",
                        el("img", { src: "/images/shared/logo/klubs.png", alt: "klubs" }),
                    ),
                ),
                el("article",
                    el(".menu",
                        el("a.item", "Opensea", { href: "https://opensea.io/collection/babyping", target: "_blank" }),
                        el("a.item", "Officiel PFP Site", { href: "https://www.babyping.net/", target: "_blank" }),
                    ),
                    el("img.logo", { src: "/images/shared/logo/babyping.png" }),
                    el("h1", "You can mint your own < Babyping > below\nGet your own NFT from and "),
                    el("h2", "ENJOY!"),
                    el("hr"),
                    el(".price-container",
                        el("article",
                            el("header", "Mint Price of 1NFT:"),
                            this.priceDisplay = el("p", ".. KLAY"),
                        ),
                        el("article",
                            el("header", "Your Klay balance:"),
                            this.klayBalance = el("p", ".. KLAY"),
                        ),
                    ),
                    el("hr"),
                    el(".mint-container",
                        el("section",
                            el("article",
                                el("header", "Wallet Address"),
                                this.walletAddress = el("p", "...")
                            ),
                            el("article",
                                el("header", "Mint Limit"),
                                this.countInput = el("input", { value: "1" })
                            ),
                            el("article",
                                el("header", "Mint Progress"),
                                el(".progress",
                                    this.bar = el(".progress-bar"),
                                ),
                            ),
                            el(".caption-container",
                                el(".caption", "* 1트랜젝션당 10개까지 민팅이 가능합니다."),
                                this.mintCount = el("p", "... / 10000 NFT"),
                            ),
                        ),
                        el(".button-wrap",
                            el("button", "Mint", {
                                click: async () => {
                                    const count = parseInt(this.countInput.domElement.value, 10);
                                    if (count > 10) {
                                        new Alert("오류", "한번에 최대 10개까지 민팅이 가능합니다.");
                                    } else {
                                        await MinterContract.mint(count);
                                    }
                                },
                            }),
                        ),
                    ),
                ),
            ),
        );

        Wallet.on("connect", () => this.loadBalance());
        this.interval = setInterval(() => this.progress(), 1000);
        this.load();
    }

    private async load() {
        const price = await MinterContract.price();
        this.priceDisplay.empty().appendText(`${utils.formatEther(price)} KLAY`);
    }

    private async loadBalance() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText(address);

            const balance = await Klaytn.balanceOf(address);
            const remainder = balance.mod(1e14);
            this.klayBalance.empty().appendText(`${utils.formatEther(balance.sub(remainder))} KLAY`);
        }
    }

    private async progress() {
        this.loadBalance();
        const remains = (await MinterContract.amount()).toNumber();
        const d = 200;// this.TODAY_COUNT - remains > this.TODAY_COUNT ? this.TODAY_COUNT : this.TODAY_COUNT - remains;
        this.bar.style({ width: `${d / this.TODAY_COUNT * 100}%` });
        this.mintCount.empty().appendText(`${d} / ${this.TODAY_COUNT} NFT`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}