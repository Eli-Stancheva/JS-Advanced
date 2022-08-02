function lockedProfile() {
    let btns = Array.from(document.querySelectorAll('button'));

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', onClick);
    }

    function onClick(event) {
        let profile = event.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;

        if (isActive) {
            let info = Array.from(profile.querySelectorAll('div'))
                .find(p => p.id.includes('HiddenFields'));

            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else if (event.target.textContent = 'Hide it') {
                event.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}