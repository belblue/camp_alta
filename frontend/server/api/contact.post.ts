export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const backendUrl = config.apiBackendUrl

  try {
    const body = await readBody(event)

    const formData = new FormData()
    formData.append('name', body.name)
    formData.append('email', body.email)
    formData.append('message', body.message)
    formData.append('recaptchaToken', body.recaptchaToken)

    const response = await $fetch(`${backendUrl}/submit_form/`, {
      method: 'POST',
      body: formData
    })

    return response
  } catch (error: any) {
    if (error.message?.includes('ECONNREFUSED') || error.message?.includes('fetch failed')) {
      throw createError({
        statusCode: 503,
        statusMessage: 'Backend service unavailable'
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    })
  }
})
