class Nav {
    constructor() {
        this.link = document.querySelectorAll('.js-link');
        this.nav = document.querySelector('.js-nav-phone');
        this.activeLink = this.link[0];
        this.init();
    }

    init() {
        this.link.forEach(e => {
            e.addEventListener('click', event => {
                const { target } = event;
                this.activeLink.classList.remove('nav-link--active');
                this.activeLink = target;
                target.classList.add('nav-link--active');
                app.page.handlerPage(target.dataset.page);
            })
        })
        this.nav.addEventListener('click', () => {
            app.burger.switch();
        })
    }
}


class Burger {

    constructor() {
        this.burgerComponent = document.querySelector('.js-burger');
        this.navPhone = document.querySelector('.js-nav-phone');
        this.init();
    }

    init() {
        this.burgerComponent.addEventListener('click', () => {
            this.switch();
        })
    }

    switch() {
        this.navPhone.classList.toggle('nav-active');
        this.burgerComponent.classList.toggle('burger--active');
    }
}

class Language {
    constructor() {
        this.ruText = document.querySelectorAll('.js-ru');
        this.enText = document.querySelectorAll('.js-en');
        this.toggle = document.querySelector('.js-toggler-lang');
        this.lang = 'ru';
        this.init();
    }

    init() {
        this.toggle.addEventListener('click', () => {
            this.lang === 'ru' ? this.lang = 'en' : this.lang = 'ru';
            this.switch();
        })
    }

    switch() {
        this.toggle.classList.toggle('nav-link-toggler--active');
        if (this.lang === 'ru') {
            this.remove(this.ruText);
            this.add(this.enText);
        } else {
            this.remove(this.enText);
            this.add(this.ruText);
        }
    }

    remove(list) {
        list.forEach(element => {
            element.classList.remove('hidden');
        })
    }

    add(list) {
        list.forEach(element => {
            element.classList.add('hidden');
        })
    }
}

class Page {
    constructor() {
        this.pages = document.querySelectorAll('.js-page');
    }

    handlerPage(page) {
        console.log(page);
        this.pages.forEach(element => {
            console.log(element.dataset.page);
            if (element.dataset.page === page) element.classList.remove('hidden--page');
            else element.classList.add('hidden--page')
        });
    }
}



const app = {
    nav: new Nav(),
    burger: new Burger(),
    leng: new Language(),
    page: new Page(),
}