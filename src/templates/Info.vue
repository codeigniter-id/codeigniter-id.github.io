<template>
  <div>apa ini sih kok nggk bisa</div>
</template>


<page-query>
query Info ($path: String!) {
  info: info (path: $path) {
    title
    content
    category
    published
  }
}
</page-query>