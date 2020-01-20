<template>
  <vc-donut
    :sections="sections"
    background="white"
    foreground="lightgrey"
    :size="200"
    unit="px"
    :thickness="30"
    has-legend
    legend-placement="top"
    :total="100"
    :start-angle="20"
    >{{sections[0].value}}%</vc-donut
  >
</template>
<script>
export default {
  name: "chart",
  data() {
    return {
      sections: [ { label: 'Chart', value: 25, color: 'salmon' }]
    };
  }
};
</script>
