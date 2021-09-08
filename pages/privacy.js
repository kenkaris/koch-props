import {  Paper,makeStyles, Button, ThemeProvider,createTheme, CardMedia, CardContent, Chip } from '@material-ui/core'
import { Badge, Carousel, Row,Col } from 'antd'
import Head from 'next/head'
import Card from '../components/Card'
import  Link from 'next/link'


export default function Home({item}) {
  
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
         <div style={{padding:10}}>
        <Head>
        <title>Privacy Policy </title>
        <meta name="description" content="KOCH Properties goal is to provide unwavering commitment to character, integrity and proficiency. 
 
 We are committed to raising the bar for boutique service and providing an in-depth expertise that none can match. 
  
 Our skill sets, spheres of influence, accountability, and open dialogue come together to serve the greater good of our client." />
        <link rel="icon" href="/tulua.png" />
      </Head>
        <Row justify="center" style={{overflowX:'hidden'}}>
        <span style={{fontSize:20,fontWeight:'bolder',color:'#d22f25',margin:10}}>Our Privacy Policy </span> 
        </Row>
        <Row justify="center" style={{overflowX:'hidden'}}>
       <Link href="/">
       <a>
       <span style={{fontSize:20,fontWeight:'bolder',color:'#d22f25',margin:10}}> Go back home </span>
       </a>
       </Link> 
        </Row>
        <Paper elevation={0} style={{padding:20,margin:10,background:'#F5F5F5'}}>
      
       <span style={{fontSize:13,color:'grayText',}}>
       <span style={{fontSize:17,color:'black'}}>Privacy Policy</span> <br />
        <span style={{fontSize:15}}> PRIVACY POLICY NOTICE</span>  <br />
       August 31, 2021  <br /><br />

This privacy notice discloses the privacy practices for https://koch-properties.com/
This privacy notice applies solely to information collected by https://koch-properties.com/
<br /><br />
<span style={{fontSize:17,color:'black'}}>
This Privacy Notice Informs You Of Your Information Collection
</span><br /><br />
What personally identifiable information is collected from you through https://koch-properties.com/, how it is used and with whom it may be shared.
What choices are available to you regarding the use of your data.
The security procedures in place to protect the misuse of your information.
How you can correct any inaccuracies in the information.<br /><br />
<span style={{fontSize:17,color:'black'}}>
This Privacy Notice Informs You Of Your Information Use and Sharing
</span><br /><br />
KOCH Properties are the sole owners of the information collected on this site.
KOCH Properties will only have access to collect information that you voluntarily give us via email or other direct contact from you.
KOCH Properties will not sell or rent this information to anyone.
KOCH Properties will use your information to respond to you, regarding the reason you contacted us.
KOCH Properties will not share your information with any third party outside of our organization, other than as necessary to fulfill your request.<br /><br />
<span style={{fontSize:17,color:'black'}}>
This Privacy Notice Informs You Of Your Access To And Control Over Your Information
</span><br /><br />
You may opt out of any future contacts from KOCH Properties at any time via the email address or telephone and given below. You may also do the following at any time by contacting KOCH Properties  via the email address or telephone numbers given below:
Change/correct any data we have about you.
Have us delete any data we have about you.
Express any concern you have about our use of your data.
Phone: +254 100 000 000
Email: koch-properties@gmail.com<br /><br />
<span style={{fontSize:17,color:'black'}}>
This Privacy Notice Informs You Of Your Information’s Online And Offline Security
</span><br /><br />
KOCH Properties  takes precautions to protect your information.
When you submit sensitive information via https://koch-properties.com/, your information is protected both online and offline.
Wherever KOCH Properties collects sensitive information, that information is encrypted and transmitted to us in a secure way. Only employees who need the information to perform a specific job are granted access to personally identifiable information.
Unless you ask KOCH Properties not to, we may contact you via email, text message or telephone via the information submitted to  KOCH Properties. If any/all personal information submitted to KOCH Properties was in error and/or not by the persons or entities other than the intended recipients, kindly contact KOCH Properties via the email address or telephone numbers given below to correct, delete or remove it.<br /><br />
<span>Phone: +254 100 000 000</span><br />
<span>Email: koch-properties@gmail.com</span>
       </span>
        </Paper>
        
         </div>
        
  )
}
