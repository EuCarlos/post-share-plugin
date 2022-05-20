const THEME_SCHEME = document.getElementById('theme-form').value
const LANG_CHOICE = document.getElementById('lang-form').value
const SHOULD_DISPLAY_CODE_TO_HTML = `<script src="${location.href}src/post-share-plugin.min.js" theme="${THEME_SCHEME}" lang="${LANG_CHOICE}"></script>
`
const SHOULD_GET_ID_TEXTAREA = document.getElementById('result-form')

SHOULD_GET_ID_TEXTAREA.innerText = SHOULD_DISPLAY_CODE_TO_HTML

var select_theme = document.getElementById('theme-form');
var select_lang = document.getElementById('lang-form');

select_theme.addEventListener('change', onChangeStates);
select_lang.addEventListener('change', onChangeStates);

function onChangeStates () {
    let theme = document.getElementById('theme-form').value,
    lang = document.getElementById('lang-form').value,
    theme_id = document.getElementById("plugin-container-wrapper")
    

    let code_to_html = `<script src="${location.href}src/post-share-plugin.min.js" theme="${theme}" lang="${lang}"></script>
    `
    let id_textarea = document.getElementById('result-form')

    id_textarea.innerText = code_to_html

    theme_id.setAttribute('data-theme', theme)
}

function copyTextToClipboard () {
    let text = document.getElementById('result-form').innerText
    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(text);
    
    } else {
        document.execCommand('copy', true, text);
    
    }
}