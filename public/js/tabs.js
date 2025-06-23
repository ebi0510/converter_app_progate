// ここからコードを書いてください
export function setupTabs(){
    const homeLink = document.querySelector('[data-tab="home"]');
    const converterTab = document.querySelector('[data-tab="converter"]');
    const homeSec = document.getElementById('home');
    const converterSec = document.getElementById('converter');

    homeLink.addEventListener('click', () => {
            converterSec.classList.add('hidden');
            homeSec.classList.remove('hidden');
    });

    converterTab.addEventListener('click', () => {
        homeSec.classList.add('hidden');
        converterSec.classList.remove('hidden');
    });
};
