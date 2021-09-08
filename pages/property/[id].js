import { RightCircleFilled } from '@ant-design/icons'
import { CircularProgress } from '@material-ui/core'
import { CssBaseline, Paper,makeStyles, Button, ThemeProvider,createTheme } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { Badge, Carousel, Row,Col,Space,Typography } from 'antd'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Mailing from '../../components/MailingForm'


export default function Home({property,cat}) {
  const prop = property[0]
  
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
    div:{
      marginTop:20,
      background:'#F5F5F5',
      padding:20,
      [theme.breakpoints.up('md')]:{
        width:'70%'
      },
      [theme.breakpoints.down('sm')]:{
        width:'100%'
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
    <div>
      <ThemeProvider theme={theme}>
      <Head>
        <title> {prop.rooms} by koch-properties</title>
        <meta name="description" content="KOCH Properties goal is to provide unwavering commitment to character, integrity and proficiency.  We are committed to raising the bar for boutique service and providing an in-depth expertise that none can match.  Our skill sets, spheres of influence, accountability, and open dialogue come together to serve the greater good of our client." />
        <link rel="icon" href="/tulua.png" />
      </Head>
      <Carousel arrows infinite autoplay fade style={{overflowX:'hidden'}}>
       {
         prop.images.map( item => (
          <div key={item}>     
          <div style={{backgroundImage:`url(${item})`,padding:20,backgroundPosition:'center',width:'100%',backgroundSize:'cover',height:'85vh'}}>
          
           </div>
           </div>
         ) )
       }
      </Carousel>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div className={classes.div} >
        <span style={{fontSize:30,marginTop:10,fontWeight:600}}>{prop.tagline}</span><br />
        <span style={{fontSize:17,marginTop:10,fontWeight:600}}>{prop.location}</span><br />
        <span style={{fontSize:20,marginTop:10,marginBottom:10,fontWeight:500}}>{prop.price}</span><br /><br />
        <span style={{fontSize:15,marginTop:20,fontWeight:300,color:'GrayText'}}>{prop.desc}</span>
       
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div className={classes.div} >
        <Row justify="start">
      <span style={{fontSize:25,marginTop:10,fontWeight:600}}>Key Features</span>
      </Row>
        </div>
      </div>
      <Row justify="center">
      <Row className={classes.div} >
     
      {
          prop.features.map( text => (
           <Space style={{margin:10}}>
             <RightCircleFilled />
             <span key={text} style={{fontSize:15,fontWeight:300,color:'GrayText'}}>{text}</span>
           </Space>
          ) )
        }
      </Row>
      </Row>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div className={classes.div} >
        <Row justify="start">
      <span style={{fontSize:25,fontWeight:600}}>Price Overview</span>
     
      </Row>
        </div>
      </div>
      <Row justify="center">
      <Row className={classes.div} >
     
      {
          prop.payment.map( text => (
           <Space style={{margin:10}}>
             <RightCircleFilled />
             <span key={text} style={{fontSize:15,fontWeight:300,color:'GrayText'}}>{text}</span>
           </Space>
          ) )
        }
      </Row>
      </Row>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div className={classes.div} >
        <Row justify="start">
      <Button size="large" variant="contained" color="primary" style={{textTransform:'initial',marginTop:30}}>Book a Viewing</Button>
      </Row>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div className={classes.div} >
        <Row justify="start">
      <span style={{fontSize:25,fontWeight:600}}>Make an Inquiry</span>
     
      </Row>
       <Mailing />
        </div>
      </div>
      </ThemeProvider>
    </div>
  )
}
Home.getInitialProps = async function(context){
const { id } = context.query
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
     "OR 90% in full on completion.",
    ]

  }
  ]
const property = assets.filter( item => item.id === id )

return { property,cat:'buy' }
} 
