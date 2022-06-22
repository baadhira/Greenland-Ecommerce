import React,{useState,useEffect} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { Form,Button,Row,Col, FormGroup } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
function LoginScreen() {
    let navigate = useNavigate();
  const location=useLocation()

    const[email,setEmail] =useState('')
    const[password,setPassword] = useState('')


    const dispatch=useDispatch()
    const redirect=location.search? Number(location.search.split('=')[1]):'/'

    const userLogin = useSelector(state=>state.userLogin)
    const {error,loading,userInfo}=userLogin

    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
}
  return (
    <FormContainer>
        <h1>
            Sign In

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
        </h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
             
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type='email' placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value)}>

                    </Form.Control>
               

            </Form.Group>

            <Form.Group controlId="password">
              
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type='password' placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}>

                    </Form.Control>
              

            </Form.Group>
            <Button type='submit' variant='primary'>Sign In</Button>
        </Form>

        <Row className="py-3">
            <Col>
            New Customer? <Link to={redirect?`/register?redirect=${redirect}`:'/register'}>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen