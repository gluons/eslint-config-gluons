<template lang="pug">
#rules
	section.section: .container
		.columns.is-centered
			.column.is-three-fifths
				#wip-box.box: .content.has-text-centered
					p.is-size-3-desktop.is-size-5-touch #[b-icon#wip-icon(icon='hourglass-start', custom-class='fa-spin')] Work in Progress
</template>

<script>
export default {
	name: 'Rules'
};
</script>

<style lang="scss" scoped>
#wip-box {
	padding: 15%;

	@media all and (max-width: 768px) {
		padding: 10%;
	}
}
#wip-icon {
	color: blueviolet;
	margin-right: .7em;
}
</style>
