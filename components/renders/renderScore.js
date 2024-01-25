import { lifesHtml, highestScoreHtml, multiplierHtml, totalScoreHtml, wordsCompletedHtml } from "../../helpers/references";
import { score } from "../updateScore";


export const renderScore = () => {

    totalScoreHtml.innerText        = score.totalScore;
    wordsCompletedHtml.innerText    = score.wordsCompleted;
    multiplierHtml.innerText        = score.multiplier;
    lifesHtml.innerText             = score.lifes;
    highestScoreHtml.innerText      = score.highestScore;

}


