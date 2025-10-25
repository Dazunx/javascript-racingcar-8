import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
      const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분): ");
      const carNames = carNamesInput.split(",");

       carNames.forEach((name) => {
        const trimmed = name.trim();
        if (trimmed.length > 5 || trimmed.length === 0) {
          throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
        }
      });

      const tryCountInput = await MissionUtils.Console.readLineAsync("시도할 횟수: ");
      const tryCount = Number(tryCountInput);

      if (isNaN(tryCount) || tryCount <= 0) {
        throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
      }

      const scores = {};
      carNames.forEach((name) => (scores[name] = 0));

      for (let i = 0; i < tryCount; i++) {
        for (let j = 0; j < carNames.length; j++) {
          const name = carNames[j].trim();
          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
          let result = "";
          if (randomNumber >= 4) {
            result = "-";
            scores[name] += 1;
          }
          MissionUtils.Console.print(name + " : " + result);
        }
        MissionUtils.Console.print("");
      }
      const maxScore = Math.max(...Object.values(scores));
      const winners = Object.keys(scores).filter((name) => scores[name] === maxScore);

      MissionUtils.Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default App;
