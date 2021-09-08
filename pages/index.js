import { CssBaseline, Paper,makeStyles, Button, ThemeProvider,createTheme, CardMedia,Card as Mcard, CardContent, Chip, Typography, Avatar, TextField, IconButton } from '@material-ui/core'
import { Badge, Carousel, Row,Col, Tag, Divider, Space } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Card from '../components/Card'
import Link from 'next/link'
import { Facebook, Instagram, Phone, Twitter, YouTube } from '@material-ui/icons'
import Mailing from '../components/MailingForm'
import WhatsAppWidget from 'react-whatsapp-widget'
export default function Home({assets}) {
  
  const useStyles = makeStyles( theme => ({
    paper:{
      padding:20,
      backgroundColor:'transparent',
      backdropFilter:'blur(40px)',
      [theme.breakpoints.up('md')]:{
        width:'50%'
      },
      [theme.breakpoints.down('down')]:{
        width:'70%'
      }
    },
    btn:{
      textTransform:'initial',
      margin:10
    },
    about:{
      marginTop:20,
      padding:25,
      fontSize:13,
      background:'#F5F5F5',
      color:'#5a2336',
      marginBottom:10
    },
    card:{
      background:'#F5F5F5'
    },
    font:{
      [theme.breakpoints.up('md')]:{
        fontSize:62,
        wordWrap:'break-word',
        fontFamily: 'Lato sans-serif'
      },
      [theme.breakpoints.down('sm')]:{
        fontSize:30,
        wordWrap:'break-word',
        fontFamily: 'Lato sans-serif'
      }
    },
    div:{
      marginTop:40,
      [theme.breakpoints.up('md')]:{
        paddingLeft:50
      }
    }
    }) )
    const classes = useStyles()
    const theme = createTheme({
      palette:{
          primary:{
            
              main:'#d22f25'
          },
          
          type: 'light'
      }
    })
  
  return (
   <ThemeProvider theme={theme}>
      <div style={{width:'100%'}}>
    
    <Head>
      <title>KOCH-PROPERTIES</title>
      <meta name="description" content=" KOCH Properties goal is to provide unwavering commitment to character, integrity and proficiency.  We are committed to raising the bar for boutique service and providing an in-depth expertise that none can match.  Our skill sets, spheres of influence, accountability, and open dialogue come together to serve the greater good of our client. " />
    <link rel="icon" href="/tulua.png" />

   
    </Head>
    <Carousel arrows infinite autoplay fade style={{overflowX:'hidden'}}>
       {
         ["/1.jpg","2.jpg"].map( item => (
          <div key={item}>
        
          <div style={{backgroundImage:`url(${item})`,padding:20,backgroundPosition:'center',width:'100%',backgroundSize:'cover',height:'85vh'}}>
           <Row justify="center">
            <span style={{color:'white',fontSize:20,fontWeight:'bold', fontFamily: 'Lato sans-serif'}}>KOCH-PROPERTIES</span>
           </Row>
           <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20vh',justifyContent:'center'}}>
           <Typography variant="h1" className={classes.font} style={{color:'white',borderBottom:'1px solid white'}}>A NAME YOU CAN TRUST</Typography>       
           <span style={{color:'white',fontSize:22,marginTop:10,fontWeight:400, fontFamily: 'Lato sans-serif'}}> Defined by service and expertise</span>
           <Link href="/#listings-are-here">
           <a>
           <Button size="large" variant="contained" color="primary" style={{textTransform:'initial',marginTop:30}}>See Listing</Button>
           </a>
           </Link>
           </div>
           </div>
         
         </div>
         ) )
       }
      </Carousel>
    <div style={{padding:20,marginTop:10}}>
     <Row justify="center">
       <span style={{ fontFamily: 'Lato sans-serif',fontSize:20}}>Welcome</span>
     </Row>
     <Row justify="center">
       <span  style={{marginTop:30, fontFamily: 'Lato sans-serif',color:'GrayText'}}>
       KOCH Properties goal is to provide unwavering commitment to character, integrity and proficiency.  
       </span>
     </Row>
     <Row justify="center">
       <span style={{ fontFamily: 'Lato sans-serif',color:'GrayText'}}>
       We are committed to raising the bar for boutique service and providing an in-depth expertise that none can match. 
       </span>
     </Row>
     <Row justify="center">
       <span style={{ fontFamily: 'Lato sans-serif',color:'GrayText'}}>
       Our skill sets, spheres of influence, accountability, and open dialogue come together to serve the greater good of our client.
       </span>
     </Row>
    <div className={classes.div}>
    <Row justify="start">
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,textTransform:'uppercase',fontWeight:300}}>MEET THE TEAM</span>
      <Divider style={{borderColor:'#8080804d'}}/>
      </Row>
    </div>
    <div className={classes.div}>
    <Row justify="space-around" gutter={[10,10]}>
    <Col lg={12} md={12} sm={24} xs={24} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Avatar  style={{width:300,height:300}} src="/1.jpeg"/>
       <span style={{fontSize:20,marginTop:10}}> NICODEMUS J KIPKOECH</span>
       <span style={{marginTop:10,color:'GrayText'}} >
       Nicodemus is a high-touch realtor known for his extensive market knowledge and his<br /> unmatched devotion to client, Nicodemus's success is based on positive referrals,<br /> he has sold parcels of land to his family and friends. He earns respect of his<br /> clients by working tirelessly on their behalf and always offering them candid advice. 
       </span>
      </div>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Avatar  style={{width:300,height:300}} src="/2.jpeg"/>
       <span style={{fontSize:20,marginTop:10}}>CAROLINE CHEMUTAI KOECH</span>
       <span style={{marginTop:10,color:'GrayText'}} >
       As a realtor her first priority is to make her clients happy. She listens to her clients' <br /> wants and needs to achieve the best outcome in every transaction, and she strives to ensure that buying, selling or renting process is fun, easy and stress-free .Caroline is passionate about real estate.
       </span>
      </div>
    </Col>
    </Row>
    <div className={classes.div} id="listings-are-here">
    <Row justify="start">
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,textTransform:'uppercase',fontWeight:300}}>Listings</span>
      <Divider style={{borderColor:'#8080804d'}}/>
      </Row>
    <Row gutter={[10,10]}>
     {
       assets.map( item => (
         <Col lg={6} md={8} sm={24} xs={24}>
           <Card  item={item}/>
         </Col>
       ) )
     }
      </Row>
    </div>
    <div>
   
    </div>
    </div>
  
    <div className={classes.div}>
    <div className={classes.div}>
    <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,textTransform:'uppercase',fontWeight:300}}>OUR SERVICES</span>
      <Divider style={{borderColor:'#8080804d'}}/>
      </Row>
    </div>
  <div  className={classes.div}>
  <Mcard style={{backgroundColor:'whitesmoke'}} elevation={0}>
    <Row gutter={[10,10]}>
    <Col lg={12} md={12} sm={24} xs={24} >
     <CardMedia>
       <div style={{backgroundImage:'url(/1.jpg)',backgroundPosition:'center',backgroundSize:'cover',height:'40vh'}}>
         
       </div>
     </CardMedia>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24} >
    <div style={{marginTop:'10vh',padding:20}}>
    <Row justify="center" style={{margin:10}}>
        <span style={{fontSize:17,fontWeight:300}}>Real Estate Done Right</span>
      </Row>
      <Row justify="center">
        <span style={{fontSize:14,fontWeight:300,color:'GrayText'}}>
        Nervous about your property adventure? Don’t be. Whether you're getting ready to buy for occupation or investment, in the middle of it, or just looking for some answers, our top-notch skills ensure you get the best experience possible. It’s what we love to do.
        </span>
      </Row>
    </div>

    </Col>
    </Row>
    </Mcard>
  </div>
  <div  className={classes.div}>
  <Mcard style={{backgroundColor:'whitesmoke'}} elevation={0}>
    <Row gutter={[10,10]}>
   
    <Col lg={12} md={12} sm={24} xs={24} >
    <div style={{marginTop:'10vh',padding:20}}>
    <Row justify="center" style={{margin:10}}>
        <span style={{fontSize:17,fontWeight:300}}>Residential Sales, Residential Rentals and Land</span>
      </Row>
      <Row justify="center">
        <span style={{fontSize:14,fontWeight:300,color:'GrayText'}}>
        Large or small, houses , mansion or a parcel of land we can find it and get it for you at the price that's right. We can help with all of it. We always have a current list of available properties for you to check  out. 
        </span>
      </Row>
    </div>

    </Col>
    <Col lg={12} md={12} sm={24} xs={24} >
     <CardMedia>
       <div style={{backgroundImage:'url(/2.jpg)',backgroundPosition:'center',backgroundSize:'cover',height:'40vh'}}>
         
       </div>
     </CardMedia>
    </Col>
    </Row>
    </Mcard>
  </div>
  <div  className={classes.div}>
  <Mcard style={{backgroundColor:'whitesmoke'}} elevation={0}>
    <Row gutter={[10,10]}>
    <Col lg={12} md={12} sm={24} xs={24} >
     <CardMedia>
       <div style={{backgroundImage:'url(/1.jpg)',backgroundPosition:'center',backgroundSize:'cover',height:'40vh'}}>
         
       </div>
     </CardMedia>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24} >
    <div style={{marginTop:'10vh',padding:20}}>
    <Row justify="center" style={{margin:10}}>
        <span style={{fontSize:17,fontWeight:300}}>Rely on Expertise</span>
      </Row>
      <Row justify="center">
        <span style={{fontSize:14,fontWeight:300,color:'GrayText'}}>
        If you have questions about location, quality, affordability, or Investment Returns trust us to find you what you need fast. We make sure you feel confident and educated every step of the way
        </span>
      </Row>
    </div>

    </Col>
    </Row>
    </Mcard>
  </div>
    </div>
    <div className={classes.div}>
    <Row justify="center" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,textTransform:'uppercase',fontWeight:600}}>SUBSCRIBE</span>
      </Row>
      <Row justify="center" style={{marginTop:10}}>
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:15,textTransform:'uppercase',fontWeight:300}}>sign up for real estate news</span>
      </Row>
      <Row justify="center" style={{marginTop:10}}>
      <TextField  variant="filled" style={{width:'80%'}} color="primary" label="Email" placeholder="Email Address" size="medium" />
      </Row>
      <Row justify="center" style={{marginTop:10}}>
       <Button variant="contained" size="large" color="primary">SUBSCRIBE</Button>
      </Row>
    </div>
    <div className={classes.div}>
    <div className={classes.div}>
    <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,textTransform:'uppercase',fontWeight:300}}>SOCIAL</span>
      <Divider style={{borderColor:'#8080804d'}}/>
      </Row>
      <Row justify="center">
        <Space size="large">
        <IconButton color="primary" style={{backgroundColor:'whitesmoke'}}>
            <Phone />
          </IconButton>
          <IconButton color="primary" style={{backgroundColor:'whitesmoke'}}>
            <Facebook />
          </IconButton>
          <IconButton color="primary"  style={{backgroundColor:'whitesmoke'}}>
            <Twitter />
          </IconButton>
          <IconButton color="primary"  style={{backgroundColor:'whitesmoke'}}>
            <Instagram />
          </IconButton>
          <IconButton color="primary"  style={{backgroundColor:'whitesmoke'}}>
            <YouTube />
          </IconButton>
        </Space>
      </Row>
    </div>
    </div>
    <div className={classes.div}>
    <div className={classes.div}>
    <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,textTransform:'uppercase',fontWeight:300}}>CALL OR VISIT</span>
      <Divider style={{borderColor:'#8080804d'}}/>
      </Row>

    </div>
    <div className={classes.div}>
     <Row justify="space-between" gutter={[10,10]}>
      <Col lg={12} md={12} sm={24} xs={24}>
      <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,fontWeight:300}}>Drop Us a Line!</span>
      </Row>
      <Mailing />
      <span style={{fontSize:10,marginLeft:10}}>This site is protected by reCAPTCHA and the Google <span style={{color:'red'}}> Privacy Policy</span> and Terms of Service apply.</span>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
      <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:20,fontWeight:300}}>Koch-properties</span>
      </Row>
      <Row justify="start" style={{marginTop:10}}>
      <span style={{ fontFamily: 'Lato sans-serif',color:'GrayText',fontSize:17,fontWeight:300}}>Riverside Drive, Delta Riverside Office Park, Block 3</span>
      </Row>
      <Row justify="start" style={{marginTop:10}}>
      <span style={{ fontFamily: 'Lato sans-serif',color:'#d22f25',fontSize:15,fontWeight:300}}>koch-properties@gmail.com</span>
      </Row>
      <Row justify="start" style={{marginTop:10}}>
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:16,fontWeight:300}}>Monday - Friday: 9am - 5pm</span>
      </Row>
      <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:16,fontWeight:300}}>Saturday: 10am-1pm</span>
      </Row>
      <Row justify="start" >
      <span style={{ fontFamily: 'Lato sans-serif',fontSize:16,fontWeight:300}}>Sunday: Closed</span>
      </Row>
      </Col>
     </Row>
    </div>
    
    </div>
    <div className={classes.div}>
    <div className={classes.div}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8374236283817!2d36.79810351475401!3d-1.2705202990733167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bd4bfa27c84ac5a!2sKoch%20Properties!5e0!3m2!1sen!2ske!4v1630307648844!5m2!1sen!2ske" width="100%" height="450" style={{border:0 }} loading="lazy"></iframe> 
    </div> 
    </div>
    <div className={classes.div}>
    <div className={classes.div}>
    <Row justify="start" >
      <Divider style={{borderColor:'#8080804d'}}/>
      </Row>
    </div>
    <div className={classes.div}>
    <Row justify="space-between" >
    <span style={{fontSize:10,marginLeft:10}}>Copyright © 2021 Koch-properties - All Rights Reserved.</span>
   <Link href="/privacy">
  <a>
  <span style={{fontSize:15,marginLeft:10}}>Privacy Policy</span>
  </a>
   </Link>
      </Row>
    </div>
    </div>
    </div>
  </div>
  <div style={{position:'fixed',bottom:5,right:5}}>
      <WhatsAppWidget phoneNumber='+254 723 684313' companyName="KOCH-PROPERTIES" />
      </div>
   </ThemeProvider>
  )
}
Home.getInitialProps = async function(context){

  const assets = [
  {
    id:"1",
    category:"sale",
    images:["/properties/serene/1.jpg","/properties/serene/2.jpg","/properties/serene/3.jpg","/properties/serene/4.jpg","/properties/serene/6.jpg"],
    price:"Kshs 24,000,000M ",
    rooms:"4 Bedroom Villas All Ensuite + DSQ    ",
    location:"Machako’s, 35 KM from Nairobi",
    tagline:"COUNTRY CHARM & SERENE OPULENCE    ",
    desc:"These ultra modern 4 bedroom villas are all ensuite with a DSQ. Each villa spans 3600 Sqft with imported ceramic and granite tiles in living, dining, bedrooms and all corridors, imported shower mixtures, vanities and bathroom accessories and full height wardrobes for maximum storage space.",
    features:[
    "Exclusive Club House",
    "Fully equipped gym",
    "Infinity pool    ",
    "Three car parking",
    "Visitors parking  ",
    "Borehole    ",
    "Guard House & Security System    ",
    "Intercom facility    ",
    "Solar water heating system",
    "Generator for common areas    "
    ],
    payment:[
     "Identify your villa of choice",
     "Pay 10% of purchase price on signing agreement.  ",
     "90% of purchase value payable as agreed with developer.",
    ]

  },
  {
    id:"2",
    category:"sale",
    images:["/properties/prop/1.jpeg","/properties/prop/2.jpeg","/properties/prop/3.jpeg","/properties/prop/4.jpeg","/properties/prop/5.jpeg"],
    price:"Kshs 18,000,000M ",
    rooms:"3 Bed Apartments & 4 Bed Penthouses + DSQ    ",
    location:"Kileleshwa, Nairobi    ",
    tagline:"CONTEMPORARY URBAN LIVING    ",
    desc:"A mix of 3 bedroom apartments with DSQ and 4 bedroom penthouses with DSQ. Spanning 2300 Sqft of living spaces in an upscale location making this the perfect investment.Financial support and flexible long term payment plans are available on confirmed booking.",
    features:[
    "Gym and steam room",
    "Solar and manual water heating system",
    "Generator for common facilities    ",
    "Four high speed lifts",
    "2 Level basement parking  ",
    "CCTV surveillance    ",
    "Intercom    ",
    "Guard house    "
    ],
    payment:[
     "10% Deposit on booking.",
     "90% in flexible installments. ",
     " OR 90% in full on completion.",
    ]

  }
  ]
   return {  assets }
}