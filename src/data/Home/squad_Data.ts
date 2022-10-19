import dauren from 'src/assets/intra/Personals/dauren.jpg'
import aleksandr from  'src/assets/intra/Personals/aleksandr.jpg'
import jamol from  'src/assets/intra/Personals/jamol.jpg'
import shuxrat from 'src/assets/intra/Personals/shuxrat.jpg'
import ozod from 'src/assets/intra/Personals/ozodbek.jpg'
import mirali from 'src/assets/intra/Personals/mirali.jpg'
import shoxrux from 'src/assets/intra/Personals/shoxrux.jpg'

interface Squad {
  img: any,
  name: string,
  position: string,
  job: string,
  mail: string,
  contact: string
}

export const squadList: Squad[] = [
  {
    img: dauren,
    name: 'Илесалиев Дауренбек Ихтиярович',
    position: 'Директор НИЦ ЛУТС',
    job: 'д.т.н., и.о. профессор ',
    mail: 'ilesaliev@mail.ru',
    contact: '+(99899) 806-41-99'
  },
  {
    img: aleksandr,
    name: 'Светашев Александр Александрович ',
    position: 'Заместитель директора по общим вопросам ',
    job: 'к.т.н., доцент  ',
    mail: 'Aleksandr-svetashev@bk.ru',
    contact:'+(99890) 992-77-03'
  },
  {
    img: shuxrat,
    name: 'Саидивалиев Шухрат Умарходжаевич',
    position: 'Заместитель директора по общим вопросам ',
    job: 'к.т.н., доцент  ',
    mail: 'Aleksandr-svetashev@bk.ru',
    contact:'+(99890) 992-77-03'
  },
  {
    img: jamol,
    name: 'Шихназаров Жамол Алишерович',
    position: 'Главный специалист',
    job: 'ассистент',
    mail: 'jamol.alisherovich@mail.ru',
    contact:'+(99897) 780-61-33'
  },
  {
    img: shoxrux,
    name: 'Камалетдинов Шахрух Шухратович',
    position: 'Заместитель директора по науке',
    job: 'PhD, и.о. доцент',
    mail: 'shaxr2107@gmail.com',
    contact:'+(99893) 583-45-69'
  },
  {
    img: mirali,
    name: 'Дехконов Мирали Мирхон угли',
    position: 'Ведущий специалист',
    job: 'ассистент',
    mail: 'mirali.dehqonov@gmail.com',
    contact:'+(99890) 992-77-03'
  },
  {
    img: ozod,
    name: 'Абдурахимов Озодбек Уткир угли',
    position: 'Специалист по ИТ технологиям',
    job: 'ассистент',
    mail: 'Aleksandr-svetashev@bk.ru',
    contact:'+(99890) 992-77-03'
  },


]
