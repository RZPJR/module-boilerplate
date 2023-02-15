const mutations = {
  // #region Readlist Application
    setApplicationList: function(state, payload) {
      state.application_list.data = payload;
      return state;
    },
    setPreloadApplicationList: function(state, payload) {
      state.application_list.isLoading = payload;
      return state;
    },
    setApplicationListFilter: function(state, payload){
      state.application_list.filter = payload;
      return state;
    },
    setDefaultApplicationListFilter: function(state, payload){
      state.application_list.filter = {
        glossary: '',
      };
      return state;
    },
    // #endregion Readlist Application

    // #region Update Application
    setUpdateApplicationForm: function(state, payload){
      state.update_application.form = payload
      return state;
    },
    setDefaultUpdateApplicationForm: function(state, payload){
      state.update_application.form = {
          value: '',
      }
      return state;
    },
    setUpdateApplicationError: function(state, payload){
      state.update_application.error = payload
      return state;
    }
    // #endregion Update Application
};

export default mutations;
