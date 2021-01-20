import React from "react";

class Map extends React.Component {
  render() {
    return (
      <section className="section">
        {}
        {}
        {}
        <div
          className="google-map-container"
          data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
          data-zoom={5}
          data-icon="images/gmap_marker.png"
          data-icon-active="images/gmap_marker_active.png"
          data-styles="[{'featureType':'landscape','stylers':[{'saturation':-100},{'lightness':60}]},{'featureType':'road.local','stylers':[{'saturation':-100},{'lightness':40},{'visibility':'on'}]},{'featureType':'transit','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'administrative.province','stylers':[{'visibility':'off'}]},{'featureType':'water','stylers':[{'visibility':'on'},{'lightness':30}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#ef8c25'},{'lightness':40}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'color':'#b6c54c'},{'lightness':40},{'saturation':-40}]},{}]"
        >
          <div className="google-map" />
          <ul className="google-map-markers">
            <li
              data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
              data-description="9870 St Vincent Place, Glasgow"
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Map;
