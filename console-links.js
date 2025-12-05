// Script per Instagram: raccoglie tutti i link dei post e reel presenti nella pagina
// e li stampa in console, uno per riga. Utile per copiare rapidamente i link.
(() => {
    const links = [];
    document.querySelectorAll('a[href]').forEach(a => {
        const h = a.getAttribute('href');
        if (h.startsWith('/p/') || h.startsWith('/reel/')) {
            links.push('https://www.instagram.com' + h);
        }
    });
    console.log(links.join('\n'));
})();
