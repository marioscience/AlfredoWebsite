export class GearItem {
  name: string;
}

export class Gear {
  gearType: string;
  items: GearItem[]
}

export class Biography {
  biographyText: string;
  picUrl: string;
  gear: Gear[];
}
