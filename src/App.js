import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
      const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분): ");
      const carNames = carNamesInput.split(",").map((name) => name.trim());

      const tryCountInput = await MissionUtils.Console.readLineAsync("시도할 횟수: ");
      const tryCount = Number(tryCountInput);

      MissionUtils.Console.print(`입력된 차량: ${carNames.join(", ")}`);
      MissionUtils.Console.print(`시도 횟수: ${tryCount}`);

      for (let i = 0; i < tryCount; i++) {
            for (let j = 0; j < carNames.length; j++) {
              const name = carNames[j].trim();
              const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
              let result = "";
              if (randomNumber >= 4) {
                result = "-";
              }
              MissionUtils.Console.print(name + " : " + result);
            }
            MissionUtils.Console.print("");
          }
  }
}

export default App;
