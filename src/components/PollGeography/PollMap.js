import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
} from "react-simple-maps";
import styled from "styled-components";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const PollMap = ({ countries, active }) => {
  const [xRotation, setXRotation] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setXRotation((xRotation + 0.5) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, [xRotation]);

  return (
    <Container>
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ scale: 49, rotate: [xRotation, 0, 0] }}
        width={100}
        height={100}
      >
        <Sphere stroke="#ffffff" strokeWidth={1.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = countries.find(
                (s) => s.countryCode === geo.properties.ISO_A2
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    d
                      ? d.countryCode === active
                        ? "#2ed573"
                        : "#ff4757"
                      : "#2f3542"
                  }
                  stroke="#ffffff"
                  strokeWidth={0.1}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 36px;
`;

export default PollMap;
