export default function () {
  const { public: { siteTitle } } = useRuntimeConfig()

  return siteTitle
}
