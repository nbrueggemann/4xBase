# Image Library React UI Sample App

## Getting Started

To run this code execute the following commands:

`
npm install
`

`
npm start dev
`

If you'd like to run the unit tests run

`
npm run test
`

## The Code

The image library code was written to be very well contained and have a defined interface.  This was done with the intent of being able to share this component actoss multiple NGA projects and programs.  The only 2 real dependencies this UI has is the ESRI Javascript API and Calcite.

All of the code for the image library UI is in src/ImageLibrary and the ImageLibraryContainer.tsx file contains the primary interface to the component.

Look in App.tsx for how the Image Library is constructed and used.

## Functionality

The following functionality is provided by the Image Library currently:

* Image library footprints are displayed on the map colored according to the platformFilterOptions imput parameter.
* As the user hovers over footprint results in the list the footprint hovered over is highlighted on the map.
* The user can click on the map to select images.  If multiple are selected when clicking on the map the list will be filtered to only display those images that intersected the click location.  If only a single image is selected when clicking on that map, that image's properties will be displayed.
* When a image's props are displayed the user can zoom the map to that image's footprint on the map.
* Options for opening the image in iSpy, CGSWeb, and Super Buffer Check are provided.
* The propertied displayed for an image will also display that image's thumbnail.

Things we should still consider doing that aren't in this baseline:

* Display the image on the map when the image's properties are displayed.
* It would be awesome to publish the Image Library as an npm module.