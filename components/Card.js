import {  Paper,makeStyles, Button, ThemeProvider,TextField,InputAdornment,createTheme, Card, CardMedia, CardContent,DialogActions,Dialog,DialogContent, Chip } from '@material-ui/core'
import { Delete,Cancel } from '@material-ui/icons'
import { Badge, Carousel, Row,Col,Upload } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

export default function Home({item,rentals,admin}) {
  const [imageM,setImageM] = useState(false)
  const [one,setOne] = useState(false)
  const [two,setTwo] = useState(false)
  const [fileList,setFileList] = useState([])
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
  const props = {
    onChange: file => {
      setFileList([...file.fileList]);
       //return false;
     },
    onRemove: file => {
     setFileList(() => {
       return fileList.filter( item => item.uid !== file.uid )
     })
    },
    beforeUpload: file => {
      setFileList([...fileList,file]);
       //return false;
     },
     progress: {
      strokeColor: {
        '0%': '#000',
        '100%': '#fdc30f',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
     fileList,

 
  };
  
  const useStyles = makeStyles( theme => ({
    card:{
        background:'white'
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
           <Card className={classes.card} elevation={0}>
          <CardMedia >
            <div style={{backgroundImage:`url(${item.images[0]})`,backgroundPosition:'center',backgroundSize:'cover',height:250}}></div>
          </CardMedia>
          <Link href={`/property/${item.id}`}>
         <a>
         <CardContent>
          <Row justify="start">
          <span style={{fontSize:13,color:'GrayText'}}>{ item.category === "sale" ? "For sale:" :"For Rent:"  } price</span>
            </Row>
            <Row justify="start">
           <span style={{fontSize:17,fontWeight:400,color:'black'}}>{item.price}</span>
          </Row>
          <Row justify="start">
           <span style={{fontSize:15,color:'black'}}>{item.rooms}</span>
          </Row>
          <Row justify="start">
           <span style={{fontSize:13,color:'GrayText'}}>{item.location}</span>
          </Row>

          </CardContent>
         </a>
          </Link>
        {
          admin && 
        <div>
            <Row justify="center" style={{padding:10}}>
          <Button color="primary" size="small" onClick={() => setImageM(!imageM)} variant="contained">Upload images</Button>
        </Row>
        <Row justify="center" style={{padding:10}}>
          <Button color="primary" size="small" onClick={() => setOne(!one)} variant="contained">Upload features</Button>
        </Row>
        <Row justify="center" style={{padding:10}}>
          <Button color="primary" size="small" onClick={() => setTwo(!two)} variant="contained">Upload payment overview</Button>
        </Row>
        <Row justify="center" style={{padding:10}}>
          <Button color="primary" size="small" variant="contained" startIcon={<Delete />}>Remove asset</Button>
        </Row>
        </div>
        }
        </Card>
        <Dialog open={imageM} >
       <div style={{padding:20}}>
        <Upload  {...props} listType="picture-card" style={{marginTop:10}}  multiple={true} name="products" action={`http://localhost:3001/upload-prop-img/${item._id}`}>
        upload
         </Upload>
      <DialogActions>
            <Button variant="outlined" style={{textTransform:'initial'}} onClick={() => setImageM(!imageM)} startIcon={<Cancel />}>Cancel</Button>
        </DialogActions>
        </div>
      </Dialog>
      <Dialog open={one}>
            <div>
            <div style={{padding:10}}>
          <TextField variant="outlined" style={{width:'100%'}}
          onChange={changeF}
          value={feature}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  Feature:
               </InputAdornment> }}
            color="primary" label="asset features" size="small" placeholder="Enter feature and click enter .. " />
            <Button size="small" color="primary" variant="contained" style={{marginTop:5}} onClick={addF}>add feature</Button>
            {
                features.length !== 0 &&
                features.map( p => (
              <Chip
              key={p}
              variant="contained"
              clickable
              label={p}
              style={{margin:5}}
              onDelete={
                () => setFeatures(payment.filter( item => item !== p ))
              }
              />
                ) )
              }
          </div>
         
            </div>
          </Dialog>
          <Dialog open={two}>
            <div>    
          <div style={{padding:10}}>
          <TextField variant="outlined" style={{width:'100%'}}
           onChange={changeP}
           value={price}
           InputProps={{
               startAdornment: <InputAdornment position="start">
                  payment:
               </InputAdornment> }}
            color="primary" label="price overview" size="small" placeholder="Enter price overview.. " />
              <Button size="small" color="primary" variant="contained" style={{marginTop:5}} onClick={addP}>add payment</Button>
              {
                payment.length !== 0 &&
                payment.map( p => (
              <Chip
              key={p}
              variant="contained"
              clickable
              label={p}
              style={{margin:5}}
              onDelete={
                () => setPayment(payment.filter( item => item !== p ))
              }
              />
                ) )
              }
          </div>
            </div>
          </Dialog>
        </ThemeProvider>
        
  )
}
