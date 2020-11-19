<template>
  <div class="antialiased text-gray-900">
    <header class="p-10 border-b">
      <nav class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold">The Dark Night Mode</h1>
      </nav>
    </header>

    <main
      class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
    >
      <article>
        <nuxt-content
          class="prose prose-sm sm:prose lg:prose-lg mx-auto"
          :document="article"
        />
      </article>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
}
</script>
