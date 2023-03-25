
console.log("#### Live from the `modal.js` file!");

/**
 * @param {object} new_styles_dict
 * @param {object} element_to_update
 */
export function updateStyles(new_styles_dict, element_to_update) {
    for (let x in new_styles_dict) {
        console.log(x);
        element_to_update.style[x] = new_styles_dict[x];
    }
}

/**
 * @param {string} el_text
 * @param {object} layout_obj
 */
export function toggleModal(el_text, layout_obj) {
    let c = document.getElementById('simplemodal-container');
    console.log(">>>> MODAL CONTAINER:", c);
    if (c) {
        c.remove();
    }
    else {
        let mc = document.createElement('div');
        mc.id = 'simplemodal-container';
        mc.innerHTML = el_text;
        document.body.insertAdjacentElement('beforeend', mc);

        // ==== MODAL BACKGROUND BLUR ONCLICK
        console.log(">>>> PASSED LAYOUT:", layout_obj);
        if (layout_obj.refBlurCloseOnClick) {
            console.log(">>>> WE'RE DOING CLOSE-ON-CLICK FOR THE BLUR!");
            mc.querySelector(":scope #ext-simplemodal-blur")
                ?.addEventListener('click', modalCloseListeners);
        }

        // ==== MODAL INNER BUTTON ONCLICK
        mc.querySelector(":scope #ext-simplemodal-inner-button")
            ?.addEventListener('click', closeModal);
    }
}

/**
 * @param {object} ev
 */
function modalCloseListeners(ev) {
    // ==== MODAL BACKGROUND BLUR ONCLICK
    if (ev.target.className === "simplemodal-background-blur") {
        console.log(">>>> YOU JUST CLICKED THE BACKGROUND BLUR", ev);
        closeModal();
    }
}

function closeModal() {
    document.getElementById('simplemodal-container')?.remove();
}