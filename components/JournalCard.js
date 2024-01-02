import { Card, Button} from 'react-bootstrap';

export default function JournalCard(props) {

    const {header, date, description, uuid, handleRemoveEntry} = props;

    return (

    <div className="col">
    <Card>
        <Card.Body>
            <Card.Title>{header}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <Button variant="info" onClick={() => handleRemoveEntry(uuid)}>
            Remove
            </Button>
        </Card.Body>
    </Card>
    </div>
        )
}