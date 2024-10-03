<template>
	<div grid h-screen place-content-center>
		<SvgoLogo :font-controlled="false" mx-auto mb-5 h-14 w-14 text-green />
		<Test />

		<div flex flex-col items-center justify-between p-24>
			<p text-responsive-9xl>
				Text 9xl
			</p>
			<p text-responsive-8xl>
				Text 8xl
			</p>
			<p text-responsive-7xl>
				Text 7xl
			</p>
			<p text-responsive-6xl>
				Text 6xl
			</p>
			<p text-responsive-5xl>
				Text 5xl
			</p>
			<p text-responsive-4xl>
				Text 4xl
			</p>
			<p text-responsive-3xl>
				Text 3xl
			</p>
			<p text-responsive-2xl>
				Text 2xl
			</p>
			<p text-responsive-xl>
				Text xl
			</p>
			<p text-responsive-lg>
				Text lg
			</p>
			<p text-responsive-base>
				Text base
			</p>
			<p text-responsive-sm>
				Text sm
			</p>
			<p text-responsive-xs>
				Text xs
			</p>
			<p text-responsive-xxs>
				Text xxs
			</p>
		</div>
	</div>
</template>
