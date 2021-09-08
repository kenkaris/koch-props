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
        <title>Sourcing  by Tulua Meraki Home solutions </title>
        <meta name="description" content="Together Tulua Meraki will rise to create the perfect solutions for all your real estate needs.
      We are a company known for extensive market knowledge and unmatched devotions to clients.Our success is based almost exclusively on positive referrals
      through a large network grown over 10 year period of working with some of the largest real estate companies and developers in kenya.We have 
      earned the respect of our clients by working tirelessly on their behalf and evolving our strategies in sales as well as marketing.
      As a realtor,our first priority is to make the clients happy by paying attention to buyer's and seller's needs and marketing the process stress-free
      for all parties involved." />
        <link rel="icon" href="/tulua.png" />
      </Head>
        <Row justify="center" style={{overflowX:'hidden'}}>
        <span style={{fontSize:20,fontWeight:'bolder',color:'#5a2336ab',margin:10}}>Sourcing  </span> 
        </Row>
        <Paper elevation={0} style={{padding:20,margin:10,background:'#F5F5F5'}}>
      
       <span style={{fontSize:13,color:'#5a2336',}}>  Are you searching for a property and cannot find it here?<br /><br />
                        Do you have a property that is vacant and are looking for a tenant?<br /><br />
                         Are you looking for an interior designer? Plumber?
                          Electrician ?
                           Professional tiler ?
                            Architect?<br/><br />

                       We got you covered for all your real estate needs.</span>
        </Paper>
        
         </div>
        
  )
}
