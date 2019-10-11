interface Coordinate {
    latitude : number,
    longitude : number,
}

interface DataPoint {
    coordinate : Coordinate,
    timesPerWeek : number,
}

class Optimizer {

    constructor() {        
    }

    updateData(data : DataPoint [] ) : boolean
    {
        return true;
    }


    getCostOfCoordinate(coordinate : Coordinate) : number
    {
        return 0.5;
    }

    getBestCoordinate() : Coordinate {
        return {latitude: 0.1, longitude:12};
    }
}

