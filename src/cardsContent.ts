
import budgettingUrl from './assets/images/budgeting.png';
import accountingUrl from './assets/images/accounting.jpg';
import loanUrl from './assets/images/loan.jpg';
import financialCapUrl from './assets/images/financialCap.jpg';
import timeMoneyUrl from './assets/images/timeMoney.jpg';
import reportUrl from './assets/images/report.jpg';

import { CardProps } from './types';

type CardsContentType = CardProps[];

export const cardsContent: CardsContentType = [
  {
    link: null,
    image: {
      src: budgettingUrl,
      alt: 'Учёт финансов'
    },
    title: 'Учёт финансов',
    text: 'Добавляйте счета, операции. Настраивайте свои категории'
  },
  {
    link: null,
    image: {
      src: accountingUrl,
      alt: 'Планируйте будущее'
    },
    title: 'Планируйте будущее',
    text: 'Сформируйте бюджет по системе 6 шкатулок или составьте самостоятельно'
  },
  {
    link: null,
    image: {
      src: loanUrl,
      alt: 'Управляйте долгами'
    },
    title: 'Управляйте долгами',
    text: 'Подберите стратегию погашения или проверьте банк на честность'
  },
  {
    link: null,
    image: {
      src: financialCapUrl,
      alt: 'Растите в деньгах'
    },
    title: 'Растите в деньгах',
    text: 'Определите ваш потенциальный уровень дохода и стремитесь к нему'
  },
  {
    link: null,
    image: {
      src: timeMoneyUrl,
      alt: 'Экономьте жизнь'
    },
    title: 'Экономьте жизнь',
    text: 'Переведите ваши покупки в часы жизни и не тратьте деньги на лишнее'
  },
  {
    link: null,
    image: {
      src: reportUrl,
      alt: 'Создавайте отчёты'
    },
    title: 'Создавайте отчёты',
    text: 'Визуализируйте ваши финансы и будьте в курсе текущей ситуации'
  },

]