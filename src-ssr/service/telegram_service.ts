import TelegramBot from 'node-telegram-bot-api'

const telegramBot = new TelegramBot("5613249605:AAEGalNnATNDw9Jfds5YLNZN7Y3g9kwOnc8")

interface MessageOptions {
  company: string
  fio: string
  position: string
  phone: string
  contact: string
  message: string
}

const keys = [
  'company',
  'fio',
  'position',
  'phone',
  'contact',
  'message'
]


export function newMessageOptions(body: any): MessageOptions | undefined {

  if (!body || typeof body != 'object' || keys.some(key => !body[key])) {
    return undefined
  }

  return {
    company: body.company,
    fio: body.fio,
    position: body.position,
    phone: body.phone,
    contact: body.contact,
    message: body.message,
  }

}

export function sendMessage(messageOptions: MessageOptions) {
  try {
    telegramBot.sendMessage(-634159650, `
Компания:   ${messageOptions.company}

ФИО:   ${messageOptions.fio}

Должность:   ${messageOptions.position}

Телефон:   ${messageOptions.phone}

Почта:  ${messageOptions.contact}

Сообщение:  ${messageOptions.message} \n
    `)
  } catch (e) {

  }
}
