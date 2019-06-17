<template>
  <div>apa ini sih kok nggk bisa</div>
</template>


<page-query>
query Job ($path: String!) {
  job: job (path: $path) {
    title
    content
  }
}
</page-query>