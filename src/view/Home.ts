import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import { utils } from "ethers";
import CommonUtil from "../CommonUtil";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";

export default class Home implements View {

    private TODAY_COUNT = 10000;

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
                        el("img", { src: "/images/shared/logo/logo.svg", alt: "klubs" }),
                    ),
                ),
                el("article",
                    el(".menu",
                        el("a.item", "Home", { href: "", target: "_blank" }),
                        el("a.item", "Opensea", { href: "", target: "_blank" }),
                        el("a.item", "Officiel PFP Site", { href: "", target: "_blank" }),
                    ),
                    el("img.logo", { src: "/images/shared/logo/babyping.svg" }),
                    el("h1", "You can mint your own < Babyping > below\nGet your own NFT from and "),
                    el("h2", "ENJOY!"),
                    el("hr"),
                    el(".price-container",
                        el("article",
                            el("header", "Mint Price of 1NFT:"),
                            el("p", "?? KLAY"),
                        ),
                        el("article",
                            el("header", "Your Klay balance :"),
                            this.klayBalance = el("p", "?? KLAY"),
                        ),
                    ),
                    el("hr"),
                    el(".mint-container",
                        el("section",
                            el("article",
                                el("header", "Wallet Address"),
                                this.walletAddress = el("p", "xxxx")
                            ),
                            el("article",
                                el("header", "Mint Limit"),
                                this.countInput = el("input", "xxxx")
                            ),
                            el("article",
                                el("header", "Mint Progress"),
                                el("progress"),
                            ),
                            el("p", "10000 / 10000 NFT"),
                        ),
                        el(".button-wrap",
                            el("button", "Mint")
                        ),
                    ),
                ),
            ),
        );

        Wallet.on("connect", () => this.loadBalance());
        this.interval = setInterval(() => this.progress(), 1000);
    }

    private async loadBalance() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText(CommonUtil.shortenAddress(address));

            const balance = await Klaytn.balanceOf(address);
            this.klayBalance.empty().appendText(utils.formatEther(balance!));
        }
    }

    private async progress() {

        this.loadBalance();

        this.bar.style({ width: `${this.TODAY_COUNT * 100}%` });
        this.mintCount.empty().appendText(`${0}/${this.TODAY_COUNT}`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}