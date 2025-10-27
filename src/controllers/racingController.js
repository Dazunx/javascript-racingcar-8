import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "../models/racingCar.js";
import { showRoundResult, showWinner } from "../views/racingView.js";

export async function startGame() {
  const carNamesInput = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  const tryCountInput = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?"
  );

  await Promise.resolve(); // 서버에서 멈춤 방지
  const tryCount = Number(tryCountInput);

  const carNames = carNamesInput.split(",").map((name) => name.trim());
  for (const name of carNames) {
    if (name.length === 0 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1~5자만 가능합니다.");
    }
  }

  if (isNaN(tryCount) || tryCount <= 0) {
    throw new Error("[ERROR] 시도할 횟수는 1 이상만 가능합니다.");
  }

  const cars = carNames.map((name) => new Car(name));

  for (let i = 0; i < tryCount; i++) {
    for (const car of cars) {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(randomValue);
    }
    showRoundResult(cars);
  }

  const maxPosition = Math.max(...cars.map((c) => c.position));
  const winners = cars.filter((c) => c.position === maxPosition).map((c) => c.name);

  showWinner(winners);
}