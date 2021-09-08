import { MessageFilled, UserAddOutlined } from "@ant-design/icons";
import { InputAdornment, TextField } from "@material-ui/core";
import {Form,Input,Button, message} from "antd";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const { TextArea } = Input

export default function Mailing(){
    const { pathname } = useRouter()
    const { useForm } = Form
    const [form] = useForm()
    const onFinish = async (data) => {
        console.log('object send')
        data.from = pathname
        console.log(data)
       const res = await axios.post('https://admin.tuluameraki.com/send',data)
       console.log(res.error)
       message.success('Thank you for contacting us.')
       form.resetFields()
       }
       const onFinishFailed = (data) => {
           console.log(data)
       }
    return(
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{margin:10}}>
         <Form.Item name="from" rules={[{required:true,message:'please enter your name!!!'}]}>
          <TextField size="small"  style={{width:'100%',color:'white'}} color="primary" id="outlined-basic" label="Name" placeholder="Enter your name" variant="standard" />
         </Form.Item>
         <Form.Item name="email"   rules={[{required:true,message:'please enter your email!!!'}]}>
         <TextField size="small"  style={{width:'100%',color:'white'}} color="primary" id="standard basic" label="Email" placeholder="Enter your email" variant="standard" />
         </Form.Item>
         <Form.Item name="phone" rules={[{required:true,message:'please enter your phone number!!!'}]}>
         <TextField size="small"  style={{width:'100%',color:'white'}}  color="primary"  id="standard basic" label="Phone" placeholder="Enter phone number" variant="standard" />
         </Form.Item>
         <Form.Item name="message" rules={[{required:true,message:'please enter your message!!!'}]}>
          <TextArea className="textarea" style={{backgroundColor:'transparent',border:'2px solid white',color:'black',borderWidth:2,borderColor:'white'}} prefix={<MessageFilled />} placeholder="Message"/>
         </Form.Item>
         <Form.Item >
            <Button loading={false} className="animated fadeIn infinite" htmlType="submit" block style={{backgroundColor:'#d22f25',color:'#fff',border:'none',borderRadius:5}} type="primary" size="large">
                 Send
        </Button>
        </Form.Item>
        </Form>
      
    )
}