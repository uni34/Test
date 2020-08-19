import ErrorMessage from '../ErrorMessageComponent/index.vue'

export default {
    name: "addContact",
    components: {
        ErrorMessage
    },
    data() {
        return {
            closed: false,
            contactsName: '',
            contactsPhone: '',
            error_name: [],
            error_phone: [],
        }
    },
    methods: {
        saveContact(e) {
            if (this.contactsName && this.contactsPhone && ((this.contactsPhone.length==12 && this.contactsPhone[0]=='+')
                ||(this.contactsPhone.length==11&&this.contactsPhone[0]!='+'))) {
                this.$emit('add', this.contactsPhone, this.contactsName)
                this.$emit('close')
                return true
            }
            this.error_name = []
            this.error_phone = []
            if (!this.contactsName) {
                this.error_name.push('*Обязательное поле');
            }
            if (!this.contactsPhone) {
                this.error_phone.push('*Обязательное поле');
            }else{
                if((this.contactsPhone.length!=12 && this.contactsPhone[0]=='+')||(this.contactsPhone.length==11&&this.contactsPhone[0]=='+')
                    ||(this.contactsPhone.length!=11&&this.contactsPhone[0]!='+')){
                    this.error_phone.push('*Неверный формат номера');
                }
            }


            e.preventDefault();
        },
    },
    mounted() {
    },
}