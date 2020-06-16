import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'OP GG LAS'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
  it('has a defaul value for props.msg when not passed', ()=>{
    const wrapper = shallowMount(HelloWorld)
    const msg = wrapper.find('[data-testId="hello-component"]')
    expect(msg.text()).to.not.be.empty
  })
})