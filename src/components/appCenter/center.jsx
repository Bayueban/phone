import './center.css'
import React, { useEffect } from 'react';

// 地图
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileDebug } from 'ol/source';
import Feature from "ol/Feature";
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from "ol/style";
import { MultiPoint, Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Projection from "ol/proj/Projection";
// 接口
import axios from '../../utils/api'

const Center = (obj) => {
  useEffect(() => {
    // 实例化地图
    new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        robotLayer
      ],
      target: "map",
      view: new View({
        center: [11.586e6, 35.557e5],
        zoom: 14,
      }),
      controls: [],
    });

    setInterval(function () {
      robotSource.clear()
      point[1] += 10
  
      let robot = new Feature({
        geometry: new Point(point),
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
    }, 500)
  })
  let point = [11586000, 3555700]

  // 构建机器人资源
  let robotSource = new VectorSource({ features: [] })
  // 构建机器人图层
  let robotLayer = new VectorLayer({
    source: robotSource,
  })
  let robot = new Feature({
    geometry: new Point(point),
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


  return (<div id="center">
    <div id="map"></div>
  </div>)
}


export default Center