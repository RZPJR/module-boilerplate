<template>
    <v-container fill-height class="main-container">
        <div class="box-start">
            <v-row class="-mb38">
                <v-col cols="12" md="3">
                    <SelectGlossary
                        :dense="true"
                        @selected="AppsSelected"
                        label="Application"
                        table="all"
                        attribute="application"
                        :norequired="true"
                        data-unq="application-select-glossary"
                    ></SelectGlossary>
                </v-col>
            </v-row>
        </div>
        <div class="box-table">
            <v-data-table
                :headers="application_list.table_header"
                :items="application_list.data"
                :loading="application_list.isLoading"
                :items-per-page="10"
            >
                <template v-slot:item="props">
                    <tr style="height:48px">
                        <td :data-unq="`application-value-application-${props.index}`">
                            <div v-if="props.item.application == 1">{{ 'Dino' }}</div>
                            <div v-else-if="props.item.application == 2">{{ 'Orca' }}</div>
                            <div v-else-if="props.item.application == 3">{{ 'Mantis' }}</div>
                            <div v-else-if="props.item.application == 4">{{ 'Beaver' }}</div>
                            <div v-else-if="props.item.application == 0">{{ 'All' }}</div>
                            <div v-else>{{ 'All' }}</div>
                        </td>
                        <td :data-unq="`application-value-field-${props.index}`">{{ props.item.field }}</td>
                        <td :data-unq="`application-value-attribute-${props.index}`">{{ props.item.attribute }}</td>
                        <td :data-unq="`application-value-value-${props.index}`">{{ props.item.value }}</td>
                        <td>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on: menu }">
                                    <v-btn
                                        icon
                                        v-on="{ ...menu }"
                                        :data-unq="`application-button-action-${props.index}`"
                                    ><v-icon dark>more_vert</v-icon></v-btn>
                                </template>
                                <v-list class="bg-white">
                                    <v-list-item 
                                        :to="`/configuration/application/update/${props.item.id}`" 
                                        v-privilege="'app_upd'"
                                        :data-unq="`application-button-update-${props.index}`"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>Update</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon>open_in_new</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    export default {
        name: "ConfigurationApplication",
        created() {
            // To ensure vuex is clean when page is loaded
            this.$store.commit("setDefaultApplicationListFilter")
            this.fetchApplicationList()
        },
        computed:{
            ...mapState({
                application_list: state => state.application.application_list,
            }),
        },
        methods: {
            ...mapActions([
                "fetchApplicationList"
            ]),
            ...mapMutations([
                "setApplicationListFilter",
                "setDefaultApplicationListFilter",
            ]),
            AppsSelected(d) {
                // Use this to update certain value by key inside "Filter" object without creating multiple mutation
                this.$store.commit("setApplicationListFilter", {
                    ...this.application_list.filter,
                    glossary: '',
                })
                if (d !== null && d !== undefined) {
                    this.$store.commit("setApplicationListFilter", {
                        ...this.application_list.filter,
                        glossary: d.value,
                    })
                }
                this.fetchApplicationList()
            },
        },
    }
</script>