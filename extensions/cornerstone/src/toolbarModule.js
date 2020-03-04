// TODO: A way to add Icons that don't already exist?
// - Register them and add
// - Include SVG Source/Inline?
// - By URL, or own component?

// What KINDS of toolbar buttons do we have...
// - One's that dispatch commands
// - One's that set tool's active
// - More custom, like CINE
//    - Built in for one's like this, or custom components?

// Visible?
// Disabled?
// Based on contexts or misc. criteria?
//  -- ACTIVE_ROUTE::VIEWER
//  -- ACTIVE_VIEWPORT::CORNERSTONE
// setToolActive commands should receive the button event that triggered
// so we can do the "bind to this button" magic

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

const TOOLBAR_BUTTON_BEHAVIORS = {
  CINE: 'CINE',
  DOWNLOAD_SCREEN_SHOT: 'DOWNLOAD_SCREEN_SHOT',
};

/* TODO: Export enums through a extension manager. */
const enums = {
  TOOLBAR_BUTTON_TYPES,
  TOOLBAR_BUTTON_BEHAVIORS,
};

const definitions = [
  {
    id: 'StackScroll',
    label: 'Stack Scroll',
    icon: 'bars',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'StackScroll' },
  },
  {
    id: 'Zoom',
    label: 'Zoom',
    icon: 'search-plus',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Zoom' },
  },
  {
    id: 'Pan',
    label: 'Pan',
    icon: 'arrows',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Pan' },
  },
  {
    id: 'Windowing',
    label: 'Windowing',
    icon: 'level',
    //
    buttons: [
      {
        id: 'Wwwc',
        label: 'Levels',
        icon: 'level',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Wwwc' },
      },
      {
        id: 'WwwcRegion',
        label: 'ROI Window',
        icon: 'stop',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'WwwcRegion' },
      },
      {
        id: 'Invert',
        label: 'Invert',
        icon: 'adjust',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'invertViewport',
      },
    ],
  },
  {
    id: 'PredefinedWindowing',
    label: 'Predefined Windowing',
    icon: 'level',
    modalities: ['CT'],
    //
    buttons: [
      {
        id: 'HeadNeckWindowing',
        label: 'Head and neck',
        icon: 'level',
        //
        buttons: [
          {
            id: 'BrainWindowing',
            label: 'Brain',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setBrainWindowing',
          },
          {
            id: 'SubduralWindowing',
            label: 'Subdural',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setSubduralWindowing',
          },
          {
            id: 'StrokeWindowing',
            label: 'Stroke',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setStrokeWindowing',
          },
          {
            id: 'TemporalBoneWindowing',
            label: 'Temporal bone',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setTemporalBoneWindowing',
          },
          {
            id: 'SoftTissuesWindowing',
            label: 'Soft tissues',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setSoftTissuesWindowing',
          },
        ],
      },
      {
        id: 'ChestWindowing',
        label: 'Chest',
        icon: 'level',
        //
        buttons: [
          {
            id: 'LungsWindowing',
            label: 'Lungs',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setLungsWindowing',
          },
          {
            id: 'MediastinumWindowing',
            label: 'Mediastinum',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setMediastinumWindowing',
          },
        ],
      },
      {
        id: 'AbdomenWindowing',
        label: 'Abdomen',
        icon: 'level',
        //
        buttons: [
          {
            id: 'AbdomenSoftTissuesWindowing',
            label: 'Soft tissues',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setAbdomenSoftTissuesWindowing',
          },
          {
            id: 'LiverWindowing',
            label: 'Liver',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setLiverWindowing',
          },
        ],
      },
      {
        id: 'SpineWindowing',
        label: 'Spine',
        icon: 'level',
        //
        buttons: [
          {
            id: 'SpineSoftTissuesWindowing',
            label: 'Soft tissues',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setSpineSoftTissuesWindowing',
          },
          {
            id: 'BoneWindowing',
            label: 'Bone',
            icon: 'level',
            //
            type: TOOLBAR_BUTTON_TYPES.COMMAND,
            commandName: 'setBoneWindowing',
          },
        ],
      },
    ],
  },
  {
    id: 'Measurements',
    label: 'Measurements',
    icon: 'measure-temp',
    //
    buttons: [
      {
        id: 'EllipticalRoi',
        label: 'Ellipse',
        icon: 'circle-o',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'EllipticalRoi' },
      },
      {
        id: 'DragProbe',
        label: 'Probe',
        icon: 'dot-circle',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'DragProbe' },
      },
      {
        id: 'Length',
        label: 'Length',
        icon: 'measure-temp',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Length' },
      },
      {
        id: 'Bidirectional',
        label: 'Bidirectional',
        icon: 'measure-target',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Bidirectional' },
      },
      {
        id: 'Angle',
        label: 'Angle',
        icon: 'angle-left',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Angle' },
      },
      {
        id: 'ArrowAnnotate',
        label: 'Annotate',
        icon: 'measure-non-target',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'ArrowAnnotate' },
      },
      {
        id: 'Eraser',
        label: 'Eraser',
        icon: 'eraser',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Eraser' },
      },
      {
        id: 'Clear',
        label: 'Clear',
        icon: 'trash',
        displayed: false,
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'clearAnnotations',
      },
    ],
  },
  {
    id: 'More',
    label: 'More',
    icon: 'ellipse-circle',
    buttons: [
      {
        id: 'Cine',
        label: 'CINE',
        icon: 'youtube',
        //
        type: TOOLBAR_BUTTON_TYPES.BUILT_IN,
        options: {
          behavior: TOOLBAR_BUTTON_BEHAVIORS.CINE,
        },
      },
      {
        id: 'Magnify',
        label: 'Magnify',
        icon: 'circle',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Magnify' },
      },
      {
        id: 'RotateRight',
        label: 'Rotate Right',
        icon: 'rotate-right',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'rotateViewportCW',
      },
      {
        id: 'FlipH',
        label: 'Flip H',
        icon: 'ellipse-h',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'flipViewportHorizontal',
      },
      {
        id: 'FlipV',
        label: 'Flip V',
        icon: 'ellipse-v',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'flipViewportVertical',
      },
    ],
  },
  {
    id: 'Reset',
    label: 'Reset',
    icon: 'reset',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'resetViewport',
  },
  {
    id: 'Download',
    label: 'Download',
    icon: 'create-screen-capture',
    //
    type: TOOLBAR_BUTTON_TYPES.BUILT_IN,
    options: {
      behavior: TOOLBAR_BUTTON_BEHAVIORS.DOWNLOAD_SCREEN_SHOT,
      togglable: true,
    },
  },
  {
    id: 'Exit2DMPR',
    label: 'Exit 2D MPR',
    icon: 'times',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'setCornerstoneLayout',
    context: 'ACTIVE_VIEWPORT::VTK',
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
