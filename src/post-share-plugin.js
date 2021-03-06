const 
    theme = document.currentScript.getAttribute('theme') || 'light',
    lang = document.currentScript.getAttribute('lang') || 'pt_br',
    host = window.location.href,
    share_plugin = document.createElement('div'),
    styles = document.createElement('style')

const locales = [
    {
        lang: 'cn',
        h1: '与您的朋友分享这篇文章',
        title_whatsapp: '单击此处在 WhatsApp 上分享',
        title_facebook: '单击此处在 Facebook 上分享',
        title_twitter:  '单击此处在 Twitter 上分享',
        title_linkedin: '单击此处在 LinkedIn 上分享',
        title_email:    '点击这里通过电子邮件分享'
    },
    {
        lang: 'de',
        h1: 'Teile diesen Beitrag mit deinen Freunden',
        title_whatsapp: 'Klicken Sie hier, um auf WhatsApp zu teilen',
        title_facebook: 'Klicken Sie hier, um auf Facebook zu teilen',
        title_twitter:  'Klicken Sie hier, um auf Twitter zu teilen',
        title_linkedin: 'Klicken Sie hier, um auf LinkedIn zu teilen',
        title_email:    'Klicken Sie hier, um per E-Mail zu teilen'
    },
    {
        lang: 'en',
        h1: 'Share this post with your friends',
        title_whatsapp: 'Click to share on WhatsApp',
        title_facebook: 'Click to share on Facebook',
        title_twitter:  'Click to share on Twitter',
        title_linkedin: 'Click to share on LinkedIn',
        title_email:    'Click to share on Email'
    },
    {
        lang: 'es',
        h1: 'Comparte esta publicación con tus amigos',
        title_whatsapp: 'Haz clic para compartir en WhatsApp',
        title_facebook: 'Haz clic para compartir en Facebook',
        title_twitter:  'Haz clic para compartir en Twitter',
        title_linkedin: 'Haz clic para compartir en LinkedIn',
        title_email:    'Haz clic para compartir en Email'
    },
    {
        lang: 'fr',
        h1: 'Partagez cet article avec vos amis',
        title_whatsapp: 'Cliquez ici pour partager sur WhatsApp',
        title_facebook: 'Cliquez ici pour partager sur Facebook',
        title_twitter:  'Cliquez ici pour partager sur Twitter',
        title_linkedin: 'Cliquez ici pour partager sur LinkedIn',
        title_email:    'Cliquez ici pour partager par E-mail'
    },
    {
        lang: 'it',
        h1: 'Condividi questo articolo con i tuoi amici',
        title_whatsapp: 'Clicca qui per condividere su WhatsApp',
        title_facebook: 'Clicca qui per condividere su Facebook',
        title_twitter:  'Clicca qui per condividere su Twitter',
        title_linkedin: 'Clicca qui per condividere su LinkedIn',
        title_email:    'Clicca qui per condividere via e-mail'
    },
    {
        lang: 'ja',
        h1: 'この記事を友達と共有する',
        title_whatsapp: 'WhatsAppで共有するにはクリックしてください',
        title_facebook: 'Facebookで共有するにはクリックしてください',
        title_twitter:  'Twitterで共有するにはクリックしてください',
        title_linkedin: 'LinkedInで共有するにはクリックしてください',
        title_email:    'メールで共有するにはクリックしてください'
    },
    {
        lang: 'pt_br',
        h1: 'Compartilhe essa postagem com seus amigos',
        title_whatsapp: 'Clique para compartilhar no WhatsApp',
        title_facebook: 'Clique para compartilhar no Facebook',
        title_twitter:  'Clique para compartilhar no Twitter',
        title_linkedin: 'Clique para compartilhar no LinkedIn',
        title_email:    'Clique para compartilhar no E-mail'
    },
    {
        lang: 'ru',
        h1: 'Поделитесь этой статьей с друзьями',
        title_whatsapp: 'Нажмите, чтобы поделиться в WhatsApp',
        title_facebook: 'Нажмите, чтобы поделиться на Facebook',
        title_twitter:  'Нажмите, чтобы поделиться в Твиттере',
        title_linkedin: 'Нажмите, чтобы поделиться в LinkedIn',
        title_email:    'Нажмите, чтобы поделиться по электронной почте'
    }
]
const index = locales.findIndex(i => i.lang === lang)

share_plugin.innerHTML = `
    <div id="content-share-plugin">
        <h1>${locales[index].h1}</h1>
        <div id="share-icon">
            <a href="https://api.whatsapp.com/send?text=${host}" id="whatsapp" title="${locales[index].title_whatsapp}" target="_blank">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="#123456" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5986 3.17871C16.5527 1.12793 13.8281 0 10.9326 0C4.95605 0 0.0927734 4.86328 0.0927734 10.8398C0.0927734 12.749 0.59082 14.6143 1.53809 16.2598L0 21.875L5.74707 20.3662C7.3291 21.2305 9.11133 21.6846 10.9277 21.6846H10.9326C16.9043 21.6846 21.875 16.8213 21.875 10.8447C21.875 7.94922 20.6445 5.22949 18.5986 3.17871V3.17871ZM10.9326 19.8584C9.31152 19.8584 7.72461 19.4238 6.34277 18.6035L6.01562 18.4082L2.60742 19.3018L3.51562 15.9766L3.30078 15.6348C2.39746 14.1992 1.92383 12.5439 1.92383 10.8398C1.92383 5.87402 5.9668 1.83105 10.9375 1.83105C13.3447 1.83105 15.6055 2.76855 17.3047 4.47266C19.0039 6.17676 20.0488 8.4375 20.0439 10.8447C20.0439 15.8154 15.8984 19.8584 10.9326 19.8584V19.8584ZM15.874 13.1104C15.6055 12.9736 14.2725 12.3193 14.0234 12.2314C13.7744 12.1387 13.5938 12.0947 13.4131 12.3682C13.2324 12.6416 12.7148 13.2471 12.5537 13.4326C12.3975 13.6133 12.2363 13.6377 11.9678 13.501C10.376 12.7051 9.33105 12.0801 8.28125 10.2783C8.00293 9.7998 8.55957 9.83398 9.07715 8.79883C9.16504 8.61816 9.12109 8.46191 9.05273 8.3252C8.98437 8.18848 8.44238 6.85547 8.21777 6.31348C7.99805 5.78613 7.77344 5.85938 7.60742 5.84961C7.45117 5.83984 7.27051 5.83984 7.08984 5.83984C6.90918 5.83984 6.61621 5.9082 6.36719 6.17676C6.11816 6.4502 5.41992 7.10449 5.41992 8.4375C5.41992 9.77051 6.3916 11.0596 6.52344 11.2402C6.66016 11.4209 8.43262 14.1553 11.1523 15.332C12.8711 16.0742 13.5449 16.1377 14.4043 16.0107C14.9268 15.9326 16.0059 15.3564 16.2305 14.7217C16.4551 14.0869 16.4551 13.5449 16.3867 13.4326C16.3232 13.3105 16.1426 13.2422 15.874 13.1104Z" fill="black"/>
                </svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${host}" id="facebook" title="${locales[index].title_facebook}" target="_blank">
                <svg width="14" height="25" viewBox="0 0 14 25" fill="#123456" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5122 14.0625L13.2065 9.53809H8.86523V6.60205C8.86523 5.36426 9.47168 4.15771 11.416 4.15771H13.3896V0.305664C13.3896 0.305664 11.5986 0 9.88623 0C6.31104 0 3.97412 2.16699 3.97412 6.08984V9.53809H0V14.0625H3.97412V25H8.86523V14.0625H12.5122Z" fill="black"/>
                </svg>
            </a>
            <a href="https://twitter.com/intent/tweet?url=${host}&text=" id="twitter" title="${locales[index].title_twitter}" target="_blank">
                <svg width="25" height="21" viewBox="0 0 25 21" fill="#123456" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5 17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451 18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834 15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048 3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544 1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115 7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068 1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303 5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0 20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302 0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799 2.80771 24.9999 2.41118C24.3021 3.42637 23.4295 4.33052 22.4302 5.06025V5.06025Z" fill="black"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${host}" id="linkedin" title="${locales[index].title_linkedin}" target="_blank">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="#123456" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.89648 21.8745H0.361328V7.27002H4.89648V21.8745ZM2.62646 5.27783C1.17627 5.27783 0 4.07666 0 2.62646C1.03799e-08 1.92988 0.276716 1.26183 0.769274 0.769274C1.26183 0.276716 1.92988 0 2.62646 0C3.32305 0 3.9911 0.276716 4.48366 0.769274C4.97621 1.26183 5.25293 1.92988 5.25293 2.62646C5.25293 4.07666 4.07617 5.27783 2.62646 5.27783ZM21.8701 21.8745H17.3447V14.7651C17.3447 13.0708 17.3105 10.8979 14.9868 10.8979C12.6289 10.8979 12.2676 12.7388 12.2676 14.6431V21.8745H7.73731V7.27002H12.0869V9.26221H12.1504C12.7559 8.11475 14.2349 6.90381 16.4414 6.90381C21.0313 6.90381 21.875 9.92627 21.875 13.8521V21.8745H21.8701Z" fill="black"/>
                </svg>
            </a>
            <a href="mailto:info@example.com?&subject=&cc=&bcc=&body=${host}%0A" id="email" title="${locales[index].title_email}" target="_blank">
                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5264 6.19141C24.7168 6.04004 25 6.18164 25 6.4209V16.4062C25 17.7002 23.9502 18.75 22.6562 18.75H2.34375C1.0498 18.75 0 17.7002 0 16.4062V6.42578C0 6.18164 0.27832 6.04492 0.473633 6.19629C1.56738 7.0459 3.01758 8.125 7.99805 11.7432C9.02832 12.4951 10.7666 14.0771 12.5 14.0674C14.2432 14.082 16.0156 12.4658 17.0068 11.7432C21.9873 8.125 23.4326 7.04102 24.5264 6.19141ZM12.5 12.5C13.6328 12.5195 15.2637 11.0742 16.084 10.4785C22.5635 5.77637 23.0566 5.36621 24.5508 4.19434C24.834 3.97461 25 3.63281 25 3.27148V2.34375C25 1.0498 23.9502 0 22.6562 0H2.34375C1.0498 0 0 1.0498 0 2.34375V3.27148C0 3.63281 0.166016 3.96973 0.449219 4.19434C1.94336 5.36133 2.43652 5.77637 8.91602 10.4785C9.73633 11.0742 11.3672 12.5195 12.5 12.5Z" fill="black"/>
                </svg>
            </a>
        </div>
    </div>
`

styles.innerHTML = `
/* Configurações padrão */

#plugin-container-wrapper {
    position: fixed;
    bottom: 1rem;
    right: 1.5rem;
}

#plugin-container-wrapper #content-share-plugin {
    background: #f2eeee;
    border: solid 2px #c4acac;
    border-radius: 7px;
    
    width: 20rem;
    padding: 1rem;
}
  
#plugin-container-wrapper #content-share-plugin h1 {
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #5b4a4a;
}
  
#plugin-container-wrapper #content-share-plugin #share-icon a {
  display: inline-block;
  background: #d9d4d4;
  padding: .5rem .6rem;
  border-radius: 40px;
  color: #5b4a4a;
  
  transition: all .7s;
}

#plugin-container-wrapper #content-share-plugin #share-icon svg { width: 15px; height: 15px; }
/* #plugin-container-wrapper #content-share-plugin #share-icon a svg path { fill: #5b4a4a; } */

#plugin-container-wrapper #content-share-plugin #share-icon a:hover > svg path { fill: #fff; }
#plugin-container-wrapper #content-share-plugin #share-icon a#whatsapp:hover { background: #00e676; }

#plugin-container-wrapper #content-share-plugin #share-icon a#facebook:hover { background: #1877f2; }
  
#plugin-container-wrapper #content-share-plugin #share-icon a#instagram:hover { background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
  
#plugin-container-wrapper #content-share-plugin #share-icon a#twitter:hover { background: #1d9bf0; }

#plugin-container-wrapper #content-share-plugin #share-icon a#linkedin:hover { background: #0a66c2; }

#plugin-container-wrapper #content-share-plugin #share-icon a#email:hover { background: #ee6c4d; }

/* Light mode - default */
#plugin-container-wrapper[data-theme="light"] #content-share-plugin { background: #f2eeee; border: solid 1px #c4acac; }
#plugin-container-wrapper[data-theme="light"] #content-share-plugin h1 { color: #5b4a4a; }
#plugin-container-wrapper[data-theme="light"] #content-share-plugin #share-icon a { background: #d9d4d4; color: #5b4a4a; }
#plugin-container-wrapper[data-theme="light"] #content-share-plugin svg path { fill: #5b4a4a; }
#plugin-container-wrapper[data-theme="light"] #content-share-plugin a:hover > svg path { fill: #fff; }

/* Dark mode - default */
#plugin-container-wrapper[data-theme="dark"] #content-share-plugin { background: #121212; border: solid 1px #1e1e1e; }
#plugin-container-wrapper[data-theme="dark"] #content-share-plugin h1 { color: #f2f2f2; }
#plugin-container-wrapper[data-theme="dark"] #content-share-plugin #share-icon a { background: #1e1e1e; color: #f2f2f2; }
#plugin-container-wrapper[data-theme="dark"] #content-share-plugin svg path { fill: #d96a6a; }
#plugin-container-wrapper[data-theme="dark"] #content-share-plugin a:hover > svg path { fill: #fff; }

/* Light mode - cream */
#plugin-container-wrapper[data-theme="light-cream"] #content-share-plugin { background: #d6cfcb; border: solid 1px #565264; }
#plugin-container-wrapper[data-theme="light-cream"] #content-share-plugin h1 { color: #565264; }
#plugin-container-wrapper[data-theme="light-cream"] #content-share-plugin #share-icon a { background: #ccb7ae; color: #565264; }
#plugin-container-wrapper[data-theme="light-cream"] #content-share-plugin svg path { fill: #565264; }
#plugin-container-wrapper[data-theme="light-cream"] #content-share-plugin a:hover > svg path { fill: #fff; }

/* Dark mode - dracula */
#plugin-container-wrapper[data-theme="dracula"] #content-share-plugin { background: #282a36; border: solid 1px #d468a8; }
#plugin-container-wrapper[data-theme="dracula"] #content-share-plugin h1 { color: #f8f8f2; }
#plugin-container-wrapper[data-theme="dracula"] #content-share-plugin #share-icon a { background: #44475a; color: #fff; }
#plugin-container-wrapper[data-theme="dracula"] #content-share-plugin a svg path { fill: #d468a8; }
#plugin-container-wrapper[data-theme="dracula"] #content-share-plugin a:hover > svg path { fill: #fff; }

/* Light mode - sakura */
#plugin-container-wrapper[data-theme="light-sakura"] #content-share-plugin { background: #FFC8DD; border: solid 1px #A2D2FF; }
#plugin-container-wrapper[data-theme="light-sakura"] #content-share-plugin h1 { color: #9b7cad; }
#plugin-container-wrapper[data-theme="light-sakura"] #content-share-plugin #share-icon a { background: #A2D2FF; color: #fff; }
#plugin-container-wrapper[data-theme="light-sakura"] #content-share-plugin svg path { fill: #fff; }
#plugin-container-wrapper[data-theme="light-sakura"] #content-share-plugin a:hover > svg path { fill: #fff; }

/* Dark mode - AdventureTime */
#plugin-container-wrapper[data-theme="adventure-time"] #content-share-plugin { background: #1f1d45; border: solid 1px #4ab118; }
#plugin-container-wrapper[data-theme="adventure-time"] #content-share-plugin h1 { color: #f8dcc0; }
#plugin-container-wrapper[data-theme="adventure-time"] #content-share-plugin #share-icon a { background: #4ab118; color: #5b4a4a; }
#plugin-container-wrapper[data-theme="adventure-time"] #content-share-plugin svg path { fill: #f8dcc0; }
#plugin-container-wrapper[data-theme="adventure-time"] #content-share-plugin a:hover > svg path { fill: #fff; }
`
document.head.appendChild(styles)
document.body.appendChild(share_plugin)
share_plugin.setAttribute('id', 'plugin-container-wrapper')
share_plugin.setAttribute('data-theme', theme)