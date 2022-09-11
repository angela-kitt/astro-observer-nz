import React from 'react'
import Apod from './Apod'
import aurora from '../../server/public/image/aurora.jpg'
import milkyWay from '../../server/public/image/milkyway.jpg'
import jupiter from '../../server/public/image/jupiter.jpg'

const style = { maxWidth: '500px' }

const Observations = () => {
  return (
    <>
      <div>
        <Apod />
      </div>
      <div>
        <h2>Aurora Australis</h2>
        <img src={aurora} alt={'Aurora Australis'} style={style} />
        <p>
          <b>Sat 10th Sep 2022</b>
        </p>
        <p>
          Lorem ipsum dolor sit amet, nemore eripuit nec ne, has ut affert
          iracundia scriptorem. Ius dicant delicata et. Cu eum impedit facilisi,
          tamquam definiebas referrentur id pro. Eum ut lorem torquatos
          liberavisse.
        </p>
      </div>
      <div>
        <h2>The Milky Way</h2>
        <img src={milkyWay} alt={'Milky Way'} style={style} />
        <p>
          <b>Wed 24th Aug 2022</b>
        </p>
        <p>
          Accusata vituperata ut eum, an nec meis mnesarchum. Autem habemus
          oporteat sit id, harum aliquando vim id. Te quo aeque adipiscing, ne
          malorum intellegat vix, ne idque aliquid omnesque pro. Eu vel fugit
          audire feugiat, eruditi oportere moderatius vix an. Sed eu quidam
          appareat. Ne omnis munere nominavi mel.
        </p>
      </div>
      <div>
        <h2>Jupiter</h2>
        <img src={jupiter} alt={'Jupiter'} style={style} />
        <p>
          <b>Mon 15 Aug 2022</b>
        </p>
        <p>
          Hinc percipitur nec te, sea ex feugiat epicurei, case epicurei
          democritum eu vel. Nam ea fuisset molestie democritum. Mei id
          principes similique, dicant delicatissimi vis cu, et vim vero
          inimicus. In mel mucius melius eligendi, suas expetendis eam et.
        </p>
      </div>
    </>
  )
}

export default Observations
