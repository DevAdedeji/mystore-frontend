import { defineStore } from 'pinia'
import {getData} from '../Services/Get/getData'

export const useIndexStore = defineStore('index',{
  state: () => ({
    loading:true,
    loadingAProduct:true,
    product:null,
    products:[],
    mens:[],
    womens:[],
    jewelery:[],
    electronics:[],
    others:[],
  }),

  getters: {
    
  },

  actions: {
    getProducts(){
      getData('/products/?limit=20')
      .then(result=>{
        if(result.status=200){
          this.loading = false;
          this.products = result.data.products;
          this.sortProducts()
        }else{

        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    sortProducts(){
      this.products.forEach(product=>{
        if(product.categories.includes("men's clothing")){
          this.mens.push(product)
        }else if(product.categories.includes("women's clothing")){
          this.womens.push(product)
        }else if(product.categories.includes("jewelery")){
          this.jewelery.push(product)
        }else if(product.categories.includes("electronics")){
          this.electronics.push(product)
        }else{
          this.others.push(product)
        }
      })
      
    },
    getAProduct(slug){
      getData(`/products/${slug}`)
      .then(result=>{
        if(result.status=200){
          this.loadingAProduct = false;     
          this.product = result.data.product;
        }else{

        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
});

