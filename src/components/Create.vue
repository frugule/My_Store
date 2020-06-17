<template>
    <div class="hero">
      <!--Formulario-->
      <div class="column is-half is-offset-one-quarter">
        <div class="container py-5">
          <div class="title is-1">
            <h1>Agregar Productos</h1>
          </div>
          <div class="container py-3">
            <input class="input is-primary" type="text" v-model="name" placeholder="Ingrese el Producto">
          </div>
          <div class="container py-3">
            <input class="input is-warning" prefix="$" v-model="price" placeholder="Ingre el Valor">
          </div>
          <div class="container py-3">
            <input class="input is-danger" type="text" v-model="picture" placeholder="Ingrese el URL de la Imagen">
          </div>
          
        </div>

        <div class="columns pb-4">
          <div class="px-3">
            <button class="button is-info" @click="createProduct">Añadir</button>
          </div>
          <div class="px-3">
            <button class="button is-warning" v-if="edit" @click="updateProduct(id)">Actualizar</button>
          </div>
        </div>
      </div>
      <div class="container">
        <table class="table">
           <thead>
            <tr>
              <th>Nombre Producto</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th colspan="2" class="action">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in computedProductList" :key="p.id"> 
              <td>{{ p.data.name }}</td>
              <td>{{ p.data.price }}</td>
              <td>{{ p.data.picture.substring(0,50) }}</td>
              <td>
                <button class="button is-primary is-light" @click="editProduct(p.id)">Editar</button>
                <!-- @click="editItem(p['.key'])"  -->
                <div class="is-clearfix"></div>
              </td>
              <td>
                <button class="button is-danger is-light" @click="deleteProduct(p.id)">Borrar</button>
                  <!-- @click="deleteItem(p['.key'])" -->
                <div class="is-clearfix"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div>
</template>

<script>

import axios from 'axios'
import {mapState, mapActions} from 'vuex'

export default {
    data(){
        return{
            name: '',
            picture: '',
            price: '',
            id: undefined
        }

    },
    methods: {
       ...mapActions(['updateEdit']),
      createProduct(){
        let lapa = {
          name: this.name,
          picture: this.picture,
          price: this.price
        }
        console.log(lapa)
        axios.post('https://us-central1-tddg3-8aad7.cloudfunctions.net/products/product', lapa, {headers:{'content-type':'application/json'}})
        .then((response) => {
          console.log(response);
          this.$store.dispatch('getProducts')
         // this.$router.push('/home')
          
        }).catch(function(error) {
           console.log(error);
         });
      },
      deleteProduct(id){
        let confirmation = confirm('¿Esta seguro?')
        if (confirmation){
          axios.delete(`https://us-central1-tddg3-8aad7.cloudfunctions.net/products/product/${id}`, {headers:{'content-type':'aplication/json'}} )
          .then(() => {
            alert('Producto Eliminado Exitosamente')
            this.$store.dispatch('getProducts')
          })

        }
      },
      editProduct(id){
        this.updateEdit()
        this.findProduct(id)
      },
      findProduct(id){
        axios.get(`https://us-central1-tddg3-8aad7.cloudfunctions.net/products/product/${id}`, {headers:{'content-type':'application/json'}})
        .then((response)=>{
          this.name = response.data.name
          this.picture = response.data.picture
          this.price = response.data.price
          this.id = id
        })
      },
      updateProduct(id){
        let result = {
          name: this.name,
          picture: this.picture,
          price: this.price
        }
        axios.put(`https://us-central1-tddg3-8aad7.cloudfunctions.net/products/product/${id}`, result, {headers: {'Content-type':'application/json'}})
        .then(() => {
          this.name = ''
          this.price = ''
          this.picture = ''
          this.id = ''
          this.$store.dispatch('getProducts')
        }).catch((error) => {
           console.log(error);
        });
      }


    },
    
    computed: {
      ...mapState(['products', 'edit']),
      computedProductList(){
        return this.products 
      }
    },
    mounted() {
      this.$store.dispatch('getProducts')
    },
    //prueba
    

}
</script>

