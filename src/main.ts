import { SkyRouter } from "skyrouter";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import msg from "msg.js";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("", Home);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();