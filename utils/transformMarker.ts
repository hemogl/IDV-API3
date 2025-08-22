import Friend from "./FriendType";

export const transformMarker = (list: Friend[]) => {
  let markers = [];
  for (let i = 0; i < list.length; i++) {
    let object = {
      latitude: list[i].latitude,
      longitude: list[i].longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      name: list[i].name,
    };
    markers.push(object);
  }
  return markers;
};
