export interface State {
  lang: LangReducer;
}

interface LangReducer {
  lang: "ru" | "en" | "fr";
}
