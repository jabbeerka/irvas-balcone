import './slider';
import modals from './modals';
import tabs from './tabs';
import forms from './forms';


document.addEventListener("DOMContentLoaded", ()=> {
    'use-strict';
    modals();
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
    forms();
});