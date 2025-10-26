import { MissionUtils } from "@woowacourse/mission-utils";

export function showRoundResult(cars) {
  cars.forEach((car) => {
    MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
  });
  MissionUtils.Console.print("");
}

export function showWinner(winners) {
  MissionUtils.Console.print("최종 우승자 : " + winners.join(", "));
}