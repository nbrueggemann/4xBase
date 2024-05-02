import "../src/index.css"
import "../node_modules/@esri/calcite-components/dist/calcite/calcite.css";
import '../node_modules/@arcgis/core/assets/esri/themes/light/main.css';
import "../node_modules/@esri/calcite-components/dist/components/calcite-panel";
import "../node_modules/@esri/calcite-components/dist/components/calcite-button";
import "../node_modules/@esri/calcite-components/dist/components/calcite-alert";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tooltip";
import "../node_modules/@esri/calcite-components/dist/components/calcite-input";
import "../node_modules/@esri/calcite-components/dist/components/calcite-input-number";
import "../node_modules/@esri/calcite-components/dist/components/calcite-label";
import "../node_modules/@esri/calcite-components/dist/components/calcite-link";
import "../node_modules/@esri/calcite-components/dist/components/calcite-popover";
import "../node_modules/@esri/calcite-components/dist/components/calcite-select";
import "../node_modules/@esri/calcite-components/dist/components/calcite-option";
import "../node_modules/@esri/calcite-components/dist/components/calcite-block";
import "../node_modules/@esri/calcite-components/dist/components/calcite-block-section";
import "../node_modules/@esri/calcite-components/dist/components/calcite-accordion";
import "../node_modules/@esri/calcite-components/dist/components/calcite-accordion";
import "../node_modules/@esri/calcite-components/dist/components/calcite-accordion-item";
import "../node_modules/@esri/calcite-components/dist/components/calcite-date-picker";
import "../node_modules/@esri/calcite-components/dist/components/calcite-time-picker";
import "../node_modules/@esri/calcite-components/dist/components/calcite-input-time-picker";
import "../node_modules/@esri/calcite-components/dist/components/calcite-input-date-picker";
import "../node_modules/@esri/calcite-components/dist/components/calcite-list";
import "../node_modules/@esri/calcite-components/dist/components/calcite-list-item";
import "../node_modules/@esri/calcite-components/dist/components/calcite-action";
import "../node_modules/@esri/calcite-components/dist/components/calcite-button";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tabs";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tab";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tab-nav";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tab-title";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tree";
import "../node_modules/@esri/calcite-components/dist/components/calcite-tree-item";
import "../node_modules/@esri/calcite-components/dist/components/calcite-icon";
import "../node_modules/@esri/calcite-components/dist/components/calcite-switch";
import "../node_modules/@esri/calcite-components/dist/components/calcite-notice";
import "../node_modules/@esri/calcite-components/dist/components/calcite-loader";
import "../node_modules/@esri/calcite-components/dist/components/calcite-avatar";
import "../node_modules/@esri/calcite-components/dist/components/calcite-modal";
import "../node_modules/@esri/calcite-components/dist/components/calcite-input-text";
import "../node_modules/@esri/calcite-components/dist/components/calcite-link";
import "../node_modules/@esri/calcite-components/dist/components/calcite-card";
import "../node_modules/@esri/calcite-components/dist/components/calcite-chip";
import "../node_modules/@esri/calcite-components/dist/components/calcite-combobox";
import "../node_modules/@esri/calcite-components/dist/components/calcite-combobox-item";
import "../node_modules/@esri/calcite-components/dist/components/calcite-scrim";
import "../node_modules/@esri/calcite-components/dist/components/calcite-block";
import "../node_modules/@esri/calcite-components/dist/components/calcite-slider";
import "../node_modules/@esri/calcite-components/dist/components/calcite-split-button";
import "../node_modules/@esri/calcite-components/dist/components/calcite-dropdown";
import "../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group";
import "../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item";
import "../node_modules/@esri/calcite-components/dist/components/calcite-radio-button";
import "../node_modules/@esri/calcite-components/dist/components/calcite-radio-button-group";

import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(window.location.href);

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
