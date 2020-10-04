const modals = () => {
    function callModal(modalSelector, triggerSelector, closeSelector, clickCloseOverlay = true) {
        const modal = document.querySelector(modalSelector),
            trigger = document.querySelectorAll(triggerSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll("[data-modal]");

        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = "none";
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = '';

            windows.forEach(item => {
                item.style.display = "none";
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && clickCloseOverlay) {
                modal.style.display = "none";
                document.body.style.overflow = '';
                windows.forEach(item => {
                    item.style.display = "none";
                });
            }
        });
    }
    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
        }, time);
    }

    callModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    callModal('.popup', '.phone_link', '.popup .popup_close');
    callModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    callModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    callModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;