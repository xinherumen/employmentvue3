<template>
  <div>
    你好世界
  </div>
</template>

<script >

import axios from 'axios'

export default {
  mounted () {
    axios({
      method: 'get',
      url: 'api/blueberrypai/getChengpinDetails.php'
    }).then(res => {
      console.log(res.data)
    })
  }
}
</script>
