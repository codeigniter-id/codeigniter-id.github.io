<template>
  <Layout>
    <h1>{{ $page.tag.title }}</h1>
    <ul>
      <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Tag($id: String!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>