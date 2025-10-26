import { startGame } from "./controllers/racingController.js";

class App {
  async run() {
    const result = await startGame({ shouldPrint: true });
    return result;
  }
}
export default App;