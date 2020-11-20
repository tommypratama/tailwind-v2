<template>
  <div
    class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
  >
    <h1 class="sr-only">Nuxt + Tailwind CSS Typography</h1>
    <div class="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
      <header class="flex justify-between items-center">
        <div v-if="this.$colorMode.preference == 'dark'" class="text-2xl md:text-3xl font-bold">Dark mode</div>
        <div v-else class="text-2xl md:text-3xl font-bold">Light mode</div>

        <div class="ml-10 md:mr-10">
          <button
            @click="setCurrentTheme"
            type="button"
            class="focus:outline-none"
          >
            <icon-sun-off
              v-if="$colorMode.value === 'light'"
              class="h-10 text-gray-700"
            />
            <icon-sun
              v-if="$colorMode.value === 'dark'"
              class="h-10 text-teal-500"
            />
          </button>
        </div>
      </header>

      <article>
        <NuxtContent
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto dark:text-white"
          :document="document"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const document = await $content('hello').fetch()

    return { document }
  },
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style>
.nuxt-content blockquote {
  @apply dark:text-white;
}

.nuxt-content p code {
  @apply dark:text-pink-300;
}

.nuxt-content p a {
  @apply dark:text-gray-50;
}

.nuxt-content h2,
h3,
h4 {
  @apply dark:text-gray-50;
}

.nuxt-content strong {
  @apply dark:text-gray-50;
}

.nuxt-content h2 code {
  @apply dark:text-pink-300;
}

.nuxt-content h3 code {
  @apply dark:text-pink-300;
}

.nuxt-content h4 code {
  @apply dark:text-pink-300;
}

.lead {
  @apply dark:text-gray-300;
}
</style>
