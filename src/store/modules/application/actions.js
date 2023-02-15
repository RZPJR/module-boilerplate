import http from "../../../services/http";

const actions = {
    // GET Application list
    fetchApplicationList: async ({ state, commit, dispatch }, payload) => {
        commit("setPreloadApplicationList", true)
        commit("setApplicationList", [])
        try {
            let filter = state.application_list.filter
            let glossary = filter.glossary
            const response = await http.get('/app', {params: {
                per_page:100,
                application: glossary
            }});
            commit("setApplicationList", response.data.data)
            if(response.data.data == null){
                commit("setApplicationList", [])
            }
            commit("setPreloadApplicationList", false)
        } catch (error) {
            console.log(error)
            commit("setPreloadApplicationList", false)
        }
    },

    // GET Application Detail
    fetchUpdateApplicationDetail: async ({ state, commit, dispatch}, payload) => {        
        commit("setUpdateApplicationForm", [])
        try {
            const response = await http.get("/app/"+payload.id)
            if(response.data.data) {
                let items = response.data.data
                commit("setUpdateApplicationForm",{
                    application: items.application,
                    field: items.field,
                    value: items.value,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default actions;

