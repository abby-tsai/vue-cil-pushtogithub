<template>
  <div>
    {{ dataMail }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataMail: ''
    }
  },
  created () {
    console.log(this.$route.params)
    const seed = this.$route.params
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then(res => {
      console.log(res)
      this.dataMail = res.data.results[0].email
    })
  }
}
</script>
