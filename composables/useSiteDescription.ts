export default function () {
  const { public: { siteDescription } } = useRuntimeConfig()

  return siteDescription
}
