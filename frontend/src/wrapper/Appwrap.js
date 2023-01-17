import React from 'react'
import { NavigationDots, SocialMedia} from '../components'

const Appwrap = (Component, idName, classNames) => function Higher(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>

      <div className='app__wrapper app__flex'>
        <Component/>

        <div className='copyright'>
          <p className='p-text'>@2023 YAHYA</p>
        </div>
     </div>
     <NavigationDots active={idName}/>
    </div>
  )
}

export default Appwrap
