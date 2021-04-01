import React, { useState } from 'react';


export const MobileMenu: React.FC<{}> = () => {
  /* 
  Нужна кнопка. У кнопки есть текст и класс. Хендлер тут всегда свой родной
  Нужен стейт
  Нужны стили. По нажатию на кнопку, будет к листу добавляться класс или убираться
  
  */
  
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


  return (
    <div>

    </div>
  )
}