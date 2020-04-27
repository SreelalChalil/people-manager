import React, {useState, useEffect} from 'react';
import {Card,Button,Table,CardDeck,Modal,Form,ProgressBar} from 'react-bootstrap';
import {storage,db} from  '../config/firebase';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import placeholder from '../assets/placeholder.png'
import { withRouter ,Link} from 'react-router-dom';

const Details = (props) => {

    //image upload modals
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        //setImageAsFile(null);
    }
    const handleShow = () => setShow(true);

    //image upload states
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState('')
    const [progress,setProgress] = useState(0)
    const [showProgress,setShowProgress] = useState(false)

    //contact details
    const [contact,setContact] = useState({})
    const contactId = props.match.params.id

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    // firebase file upload
    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload')
        NotificationManager.info('Uplading Image');
        // async magic goes here...
        if(imageAsFile === '' || imageAsFile == null) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
            NotificationManager.error('Not an image',"Error!");
        }
        else{
            const uploadTask = storage.ref(`/images/${contactId+imageAsFile.name}`)
            .put(imageAsFile)
            //initiates the firebase side uploading 
            uploadTask.on('state_changed', 
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                // console.log(snapShot)
                const uprogress = Math.round(
                    (snapShot.bytesTransferred / snapShot.totalBytes) * 100
                );
                setShowProgress(true);
                setProgress(uprogress);
                
            }, (err) => {
                //catches the errors
                NotificationManager.error('Profile Photo failed to upload', 'Error!');
                setShowProgress(false);
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(props.match.params.id+imageAsFile.name).getDownloadURL()
                .then(fireBaseUrl => {
                setImageAsUrl(fireBaseUrl)
                setShowProgress(false);
                //console.log('image path:' + fireBaseUrl)
                NotificationManager.success('Profile Photo updated successfully', 'Success!');
                db.collection('contacts').doc(contactId).set({...contact,photo:fireBaseUrl});
                })
            })
        }
        
      }
    
    useEffect(() => {
         const unsubscribe = db.collection('contacts')
                                .doc(props.match.params.id)
                                .get()
                                .then((doc) => {
                                        setContact(doc.data())
                                    })
        return () => unsubscribe
    }, [imageAsUrl,progress])

    return(
        contact?
        <>
        { showProgress?
        <ProgressBar now={progress} label={`${progress}%`} /> : null }
        <CardDeck>
        <Card>
        <Card.Header>
        {contact.name}
                <Button variant="outline-primary" size="sm" onClick={handleShow} className="float-right margin-left">Change Image</Button>
                
        </Card.Header>
        <Card.Img variant="top" src={contact.photo || placeholder} height="500" />
        </Card>
        
        <Card>
            <Card.Header>
                Details
                <Link variant="outline-primary" to={`/edit/${contactId}`}>
                    <Button variant="outline-primary" size="sm" className="float-right margin-left">Edit</Button>
                </Link>
                <Button variant="outline-danger"size="sm"  className="float-right margin-left">Delete</Button>
            </Card.Header>
            <Card.Body>
                <Table>
                    <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{contact.name}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{contact.phone}</td>
                            </tr>
                            <tr>
                                <td>Alt. Phone</td>
                                <td>{contact.altphone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>{contact.facebook}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{contact.address}</td>
                            </tr>
                            <tr>
                                <td>Job</td>
                                <td>{contact.job}</td>
                            </tr>
                            <tr>
                                <td>Notes</td>
                                <td>{contact.notes}</td>
                            </tr>
                    </tbody>
                    
                    
                </Table>
            </Card.Body>
        </Card>
        </CardDeck>

        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleFireBaseUpload}>
            <Modal.Header closeButton>
            <Modal.Title>Set New Profile Picture</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
               <Form.Group controlId="peofilepic">
                            <Form.Label>Slect Image</Form.Label>
                            <Form.Control name="file" type="file" accept="image/*" onChange={handleImageAsFile} placeholder="Profile Photo" />                          
                </Form.Group>
               
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
            </Form>
      </Modal>
      <NotificationContainer/>
      </>
      : <Card>
            <Card.Body>
                <h3>No Data Found</h3>
            </Card.Body>
        </Card>
    )
}

export default withRouter(Details);