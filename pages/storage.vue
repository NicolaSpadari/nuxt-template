<template>
	<div grid grid-cols-2 m-10 gap-8>
		<ul v-if="data?.length" space-y-3>
			<li v-for="item in data" :key="item.id" space-x-3>
				<span font-bold>{{ item.name }}</span>

				<button type="button" @click="selectedItem = item">
					edit
				</button>
				<button type="button" @click="del(item.id)">
					delete
				</button>
			</li>
		</ul>
		<div v-if="selectedItem">
			<div flex flex-col gap-5>
				<div flex gap-4>
					<input v-model="selectedItem.name" type="text" border placeholder="name">
					<input v-model="selectedItem.value" type="text" border placeholder="value">
				</div>
				<div flex gap-4>
					<button type="button" @click="selectedItem = null">
						cancel
					</button>
					<button type="button" @click="edit(selectedItem.id)">
						save
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { neonClient } = useNeon();
	const data = ref<NeonObject[]>([]);
	const selectedItem = ref<NeonObject | null>(null);

	definePageMeta({
		title: "Storage"
	});

	const getData = async () => {
		data.value = await neonClient("SELECT * FROM demo ORDER BY id") as NeonObject[];
	};

	await getData();

	const edit = async (id: number) => {
		await neonClient(`UPDATE demo SET name = '${selectedItem.value!.name}', value = '${selectedItem.value!.value}' WHERE id = ${id}`);
	};
	const del = async (id: number) => {
		await neonClient(`DELETE FROM demo WHERE id = ${id}`);
		await getData();
	};
</script>
