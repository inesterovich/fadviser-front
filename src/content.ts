
import budgettingUrl from './assets/images/budgeting.png';
import accountingUrl from './assets/images/accounting.jpg';
import loanUrl from './assets/images/loan.jpg';
import financialCapUrl from './assets/images/financialCap.jpg';
import timeMoneyUrl from './assets/images/timeMoney.jpg';
import reportUrl from './assets/images/report.jpg';

import { CardProps, LinkPropTypes, FormFieldType, ModalDataType, FormDataType, categoryOptionsType } from './types';


type CardsContentType = CardProps[];

export const cardsContent: CardsContentType = [
  {
    link: {
      text: 'Учёт финансов',
      to: '/accounts'
    },
    image: {
      src: budgettingUrl,
      alt: 'Учёт финансов'
    },
    title: 'Учёт финансов',
    text: 'Добавляйте счета, операции. Настраивайте свои категории'
  },
  {
    link: {
      text: 'Планирование бюджета',
      to: '/budget'
    },
    image: {
      src: accountingUrl,
      alt: 'Планируйте будущее'
    },
    title: 'Планируйте будущее',
    text: 'Сформируйте бюджет по системе 6 шкатулок или составьте самостоятельно'
  },
  {
    link: {
      text: 'Управление кредитами',
      to: '/debt'
    },
    image: {
      src: loanUrl,
      alt: 'Управляйте долгами'
    },
    title: 'Управляйте долгами',
    text: 'Подберите стратегию погашения или проверьте банк на честность'
  },
  {
    link: {
      text: 'Калькулятор дохода',
      to: '/income-cap'
    },
    image: {
      src: financialCapUrl,
      alt: 'Растите в деньгах'
    },
    title: 'Растите в деньгах',
    text: 'Определите ваш потенциальный уровень дохода и стремитесь к нему'
  },
  {
    link: {
      text: 'Конвертер жизни',
      to: '/money-life'
    },
    image: {
      src: timeMoneyUrl,
      alt: 'Экономьте жизнь'
    },
    title: 'Экономьте жизнь',
    text: 'Переведите ваши покупки в часы жизни и не тратьте деньги на лишнее'
  },
  {
    link: {
      text: 'Отчёты и аналитика',
      to: '/reports'
    },
    image: {
      src: reportUrl,
      alt: 'Создавайте отчёты'
    },
    title: 'Создавайте отчёты',
    text: 'Визуализируйте ваши финансы и будьте в курсе текущей ситуации'
  },

]

export const LinkConfig: LinkPropTypes[] = [
  {
    text: 'О платформе',
    to: '/',
    hash: '#about'
  },
  {
    text: 'Возможности',
    to: '/',
    hash: '#opportunities'
  },
  {
    text: 'Регистрация',
    to: '/register'
  },
  {
    text: 'Войти',
    to: '/login'
  },
  {
    text: 'Профиль',
    to: '/profile',
    isAuth: true,
  },
  {
    text: 'Выйти',
    to: '/logout',
    isAuth: true,
  },
  {
    text: 'Дашбоард',
    to: '/',
    isModule: true,
  },
  {
    text: 'Учёт финансов',
    to: '/accounts',
    isModule: true,
  },
  {
    text: 'Планирование бюджета',
    to: '/budget',
    isModule: true,
  },
  {
    text: 'Управление кредитами',
    to: '/debt',
    isModule: true,
  },
  {
    text: 'Калькулятор дохода',
    to: '/income-cap',
    isModule: true,
  },
  {
    text: 'Конвертер жизни',
    to: '/money-life',
    isModule: true,
  },
  {
    text: 'Отчёты',
    to: '/reports',
    isModule: true,
  },



]

// Вопрос. Мне, что-нибудь кроме инпутов тут надо?
// Нужен label и placeholder

export const defaultModalContent: ModalDataType = {
  title: 'Модальное окно',
  target: 'Остатки',
  closeButton: 'Закрыть',
  submitButton: 'Отправить',
  resetButton: 'Очистить'
}





export const RegisterFieldContent: Array<FormFieldType> = [
  {
    fieldname: 'login',
    label: 'Логин',
    input: {
      type: 'text',
      required: true,
      initialValue: '',
      placeholder: 'Введите логин'
    },
  },
  {
    fieldname: 'email',
    label: 'Email',
    input: {
      type: 'email',
      required: true,
      initialValue: '',
      placeholder: 'Введите Email'
    },
  },
  {
    fieldname: 'password',
    label: 'Пароль',
    input: {
      type: 'password',
      required: true,
      initialValue: '',
      placeholder: 'Введите пароль'
    },
  },
]

export const RegisterModalContent:ModalDataType = {
  title: 'Регистрация',
  target: 'Присоединиться',
  submitButton: 'Зарегистрироваться',
  closeButton: 'Закрыть',
  resetButton: 'Очистить'

}



export const AuthFieldContent: Array<FormFieldType> = [
  {
    fieldname: 'login',
    label: 'Логин',
    input: {
      type: 'text',
      required: true,
      initialValue: '',
      placeholder: 'Введите логин'
    },
  },
  {
    fieldname: 'password',
    label: 'Пароль',
    input: {
      type: 'password',
      required: true,
      initialValue: '',
      placeholder: 'Введите пароль'
    },
  },
];

export const createAccountFieldContent: FormFieldType[] = [
  {
    fieldname: 'name',
    label: 'Название счёта',
    input: {
      type: 'text',
      required: true,
      initialValue: '',
      placeholder: 'Кошелёк'
    }
  },
  {
    fieldname: 'sum',
    label: 'Текущий остаток',
    input: {
      type: 'number',
      required: true,
      initialValue: 0,
      placeholder: '0'
    }
  }
]

export const AuthModalContent:ModalDataType = {
  title: 'Авторизация',
  target: 'Войти',
  submitButton: 'Войти',
  closeButton: 'Закрыть',
  resetButton: 'Очистить'
  
}


export const categoryOptions:categoryOptionsType = {
  income: {
    label: 'Доходы',
    values: ['Заработная плата', 'Бизнес', 'Инвестиции', 'Подработки', 'Подарки', 'Долги', 'Кредиты']
  },
  expenses: {
    label: 'Расходы',
    values: ['Фонд богатства', 'Текущие расходы', 'Долгосрочные накопления', 'Здоровье', 'Образование', 'Развлечения', 'Благотворительность']
  }
}










