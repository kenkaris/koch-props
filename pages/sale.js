import {  Paper,makeStyles, Button, ThemeProvider,createTheme, CardMedia, CardContent, Chip } from '@material-ui/core'
import { Badge, Carousel, Row,Col } from 'antd'
import Head from 'next/head'
import Card from '../components/Card'
import axios from 'axios'


export default function Home({assets}) {
  //console.log(assets)
  
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
        <title>Tulua Meraki Home solutions properties for sale</title>
        <meta name="description" content="Together Tulua Meraki will rise to create the perfect solutions for all your real estate needs.
      We are a company known for extensive market knowledge and unmatched devotions to clients.Our success is based almost exclusively on positive referrals
      through a large network grown over 10 year period of working with some of the largest real estate companies and developers in kenya.We have 
      earned the respect of our clients by working tirelessly on their behalf and evolving our strategies in sales as well as marketing.
      As a realtor,our first priority is to make the clients happy by paying attention to buyer's and seller's needs and marketing the process stress-free
      for all parties involved." />
        <link rel="icon" href="/tulua.png" />
      </Head>
        <Row justify="center" style={{overflowX:'hidden'}}>
        <span style={{fontSize:20,fontWeight:'bolder',color:'#5a2336ab',margin:10}}>Properties for sale</span>
        <Row gutter={[5,5]}>
        {
            assets.sales.map( item => (
                <Col key={item.name} lg={8} md={12} sm={8} xs={24}>
                    <Card item={item}/>
                </Col>
            ) )
        }
        </Row>
        </Row>
         </div>
        
  )
}
Home.getInitialProps = async function(context){
  const res = await axios.get('http://localhost:3001/sendAssets')
  const assets = res.data.assets
   return {  assets }
}
