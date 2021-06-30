<template>
	<div class="grid min-h-screen place-items-center ">
		<div
			class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg rounded-xl"
		>
			<h1 class="text-xl font-semibold">
				Signup
				<span class="font-normal">and procced for Registration</span>
			</h1>
			<hr class="mb-7 mt-2" />
			<form class="" onsubmit="return false" autocomplete="off">
				<div class="my-4">
					<label
						for="username"
						class="block text-xs font-semibold text-gray-600 uppercase"
						>Username</label
					>
					<input
						id="username"
						type="text"
						name="username"
						v-model="user.username"
						placeholder="sumeetdamse"
						autocomplete="given-name"
						class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner"
						required
					/>
				</div>
				<div class="my-4">
					<label
						for="email"
						class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>E-mail</label
					>
					<input
						id="email"
						type="email"
						name="email"
						v-model="user.email"
						placeholder="sumeet.damse@email.com"
						autocomplete="email"
						class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner"
						required
					/>
				</div>
				<div class="my-4">
					<label
						for="password"
						class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>Password</label
					>
					<input
						id="password"
						type="password"
						name="password"
						v-model="user.password"
						placeholder="********"
						autocomplete="new-password"
						class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner"
						required
					/>
				</div>
				<div class="mt-4">
					<label
						for="password-confirm"
						class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>Confirm password</label
					>
					<input
						id="password-confirm"
						type="password"
						name="password-confirm"
						v-model="passwordc"
						placeholder="********"
						autocomplete="new-password"
						class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner"
						required
					/>
				</div>
				<button
					type="submit"
					class="rounded w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-pink-500 shadow-lg focus:outline-none hover:bg-pink-600 hover:shadow-none"
					@click="signup"
				>
					Sign up
				</button>
				<g-link to="/login/">
					<p
						class="flex justify-between inline-block mt-4 text-xs text-gray-1000 cursor-pointer hover:text-black"
					>
						Already have an Account?
					</p></g-link
				>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			user: {
				email: "",
				username: "",
				password: "",
			},
		};
	},
	methods: {
		signup() {
			let reqObj = {
				username: this.user.username,
				email: this.user.email,
				password: this.user.password,
			};

			this.$store
				.dispatch("register", reqObj)
				.then(() => this.$router.push("/login"))
				.catch((err) => console.log(err));
		},
	},
};
</script>

<style></style>
