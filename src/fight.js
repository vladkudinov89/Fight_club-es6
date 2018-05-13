import { Fighter } from "./Fighter.js";
import { ImprovedFighter } from "./ImprovedFighter.js";

export function fight(fighter, improvedFighter, ...points) {
  let finishBattle = new Promise((resolved, rejected) => {
    console.log(`-= Start the BATTLE =-`);
    setTimeout(() => {
      return resolved();
    }, 2000);
  });

  let i = 0;

  while (
    (fighter.health >= 0 || improvedFighter.health >= 0) &&
    i < points.length
  ) {
    fighter.hit(improvedFighter, points[i]);
    improvedFighter.doubleHit(fighter, points[i]);

    if (fighter.health <= 0) {
      return finishBattle.then(() => {
        return console.log(
          `-= Сongratulation!!! Winner is : ${improvedFighter.name} =-`
        );
      });
    } else if (improvedFighter.health <= 0) {
      return finishBattle.then(() => {
        return console.log(
          `-= Сongratulation!!! Winner is : ${fighter.name} =-`
        );
      });
    } else if (
      points.length - 1 === i &&
      (fighter.health >= 0 || improvedFighter.health >= 0)
    ) {
      return console.log("-= Both fighters is alive. Change points =-");
    }

    ++i;
  }
}
