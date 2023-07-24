import { lifesHtml, highestScoreHtml, multiplierHtml, totalScoreHtml, wordsCompletedHtml } from "../../helpers/references";


export const renderScore = ( score ) => {

    totalScoreHtml.innerText        = score.totalScore;
    wordsCompletedHtml.innerText    = score.wordsCompleted;
    multiplierHtml.innerText        = score.multiplier;
    lifesHtml.innerText             = score.lifes;
    highestScoreHtml.innerText      = score.highestScore;

}


