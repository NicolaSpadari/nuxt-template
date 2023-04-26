<template>
    <v-app id="nuxtube">
        <SiteNavbar />
        <SiteSidebar />

        <v-main>
            <NuxtPage />
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
    const router = useRouter();
    const user = useCurrentUser();
    const { userChannel, getUserChannel } = useYoutube();

    onMounted(() => {
        watch(user, async (newUser, oldUser) => {
            if (oldUser && !newUser) {
                router.push("/");
            } else if (newUser) {
                await getUserChannel();
            }
        });
    });
</script>
