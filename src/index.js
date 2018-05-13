import { Fighter } from "./Fighter.js";
import { ImprovedFighter } from "./ImprovedFighter.js";
import { fight } from "./fight.js";

let fighter = new Fighter("Vlad", 100, 6);

let improvedFighter = new ImprovedFighter("Nick", 100, 1);

fight(
  fighter,
  improvedFighter,

  10,
  10,
  10
);
