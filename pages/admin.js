import {  Paper,makeStyles, Button, ThemeProvider,Dialog,DialogContent,MenuItem,DialogActions,TextField,InputAdornment,createTheme,CardMedia, CardContent, Chip ,Box} from '@material-ui/core'
import { Badge, Carousel, Row,Col,Form,Button as Btn } from 'antd'
import Head from 'next/head'
import Card from '../components/Card'
import axios from 'axios'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react'
import { useForm } from 'antd/lib/form/Form'


export default function Home({assets}) {
    const [form] = useForm()
    const [value, setValue] = useState(1);
    const [open,setOpen] = useState(false)
    const [feature,setF] = useState('')
    const [price,setP] = useState('')
    const [features,setFeatures] = useState([])
    const [payment,setPayment] = useState([])
    const changeF = (a) => {
      setF(a.target.value);
    };
    const addP = () => {
      setPayment([...payment,price])
      setP('');
    };
    const addF= (a) => {
      setFeatures([...features,feature])
      setF('');
    };
    const changeP = e => {
      setP(e.target.value);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const onFinish = data => {
      console.log(data)
     }
     const onFinishF = data => {
         console.log(data)
          }
  
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
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3} style={{padding:10}}>
              {children}
            </Box>
          )}
        </div>
      );
    }
  return (
        <ThemeProvider theme={theme}>
           <div style={{padding:10}}>
        <Head>
        <title>Tulua Meraki Home solutions properties for rent</title>
        <meta name="description" content="Together Tulua Meraki will rise to create the perfect solutions for all your real estate needs.
      We are a company known for extensive market knowledge and unmatched devotions to clients.Our success is based almost exclusively on positive referrals
      through a large network grown over 10 year period of working with some of the largest real estate companies and developers in kenya.We have 
      earned the respect of our clients by working tirelessly on their behalf and evolving our strategies in sales as well as marketing.
      As a realtor,our first priority is to make the clients happy by paying attention to buyer's and seller's needs and marketing the process stress-free
      for all parties involved." />
        <link rel="icon" href="/tulua.png" />
      </Head>
     <div style={{padding:10,background:'#F5F5F5'}}>
     <Row justify="center" style={{marginTop:20}}>
          <span style={{color:'red',fontSize:15,fontWeight:'bolder'}}>Admin Dashboard</span>
      </Row>
      <Row justify="center" style={{marginTop:20}}>
          <Button color="primary" variant="contained" size="large">back Home</Button>
      </Row>
      <Row justify="center" style={{marginTop:20}}>
          <Button color="primary" variant="contained" onClick={() => setOpen(!open)} size="large">Add a new asset</Button>
      </Row>
        <Row justify="center" style={{overflowX:'hidden'}} style={{margin:10}} >
        <Paper square elevation={0}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="For sale" value={1}/>
        <Tab label="For rent" value={2}/>
      </Tabs>
    </Paper>
    </Row>
     </div>
  
       <TabPanel value={value} index={1}>
       <Row gutter={[10,10]}>
        {
            assets.sales.map( item => (
            <>
              {
                item.category === "sale" &&
                <Col key={item.name} lg={8} md={12} sm={8} xs={24}>
                <Card item={item} admin={true}/>
                </Col>
              }
            </>
            ) )
        }
        </Row>
       </TabPanel>
       <TabPanel value={value} index={2}>
       <Row gutter={[10,10]}>
        {
            assets.map( item => (
              <>
              {
                item.category === "rent" &&
                <Col key={item.name} lg={8} md={12} sm={8} xs={24}>
                <Card item={item} admin={true}/>
                </Col>
              }
            </>
            ) )
        }
        </Row>
       </TabPanel>
         </div>

         <Dialog open={open}>
          {/* promiseInProgress &&  <LinearProgress  color="primary"/> */ }
          <div style={{padding:20}}>
          <Row justify="center">
               <span style={{marginBottom:10}}>Ad new item</span>
           </Row>
           <Form form={form} onFinish={onFinish} onFinishFailed={onFinishF}>
           <Form.Item name="rooms" rules={[{required:true,message:'please enter a room name ..'}]}>
           <TextField variant="outlined" style={{width:'100%'}}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  Rooms:
               </InputAdornment> }}
            color="primary" label="product name" size="small" placeholder="Enter room name .. " />
           </Form.Item>
          <Form.Item name="tagline" rules={[{required:true,message:'please enter tagline  ..'}]}>
          <TextField variant="outlined" style={{width:'100%'}}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  tagline:
               </InputAdornment> }}
            color="primary" label="product size" size="small" placeholder="Enter tagline .. " />
          </Form.Item>
           <Form.Item name="location" rules={[{required:true,message:'please enter location ..'}]}>
           <TextField variant="outlined" style={{width:'100%'}}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  location:
               </InputAdornment> }}
            color="primary" label="product color" size="small" placeholder="Enter product color .. " />
           </Form.Item>
           <Form.Item name="description" rules={[{required:true,message:'please enter  description ..'}]}>
           <TextField variant="outlined" style={{width:'100%'}}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  Description:
               </InputAdornment> }}
            color="primary" label="product desc" size="small" placeholder="Enter  description .. " />
           </Form.Item>
           <Form.Item name="category" rules={[{required:true,message:'please enter product category ..'}]}>
           <TextField
             style={{width:'100%'}}
             size="small"
             id="outlined-select-currency"
             select
             color="primary"
             label="category"
             helperText="Please select  category"
             variant="outlined"
           >
            <MenuItem value="sale">
                 For Sale
               </MenuItem>
               <MenuItem value="rent">
                 For Rent
               </MenuItem>
           </TextField>
           </Form.Item>
           <Form.Item name="price" rules={[{required:true,message:'Enter product price ..'}]}>
           <TextField  variant="outlined" style={{width:'100%'}}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  Price:
               </InputAdornment> }}
            color="primary" label="product price" size="small" placeholder="Enter product price .. " />
           </Form.Item>
         
           <Form.Item>
            <Btn type="text" disabled={ (features.length === 0 ||  payment.length === 0) ? true : false  } htmlType="submit" style={{background:'#d22f25',color:'white'}} block>
              Add 
            </Btn>
           </Form.Item>
           </Form>
           
          </div>
          <DialogActions>
          <Button variant="outlined" style={{textTransform:'initial'}} onClick={() => setOpen(!open)} >Cancel</Button>
          </DialogActions>
          </Dialog>
         
        </ThemeProvider>
        
  )
}
Home.getInitialProps = async function(context){

  const assets = [
    {
      id:"1",
      category:"sale",
      images:["/properties/serene/1.jpg","/properties/serene/2.jpg","/properties/serene/3.jpg","/properties/serene/4.jpg","/properties/serene/5.jpg"],
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
       "1. Identify your villa of choice",
       "2. Pay 10% of purchase price on signing agreement.  ",
       "3. 90% of purchase value payable as agreed with developer.",
      ]
  
    },
    {
      id:"2",
      category:"sale",
      images:["/properties/serene/1.jpg","/properties/serene/2.jpg","/properties/serene/3.jpg","/properties/serene/4.jpg","/properties/serene/5.jpg"],
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
       "1. 10% Deposit on booking.",
       "2. 90% in flexible installments. ",
       "3. OR 90% in full on completion.",
      ]
  
    }
    ]
   return {  assets }
}