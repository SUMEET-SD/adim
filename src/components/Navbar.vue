<template>
	<header class="text-gray-600 body-font bg-gray-50">
		<div
			class="
					container
					mx-auto
					flex flex-wrap
					p-5
					flex-col
					md:flex-row
					items-center
				"
		>
			<a
				class="
						flex
						title-font
						font-medium
						items-center
						text-gray-900
						mb-4
						md:mb-0
					"
			>
				<g-link to="/">
					<span
						class="ml-3 text-2xl sm:subpixel-antialiased md:antialiased"
						>Adim Matrimony</span
					></g-link
				>
			</a>
			<nav
				class="
						md:ml-auto md:mr-auto
						flex flex-wrap
						items-center
						text-base
						justify-center
					"
			>
				<g-link class="mr-5 hover:text-gray-900" to="/">Home</g-link>
				<g-link class="mr-5 hover:text-gray-900" to="/about/"
					>About</g-link
				>
				<g-link class="mr-5 hover:text-gray-900" to="/contact/"
					>Contact</g-link
				>
			</nav>
			<g-link to="/signup/">
				<button
					class="
						text-pink-500
						bg-transparent
						border border-solid border-pink-500
						hover:bg-pink-500 hover:text-white
						active:bg-pink-600
						font-bold
						uppercase
						text-xs
						px-4
						py-2
						rounded-full
						outline-none
						focus:outline-none
						mr-1
						mb-1
						ease-linear
						transition-all
						duration-150
					"
					type="button"
				>
					Signup
				</button>
			</g-link>
			<g-link to="/login/">
				<button
					class="
						text-gray-600
						bg-transparent
						border border-solid border-gray-600
						hover:bg-gray-600 hover:text-white
						active:bg-gray-700
						font-bold
						uppercase
						text-xs
						px-4
						py-2
						rounded-full
						outline-none
						focus:outline-none
						mr-1
						mb-1
						ease-linear
						transition-all
						duration-150
					"
					type="button"
				>
					Login
				</button>
			</g-link>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style></style>
