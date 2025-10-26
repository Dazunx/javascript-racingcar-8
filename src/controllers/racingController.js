import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "../models/carStatus.js";
import { showRoundResult, showWinner } from "../views/consoleView.js";

export async function startGame({ shouldPrint = true } = {}) {
  const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분): ");
  const tryCountInput = await MissionUtils.Console.readLineAsync("시도할 횟수: ");
  const tryCount = Number(tryCountInput);

  const cars = carNamesInput.split(",").map((name) => new Car(name.trim()));

  for (let i = 0; i < tryCount; i++) {
    for (const car of cars) {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(randomValue);
    }
    showRoundResult(cars, shouldPrint);
  }

  const maxPosition = Math.max(...cars.map((c) => c.position));
  const winners = cars.filter((c) => c.position === maxPosition).map((c) => c.name);

  showWinner(winners, shouldPrint);
  return { cars, winners };
}