import './App.css';

import React, { useRef, useEffect, useState } from "react";

import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Polygon from "@arcgis/core/geometry/Polygon";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

import "@esri/calcite-components/dist/components/calcite-alert";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-link";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-block-section";
import "@esri/calcite-components/dist/components/calcite-accordion";
import "@esri/calcite-components/dist/components/calcite-accordion";
import "@esri/calcite-components/dist/components/calcite-accordion-item";
import "@esri/calcite-components/dist/components/calcite-date-picker";
import "@esri/calcite-components/dist/components/calcite-time-picker";
import "@esri/calcite-components/dist/components/calcite-input-date-picker";
import "@esri/calcite-components/dist/components/calcite-input-time-picker";
import "@esri/calcite-components/dist/components/calcite-list";
import "@esri/calcite-components/dist/components/calcite-list-item";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-tree";
import "@esri/calcite-components/dist/components/calcite-tree-item";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-notice";
import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-avatar";
import "@esri/calcite-components/dist/components/calcite-modal";
import "@esri/calcite-components/dist/components/calcite-input-text";
import "@esri/calcite-components/dist/components/calcite-input-message";
import "@esri/calcite-components/dist/components/calcite-input-number";
import "@esri/calcite-components/dist/components/calcite-link";
import "@esri/calcite-components/dist/components/calcite-card";
import "@esri/calcite-components/dist/components/calcite-chip";
import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-combobox-item";
import "@esri/calcite-components/dist/components/calcite-scrim";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-split-button";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-tooltip";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import { CalciteShell, CalciteShellPanel, CalciteActionBar, CalciteAction, CalcitePanel } from '@esri/calcite-components-react';

function App() {

	setAssetPath(window.location.href);

	const mapDiv = useRef(null);
	const [map, setMap] = useState<any>(null);
	const [mapView, setMapView] = useState<any>(null);

	useEffect(() => {

		if (mapDiv.current && map === null) {

			let map = new ArcGISMap({
				basemap: "topo-vector",
			});
			setMap(map);

			let view = new MapView({
				map,
				container: mapDiv.current,
				zoom: 3, // Sets zoom level based on level of detail (LOD)
				center: [-90, 38]
			})
			setMapView(view);
		}
	}, []);

	return (
		<CalciteShell>
			<CalciteShellPanel collapsed slot="panel-start" position="start" id="shell-panel-start">
				<CalciteActionBar expanded slot="action-bar">
					<CalciteAction text="Home" icon="home"></CalciteAction>
				</CalciteActionBar>
			</CalciteShellPanel>

			<CalcitePanel heading="4x Application Shell with React, Calcite, and Storybook">

				<div ref={mapDiv} style={{width: "100%", height: "100%"}}>


				</div>
				<div slot='footer'>
					Copyright © 2024
				</div>
			</CalcitePanel>
		</CalciteShell>

	);
}

export default App;
