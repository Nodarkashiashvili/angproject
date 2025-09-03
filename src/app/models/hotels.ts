export class Hotels {
  name!: string;
  pricePerNight!: number;
  images!: string;
  adress!: string;
  city!: string;
  featuredImage!: string[];
  id!: number;
  rooms : Room[] = [];

}

export class Room {
    id!:number;
    available!: boolean;
    name!:string;
    pricePerNight! : number;
    maximumGuests!: number;
    roomTypeId!: number;
    bookedDates!: Date[];
    images: Image[] = [];

}
export class Image {
  id!: number;
  roomId!: number;
  source!: string;
}