import { Modal } from 'iview'

export const ShowError = res => {
  let content = `<div style="overflow: auto;max-height: 500px;">`
  content += `<p>${res.data.ExceptionMessage}</p>`
  let es = res.data.StackTrace.split('\r\n')
  es.forEach(element => {
    content += `<p>${element}</p>`
  })
  content += `</div>`
  Modal.error({
    title: '服务器异常',
    content: content,
    width: 1200,
    scrollable: true
  })
}
