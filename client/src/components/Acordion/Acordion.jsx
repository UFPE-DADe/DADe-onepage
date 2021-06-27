import './Acordion.css';
import config from '../../config/config';
import { Accordion } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useState, useEffect } from 'react';
import axios from 'axios';


function Acordion() {
    const Accordion = withStyles({
        root: {
          width: '100%',
          
          boxShadow: "none",
        },
        expanded: {},
      })(MuiAccordion);
      const AccordionSummary = withStyles({
        root: {
          backgroundColor: "transparent",
          borderBottom: "1px solid #000000",
          margin: '10px 5px 0px 0px',
          marginBottom: -1,
          minHeight: 56,
          "&$expanded": {
            minHeight: 56
          }
        },
        content: {
          "&$expanded": {
            margin: "12px 0"
          }
        },
        expanded: {}
      })(MuiAccordionSummary);
      
      const AccordionDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
          zIndex: 200,
          backgroundColor: "rgba(0, 0, 0)",
          color: 'white',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
      }))(MuiAccordionDetails);

      const [questions, setQuestions] = useState([]);


    const loadQuestions = async () => {
        const res = await axios.get(`${config.url}/api/FAQ`);
        setQuestions(res.data);
    };

    useEffect(() => {
        loadQuestions();
    }, []);

    return (
        <div className="acordeon-div">
        {questions?.map(({_id, pergunta, resposta}) => (
            <div className="question-div">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                        <Typography >{pergunta}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> {resposta}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
                ))}
        </div>
    );
  }

export default Acordion; 