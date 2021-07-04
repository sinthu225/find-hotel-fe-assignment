import { roomConfig } from "shared/constants/constants";

export default class UtilityService {
  static parseURLParamsToGuestObj = (param: string) => {
    const deafaultRoomObj = [
      {
        adult: 2,
        childrenAges: [],
      },
    ];

    const rooms = param.split("|").slice(0, roomConfig.maximumRoomsperGuest);
    const guestObj = rooms
      .filter((x) => !isNaN(parseInt(x.split(":")[0])))
      .map((room) => {
        let roomObj = {
          adult: 0,
          childrenAges: [],
        };

        const tempSplit = room.split(":");
        roomObj.adult =
          parseInt(tempSplit[0]) > roomConfig.maximumRoomOccupancy
            ? roomConfig.maximumRoomOccupancy
            : parseInt(tempSplit[0]);

        if (tempSplit[1]) {
          roomObj.childrenAges = tempSplit[1]
            .split(",")
            .slice(0, roomConfig.maximumRoomOccupancy - roomObj.adult)
            .filter((x) => !isNaN(+x))
            .map((x) => {
              return +x;
            });
        }

        return roomObj;
      });

    return guestObj.length ? guestObj : deafaultRoomObj;
  };

  static getGuestCount = (guestObj) => {
    const count = guestObj.reduce(
      (accumulator, currentValue) =>
        currentValue.adult + currentValue.childrenAges.length + accumulator,
      0
    );
    return count;
  };

  static parseGuestObjToURLParam = (guestObj) => {
    const test = guestObj.map(
      (currentValue) =>
        `${currentValue.adult}${
          currentValue.childrenAges.length
            ? ":" + currentValue.childrenAges.join(",")
            : ""
        }`
    );
    return test.join("|");
  };
}
