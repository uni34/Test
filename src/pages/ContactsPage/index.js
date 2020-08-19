import ContactRow from '../../components/SingleContactComponent/index.vue'
import EditForm from '../../components/EditForm/index.vue'
import AddForm from '../../components/AddForm/index.vue'

export default {
    name: "ContactsPage",
    data() {
        return{
            currId: 0,
            adding: false,
            data: '',
            contacts: [
                {
                    name: 'Кристина',
                    phone: '+79530202432'
                },
                {
                    name: 'Ирина Викторовна',
                    phone: '+79536730217'
                },
                {
                    name: 'Иван сантехника',
                    phone: '+79273860404'
                },
                {
                    name: 'Глеб',
                    phone: '+79279023746'
                },
                {
                    name: 'Босс',
                    phone: '+79874569029'
                },
                {
                    name: 'Тренер',
                    phone: '89361293489'
                }
            ]
        }
    },
    components:{
        ContactRow,
        EditForm,
        AddForm
    },
    methods:{
        addContact(phone, name){
            this.contacts.push({name, phone})
        },
        deleteContact(id) {
            this.contacts = this.contacts.filter(item => id !== this.contacts.indexOf(item))
        },
        search(){
            for(let index in this.contacts){
                document.getElementsByClassName('contactRows')[index].style.background = '#2D2D42'
            }
            for(let index in this.contacts){
                let ifThisName = this.contacts[index].name.indexOf(this.data)
                let ifThisPhone = this.contacts[index].phone.indexOf(this.data)
                if((ifThisName!=-1)||(ifThisPhone!=-1)){
                    document.getElementsByClassName('contactRows')[index].style.background = '#EDAF1F'
                }
            }

        }
    }
}