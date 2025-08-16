export  const addressToCoords = async (adress: string) => {
  const answer = await fetch(adress);
  if(!answer){
    console.log("adress error");
  }
  const {latitude, longitude} = answer.latitude, answer.longitude;
  // fetch
  return {latitude, longitude};
}
