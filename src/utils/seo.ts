export const seoInfo = (data) => {
  return {
    ...data,
    title: data.title || '',
    description: data.description || '',
    keywords: data.keywords || [],
    url: data.url || '',
    sitename: data.sitename || '',
    image: data.image || '',
    v: Date.now()
  }
}