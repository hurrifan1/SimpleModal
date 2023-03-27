export default function ext(/* galaxy */) {
  return {
    support: {
      snapshot: false,
      export: true,
      sharing: false,
      exportData: true,
      viewData: true,
    },
    definition: {
      type: "items",
      component: "accordion",
      items: {
        appearancePanel: {
          type: "items",
          uses: "settings",
          items: {
            ModalOptionsProp: {
              label: "Modal Settings",
              type: "items",
              items: {
                ModalTitleProp: {
                  ref: "refModalTitle",
                  type: "string",
                  label: "Modal Title",
                  expression: "optional",
                  defaultValue: "I am a modal title"
                },
                ModalBodyProp: {
                  ref: "refModalBody",
                  type: "string",
                  label: "Modal Body",
                  expression: "optional",
                  defaultValue: "I am a modal body!<br><br>Things are getting <b><i>wild</i></b> in here!"
                },
                BlurCloseOnClickProp: {
                  ref: "refBlurCloseOnClick",
                  type: "boolean",
                  component: "switch",
                  label: "Click outside to close",
                  options: [{
                    value: true,
                    label: "On"
                  }, {
                    value: false,
                    label: "Off"
                  }],
                  defaultValue: true
                },
              },
            },
            ButtonOptionsProp: {
              label: "Button Settings",
              type: "items",
              items: {
                ButtonLabelProp: {
                  ref: "refButtonLabel",
                  type: "string",
                  label: "Button Label",
                  expression: "optional",
                  defaultValue: "Click me you dog"
                },
                ButtonFontSizeProp: {
                  ref: "refButtonFontSize",
                  type: "string",
                  label: "Button Font Size",
                  expression: "optional",
                  defaultValue: "2em"
                },
              },
            },
            BackgroundOptionsProp: {
              label: "Button Background",
              type: "items",
              items: {
                BackgroundColorProp: {
                  ref: "refBackgroundColor",
                  type: "string",
                  component: "dropdown",
                  label: "Background color",
                  options: [{
                    value: "pick",
                    label: "Single color"
                  }, {
                    value: "expr",
                    label: "By expression"
                  }],
                  defaultValue: "pick",
                },
                BackgroundColorPickerProp: {
                  ref: "refBackgroundColorPicker",
                  type: "object",
                  component: "color-picker",
                  defaultValue: {
                    color: "ff5866",
                    index: "-1",
                  },
                  show: lyt => lyt.refBackgroundColor == "pick",
                },
                BackgroundColorExpressionProp: {
                  ref: "refBackgroundColorExpression",
                  type: "string",
                  expression: "optional",
                  defaultValue: "",
                  show: lyt => lyt.refBackgroundColor == "expr",
                },
              },
            },
            BorderOptionsProp: {
              label: "Button Border",
              type: "items",
              items: {
                BorderToggleProp: {
                  ref: "refBorderToggle",
                  type: "boolean",
                  component: "switch",
                  label: "Show border",
                  options: [{
                    value: true,
                    label: "On"
                  }, {
                    value: false,
                    label: "Off"
                  }],
                  defaultValue: false
                },
                BorderCornerRadiusProp: {
                  ref: "refBorderCornerRadius",
                  type: "string",
                  label: "Corner radius",
                  expression: "optional",
                  defaultValue: "4px",
                  show: lyt => lyt.refBorderToggle,
                },
                BorderWidthProp: {
                  ref: "refBorderWidth",
                  type: "string",
                  label: "Border width",
                  expression: "optional",
                  defaultValue: "3px",
                  show: lyt => lyt.refBorderToggle,
                },
                BorderColorProp: {
                  ref: "refBorderColor",
                  type: "string",
                  component: "dropdown",
                  label: "Border color",
                  options: [{
                    value: "pick",
                    label: "Single color"
                  }, {
                    value: "expr",
                    label: "By expression"
                  }],
                  defaultValue: "pick",
                  show: lyt => lyt.refBorderToggle,
                },
                BorderColorPickerProp: {
                  ref: "refBorderColorPicker",
                  type: "object",
                  component: "color-picker",
                  defaultValue: {
                    color: "ff5866",
                    index: "-1",
                  },
                  show: lyt => lyt.refBorderToggle && lyt.refBorderColor == "pick",
                },
                BorderColorExpressionProp: {
                  ref: "refBorderColorExpression",
                  type: "string",
                  expression: "optional",
                  defaultValue: "",
                  show: lyt => lyt.refBorderToggle && lyt.refBorderColor == "expr",
                },
              },
            },
          }
        }
      }
    },
  }
}