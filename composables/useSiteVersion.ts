export default function () {
  const { public: { siteVersion } } = useRuntimeConfig()

  return siteVersion
}
