<template>
  <div class="user">
    <el-table :data="tableData">
      <el-table-column prop="firstName" label="firstName" width="140"></el-table-column>
      <el-table-column prop="lastName" label="lastName" width="120"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
    </el-table>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    tableData: state => state.users
  }),
  
  created() {
    this.getUser();
  },

  methods: {
    ...mapActions([ 'getUser' ])
  }
};
</script>