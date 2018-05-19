const state = {
  languageSelected: "en-US",
  languages: [
    {
      id: "en-US",
      text: "English"
    },
    {
      id: "es-MX",
      text: "Espanol"
    }
  ]
};
const mutations = {
  SET_LANGUAGE_SELECTED(state, lang) {
    Object.assign(state, { languageSelected: lang });
  }
};
export default {
  state,
  mutations
};
