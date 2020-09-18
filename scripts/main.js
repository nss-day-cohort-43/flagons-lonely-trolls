import { TeamList } from "./teams/TeamList.js"
import { PlayerList } from "./players/PlayerList.js";
import { ScoreList } from "./scores/ScoreList.js";
import { TeamFormComponent } from "./teams/TeamForm.js";
import { PlayerFormComponent } from "./players/PlayerForm.js";
import "./games/GameForm.js"
import { startButton } from "./games/GameForm.js";

TeamList();
PlayerList();
ScoreList();
TeamFormComponent();
PlayerFormComponent();
startButton();
