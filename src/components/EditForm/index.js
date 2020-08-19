import ErrorMessage from '../ErrorMessageComponent/index.vue'
export default {
    name: "editContact",
    props: {
        name: String,
        phone: String
    },
    components: {
        ErrorMessage
    },
    data() {
        return {
            closed: false,
            contactsName: '',
            contactsPhone: '',
            type: '',
            error_name: [],
            error_phone: [],
        }
    },
    methods: {
        saveInfo(e) {
            this.contactsPhone = document.getElementById('phone').value
            this.contactsName = document.getElementById('name').value
            if (this.contactsName && this.contactsPhone && ((this.contactsPhone.length==12 && this.contactsPhone[0]=='+')
                ||(this.contactsPhone.length==11&&this.contactsPhone[0]!='+'))) {
                this.$emit('edit', this.contactsPhone, this.contactsName)
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