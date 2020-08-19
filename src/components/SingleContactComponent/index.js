import EditForm from '../EditForm/index.vue'

export default {
    name: "ContactRow",
    data(){
        return{
            editing: false,
            hide: false
        }
    },
    components: {
        EditForm
    },
    props: {
        Contact:{
            type:Object,
            default(){
                return{}
            }
        },
        i: Number
    },
    methods:{
        del() {
            this.$emit('delContact', this.i - 1);
        },

        editContact(phone, name){
            this.Contact.name = name
            this.Contact.phone = phone
        },
    }
}