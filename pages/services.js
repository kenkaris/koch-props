import {  Paper,makeStyles, Button, ThemeProvider,createTheme, CardMedia, CardContent, Chip } from '@material-ui/core'
import { Badge, Carousel, Row,Col } from 'antd'
import Head from 'next/head'
import Card from '../components/Card'


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
            
              main:'#5a2336'
          },
          
          type: 'light'
      }
    })
  
  return (
         <div style={{padding:10}}>
        <Head>
        <title>Services offered by Tulua Meraki Home solutions </title>
        <meta name="description" content="Together Tulua Meraki will rise to create the perfect solutions for all your real estate needs.
      We are a company known for extensive market knowledge and unmatched devotions to clients.Our success is based almost exclusively on positive referrals
      through a large network grown over 10 year period of working with some of the largest real estate companies and developers in kenya.We have 
      earned the respect of our clients by working tirelessly on their behalf and evolving our strategies in sales as well as marketing.
      As a realtor,our first priority is to make the clients happy by paying attention to buyer's and seller's needs and marketing the process stress-free
      for all parties involved." />
        <link rel="icon" href="/tulua.png" />
      </Head>
        <Row justify="center" style={{overflowX:'hidden'}}>
        <span style={{fontSize:20,fontWeight:'bolder',color:'#5a2336ab',margin:10}}>Services offered by Tulua Meraki Home solutions </span> 
        </Row>
        <Paper elevation={0} style={{padding:20,margin:10,background:'#F5F5F5'}}>
        <Row justify="center" className={classes.row}>

        <span style={{color:'#5a2336',fontWeight:'bold',fontSize:20}} >
        Sales Services
        </span>
        </Row>
       <span style={{fontSize:13,color:'#5a2336',}}> On the basis of the proposition we will design a bespoke selling process, which is dynamically elaborated from day 1 by an experienced, dedicated team. We understand that good timing and meticulous preparation determine the sales success. Our selling processes are therefore clearly structured, and nothing is left to chance.<br/><br/> We will let our national and international network work for you, prepare each phase of the marketing and selling process in detail, and produce a complete commercial, technical and legal sales dossier in the data room. We eliminate as many risks as possible in advance in order to ensure a smooth selling process, up to the official transfer.</span>
        </Paper>
        <Paper elevation={0} style={{padding:20,margin:10,background:'#F5F5F5'}}>
        <Row justify="center" className={classes.row}>

        <span style={{color:'#5a2336',fontWeight:'bold',fontSize:20}} >
        Marketing Services
        </span>
        </Row>
       <span style={{fontSize:13,color:'#5a2336',}}>  It is important to mobilise the right marketing resources in each phase of the selling process.<br/><br/> In the start-up phase, you will need to develop resources such as a brochure, website or online listing that give a general impression of the building and indicate its availability. As potential tenants begin to show more interest, more persuasive resources can be developed by our consulting and design team.</span>
        </Paper>
        <Paper elevation={0} style={{padding:20,margin:10,background:'#F5F5F5'}}>
        <Row justify="center" className={classes.row}>

        <span style={{color:'#5a2336',fontWeight:'bold',fontSize:20}} >
        Management Services
        </span>
        </Row>
       <span style={{fontSize:13,color:'#5a2336',}}> Your real estate portfolio is often your largest asset and your biggest expense. The effective and accurate management of these assets helps control costs, maximise revenue and provide your business with the flexibility and agility to meet future business needs and trends.<br/><br/>

Our team of property managers, lease specialists and tenant representatives work to manage and oversee your real estate portfolio. We identify current market opportunities and trends, while uncovering cost savings opportunities that will support your current and future real estate needs.</span>
        </Paper>
         </div>
        
  )
}
