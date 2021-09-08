import WhatsAppWidget from 'react-whatsapp-widget'

const Whatsapp = () => {
    return (
     <div style={{position:'fixed',bottom:5,right:5}}>
      <WhatsAppWidget phoneNumber='+254 754795414' companyName="KOCH-PROPERTIES" />
      </div>
    )
}

export default Whatsapp
