import { useEffect, useState } from "react";
import { readUserProcess } from "./readProcess";
import { Points } from "./points";
import { Levels } from "./levels";
import { updateProcess } from "./updateProcess";

export async function addPoints(action,user_process) {
    // user_process = readUserProcess();

    console.log(user_process);

    // текущий процесс по очкам и уровню
    cur_points = user_process.points;
    cur_level = user_process.level;
    id=user_process.id;

    new_point = Points(action); //полученные очки
    level_point = Levels(cur_level); //необходимые очки для поднятия уровня

    cur_points+=new_point;
    if(cur_points>= level_point){
        cur_level+=1;
        cur_points=cur_points-level_point;
    }

    updateProcess(cur_points,cur_level,id)
}