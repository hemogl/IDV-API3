// Récupérer la localisation

import * as Location from "expo-location";

export async function loadDefaultLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    throw new Error("Permission refusée");
  }
  let location = await Location.getCurrentPositionAsync({});
  console.log("current location", location);
  return location;
}
