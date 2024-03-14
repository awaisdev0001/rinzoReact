import * as constants from "./constants";
import RinzoSwapAbi from "./RinzoSwap.json";
import TransferHelperAbi from "./TransferHelper.json";
import * as libs from "./lib";

const obj = {
  ...constants,
  RinzoSwapAbi,
  TransferHelperAbi,
  ...libs,
};

export default obj;
