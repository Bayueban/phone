import './center.css'
import React, { useRef, useEffect } from 'react';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {OSM, TileDebug} from 'ol/source';
import Feature from "ol/Feature";
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from "ol/style";
import { MultiPoint, Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

import Projection from "ol/proj/Projection";


const Center = (obj) => {
  // console.log(obj)

  const mapEl = useRef(null);

  useEffect(() => {

    // 构建机器人资源
    const robotSource = new VectorSource({ features: [] })

    // 构建机器人图层
    const robotLayer = new VectorLayer({
      source: robotSource,
    })

    const robot = new Feature({
      // geometry: new Point([12928,6738]),
      geometry: new Point([11.586e6,35.557e5]),
      name: "robot",
    });
    robot.setStyle(
      new Style({
        image: new Icon({
          anchor: [8, 10],
          anchorXUnits: "pixels",
          anchorYUnits: "pixels",
          src: "icon/robot-s.png",
          // rotation: Math.PI / rot,
        }),
      })
    );
    robotSource.addFeature(robot);

    new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // new TileLayer({
        //   source: new TileDebug(),
        // }),
        // new ImageLayer({
        //   source: new Static({
        //     url: data.pic,
        //     projection: new Projection({
        //       code: "EPSG:3857",
        //       units: "pixels",
        //       extent: extent,
        //     }),
        //     imageExtent: extent,
        //   }),
        // }),
        robotLayer
      ],
      target: "map",
      view: new View({
        // projection: new Projection({
        //   code: "EPSG:3857",
        //   units: "pixels",
        //   // extent: extent,
        //   extent: [0,0,0,0],
        // }),
        center: [11.586e6,35.557e5],
        // center: [data.width / 2, data.height / 2],
        zoom: 14,
      }),
      controls: [],
    });
  })

  return (<div id="center">
    <div id="map" ref={mapEl}></div>
  </div>)
}


export default Center