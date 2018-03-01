import axios from 'axios';

const languageSelector = (lang)=> {
    const languages = {
        es: "http://localhost:3000/i18n/es.json",
        en: "http://localhost:3000/i18n/en.json",
        default: "http://localhost:3000/i18n/en.json"
    }
    const url = languages[lang] || languages.default;

    return axios.get(url).then((res)=>{
        const json = res.data;
        return (key)=> json[key] || json["not.found"]
    });
}

export default languageSelector;
