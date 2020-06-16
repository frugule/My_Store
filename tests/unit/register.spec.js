import { mount } from "@vue/test-utils";
import { expect } from "chai"
import Register from "@/components/Register"

describe('Register.vue', () => {
     //Given/Arrange (dado que existe...)
     const wrapper = mount(Register)
     let checkbox = wrapper.find('input[type="checkbox"]')
     let registerBtn = wrapper.find('button[type="submit"]')
    it ('has a disable button', () => {
        //when/act (cuando pasa ienta cosa o evento)
        checkbox.setChecked(false)
        //then/assert (enconces, pasa para cierta otra cosa)
        expect(registerBtn.classes('is-disabled')).to.be.true
    })
    it('has a button not dissable when checkbox is checked', ()=>{
        checkbox.setChecked(true)
        expect(registerBtn.classes('is-disable')).to.be.false
    })
    it('register a User', () => {
        // 0) Cargar el componente con los metodo de pueba
        let isSent =  false
        function stubMethod() {isSent = true}
        const wrapper = mount(Register, {
            methods:{
                submitForm: stubMethod
            }
            
        })
        // 1) Encontra los camposnecesario
        let userName = wrapper.find('input[type="text"]')
        let email = wrapper.find('input[type="email"]')
        let password = wrapper.find('input[type="password"]')
        let registerBtn = wrapper.find('button[type="submit"]')
        // 2) Asignar los valores a los campos
        userName.setValue('Baltazar Bratt')
        email.setValue('DanceFighr')
        password.setValue('DancFight')
        // 3) Enviar formulario
        registerBtn.trigger('click')
        // 4) Probar que se envio le registro
        expect(isSent).to.be.true
         
    })
})