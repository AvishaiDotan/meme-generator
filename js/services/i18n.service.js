'use strict'

let gCurrLang = 'en'
const gTrans = {
    'meme_generator': {
        en: 'Meme Generator',
        he: 'יוצר ממים - בטא'
    },
    'saved': {
        en: 'Saved',
        he: 'נשמרו'
    },
    'editor': {
        en: 'Editor',
        he: 'עורך'
    },
    'about': {
        en: 'About',
        he: 'על'
    },
    'random_meme': {
        en: 'Random Meme',
        he: 'מם רנדומאלי'
    },
    'select_font': {
        en: 'Select Font',
        he: 'בחר פונט'
    },
    'delete': {
        en: 'Delete',
        he: 'מחק'
    },
    'save': {
        en: 'Save',
        he: 'שמור'
    },
    'contact_me': {
        en: 'Contact Me',
        he: 'צור עימי קשר'
    },
    'avishai_dotan': {
        en: 'Avishai Dotan',
        he: 'אבישי דותן'
    },
    'lorem10': {
        en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, hic.',
        he: 'אני ציפור בר חופשיה רוצה לגעת בשמים עוף גוזל רק אל תשכח יש נשר בשמים.'
    },
    'lorem5': {
        en: 'Lorem ipsum dolor sit',
        he: 'לורם האיפסום דולורס ישבה'
    },
    'download': {
        en: 'Download',
        he: 'טען למטה'
    },
    'search_for_meme': {
        en: 'Search For Meme',
        he: 'חפש תמם'
    },
    'enter_meme_line': {
        en: 'Enter Your Meme lIne',
        he: 'כתוב תשורה המצחיקה'
    },
    
}



function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'

    let trans = transMap[gCurrLang]
    if (!trans) trans = transMap.en
    return trans
}

function doTrans() {
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const trans = getTrans(transKey)
        el.innerText = trans
        if (el.placeholder) el.placeholder = trans
    })
}

function changeDisplayDirection() {
    const direction = (gCurrLang === 'en') ? 'ltr' : 'rtl'
    document.body.style.direction = direction
}



function setLang(lang) {
    gCurrLang = lang
}

function getDirection() {
    return (gCurrLang === 'en') ? 'ltr' : 'rtl'
}
