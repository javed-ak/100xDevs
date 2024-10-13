import { selector } from "recoil";
import { countAtom } from "../atom/count";

export const evenSelector = selector({
    key: "evenSelector",
    get: (props) => {
        const even = props.get(countAtom)
        return ((even % 2) || (even == 0));
    }
})