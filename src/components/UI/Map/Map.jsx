import { load } from "@2gis/mapgl";
import React, { useState } from "react";
import MapWrapper from "./MapWrapper";
import { useEffect } from "react";
import classes from "./MapStyles/Map.module.css";
import { MapContext } from "./MapContext";
import { Ruler } from "@2gis/mapgl-ruler";
import "./MapStyles/button.css";
import { observer } from "mobx-react-lite";
import { Button } from "@mantine/core";

import { CircleClass } from "./helpers/Circle";
import CreatePolygons from "./helpers/Polygon";
//[38.971526, 45.024359]

import getAreaPopulationDensity from "./helpers/request";
import mainStore from "../../../store/mainStore";

export const Map = observer(() => {
  const [showCircles, setShowCircles] = useState(true);
  function setOnOffCircles() {
    if (showCircles) {
      setShowCircles(false);
    } else {
      setShowCircles(true);
    }
  }

  const [showPolygon, setShowPolygon] = useState(false);
  function setOnOffPolygons() {
    if (showPolygon) {
      setShowPolygon(false);
    } else {
      setShowPolygon(true);
    }
  }

  const [showRuler, setShowRuler] = useState(false);
  function setOnOffRuler() {
    if (showRuler) {
      setShowRuler(false);
    } else {
      setShowRuler(true);
    }
  }
  function RulerFunc(mapglAPI, map) {
    const ruler = new Ruler(map, {
      mode: "polyline",
    });

    const resetControl = new mapglAPI.Control(
      map,
      '<button class="button">Reset points</button>',
      {
        position: "topLeft",
      }
    );

    resetControl
      .getContainer()
      .querySelector("button")
      .addEventListener("click", function () {
        ruler.destroy();
        ruler.enable();
      });
  }

  const [showMarkerClicked, setShowMarkerClicked] = useState(true);
  function setOnOffMarkerClick() {
    if (showMarkerClicked) {
      setShowMarkerClicked(false);
    } else {
      setShowMarkerClicked(true);
    }
  }
  //!При клики ставит маркер на точку
  // function MarkerClickFunc(mapglAPI, map) {
  //   map.on("click", (e) => {
  //     console.log("LOL");
  //     console.log(`targetData = ${e.lngLat} :: ${e.lngLat[0]}`);
  //     let marker = new MarkerClass(mapglAPI, map, [e.lngLat[0], e.lngLat[1]]);
  //     marker.CreateMarker();
  //   });
  // }

  const [_, setMapInstance] = React.useContext(MapContext);
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [38.971526, 45.024359],
        zoom: 13,
        key: "77661842-aa62-4345-b828-82b1be08cdb7",
        trafficControl: "topRight",
        zoomControl: true,
        scaleControl: true,
      });

      const marker = new mapglAPI.Marker(map, {
        coordinates: [39.02983, 45.00829],
      });
      const marker1 = new mapglAPI.Marker(map, {
        coordinates: [39.0027, 45.0129],
      });
      const marker2 = new mapglAPI.Marker(map, {
        coordinates: [39.0298, 45.0082],
      });

      //Ruler
      if (showRuler) {
        RulerFunc(mapglAPI, map);
      }

      let selectedIds = [];
      map.on("click", (e) => {
        const lngToRequest = JSON.stringify(e.lngLat[0]).slice(0, 7);
        const lattToRequest = JSON.stringify(e.lngLat[1]).slice(0, 7);
        console.log(
          `lngToRequest = ${lngToRequest} and lattToRequest = ${lattToRequest}`
        );
        getAreaPopulationDensity(lngToRequest, lattToRequest);
        mainStore.setCoords(lngToRequest, lattToRequest);
        if (!e.target) {
          return;
        }

        const { id } = e.target;

        if (selectedIds.includes(id)) {
          selectedIds = selectedIds.filter((i) => i !== id);
        } else {
          selectedIds.push(id);
        }

        map.setSelectedObjects(selectedIds);
      });

      // map.on("click", (e) => {
      //   console.log(`targetData = ${e.lngLat} :: ${e.lngLat[0]}`);
      //   let marker = new MarkerClass(mapglAPI, map, [e.lngLat[0], e.lngLat[1]]);
      //   marker.CreateMarker();
      // });

      //!Для поставноки маркера при нажаттии на карту
      // if (showMarkerClicked) {
      //   MarkerClickFunc(mapglAPI, map);
      // }

      const data = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              foo: "qwe", // Уникальное свойство
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [38.98, 45.03],
                  [39.2, 45.05],
                  [39.22, 45.06],
                  [39.33, 45.1],
                  [39.44, 45.12],
                  [38.98, 45.03],
                ],
              ],
            },
          },
        ],
      };
      const source = new mapglAPI.GeoJsonSource(map, {
        data,
        attributes: {
          bar: "asd",
        },
      });
      const layer = {
        id: "my-polygons-layer", // Each layer ID must be unique

        // Data filtering logic
        filter: [
          "match",
          ["sourceAttr", "bar"],
          ["asd"],
          true, // Result if value of bar source attribute equals "asd"
          false, // Result if not
        ],

        // Drawing object type
        type: "polygon",

        // Style of drawing object
        style: {
          color: "#ff0055",
        },
      };

      // map.on('styleload', () => {
      //     map.addLayer(layer);
      // })

      //=========================================Cicles================================================================
      const coord_ary = [
        [38.975668, 45.026359],
        [38.971968, 45.029359],
        [38.979668, 45.022359],
        [38.980668, 45.026359],
      ];
      if (showCircles) {
        for (let i = 0; i < 4; i++) {
          let circle = new CircleClass(
            mapglAPI,
            map,
            coord_ary[i],
            200,
            "#a4a00055"
          );
          circle.CreateCircle();
        }
      }

      //При нажатии на кружок вылазит информация
      // circle.on('click', () => {
      //     alert('circleMarker click');
      // });
      //==============================================================================================================

      // const polygon = new mapglAPI.Polygon(map, {
      //     coordinates: [
      //         [
      //         [38.971526, 45.024359],
      //         [38.979854, 45.029999],
      //         [38.995526, 45.065659],
      //         [39.000000, 45.053459],
      //         [38.971526, 45.024359]
      //         ]
      //     ],
      //     color: '#ff000055   ',
      //     strokeWidth: 3,
      //     strokeColor: '#ff000055',
      // })
      // polygon.on('click', () => {
      //     alert('Polygon click');
      // });

      //========================================Polygon====================================================================

      const polygon_coord_ary = [
        [
          [38.971526, 45.024359],
          [38.974894, 45.026999],
          [38.976576, 45.027659],
          [38.978626, 45.029959],
          [38.971526, 45.024359],
        ],
        [
          [38.981526, 45.034359],
          [38.984894, 45.036999],
          [38.986576, 45.037659],
          [38.988626, 45.039959],
          [38.981526, 45.034359],
        ],
        [
          [38.991526, 45.054359],
          [38.994894, 45.056999],
          [38.996576, 45.057659],
          [38.998626, 45.059959],
          [38.991526, 45.054359],
        ],
      ];
      if (showPolygon) {
        for (let i = 0; i < 3; i++) {
          let pol1 = CreatePolygons(
            1,
            mapglAPI,
            map,
            polygon_coord_ary[i],
            "#a4a00022"
          );
        }
      }

      //===================================================================================================================
    });

    // Сохраняем ссылку на карту
    setMapInstance(map);

    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy();
  }, [showCircles, showPolygon, showRuler]);

  return (
    <div className={classes.mapDivStyle}>
      <MapWrapper />
      <Button
        onClick={setOnOffCircles}
        style={{ fontSize: 25, marginTop: 10 }}
        gradient={{ from: "rgb(0, 33, 45)", to: "rgb(52, 118, 189)", deg: 310 }}
        variant="gradient"
      >
        Circles
      </Button>
      <Button
        onClick={setOnOffPolygons}
        style={{ fontSize: 25, marginLeft: 3 }}
        gradient={{ from: "rgb(0, 33, 45)", to: "rgb(52, 118, 189)", deg: 75 }}
        variant="gradient"
      >
        Polygons
      </Button>
      <Button
        onClick={setOnOffRuler}
        style={{ fontSize: 25, marginLeft: 3 }}
        gradient={{ from: "rgb(0, 33, 45)", to: "rgb(52, 118, 189)", deg: 180 }}
        variant="gradient"
      >
        Ruler
      </Button>
      <Button
        onClick={setOnOffMarkerClick}
        style={{ fontSize: 25, marginLeft: 3 }}
        gradient={{ from: "rgb(0, 33, 45)", to: "rgb(52, 118, 189)", deg: 15 }}
        variant="gradient"
      >
        Marker
      </Button>
    </div>
  );
});

export default Map;
