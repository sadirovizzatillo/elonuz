function $deleteQuery(queryName) {
  const query = { ...this.$route.query }
  delete query[queryName]
  this.$router.push({ ...this.$route, query: { ...query } })
}

export { $deleteQuery }
