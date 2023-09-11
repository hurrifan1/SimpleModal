// @ts-nocheck
import { useLayout, useElement, useEffect, useConstraints } from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';
import ext from './ext';
import { toggleModal, updateStyles } from './modal';
import './modal.css';

/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/libraries-and-tools/nebulajs/in-qlik-sense
 */
export default function supernova(galaxy) {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext(galaxy),
    component() {
      const constraints = useConstraints();
      const layout = useLayout();
      console.log("#### Layout:", layout);

      const element = useElement();
      const button_el = `
      <div class="simplemodal-toggle-button" id="ext-simplemodal-toggle-button">
        <p class="simplemodal-toggle-button-text">${layout.refButtonLabel}</p>
      </div>
      `;
      const modal_el = `
      <div class="simplemodal-body" id="ext-simplemodal-body">
        <div class="simplemodal-background-blur" id="ext-simplemodal-blur">
          <div class="simplemodal-obj">
            <h1 class="simplemodal-title">${layout.refModalTitle}</h1>
            <div class="simplemodal-body-content">${layout.refModalBody}</div>
            <div class="simplemodal-inner-button" id="ext-simplemodal-inner-button">
              <p class="simplemodal-inner-button-text">Close</p>
            </div>
          </div>
        </div>
      </div>
      `;

      element.innerHTML = button_el;

      // ==== SET THE MODAL BUTTON STYLES
      updateStyles(
        {
          backgroundColor: layout.refBackgroundColor == "pick" ? layout.refBackgroundColorPicker?.color : layout.refBackgroundColorExpression,
          fontSize: layout.refButtonFontSize,
          borderColor: layout.refBorderToggle
            ? (layout.refBorderColor == "pick" ? layout.refBorderColorPicker?.color : layout.refBorderColorExpression)
            : "",
          borderStyle: layout.refBorderToggle ? "solid" : "",
          borderRadius: layout.refBorderToggle ? layout.refBorderCornerRadius : "",
          borderWidth: layout.refBorderToggle ? layout.refBorderWidth : "",
        }
        , element.querySelector(":scope #ext-simplemodal-toggle-button")
      );

      useEffect(() => {
        // ===============================================
        // ==== BELOW THIS IS THE NON-EDIT-MODE STUFF ====
        // ===============================================

        if (constraints.active) {
          return undefined;
        }

        const listener = (e) => {
          console.log(">>>> Element click event:", e);

          // ==== MODAL TOGGLE BUTTON ONCLICK
          if (e.target.className === "simplemodal-toggle-button" || e.target.parentNode.className === "simplemodal-toggle-button") {
            toggleModal(modal_el, layout);
          }

        };

        element.addEventListener("click", listener);

        return () => {
          element.removeEventListener("click", listener);
        };
      }, [element, layout, constraints])


    },
  };
}
