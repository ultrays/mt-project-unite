<template>
    <div class="list">
      <Selector></Selector>
      <ListItem :items="data"></ListItem>
      <Page></Page>
    </div>
</template>

<script>
    import Selector from './ktvListSelector'
    import ListItem from './ktvListItem'
    import Page from './ktvListPage'
    export default {
      name: "ktvListMain",
      components:{
        Selector,
        ListItem,
        Page
      },
      props:{
        data:{}
      }
    }
</script>

<style scoped>

</style>
