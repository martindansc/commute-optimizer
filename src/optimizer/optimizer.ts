interface Coordinate {
    latitude : number,
    longitude : number,
}

interface DataPoint {
    coordinate : Coordinate,
    timesPerWeek : number,
}

const EARTH_RADIUS : number = 6371000;

class Optimizer {

    data_ : DataPoint [] = [];

    constructor() {        
    }

    updateData(data : DataPoint [] ) : boolean
    {
        this.data_ = data;
        return true;
    }


    getCostOfCoordinate(coordinate : Coordinate) : number
    {
        return this.data_
        .map((dataPoint : DataPoint)=>
        {return dataPoint.timesPerWeek * Optimizer.distance(dataPoint.coordinate,coordinate)})
        .reduce((accumulator, currentValue) => accumulator + currentValue)
         
    }

    getBestCoordinate() : Coordinate {
        return {latitude: 0.1, longitude:12};
    }

    private static radiansFromDegrees(degrees : number) : number 
    {
        return Math.PI * degrees/ 180.0;
    }


    private static distance(p1 : Coordinate, p2 : Coordinate) : number {
        //https://www.movable-type.co.uk/scripts/latlong.html
        var φ1 = this.radiansFromDegrees(p1.latitude);
        var φ2 = this.radiansFromDegrees(p2.latitude);
        var Δφ = φ2 - φ1;
        var Δλ = this.radiansFromDegrees(p2.longitude-p1.longitude);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = EARTH_RADIUS * c;
        return d;        
    }
}

