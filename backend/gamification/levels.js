// Получение количества очков для каждого уровня
export const Levels =(level)=>{
    switch(level){
        case 1:
            return 50;
        case 2:
            return 70;
        case 3:
            return 90;
        case 4:
            return 100;
        case 5:
            return 130;          
    }
    return 150;
}