<template>
	<section class="text-gray-600 body-font">
		<div
			class="
					container
					mx-auto
					flex
					px-5
					py-24
					items-center
					justify-center
					flex-col
				"
		>
			<img
				class="
						lg:w-2/6
						md:w-3/6
						w-5/6
						mb-10
						object-cover object-center
						rounded
					"
				alt="Hero Image"
				src="../../static/love.svg"
			/>
			<div class="text-center lg:w-2/3 w-full">
				<h1
					class="
							title-font
							sm:text-4xl
							text-3xl
							mb-4
							font-medium
							text-gray-900
						"
				>
					Welcome to Adim Matrimony
				</h1>
				<p class="mb-8 leading-relaxed text-center">
					A Digital place where you will find the Best Life-Partner
					for your Life. A better and Safe way to find your Soulmate
					online in the Community. So, why should wait. Click the
					Register Button and Join us to start the Search for your
					Life-Partner.
				</p>
				<div class="flex justify-center">
					<g-link to="/signup/">
						<button
							class="
								inline-flex
								text-white
								bg-pink-500
								border-0
								py-2
								px-6
								focus:outline-none
								hover:bg-pink-600
								rounded
								text-lg
							"
						>
							{{signupText}}
						</button>
					</g-link>
					<g-link to="/contact/">
						<button
							class="
								ml-4
								inline-flex
								text-gray-700
								bg-gray-200
								border-0
								py-2
								px-6
								focus:outline-none
								hover:bg-gray-300
								rounded
								text-lg
							"
						>
							Contact Us
						</button>
					</g-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			signupText: "Signup",
			registerText: "Register",
		};
	},
};
</script>

<style></style>
