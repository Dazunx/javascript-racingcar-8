import { startGame } from "./controllers/gameManager.js";

class App {
  async run() {
    const result = await startGame({ shouldPrint: true });
    return result;
  }
}
export default App;