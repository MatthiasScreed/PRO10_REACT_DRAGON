import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";
import { addDragon, setDragon, removeDragon, reverseOrder } from "./actions/actions-type";

const App = () => {

    const { dragons, dragon, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addDragon());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // action.payload = { name : name, value : value }
        dispatch(setDragon({ name, value }));
    };

    return (
          <Container fluid>

              { error &&

                  <Alert variant='danger'>
                      {error}
                  </Alert>

              }

            <Container>
              <p>Dragon number : {dragons.length}</p>
            </Container>

            <Container>
              <Row>
                <Col>
                  <h1>Add dragon</h1>
                  <Form onSubmit={ handleSubmit }>

                    <Form.Group>

                      <Form.Label htmlFor="dragon_name">Dragon name</Form.Label>
                      <Form.Control type="text" id="dragon_name" value={dragon} placeholder="Dragon name" onChange={ handleChange } />

                    </Form.Group>

                      <Button variant="primary" type="submit">
                          Add
                      </Button>

                  </Form>
                </Col>
                <Col>
                    <h1>Dragons registered :</h1>
                    <Button variant="primary" type="button" onClick={ () => dispatch(reverseOrder()) }>
                        Reverse order
                    </Button>
                    <ul>
                        { dragons.map( (dragonName, index) => {

                            return (
                                <li key={index}>
                                    <p>{dragonName}</p>
                                    <Button variant="primary" type="button" onClick={ () => dispatch(removeDragon({ target: index })) }>
                                        Delete
                                    </Button>
                                </li>
                            )

                        } ) }
                    </ul>
                </Col>
              </Row>
            </Container>

          </Container>
    );
}

export default App;
