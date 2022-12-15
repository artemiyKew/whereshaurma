export default class UserLocation {
  constructor() {
    navigator.geolocation.getCurrentPosition(
      this.successCallback,
      this.errorCallback
    );
  }
  getUserLocation = (pos: any) => {
    console.log("pos", pos);
  };
  successCallback = (position: any) => {
    console.log("123", position.coords);
    this.getUserLocation(position.coords);
  };

  errorCallback = (error: any) => {
    console.log(error);
  };
}
