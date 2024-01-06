import { Card, Button } from 'react-bootstrap';
import styles from '@/styles/Journal.module.css';

export default function JournalCard(props) {

    const {header, date, description, uuid, handleRemoveEntry, handleCardClick} = props;

    const handleCardClickInternal = () => {
        handleCardClick({ date, header, description });
      };

    return (

    <div className="col">
    <Card>
        <Card.Body>
            <Card.Title className={`${styles.journalcard_header}`} 
            onClick={() => handleCardClickInternal()}>{header}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <div className="d-flex justify-content-end">
            <Button variant="secondary" className="" onClick={() => handleRemoveEntry(uuid)}>
            Remove
            </Button>
            </div>
        </Card.Body>
    </Card>
    </div>
    )
}