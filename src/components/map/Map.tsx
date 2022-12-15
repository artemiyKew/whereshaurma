import React, { Component } from "react";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";
import UserLocation from "../../map_utils/UserLocation";

export default class YMapsComponent extends Component {
  map: any = React.createRef();
  ymaps: any = React.createRef();


  
  style = {
    position: "absolute",
    left: 0,
    top: 50,
    width: "100%",
    height: "100%",
  };

  constructor(props: any) {
    super(props);
    // console.log("this.userPosition.latitude",this.userPosition);
  }
  
  render() {
    return (
      <YMaps query={{ apikey: "d1c52a13-d06a-4213-8bcb-5d2c1af08cf4" }}>
        <Map
          state={{
            center: [54,3282, 48,3866],
            zoom: 13,
          }}
          instanceRef={this.map}
          onLoad={(ymapsInstance: any) => {
            this.ymaps.current = ymapsInstance;
            this.addSearchControlEvents();
          }}
          width="100%"
          height="100%"
          style={this.style}
          modules={["control.SearchControl"]}
        >
          <ZoomControl
            options={{ float: "none", position: { top: 100, right: 10 } }}
          />
        </Map>
      </YMaps>
    );
  }

  setMapCenter = (coords: any) => {
    const map = this.map.current;
    map.setCenter([coords.latitude, coords.longitude], 13);
  }

  addSearchControlEvents = () => {
    const map = this.map.current;
    const ymaps = this.ymaps.current;

    const searchControl = new ymaps.control.SearchControl({
      options: {
        provider: "yandex#search",
        geoObjectStandardPreset: "islands#blueDotIcon",
        placeholderContent: "Шаурма",
        useMapBounds: true,
      },
    });

    searchControl.search("Шаурма");
    map.controls.add(searchControl);

    searchControl.events.add("resultselect", function (e: any) {
      const searchCoords =
        searchControl.getResponseMetaData().SearchResponse.Point.coordinates;
      const display: string =
        searchControl.getResponseMetaData().SearchResponse.display;

      //console.log(searchControl.getResponseMetaData());

      if (display && display === "multiple") {
        map.setCenter([searchCoords[1], searchCoords[0]], 13);
      }
    });
  };
}
