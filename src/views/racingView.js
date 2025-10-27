import { MissionUtils } from "@woowacourse/mission-utils";

export function showRoundResult(cars) {
  for (const car of cars) {
    MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
  }
  MissionUtils.Console.print("");
}

export function showWinner(winners) {
  MissionUtils.Console.print("최종 우승자 : " + winners.join(", "));
}