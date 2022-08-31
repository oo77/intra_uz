import TelegramBot from "node-telegram-bot-api";

const telegramBot = new TelegramBot(
  "5613249605:AAEGalNnATNDw9Jfds5YLNZN7Y3g9kwOnc8"
);

interface MessageOptions {
  company: string;
  fio: string;
  position: string;
  phone: string;
  contact: string;
  message: string;
  country: string;
}

const keys = ["fio", "phone", "message", "country"];

const none = "Неизвестно";

export function newMessageOptions(body: any): MessageOptions | undefined {
  if (!body || typeof body != "object" || keys.some((key) => !body[key])) {
    return undefined;
  }

  return {
    fio: body.fio,
    phone: body.phone,
    company: body.company || none,
    position: body.position || none,
    contact: body.contact || none,
    message: body.message || none,
    country: body.country 
  };
}

export function sendMessage(messageOptions: MessageOptions) {
  try {
    telegramBot.sendMessage(
      -634159650,
      `
ФИО:   ${messageOptions.fio}

Cтрана: ${messageOptions.country}

Телефон:   ${messageOptions.phone}

Компания:   ${messageOptions.company}

Должность:   ${messageOptions.position}

Почта:  ${messageOptions.contact}

Сообщение:  ${messageOptions.message} \n
    `
    );
  } catch (e) {}
}
