import { defineStore } from 'pinia'
import {getData} from '../Services/Get/getData'

export const useIndexStore = defineStore('index',{
  state: () => ({
    loading:true,
    loadingAProduct:true,
    loadingCategoryProducts:true,
    product:null,
    products:[],
    categoryProducts:[],
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
        if(product.category==="men's clothing"){
          this.mens.push(product)
        }else if(product.category === "women's clothing"){
          this.womens.push(product)
        }else if(product.category ==="jewelery"){
          this.jewelery.push(product)
        }else if(product.category  ==="electronics"){
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
          this.getProductsByCateogries(this.product.category);
        }else{

        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    getProductsByCateogries(category){
      getData(`/products/?limit=20&category=${category}`)
      .then(result=>{
        if(result.status=200){
          this.loadingCategoryProducts = false;
          let products = result.data.products;
          products.forEach(product=>{
            if(product._id !== this.product._id){
              this.categoryProducts.push(product);
            }
          })
        }else{

        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
});

