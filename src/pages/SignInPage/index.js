import ErrorMessage from '../../components/ErrorMessageComponent/index.vue'

export default {
    name: "SignInPage",
    data() {
        return{
            nonEye: false,
            type: 'password',
            pass: null,
            name: null,
            error_name: [],
            error_pass: []
        }
    },
    components:{
        ErrorMessage
    },
    methods: {
        hide(){
            if (!this.nonEye){
                this.nonEye = true;
                this.type = 'text';
            }
            else{
                this.nonEye = false;
                this.type = 'password';
            }
        },
        checkForm(e) {
            if (this.name && this.pass && this.pass=='test' && this.name=='test') {
                this.$router.push({
                    name: 'contacts'
                })
                return true;
            }
            this.error_name = [];
            this.error_pass = [];

            if (!this.name) {
                this.error_name.push('*Обязательное поле');
            }else {
                if (this.name!='test'){
                    this.error_name.push('*Неверное имя пользователя')
                }
            }
            if (!this.pass) {
                this.error_pass.push('*Обязательное поле');
            }else {
                if (this.pass!='test'){
                    this.error_pass.push('*Неверный пароль')
                }
            }
            e.preventDefault();
        }
    },

}