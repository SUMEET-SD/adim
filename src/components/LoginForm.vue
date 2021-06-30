<template>
	<div class="grid min-h-screen place-items-center ">
		<div
			class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg rounded-xl"
		>
			<h1 class="text-xl font-semibold">
				Login
				<span class="font-normal">and Enjoy the Platform</span>
			</h1>
			<hr class="mb-7 mt-2" />
			<form class="" onsubmit="return false" autocomplete="off">
				<div class="">
					<label
						for="email"
						class=" block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>E-mail</label
					>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="sumeet.damse@email.com"
						autocomplete="email"
						class=" rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner"
						required
						v-model="user.identifier"
					/>
				</div>
				<div class="">
					<label
						for="password"
						class=" block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>Password</label
					>
					<input
						id="password"
						type="password"
						name="password"
						placeholder="********"
						autocomplete="new-password"
						class=" rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner"
						required
						v-model="user.password"
					/>
				</div>
				<button
					type="submit"
					class="rounded w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-pink-500 shadow-lg focus:outline-none hover:bg-pink-600 hover:shadow-none"
					@click="login"
				>
					Login
				</button>
				<g-link to="/signup/">
					<p
						class="flex justify-between inline-block mt-4 text-xs text-gray-1000 cursor-pointer hover:text-black"
					>
						Don't have an Account?
					</p>
				</g-link>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				identifier: "",
				password: "",
			},
		};
	},
	methods: {
		login() {
			let identifier = this.user.identifier;
			let password = this.user.password;
			console.log({ identifier, password });
			this.$store
				.dispatch("login", { identifier, password })

				.then(() => this.$router.push("/home"))
				.catch((err) => {
					this.$router.push("/");
					console.error({ err });
				});
		},
	},
};
</script>

<style></style>
