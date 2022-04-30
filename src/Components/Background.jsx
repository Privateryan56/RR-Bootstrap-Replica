import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Background = () => {
    return(
        <main style= {{backgroundColor:"#DEEED6"}}>
        <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{ width: "70%", height: "600px", margin:"auto", background:"url('https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg')" }}>
            <Card >
                <div >
                    <Card.Text>
                        Order groceries for delivery <br /> or pickup today
                </Card.Text>
                    <Card.Text>
                        Whatever you want from local stores, brought right to your door.
                </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
                        </Form.Group>
                    </Form>
                </div>
            </Card>
        </div>
        </div>
        </main>
    )
}
export default Background;