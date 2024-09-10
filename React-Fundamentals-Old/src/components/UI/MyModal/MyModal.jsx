import React from "react";
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

  const rootClasses = [cl.myModal]
  // Если visible = true, то добавляем еще и класс .active
  if(visible) {
    rootClasses.push(cl.active);
  }

  return (
    // .join() объединяет 2 класса в одну строку
    // onClick - если нажимаем на тёмную область (не контент) - скрывает модальное окно
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}> 
        {/* e.stopPropagation УСТРАНЯЕТ сработку скрывания модального окна при нажатии на область КОНТЕНТА */}
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
};

export default MyModal;
