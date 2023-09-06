import LanguageState from "../states/language";

const locales = {
  en: require("./en.json"),
  fa: require("./fa.json")
};

export const setLanguage = (language: string) => {
  LanguageState.setState(language);
};

export const t = (textKey: string) => {
  let language = LanguageState.getState();
  if (!Object.keys(locales).includes(language)) {
    language = "en";
  }else if (locales.en[textKey]) {
    return locales.en[textKey];
  }else if(locales.fa[textKey]){
return locales.fa[textKey];
  } else {
    return textKey;
  }
};
