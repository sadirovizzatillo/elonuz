function $pushQuery(queryName, queryValue) {
  this.$router.push({
    ...this.$route,
    query: { ...this.$route.query, [queryName]: queryValue },
  })
}

export { $pushQuery }
