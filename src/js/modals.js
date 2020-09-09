const modals = () => {
    function callModal(modalSelector, triggerSelector, closeSelector) {
        const modal = document.querySelector(modalSelector),
            trigger = document.querySelectorAll(triggerSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = '';
            }
        });
    }
    function showModalByTime(selector, time) {
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
        }, time);
    }

    callModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    callModal('.popup', '.phone_link', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;