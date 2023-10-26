

<template>
    <section>
        <h2>Alle stekjes</h2>
        <p>
          Heb jij een of meerdere plantenstekjes over
          en zou je die graag willen ruilen voor een 
          nieuwe plantje? Bekijk hieronder ons aanbod.
        </p>
      </section>

      <h1>{{ entry.name }}</h1>
      <p>{{ entry.description }}</p>

</template>

<script>
import getContentfulEntry from './db.js';

export default {
  data() {
    return {
      entry: null
    };
  },
  async created() {
    this.entry = await getContentfulEntry();
  }
};
</script>