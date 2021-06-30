<template>
	<Layout>
		<Hero />
		<Features />
		<Steps />
		<Whyus />
		<Cta />
	</Layout>
</template>

<script>
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import Steps from "../components/Steps.vue";
import Whyus from "../components/Whyus.vue";
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";

setTimeout(() => {
	alert("Database is not Connected so, Signup/Login will NOT Work. This is not the Final Structure, All the Images and logos will be Changed.")
}, 3000)

export default {
	metaInfo: {
		title: "Home",
	},
	components: {
		Hero,
		Features,
		Steps,
		Whyus,
		Cta,
		Footer,
	},
};
// Images Source -> https://undraw.co
// Images Color Code -> EC47CA
</script>

<style>
/* .home-links a {
	margin-right: 1rem;
} */
</style>
