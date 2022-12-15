import React, { Component } from "react";
import { YMaps, Map, ZoomControl, Placemark } from "react-yandex-maps";

export default class YMapsComponent extends Component {
  map: any = React.createRef();
  ymaps: any = React.createRef();
  state = {
    userLocation: {
      lat: 54.3282,
      lon: 48.3866,
    },
    loading: true,
  };
  style = {
    position: "absolute",
    left: 0,
    top: 50,
    width: "100%",
    height: "100%",
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        this.setState({
          userLocation: { lat: latitude, lon: longitude },
          longitude: false,
        });
      },
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    return (
      <YMaps query={{ apikey: "d1c52a13-d06a-4213-8bcb-5d2c1af08cf4" }}>
        <Map
          state={{
            center: [userLocation.lat, userLocation.lon],
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
          <Placemark
            geometry={[userLocation.lat, userLocation.lon]}
            options={{
              preset: "islands#redCircleDotIcon",
            }}
          />
          <ZoomControl
            options={{ float: "none", position: { top: 100, right: 10 } }}
          />
        </Map>
      </YMaps>
    );
  }

  addSearchControlEvents = () => {
    const map = this.map.current;
    const ymaps = this.ymaps.current;

    const searchControl = new ymaps.control.SearchControl({
      options: {
        provider: "yandex#search",
        geoObjectStandardPreset: "'islands#blueFoodCircleIcon'",
        placeholderContent: "Шаурма",
        useMapBounds: true,
      },
    });

    searchControl.search("Шаурма");
    map.controls.add(searchControl);

    searchControl.events.add("resultselect", function(e: any) {
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
