import React, {useState} from 'react'
import Header from './Header'
import Section from './Section'
import CallBackModal from './CallBackModal'
import './styles.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <Header />
      <Section
        title='Become ACCA In 18 months'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in urna ac nulla suscipit rutrum.'
      />
      <Section
        title='Why choose us'
        content='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
      />
      <Section
        title='ACCA – Eligibility'
        content='Duis ac massa vel augue lacinia ultricies. Vestibulum tempor, felis ut laoreet malesuada.'
      />
      <Section
        title='What will you learn In ACCA?'
        content='Fusce commodo, sapien vitae pretium tristique, nisi metus varius eros, nec maximus tortor libero nec neque.'
      />
      <Section
        title='100% Placement Assistance'
        content='Aliquam in leo ut magna pretium vehicula vel vel quam. Proin posuere lorem at neque sollicitudin congue.'
      />
      <Section
        title='Kick off your ACCA Prep journey with IndigoLearn'
        content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
      />
      {/* Implement other Section components similarly */}
      <div className='text-center'>
        <button className='btn btn-primary' onClick={handleShowModal}>
          Request Call Back
        </button>
      </div>
      <CallBackModal show={showModal} handleClose={handleCloseModal} />
    </>
  )
}

export default App
