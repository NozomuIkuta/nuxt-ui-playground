export default function () {
  const { public: { siteCopyright } } = useRuntimeConfig()

  return siteCopyright
}
