import { startGame } from "./controllers/racingController.js";

class App {
  async run() {
    await startGame();
  }
}

export default App;