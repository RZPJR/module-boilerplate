const state = {
  // Readlist Application
  application_list: {
    isLoading: false,
    data: [],
    filter:{
      glossary: '',
    },
    table_header: [
        {
            text: 'Application',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            text: 'Field',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            text: 'Attribute',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            text: 'Value',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            width: "5%",
            sortable: false
        },
    ],
  },

  update_application:{
    form:{
        value: '',
    },
    error: [],
  }
};

export default state;
