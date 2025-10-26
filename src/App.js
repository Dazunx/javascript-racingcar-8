import { startGame } from "./controllers/racingController.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      await startGame();
    } catch (error) {
      if (process.env.JEST_WORKER_ID !== undefined) {
        throw error;
      }
      MissionUtils.Console.print(error.message || "[ERROR]");
    }
  }
}

export default App;