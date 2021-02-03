import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Card } from "react-bootstrap";
import { FiArrowUp } from "react-icons/fi";

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
    minHeight: "150px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const NumberCard = ({ headerr, casesNum, textColor, perDayCase }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className="numberCardClass">
      <Card.Header
        as="h5"
        style={{ textAlign: "center" }}
        className="headerClass"
      >
        {headerr}
      </Card.Header>
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bodyClass"
      >
        <Card.Text as="h2">
          <div>{casesNum}</div>
          {perDayCase !== undefined && perDayCase !== null ? (
            <div style={{ color: textColor }} className="currentChanges">
              <FiArrowUp /> {perDayCase}
            </div>
          ) : (
            ""
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NumberCard;
