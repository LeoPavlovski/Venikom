<template>
 <button style="background-color:black;color:white;border-radius:15px;cursor:pointer;" class="py-5"
 @click="incrementCounter"
 >
 <p>Counter : {{counter}}</p>
 </button>
</template>

<script>
export default {
  data(){
    return {
      counter:0,
    }
  },
  methods:{
    incrementCounter (){
     return this.counter++;
    }
  }
}
</script>

<style>

</style>