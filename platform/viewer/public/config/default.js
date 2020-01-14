/* eslint-disable prettier/prettier */
const request = new XMLHttpRequest();

request.open(
  'GET',
  document.location.protocol + '//' + document.location.host + '/config',
  false
);
request.send(null);

var config = null;
const defaultConfig = {
  // default: '/'
  routerBasename: '/',
  whiteLabelling: {},
  extensions: [],
  showStudyList: false,
  showLogo: false,
  showOptions: false,
  showMeasurementsPanel: false,
  show2DMPRCommand: false,
  filterQueryParam: false,
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot:
          'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot:
          'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot:
          'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
      },
    ],
  },
  // Extensions should be able to suggest default values for these?
  // Or we can require that these be explicitly set
  hotkeys: [
    // ~ Global
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Image Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Image Viewport',
      keys: ['left'],
    },
    // Supported Keys: https://craig.is/killing/mice
    // ~ Cornerstone Extension
    {
      commandName: 'rotateViewportCW',
      label: 'Rotate Right',
      keys: ['r'],
    },
    {
      commandName: 'rotateViewportCCW',
      label: 'Rotate Left',
      keys: ['l'],
    },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    {
      commandName: 'fitViewportToWindow',
      label: 'Zoom to Fit',
      keys: ['='],
    },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    // clearAnnotations
    { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
    {
      commandName: 'previousImage',
      label: 'Previous Image',
      keys: ['up'],
    },
    // firstImage
    // lastImage
    {
      commandName: 'nextViewportDisplaySet',
      label: 'Previous Series',
      keys: ['pagedown'],
    },
    {
      commandName: 'previousViewportDisplaySet',
      label: 'Next Series',
      keys: ['pageup'],
    },
    // ~ Cornerstone Tools
    { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
  ],
  cornerstoneExtensionConfig: {},
};

if (request.status === 200) {
  try {
    config = JSON.parse(request.responseText);
  }
  catch (e) {
    config = defaultConfig;
  }
  finally {
    window.config = config;
  }
}
else {
  window.config = defaultConfig;
}
