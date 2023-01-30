import { Metric } from "../Models/Metric";

const metrics : Metric[] = [
    new Metric("4bd", "Alpha", [123,23], new Date(2011,10,30)),
    new Metric("bez", "Beta", null, new Date(2022,2,28)),
    new Metric("s31", "Gamma", [0,1,2,3], new Date(2023,1,3)),
    new Metric("fg4", "Delta", [23,0,100], new Date(2013,5,4)),
    new Metric("hj6", "Epsilon", [0], new Date(2020,2,8)),
    new Metric("j66", "Zeta", [15,2,54,3,1,3,6,32], new Date(2021,2,3)),
];

const CHALLENGE_API_KEY = "challengeApiKey";

export {metrics, CHALLENGE_API_KEY}