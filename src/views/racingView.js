export function showRoundResult(cars, shouldPrint = true) {
  if (!shouldPrint) return;

  for (const car of cars) {
    console.log(`${car.name} : ${"-".repeat(car.position)}`);
  }
  console.log("");
}

export function showWinner(winners, shouldPrint = true) {
  if (!shouldPrint) return;
  console.log("최종 우승자 : " + winners.join(", "));
}