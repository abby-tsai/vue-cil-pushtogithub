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
  props: ['id'],
  created () {
    // const seed = this.$route.params
    console.log(this.id) // 為什麼 id 和上一章節的一樣，可是回傳的內容卻不同？
    const seed = this.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then(res => {
      console.log(res)
      this.dataMail = res.data.results[0].email
    })
  }
}
</script>
