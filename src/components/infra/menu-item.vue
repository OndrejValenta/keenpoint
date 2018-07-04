<template>
	<router-link :to="{ name: navigateTo}">
		<fa-icon :icon="icon" size="2x" />
	</router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop() public navigateTo!: string;
  @Prop() public icon!: string;
}
</script>

<style scoped>

</style>
