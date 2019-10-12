export enum Categories {
  marine = 'marine',
  terrestrial = 'terrestrial',
  virtual = 'virtual',
  schengen = 'schengen',
  frontex = 'frontex'
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Wall {
  name: string;
  description: string[];

  startDate: number;
  endDate?: number;
  internalDate?: number;
}

export interface GeoWall extends Coordinates, Wall {}

export interface FrontexableWall extends GeoWall {
  frontex: boolean;
  geoInfo: string;
}

export interface TerrestrialWall extends FrontexableWall {
  frontierCountries: string;
  frontierSize: string;
  construction: string;
  militaryFeatures: Array<number>;
}

export interface MarineWall extends FrontexableWall {
  subtitle: string;
}

export interface VirtualWall extends GeoWall {}

export interface FrontexWall extends GeoWall {}

export interface Layer<G extends GeoWall = GeoWall, W extends Wall = Wall> {
  category: Categories;
  color: string;
  dark?: boolean;
  disableFilter?: boolean;
  
  image: string;
  frontexImage: string;

  geoWalls: Array<G>;
  timeWalls: Array<W>;
}
