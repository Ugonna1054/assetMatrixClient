<template>
  <div class="container">
    {{ msg }}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus
    saepe mollitia corporis? Tempora ea labore optio assumenda voluptatem
    tenetur earum neque officiis, commodi, culpa illum iste facilis consequuntur
    minima!
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String
    }
  }
};
</script>

<style></style>
