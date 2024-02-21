<template>
  <div>

  </div>
</template>

<script >

  import axios from 'axios'

  export default {
  mounted () {
    axios({
      method:"get",
      url:"api/blueberrypai/getChengpinDetails.php"
    }).then(res=>{
      console.log(res.data);
    })
  }
  }
</script>
